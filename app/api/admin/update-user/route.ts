export const dynamic = "force-dynamic";

import { Types } from "mongoose";

import { ApiError, handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { ensureObjectId, withRouteAuth } from "@/lib/rbac";
import { updateUserSchema } from "@/lib/validators";
import Project from "@/models/Project";
import User from "@/models/User";

export const PUT = async (request: Request) => {
  try {
    return await withRouteAuth(async (req) => {
      const body = updateUserSchema.parse(await req.json());
      await connectToDatabase();

      ensureObjectId(body.userId, "User");

      if (body.projectId) {
        ensureObjectId(body.projectId, "Project");
      }

      const user = await User.findById(body.userId);

      if (!user) {
        throw new ApiError(404, "User not found.");
      }

      if (body.role === "admin" && body.projectId) {
        throw new ApiError(400, "Admin users cannot be assigned to a project.");
      }

      if (body.role === "pending") {
        user.projectId = null;
      } else {
        user.projectId = body.projectId ? new Types.ObjectId(body.projectId) : null;
      }

      user.role = body.role;
      await user.save();

      if (body.projectId) {
        const project = await Project.findById(body.projectId);

        if (!project) {
          throw new ApiError(404, "Project not found.");
        }

        if (body.role === "leader") {
          project.leaderId = user._id as never;
          await project.save();
        }
      }

      return jsonSuccess({}, "User updated successfully.");
    }, { allowedRoles: ["admin"] })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
