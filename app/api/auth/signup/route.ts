export const dynamic = "force-dynamic";

import bcrypt from "bcryptjs";

import { ApiError, handleApiError, jsonSuccess } from "@/lib/api";
import { getAuthCookieConfig, signAuthToken } from "@/lib/auth";
import { env } from "@/lib/env";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { signupSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = signupSchema.parse(await request.json());
    await connectToDatabase();

    const existingUser = await User.findOne({ email: body.email.toLowerCase() });

    if (existingUser) {
      throw new ApiError(409, "An account with this email already exists.");
    }

    const hashedPassword = await bcrypt.hash(body.password, 12);
    const role = body.email.toLowerCase() === env.bootstrapAdminEmail ? "admin" : "pending";

    const user = await User.create({
      name: body.name,
      email: body.email.toLowerCase(),
      password: hashedPassword,
      role
    });

    const token = await signAuthToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
      projectId: null
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
      role === "admin" ? "Admin account created successfully." : "Account created successfully.",
      201
    );

    response.cookies.set("rbac_session", token, getAuthCookieConfig());
    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
