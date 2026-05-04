export const dynamic = "force-dynamic";

import { Types } from "mongoose";

import { ApiError, handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { ensureObjectId, ensureProjectScope, withRouteAuth } from "@/lib/rbac";
import { createTaskSchema } from "@/lib/validators";
import Project from "@/models/Project";
import Task from "@/models/Task";
import User from "@/models/User";

export const POST = async (request: Request) => {
  try {
    return await withRouteAuth(async (req, { auth }) => {
      const body = createTaskSchema.parse(await req.json());
      await connectToDatabase();

      ensureObjectId(body.projectId, "Project");
      ensureObjectId(body.assignedTo, "Assigned user");

      ensureProjectScope(auth, body.projectId);

      const [project, assignee] = await Promise.all([
        Project.findById(body.projectId),
        User.findById(body.assignedTo)
      ]);

      if (!project) {
        throw new ApiError(404, "Project not found.");
      }

      if (!assignee || assignee.role !== "member") {
        throw new ApiError(400, "Assignee must be a project member.");
      }

      if (assignee.projectId?.toString() !== body.projectId) {
        throw new ApiError(400, "Assignee is not part of this project.");
      }

      if (auth.role === "leader" && project.leaderId?.toString() !== auth.userId) {
        throw new ApiError(403, "You can only manage tasks for your own project.");
      }

      const task = await Task.create({
        title: body.title,
        description: body.description,
        projectId: new Types.ObjectId(body.projectId),
        assignedTo: new Types.ObjectId(body.assignedTo),
        createdBy: new Types.ObjectId(auth.userId),
        deadline: body.deadline ? new Date(body.deadline) : null,
        priority: body.priority,
        status: "pending"
      });

      return jsonSuccess({ task }, "Task created successfully.", 201);
    }, { allowedRoles: ["admin", "leader"] })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
