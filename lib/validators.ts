import { z } from "zod";

import { roles, taskPriorities, taskStatuses } from "@/lib/constants";

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters.")
});

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required.")
});

export const updateUserSchema = z.object({
  userId: z.string().min(1, "User is required."),
  role: z.enum(roles),
  projectId: z.string().nullable().optional()
});

export const createProjectSchema = z.object({
  name: z.string().min(2, "Project name must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  leaderId: z.string().nullable().optional(),
  memberIds: z.array(z.string()).default([])
});

export const createTaskSchema = z.object({
  title: z.string().min(2, "Task title must be at least 2 characters."),
  description: z.string().min(10, "Task description must be at least 10 characters."),
  projectId: z.string().min(1, "Project is required."),
  assignedTo: z.string().min(1, "Assignee is required."),
  deadline: z.string().nullable().optional(),
  priority: z.enum(taskPriorities)
});

export const updateTaskStatusSchema = z.object({
  taskId: z.string().min(1, "Task is required."),
  status: z.enum(taskStatuses)
});
