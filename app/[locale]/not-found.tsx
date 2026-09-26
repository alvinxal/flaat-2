import { headers } from "next/headers";

import NotFoundBody from "@/components/layout/NotFoundBody";

export default async function NotFound() {
  const h = await headers();
  const locale = h.get("x-locale") || "id";

  return <NotFoundBody locale={locale} />;
}
