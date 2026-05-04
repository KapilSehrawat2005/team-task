import MemberDashboard from "@/components/dashboard/member-dashboard";
import { getCurrentUserOrRedirect, getMemberDashboardData } from "@/lib/dashboard-data";

export default async function MemberDashboardPage() {
  const currentUser = await getCurrentUserOrRedirect();
  const data = await getMemberDashboardData(currentUser._id);

  return <MemberDashboard currentUser={currentUser} {...data} />;
}
