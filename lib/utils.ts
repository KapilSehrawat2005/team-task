import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(value?: Date | string | null) {
  if (!value) {
    return "No deadline";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

export function formatRole(role: string) {
  return role.charAt(0).toUpperCase() + role.slice(1);
}
