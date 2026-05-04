import { redirect } from "next/navigation";

import LeaderDashboard from "@/components/dashboard/leader-dashboard";
import { getCurrentUserOrRedirect, getLeaderDashboardData } from "@/lib/dashboard-data";

export default async function LeaderDashboardPage() {
  const currentUser = await getCurrentUserOrRedirect();

  if (currentUser.role !== "leader") {
    redirect("/dashboard");
  }

  const data = await getLeaderDashboardData(currentUser._id, currentUser.projectId ?? null);

  return <LeaderDashboard currentUser={currentUser} {...data} />;
}
