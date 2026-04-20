"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

export default function ConditionalSidebar() {
  const pathname = usePathname();

  // Studio live under /dashboard. Keep it clean.
  if (pathname?.startsWith("/dashboard")) return null;

  return <Sidebar />;
}
