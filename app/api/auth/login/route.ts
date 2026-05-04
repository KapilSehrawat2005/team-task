export const dynamic = "force-dynamic";

import bcrypt from "bcryptjs";

import { ApiError, handleApiError, jsonSuccess } from "@/lib/api";
import { getAuthCookieConfig, signAuthToken } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { loginSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = loginSchema.parse(await request.json());
    await connectToDatabase();

    const user = await User.findOne({ email: body.email.toLowerCase() });

    if (!user) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password);

    if (!passwordMatches) {
      throw new ApiError(401, "Invalid email or password.");
    }

    const token = await signAuthToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
      projectId: user.projectId ? user.projectId.toString() : null
    });

    const response = jsonSuccess(
      {
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          projectId: user.projectId
        }
      },
      "Logged in successfully."
    );

    response.cookies.set("rbac_session", token, getAuthCookieConfig());
    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
