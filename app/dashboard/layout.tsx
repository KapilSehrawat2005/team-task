import { redirect } from "next/navigation";

import DashboardSidebar from "@/components/dashboard/sidebar";
import { getCurrentUserOrRedirect } from "@/lib/dashboard-data";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUserOrRedirect();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-transparent">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-6 px-4 py-4 md:flex-row md:px-6 lg:px-8">
        <DashboardSidebar user={user} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
