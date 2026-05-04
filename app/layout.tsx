import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "FluxBoard | RBAC Project Management",
  description: "Production-ready project management system with JWT auth, RBAC, and MongoDB."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
