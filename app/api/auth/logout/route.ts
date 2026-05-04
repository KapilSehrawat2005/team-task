export const dynamic = "force-dynamic";

import { AUTH_COOKIE_NAME, getAuthCookieConfig } from "@/lib/auth";
import { jsonSuccess } from "@/lib/api";

export async function POST() {
  const response = jsonSuccess({}, "Logged out successfully.");
  response.cookies.set(AUTH_COOKIE_NAME, "", {
    ...getAuthCookieConfig(),
    maxAge: 0
  });

  return response;
}
