import { redirect } from "next/navigation";

import { getUserFromCookie } from "@/lib/auth";

export default async function HomePage() {
  const user = await getUserFromCookie();

  if (!user) {
    redirect("/login");
  }

  if (user.role === "admin") {
    redirect("/dashboard/admin");
  }

  if (user.role === "leader") {
    redirect("/dashboard/leader");
  }

  redirect("/dashboard/member");
}
