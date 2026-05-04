import type { JWTPayload } from "jose";

export type Role = "admin" | "leader" | "member" | "pending";
export type TaskStatus = "pending" | "in-progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";

export interface AuthTokenPayload extends JWTPayload {
  userId: string;
  email: string;
  role: Role;
  name: string;
  projectId?: string | null;
}

export interface AuthenticatedUser extends AuthTokenPayload {}

export interface SelectOption {
  label: string;
  value: string;
}
