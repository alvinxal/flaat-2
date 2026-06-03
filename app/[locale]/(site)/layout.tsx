import type { ReactNode } from "react";

import Sidebar from "@/components/layout/Sidebar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
