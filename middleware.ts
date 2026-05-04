import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { AUTH_COOKIE_NAME, getAuthCookieConfig, verifyAuthToken } from "@/lib/auth";

const publicRoutes = ["/login", "/signup"];
const publicApiRoutes = ["/api/auth/login", "/api/auth/signup"];

function getDashboardPath(role: string) {
  if (role === "admin") {
    return "/dashboard/admin";
  }

  if (role === "leader") {
    return "/dashboard/leader";
  }

  return "/dashboard/member";
}

function isProtectedPath(pathname: string) {
  return pathname.startsWith("/dashboard") || (pathname.startsWith("/api") && !publicApiRoutes.includes(pathname));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    if (isProtectedPath(pathname)) {
      if (pathname.startsWith("/api")) {
        return NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 });
      }

      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  try {
    const payload = await verifyAuthToken(token);
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("x-user-id", payload.userId);
    requestHeaders.set("x-user-email", payload.email);
    requestHeaders.set("x-user-role", payload.role);
    requestHeaders.set("x-user-name", payload.name);
    requestHeaders.set("x-user-project-id", payload.projectId ?? "");

    if (publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL(getDashboardPath(payload.role), request.url));
    }

    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL(getDashboardPath(payload.role), request.url));
    }

    if (pathname.startsWith("/dashboard/admin") && payload.role !== "admin") {
      return NextResponse.redirect(new URL(getDashboardPath(payload.role), request.url));
    }

    if (pathname.startsWith("/dashboard/leader") && payload.role !== "leader") {
      return NextResponse.redirect(new URL(getDashboardPath(payload.role), request.url));
    }

    if (pathname.startsWith("/dashboard/member") && payload.role !== "member" && payload.role !== "pending") {
      return NextResponse.redirect(new URL(getDashboardPath(payload.role), request.url));
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  } catch {
    const response =
      pathname.startsWith("/api") && !publicApiRoutes.includes(pathname)
        ? NextResponse.json({ success: false, message: "Invalid session." }, { status: 401 })
        : NextResponse.redirect(new URL("/login", request.url));

    response.cookies.set(AUTH_COOKIE_NAME, "", {
      ...getAuthCookieConfig(),
      maxAge: 0
    });

    return response;
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
