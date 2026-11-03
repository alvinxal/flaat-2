export const siteOrigin = "https://flaat.studio";
export const siteUrl = new URL(siteOrigin);
export const siteName = "Flaat Studio";
export const ogImagePath = "/assets/images/og-image.webp";

// Next.js shallow-merges metadata: a page-level `openGraph`/`twitter` replaces
// the layout's entirely, so pages spread these defaults back in.
export function openGraphDefaults(locale: string) {
  return {
    type: "website" as const,
    siteName,
    locale: locale === "en" ? "en_US" : "id_ID",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: `${siteName} social preview`,
      },
    ],
  };
}

export const twitterDefaults = {
  card: "summary_large_image" as const,
  images: [ogImagePath],
};
