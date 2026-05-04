"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/ui/button";

interface AuthFormProps {
  mode: "login" | "signup";
}

const redirects = {
  admin: "/dashboard/admin",
  leader: "/dashboard/leader",
  member: "/dashboard/member",
  pending: "/dashboard/member"
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isSignup = mode === "signup";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Request failed.");
      }

      setMessage(payload.message);
      router.push(redirects[payload.data.user.role as keyof typeof redirects]);
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-hero-grid">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-10 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-panel backdrop-blur md:p-12">
          <p className="mb-4 inline-flex rounded-full bg-coral/10 px-4 py-1 text-sm font-semibold text-coral">
            RBAC Project Management Platform
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Build aligned teams with secure role-based delivery workflows.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            FluxBoard brings together admin control, leader visibility, and member execution in a
            single operational workspace backed by MongoDB Atlas and secure JWT sessions.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Protected APIs", value: "JWT + RBAC" },
              { label: "Operational Views", value: "Admin to Member" },
              { label: "Task Delivery", value: "Responsive UI" }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-950 px-5 py-4 text-white">
                <p className="text-sm text-slate-300">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-panel md:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Welcome</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">
              {isSignup ? "Create your workspace access" : "Sign in to your account"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              {isSignup
                ? "New accounts are created with pending access unless they match the bootstrap admin email."
                : "Use your email and password to access the dashboard assigned to your role."}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {isSignup ? (
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full name</label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-teal focus:bg-white"
                  placeholder="Aarav Mehta"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                />
              </div>
            ) : null}

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email address</label>
              <input
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-teal focus:bg-white"
                placeholder="you@company.com"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition focus:border-teal focus:bg-white"
                placeholder="Minimum 8 characters"
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              />
            </div>

            {error ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p> : null}
            {message ? (
              <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p>
            ) : null}

            <Button type="submit" className="w-full py-3" disabled={isLoading}>
              {isLoading ? "Please wait..." : isSignup ? "Create account" : "Sign in"}
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-500">
            {isSignup ? "Already have an account?" : "Need an account?"}{" "}
            <Link
              href={isSignup ? "/login" : "/signup"}
              className="font-semibold text-ink transition hover:text-coral"
            >
              {isSignup ? "Sign in" : "Create one"}
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
