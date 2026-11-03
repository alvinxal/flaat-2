"use client";

import { usePathname } from "next/navigation";

import NotFoundBody from "@/components/layout/NotFoundBody";

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";

  return <NotFoundBody locale={locale} />;
}
