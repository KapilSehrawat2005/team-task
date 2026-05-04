import { redirect } from "next/navigation";
import { Types } from "mongoose";

import { getUserFromCookie } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongoose";
import { toPlainObject } from "@/lib/serialize";
import Project from "@/models/Project";
import Task from "@/models/Task";
import User from "@/models/User";
import type { Role, TaskPriority, TaskStatus } from "@/types";

export interface SerializedUser {
  _id: string;
  name: string;
  email: string;
  role: Role;
  projectId?: string | null;
}

export interface SerializedProject {
  _id: string;
  name: string;
  description: string;
  leaderId?: {
    _id: string;
    name: string;
    email: string;
  } | null;
}

export interface SerializedTask {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
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
  createdBy?:
    | string
    | {
        _id: string;
        name: string;
      }
    | null;
}

export async function getCurrentUserOrRedirect(): Promise<SerializedUser> {
  const session = await getUserFromCookie();

  if (!session) {
    redirect("/login");
  }

  await connectToDatabase();

  const user = await User.findById(session.userId).lean();

  if (!user) {
    redirect("/login");
  }

  return toPlainObject(user) as unknown as SerializedUser;
}

export async function getAdminDashboardData() {
  await connectToDatabase();

  const [users, projects, tasks] = await Promise.all([
    User.find().select("-password").sort({ createdAt: -1 }).lean(),
    Project.find()
      .populate("leaderId", "name email")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 })
      .lean(),
    Task.find()
      .populate("projectId", "name")
      .populate("assignedTo", "name email")
      .populate("createdBy", "name")
      .sort({ createdAt: -1 })
      .lean()
  ]);

  return {
    users: toPlainObject(users) as unknown as SerializedUser[],
    projects: toPlainObject(projects) as unknown as SerializedProject[],
    tasks: toPlainObject(tasks) as unknown as SerializedTask[]
  };
}

export async function getLeaderDashboardData(userId: string, projectId?: string | null) {
  await connectToDatabase();

  if (!projectId || !Types.ObjectId.isValid(projectId)) {
    return {
      project: null,
      members: [],
      tasks: []
    };
  }

  const [project, members, tasks] = await Promise.all([
    Project.findOne({ _id: projectId, leaderId: userId }).populate("leaderId", "name email").lean(),
    User.find({ projectId, role: "member" }).select("-password").sort({ name: 1 }).lean(),
    Task.find({ projectId })
      .populate("assignedTo", "name email")
      .sort({ deadline: 1, createdAt: -1 })
      .lean()
  ]);

  return {
    project: toPlainObject(project) as unknown as SerializedProject | null,
    members: toPlainObject(members) as unknown as SerializedUser[],
    tasks: toPlainObject(tasks) as unknown as SerializedTask[]
  };
}

export async function getMemberDashboardData(userId: string) {
  await connectToDatabase();

  const tasks = await Task.find({ assignedTo: userId })
    .populate("projectId", "name")
    .populate("createdBy", "name")
    .sort({ status: 1, deadline: 1, createdAt: -1 })
    .lean();

  return {
    tasks: toPlainObject(tasks) as unknown as SerializedTask[]
  };
}
