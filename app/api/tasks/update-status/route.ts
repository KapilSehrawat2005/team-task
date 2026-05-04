export const dynamic = "force-dynamic";

import { ApiError, handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { ensureObjectId, ensureProjectScope, withRouteAuth } from "@/lib/rbac";
import Task from "@/models/Task";
import { updateTaskStatusSchema } from "@/lib/validators";

const allowedMemberTransitions = {
  pending: ["in-progress"],
  "in-progress": ["completed"],
  completed: []
} as const;

export const PUT = async (request: Request) => {
  try {
    return await withRouteAuth(async (req, { auth }) => {
      const body = updateTaskStatusSchema.parse(await req.json());
      await connectToDatabase();
      ensureObjectId(body.taskId, "Task");

      const task = await Task.findById(body.taskId);

      if (!task) {
        throw new ApiError(404, "Task not found.");
      }

      if (auth.role === "member" || auth.role === "pending") {
        if (task.assignedTo.toString() !== auth.userId) {
          throw new ApiError(403, "You can only update your assigned tasks.");
        }

        const nextStatuses = allowedMemberTransitions[task.status];

        if (!nextStatuses.includes(body.status as never) && body.status !== task.status) {
          throw new ApiError(400, "Invalid status transition.");
        }
      } else {
        ensureProjectScope(auth, task.projectId.toString());
      }

      task.status = body.status;
      await task.save();

      return jsonSuccess({ task }, "Task status updated successfully.");
    }, { allowedRoles: ["admin", "leader", "member", "pending"] })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
