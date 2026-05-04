import { redirect } from "next/navigation";

import AdminDashboard from "@/components/dashboard/admin-dashboard";
import { getAdminDashboardData, getCurrentUserOrRedirect } from "@/lib/dashboard-data";

export default async function AdminDashboardPage() {
  const currentUser = await getCurrentUserOrRedirect();

  if (currentUser.role !== "admin") {
    redirect("/dashboard");
  }

  const data = await getAdminDashboardData();

  return <AdminDashboard currentUser={currentUser} {...data} />;
}
