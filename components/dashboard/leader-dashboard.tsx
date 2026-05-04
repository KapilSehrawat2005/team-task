"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { taskPriorities } from "@/lib/constants";
import { formatDate, formatRole } from "@/lib/utils";

interface LeaderUser {
  _id: string;
  name: string;
  role: "admin" | "leader" | "member" | "pending";
  projectId?: string | null;
}

interface Member {
  _id: string;
  name: string;
  email: string;
  role: "member" | "pending" | "leader" | "admin";
}

interface Project {
  _id: string;
  name: string;
  description: string;
  leaderId?: {
    _id: string;
    name: string;
    email: string;
  } | null;
}

interface Task {
  _id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  deadline?: string | null;
  assignedTo?:
    | string
    | {
        _id: string;
        name: string;
        email: string;
      }
    | null;
}

interface LeaderDashboardProps {
  currentUser: LeaderUser;
  project: Project | null;
  members: Member[];
  tasks: Task[];
}

export default function LeaderDashboard({
  currentUser,
  project,
  members,
  tasks
}: LeaderDashboardProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: members[0]?._id ?? "",
    deadline: "",
    priority: "medium"
  });
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const statusSummary = useMemo(
    () => ({
      total: tasks.length,
      pending: tasks.filter((task) => task.status === "pending").length,
      inProgress: tasks.filter((task) => task.status === "in-progress").length,
      completed: tasks.filter((task) => task.status === "completed").length
    }),
    [tasks]
  );

  function getAssigneeName(task: Task) {
    if (!task.assignedTo || typeof task.assignedTo === "string") {
      return "Unassigned";
    }

    return task.assignedTo.name;
  }

  async function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          projectId: project?._id,
          deadline: form.deadline || null
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to create task.");
      }

      setMessage(payload.message);
      setForm({
        title: "",
        description: "",
        assignedTo: members[0]?._id ?? "",
        deadline: "",
        priority: "medium"
      });
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to create task.");
    } finally {
      setIsLoading(false);
    }
  }

  if (!project) {
    return (
      <section className="rounded-[2rem] border border-white/50 bg-white p-8 shadow-panel">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Leader Workspace</p>
        <h1 className="mt-3 text-3xl font-bold text-ink">No project assigned yet</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Your role is active, but you do not currently have a project assignment. Ask an admin to assign you as a leader to unlock project-level task management.
        </p>
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-panel backdrop-blur md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Leader Workspace</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">{project.name}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{project.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Members", value: members.length },
              { label: "Tasks", value: statusSummary.total },
              { label: "In Progress", value: statusSummary.inProgress },
              { label: "Completed", value: statusSummary.completed }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-950 px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleCreateTask} className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-coral">Create Task</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">Assign work to project members</h2>
            </div>
            <Badge tone="warning">Scoped</Badge>
          </div>
          <div className="mt-6 space-y-4">
            <input
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              placeholder="Prepare launch analytics dashboard"
              value={form.title}
              onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
            />
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              placeholder="Describe the task outcome, blockers, and acceptance criteria."
              value={form.description}
              onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                value={form.assignedTo}
                onChange={(event) => setForm((current) => ({ ...current, assignedTo: event.target.value }))}
              >
                <option value="">Select member</option>
                {members.map((member) => (
                  <option key={member._id} value={member._id}>
                    {member.name}
                  </option>
                ))}
              </select>
              <input
                type="date"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                value={form.deadline}
                onChange={(event) => setForm((current) => ({ ...current, deadline: event.target.value }))}
              />
            </div>
            <select
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              value={form.priority}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  priority: event.target.value as "low" | "medium" | "high"
                }))
              }
            >
              {taskPriorities.map((priority) => (
                <option key={priority} value={priority}>
                  {formatRole(priority)}
                </option>
              ))}
            </select>
          </div>
          {error ? <p className="mt-5 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p> : null}
          {message ? <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p> : null}
          <Button type="submit" className="mt-6 w-full" disabled={isLoading}>
            {isLoading ? "Creating task..." : "Create task"}
          </Button>
        </form>

        <div className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-teal">Members</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">Project team</h2>
            </div>
            <Badge tone="neutral">{members.length} members</Badge>
          </div>
          <div className="mt-6 space-y-3">
            {members.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 px-5 py-8 text-sm text-slate-500">
                No members are assigned to this project yet.
              </div>
            ) : (
              members.map((member) => (
                <div key={member._id} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <div>
                    <p className="font-semibold text-slate-900">{member.name}</p>
                    <p className="text-sm text-slate-500">{member.email}</p>
                  </div>
                  <Badge tone="accent">Member</Badge>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-teal">Task Tracking</p>
            <h2 className="mt-1 text-2xl font-bold text-ink">Monitor delivery status</h2>
          </div>
          <Badge tone="neutral">{tasks.length} active records</Badge>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="pb-3 font-medium">Task</th>
                <th className="pb-3 font-medium">Assigned to</th>
                <th className="pb-3 font-medium">Priority</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Deadline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td className="py-4">
                    <p className="font-semibold text-slate-900">{task.title}</p>
                    <p className="text-slate-500">{task.description}</p>
                  </td>
                  <td className="py-4 text-slate-600">{getAssigneeName(task)}</td>
                  <td className="py-4">
                    <Badge tone={task.priority === "high" ? "danger" : task.priority === "medium" ? "warning" : "neutral"}>
                      {formatRole(task.priority)}
                    </Badge>
                  </td>
                  <td className="py-4">
                    <Badge
                      tone={
                        task.status === "completed"
                          ? "success"
                          : task.status === "in-progress"
                            ? "accent"
                            : "warning"
                      }
                    >
                      {formatRole(task.status)}
                    </Badge>
                  </td>
                  <td className="py-4 text-slate-600">{formatDate(task.deadline)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
