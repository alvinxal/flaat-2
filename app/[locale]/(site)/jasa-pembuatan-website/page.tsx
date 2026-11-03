import type { Metadata } from "next";

import ServicePageView from "@/components/services/ServicePageView";
import { buildServiceMetadata } from "@/lib/services/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildServiceMetadata("website", "id", locale);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <ServicePageView serviceKey='website' lang='id' urlLocale={locale} />;
}
