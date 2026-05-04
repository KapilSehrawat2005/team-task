export const dynamic = "force-dynamic";

import { Types } from "mongoose";

import { ApiError, handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { ensureObjectId, withRouteAuth } from "@/lib/rbac";
import { createProjectSchema } from "@/lib/validators";
import Project from "@/models/Project";
import User from "@/models/User";

export const POST = async (request: Request) => {
  try {
    return await withRouteAuth(async (req, { auth }) => {
      const body = createProjectSchema.parse(await req.json());
      await connectToDatabase();

      if (body.leaderId) {
        ensureObjectId(body.leaderId, "Leader");
      }

      body.memberIds.forEach((memberId) => ensureObjectId(memberId, "Member"));

      if (body.leaderId) {
        const leader = await User.findById(body.leaderId);

        if (!leader || !["leader", "pending", "member"].includes(leader.role)) {
          throw new ApiError(400, "Selected leader is invalid.");
        }
      }

      const project = await Project.create({
        name: body.name,
        description: body.description,
        leaderId: body.leaderId ? new Types.ObjectId(body.leaderId) : null,
        createdBy: new Types.ObjectId(auth.userId)
      });

      if (body.leaderId) {
        await User.findByIdAndUpdate(body.leaderId, {
          role: "leader",
          projectId: project._id
        });
      }

      if (body.memberIds.length > 0) {
        await User.updateMany(
          {
            _id: {
              $in: body.memberIds.map((memberId) => new Types.ObjectId(memberId))
            }
          },
          {
            role: "member",
            projectId: project._id
          }
        );
      }

      return jsonSuccess({ project }, "Project created successfully.", 201);
    }, { allowedRoles: ["admin"] })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
