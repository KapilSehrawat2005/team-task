export const dynamic = "force-dynamic";

import { handleApiError, jsonSuccess } from "@/lib/api";
import { connectToDatabase } from "@/lib/mongoose";
import { withRouteAuth } from "@/lib/rbac";
import User from "@/models/User";

export const GET = async (request: Request) => {
  try {
    return await withRouteAuth(async (_request, { auth }) => {
      await connectToDatabase();
      const user = await User.findById(auth.userId).select("-password").lean();
      return jsonSuccess({ user });
    })(request as never);
  } catch (error) {
    return handleApiError(error);
  }
};
