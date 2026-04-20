import type { ReactNode } from "react";

export { metadata, viewport } from "next-sanity/studio";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Root layout still wraps this. Keep this layout minimal.
  return children;
}
