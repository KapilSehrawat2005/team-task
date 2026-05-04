"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { formatDate, formatRole } from "@/lib/utils";

interface MemberUser {
  _id: string;
  name: string;
  role: "admin" | "leader" | "member" | "pending";
}

interface Task {
  _id: string;
  title: string;
  description: string;
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
  createdBy?:
    | string
    | {
        _id: string;
        name: string;
      }
    | null;
}

interface MemberDashboardProps {
  currentUser: MemberUser;
  tasks: Task[];
}

function getNextStatus(status: Task["status"]) {
  if (status === "pending") {
    return "in-progress";
  }

  if (status === "in-progress") {
    return "completed";
  }

  return "completed";
}

export default function MemberDashboard({ currentUser, tasks }: MemberDashboardProps) {
  const router = useRouter();
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleStatusAdvance(taskId: string, status: Task["status"]) {
    setLoadingTaskId(taskId);
    setError(null);

    try {
      const response = await fetch("/api/tasks/update-status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          taskId,
          status
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to update task.");
      }

      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to update task.");
    } finally {
      setLoadingTaskId(null);
    }
  }

  function getRelationName(
    relation:
      | string
      | {
          name: string;
        }
      | null
      | undefined,
    fallback: string
  ) {
    if (!relation || typeof relation === "string") {
      return fallback;
    }

    return relation.name;
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-panel backdrop-blur md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          {currentUser.role === "pending" ? "Access Pending" : "Member Workspace"}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {currentUser.role === "pending"
            ? "Your account is awaiting admin approval."
            : "Focus on your assigned work and keep delivery moving."}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          {currentUser.role === "pending"
            ? "You can sign in successfully, but an admin still needs to assign your role and project before project work appears here."
            : `You currently have ${tasks.length} assigned task${tasks.length === 1 ? "" : "s"}. Update statuses as you progress from pending to completed.`}
        </p>
      </section>

      {error ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p> : null}

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Assigned", value: tasks.length },
          { label: "In Progress", value: tasks.filter((task) => task.status === "in-progress").length },
          { label: "Completed", value: tasks.filter((task) => task.status === "completed").length }
        ].map((item) => (
          <div key={item.label} className="rounded-3xl bg-slate-950 px-5 py-4 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        {tasks.length === 0 ? (
          <div className="rounded-[2rem] border border-white/50 bg-white p-8 text-sm text-slate-500 shadow-panel">
            No tasks are assigned yet. When a leader or admin assigns work to you, it will appear here with deadline and priority details.
          </div>
        ) : (
          tasks.map((task) => {
            const nextStatus = getNextStatus(task.status);
            const isComplete = task.status === "completed";

            return (
              <article key={task._id} className="rounded-[2rem] border border-white/50 bg-white p-6 shadow-panel">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-bold text-ink">{task.title}</h2>
                      <Badge tone={task.priority === "high" ? "danger" : task.priority === "medium" ? "warning" : "neutral"}>
                        {formatRole(task.priority)}
                      </Badge>
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
                    </div>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{task.description}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                      <span>Project: {getRelationName(task.projectId, "Unknown project")}</span>
                      <span>Created by: {getRelationName(task.createdBy, "Unknown")}</span>
                      <span>Deadline: {formatDate(task.deadline)}</span>
                    </div>
                  </div>
                  <div className="w-full max-w-xs rounded-3xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-700">Update progress</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Members can move tasks from pending to in-progress, then to completed.
                    </p>
                    <Button
                      className="mt-4 w-full"
                      disabled={isComplete || loadingTaskId === task._id}
                      onClick={() => handleStatusAdvance(task._id, nextStatus)}
                    >
                      {loadingTaskId === task._id
                        ? "Updating..."
                        : isComplete
                          ? "Completed"
                          : `Mark as ${formatRole(nextStatus)}`}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </section>
    </div>
  );
}
