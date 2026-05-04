export const dynamic = "force-dynamic";

import { handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { withRouteAuth } from "@/lib/rbac";
import Project from "@/models/Project";
import Task from "@/models/Task";
import User from "@/models/User";

export const GET = async (request: Request) => {
  try {
    return await withRouteAuth(async () => {
      await connectToDatabase();

      const [users, projects, tasks] = await Promise.all([
        User.find().select("-password").sort({ createdAt: -1 }).lean(),
        Project.find().populate("leaderId", "name email").sort({ createdAt: -1 }).lean(),
        Task.find()
          .populate("projectId", "name")
          .populate("assignedTo", "name email")
          .sort({ createdAt: -1 })
          .lean()
      ]);

      return jsonSuccess({ users, projects, tasks });
    }, { allowedRoles: ["admin"] })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
