import { Types } from "mongoose";
import type { NextRequest } from "next/server";

import { ApiError } from "@/lib/api";
import { AUTH_COOKIE_NAME, verifyAuthToken } from "@/lib/auth";
import type { AuthenticatedUser, Role } from "@/types";

export interface RouteContext {
  auth: AuthenticatedUser;
}

type Handler = (request: NextRequest, context: RouteContext) => Promise<Response>;

interface WithAuthOptions {
  allowedRoles?: Role[];
}

export async function resolveAuthFromRequest(request: NextRequest) {
  const userId = request.headers.get("x-user-id");
  const email = request.headers.get("x-user-email");
  const role = request.headers.get("x-user-role");
  const name = request.headers.get("x-user-name");
  const projectId = request.headers.get("x-user-project-id");

  if (userId && email && role && name) {
    return {
      userId,
      email,
      role: role as Role,
      name,
      projectId: projectId || null
    };
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  const payload = await verifyAuthToken(token);

  return {
    userId: payload.userId,
    email: payload.email,
    role: payload.role,
    name: payload.name,
    projectId: payload.projectId ?? null
  };
}

export function withRouteAuth(handler: Handler, options: WithAuthOptions = {}) {
  return async function routeHandler(request: NextRequest) {
    const auth = await resolveAuthFromRequest(request);

    if (!auth) {
      throw new ApiError(401, "Authentication required.");
    }

    if (options.allowedRoles && !options.allowedRoles.includes(auth.role)) {
      throw new ApiError(403, "You do not have permission to access this resource.");
    }

    return handler(request, { auth });
  };
}

export function ensureObjectId(value: string, fieldName: string) {
  if (!Types.ObjectId.isValid(value)) {
    throw new ApiError(400, `${fieldName} is invalid.`);
  }
}

export function ensureProjectScope(auth: AuthenticatedUser, projectId?: string | null) {
  if (auth.role === "admin") {
    return;
  }

  if (!projectId || auth.projectId !== projectId) {
    throw new ApiError(403, "You do not have access to this project.");
  }
}
