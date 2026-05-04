"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { formatDate, formatRole } from "@/lib/utils";
import { taskPriorities } from "@/lib/constants";

interface DashboardUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "leader" | "member" | "pending";
  projectId?: string | null;
}

interface DashboardProject {
  _id: string;
  name: string;
  description: string;
  leaderId?: {
    _id: string;
    name: string;
    email: string;
  } | null;
}

interface DashboardTask {
  _id: string;
  title: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  deadline?: string | null;
  projectId?:
    | string
    | {
        _id: string;
        name: string;
      }
    | null;
  assignedTo?:
    | string
    | {
        _id: string;
        name: string;
        email: string;
      }
    | null;
}

interface AdminDashboardProps {
  currentUser: DashboardUser;
  users: DashboardUser[];
  projects: DashboardProject[];
  tasks: DashboardTask[];
}

type UserDrafts = Record<
  string,
  {
    role: DashboardUser["role"];
    projectId: string;
  }
>;

export default function AdminDashboard({
  currentUser,
  users,
  projects,
  tasks
}: AdminDashboardProps) {
  const router = useRouter();
  const [userDrafts, setUserDrafts] = useState<UserDrafts>(() =>
    Object.fromEntries(
      users.map((user) => [
        user._id,
        {
          role: user.role,
          projectId: user.projectId ?? ""
        }
      ])
    )
  );
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    leaderId: "",
    memberIds: [] as string[]
  });
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    projectId: projects[0]?._id ?? "",
    assignedTo: "",
    deadline: "",
    priority: "medium"
  });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<string | null>(null);

  const leaders = useMemo(
    () => users.filter((user) => user.role === "leader" || user.role === "pending" || user.role === "member"),
    [users]
  );

  const membersByProject = useMemo(() => {
    return users.filter(
      (user) =>
        user.role === "member" &&
        taskForm.projectId &&
        user.projectId?.toString() === taskForm.projectId.toString()
    );
  }, [taskForm.projectId, users]);

  function readRelationName(
    relation:
      | string
      | {
          name: string;
        }
      | null
      | undefined,
    fallback: string
  ) {
    if (!relation) {
      return fallback;
    }

    return typeof relation === "string" ? fallback : relation.name;
  }

  async function handleUserUpdate(userId: string) {
    const draft = userDrafts[userId];
    setIsSubmitting(`user-${userId}`);
    setFeedback(null);
    setError(null);

    try {
      const response = await fetch("/api/admin/update-user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          role: draft.role,
          projectId: draft.role === "admin" || draft.role === "pending" ? null : draft.projectId || null
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to update user.");
      }

      setFeedback(payload.message);
      router.refresh();
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "Unable to update user.");
    } finally {
      setIsSubmitting(null);
    }
  }

  async function handleProjectCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting("project");
    setFeedback(null);
    setError(null);

    try {
      const response = await fetch("/api/projects/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...projectForm,
          leaderId: projectForm.leaderId || null
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to create project.");
      }

      setFeedback(payload.message);
      setProjectForm({
        name: "",
        description: "",
        leaderId: "",
        memberIds: []
      });
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to create project.");
    } finally {
      setIsSubmitting(null);
    }
  }

  async function handleTaskCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting("task");
    setFeedback(null);
    setError(null);

    try {
      const response = await fetch("/api/tasks/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...taskForm,
          deadline: taskForm.deadline || null
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to create task.");
      }

      setFeedback(payload.message);
      setTaskForm((current) => ({
        ...current,
        title: "",
        description: "",
        assignedTo: "",
        deadline: "",
        priority: "medium"
      }));
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to create task.");
    } finally {
      setIsSubmitting(null);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-panel backdrop-blur md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Admin Control Center</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Manage teams, projects, and delivery from one dashboard.
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Welcome back, {currentUser.name}. You have full visibility across user access, project ownership,
              and execution workload.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Users", value: users.length },
              { label: "Projects", value: projects.length },
              { label: "Tasks", value: tasks.length },
              { label: "Open Work", value: tasks.filter((task) => task.status !== "completed").length }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-950 px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        {error ? <p className="mt-5 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p> : null}
        {feedback ? <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{feedback}</p> : null}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <form onSubmit={handleProjectCreate} className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-teal">Create Project</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">Launch a new workspace</h2>
            </div>
            <Badge tone="accent">Admin</Badge>
          </div>

          <div className="mt-6 space-y-4">
            <input
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              placeholder="Growth Website Revamp"
              value={projectForm.name}
              onChange={(event) => setProjectForm((current) => ({ ...current, name: event.target.value }))}
            />
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              placeholder="Describe project goals, scope, and delivery focus."
              value={projectForm.description}
              onChange={(event) => setProjectForm((current) => ({ ...current, description: event.target.value }))}
            />
            <select
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              value={projectForm.leaderId}
              onChange={(event) => setProjectForm((current) => ({ ...current, leaderId: event.target.value }))}
            >
              <option value="">Select leader</option>
              {leaders.map((leader) => (
                <option key={leader._id} value={leader._id}>
                  {leader.name} ({formatRole(leader.role)})
                </option>
              ))}
            </select>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">Assign members</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {users
                  .filter((user) => user.role !== "admin")
                  .map((member) => (
                    <label key={member._id} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm">
                      <input
                        type="checkbox"
                        checked={projectForm.memberIds.includes(member._id)}
                        onChange={(event) =>
                          setProjectForm((current) => ({
                            ...current,
                            memberIds: event.target.checked
                              ? [...current.memberIds, member._id]
                              : current.memberIds.filter((value) => value !== member._id)
                          }))
                        }
                      />
                      <span>{member.name}</span>
                    </label>
                  ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="mt-6 w-full" disabled={isSubmitting === "project"}>
            {isSubmitting === "project" ? "Creating project..." : "Create project"}
          </Button>
        </form>

        <form onSubmit={handleTaskCreate} className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-coral">Assign Task</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">Dispatch work across projects</h2>
            </div>
            <Badge tone="warning">Override enabled</Badge>
          </div>

          <div className="mt-6 grid gap-4">
            <input
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              placeholder="Task title"
              value={taskForm.title}
              onChange={(event) => setTaskForm((current) => ({ ...current, title: event.target.value }))}
            />
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              placeholder="Detailed task brief"
              value={taskForm.description}
              onChange={(event) => setTaskForm((current) => ({ ...current, description: event.target.value }))}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                value={taskForm.projectId}
                onChange={(event) =>
                  setTaskForm((current) => ({
                    ...current,
                    projectId: event.target.value,
                    assignedTo: ""
                  }))
                }
              >
                <option value="">Select project</option>
                {projects.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.name}
                  </option>
                ))}
              </select>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                value={taskForm.assignedTo}
                onChange={(event) => setTaskForm((current) => ({ ...current, assignedTo: event.target.value }))}
              >
                <option value="">Select member</option>
                {membersByProject.map((member) => (
                  <option key={member._id} value={member._id}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="date"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                value={taskForm.deadline}
                onChange={(event) => setTaskForm((current) => ({ ...current, deadline: event.target.value }))}
              />
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                value={taskForm.priority}
                onChange={(event) =>
                  setTaskForm((current) => ({
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
          </div>

          <Button type="submit" className="mt-6 w-full" disabled={isSubmitting === "task"}>
            {isSubmitting === "task" ? "Assigning task..." : "Assign task"}
          </Button>
        </form>
      </section>

      <section className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-teal">Users</p>
            <h2 className="mt-1 text-2xl font-bold text-ink">Access and project assignments</h2>
          </div>
          <Badge tone="neutral">{users.length} total</Badge>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Project</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="py-4">
                    <p className="font-semibold text-slate-900">{user.name}</p>
                    <p className="text-slate-500">{user.email}</p>
                  </td>
                  <td className="py-4">
                    <select
                      className="w-full min-w-[150px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                      value={userDrafts[user._id]?.role}
                      onChange={(event) =>
                        setUserDrafts((current) => ({
                          ...current,
                          [user._id]: {
                            ...current[user._id],
                            role: event.target.value as DashboardUser["role"],
                            projectId: event.target.value === "admin" || event.target.value === "pending"
                              ? ""
                              : current[user._id].projectId
                          }
                        }))
                      }
                    >
                      <option value="admin">Admin</option>
                      <option value="leader">Leader</option>
                      <option value="member">Member</option>
                      <option value="pending">Pending</option>
                    </select>
                  </td>
                  <td className="py-4">
                    <select
                      className="w-full min-w-[180px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                      value={userDrafts[user._id]?.projectId ?? ""}
                      disabled={userDrafts[user._id]?.role === "admin" || userDrafts[user._id]?.role === "pending"}
                      onChange={(event) =>
                        setUserDrafts((current) => ({
                          ...current,
                          [user._id]: {
                            ...current[user._id],
                            projectId: event.target.value
                          }
                        }))
                      }
                    >
                      <option value="">No project</option>
                      {projects.map((project) => (
                        <option key={project._id} value={project._id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4">
                    <Button
                      variant="secondary"
                      onClick={() => handleUserUpdate(user._id)}
                      disabled={isSubmitting === `user-${user._id}`}
                    >
                      {isSubmitting === `user-${user._id}` ? "Saving..." : "Save"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <div className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-coral">Projects</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">Portfolio snapshot</h2>
            </div>
            <Badge tone="neutral">{projects.length} active</Badge>
          </div>
          <div className="mt-6 space-y-4">
            {projects.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 px-5 py-8 text-sm text-slate-500">
                No projects yet. Create the first project to start assigning work.
              </div>
            ) : (
              projects.map((project) => (
                <article key={project._id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                    </div>
                    <Badge tone="accent">{project.leaderId ? "Leader assigned" : "Unassigned"}</Badge>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    Leader: {project.leaderId ? `${project.leaderId.name} (${project.leaderId.email})` : "Pending assignment"}
                  </p>
                </article>
              ))
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-teal">Tasks Overview</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">Full system workload</h2>
            </div>
            <Badge tone="neutral">{tasks.length} tasks</Badge>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-500">
                <tr>
                  <th className="pb-3 font-medium">Task</th>
                  <th className="pb-3 font-medium">Project</th>
                  <th className="pb-3 font-medium">Assignee</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tasks.map((task) => (
                  <tr key={task._id}>
                    <td className="py-4">
                      <p className="font-semibold text-slate-900">{task.title}</p>
                      <p className="text-slate-500">Priority: {formatRole(task.priority)}</p>
                    </td>
                    <td className="py-4 text-slate-600">{readRelationName(task.projectId, "Unknown project")}</td>
                    <td className="py-4 text-slate-600">{readRelationName(task.assignedTo, "Unknown member")}</td>
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
        </div>
      </section>
    </div>
  );
}
