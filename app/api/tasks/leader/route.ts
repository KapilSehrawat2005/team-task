export const dynamic = "force-dynamic";

import { handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { withRouteAuth } from "@/lib/rbac";
import Task from "@/models/Task";

export const GET = async (request: Request) => {
  try {
    return await withRouteAuth(async (_req, { auth }) => {
      await connectToDatabase();

      const query = auth.role === "admin" ? {} : { projectId: auth.projectId };
      const tasks = await Task.find(query)
        .populate("assignedTo", "name email")
        .populate("projectId", "name")
        .sort({ createdAt: -1 })
        .lean();

      return jsonSuccess({ tasks });
    }, { allowedRoles: ["admin", "leader"] })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
