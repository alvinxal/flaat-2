import type { ReactNode } from "react";

import RootHtml from "@/components/layout/RootHtml";

export { metadata, viewport } from "next-sanity/studio";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
