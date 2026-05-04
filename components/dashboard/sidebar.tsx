import Link from "next/link";

import LogoutButton from "@/components/dashboard/logout-button";
import Badge from "@/components/ui/badge";
import { formatRole } from "@/lib/utils";

interface SidebarProps {
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}

const navByRole = {
  admin: [{ href: "/dashboard/admin", label: "Admin Dashboard" }],
  leader: [{ href: "/dashboard/leader", label: "Leader Dashboard" }],
  member: [{ href: "/dashboard/member", label: "My Tasks" }],
  pending: [{ href: "/dashboard/member", label: "Access Status" }]
};

export default function DashboardSidebar({ user }: SidebarProps) {
  return (
    <aside className="w-full rounded-[2rem] border border-white/50 bg-white/80 p-5 shadow-panel backdrop-blur md:sticky md:top-6 md:h-[calc(100vh-3rem)] md:w-[320px]">
      <div className="flex h-full flex-col">
        <div>
          <div className="rounded-3xl bg-slate-950 p-5 text-white">
            <p className="text-sm text-slate-300">FluxBoard</p>
            <h2 className="mt-2 text-2xl font-semibold">{user.name}</h2>
            <p className="mt-1 text-sm text-slate-300">{user.email}</p>
            <div className="mt-4">
              <Badge tone={user.role === "admin" ? "accent" : user.role === "leader" ? "warning" : "neutral"}>
                {formatRole(user.role)}
              </Badge>
            </div>
          </div>
        </div>

        <nav className="mt-6 space-y-2">
          {navByRole[user.role as keyof typeof navByRole].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <span>{item.label}</span>
              <span className="text-slate-400">→</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6 rounded-3xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <p className="font-semibold">Access policy</p>
          <p className="mt-2">
            All dashboard and API permissions are enforced on the server with JWT validation and
            role-aware route guards.
          </p>
        </div>

        <div className="mt-auto pt-6">
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}
