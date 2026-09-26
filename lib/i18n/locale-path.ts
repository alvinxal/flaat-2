import type { Locale } from "./config";

// Routes that only exist in Indonesian (no EN variant is rendered).
const ID_ONLY_PREFIXES = ["/jasa-website-yogyakarta"];

// Routes where the same content lives at a different slug per locale,
// so the path can't just be prefixed/stripped when switching languages.
const LOCALIZED_SLUG_PREFIXES = ["/projects/"];

// Routes whose ID/EN versions live at entirely different slugs
// (e.g. Indonesian phrasing doesn't belong in an English URL).
const CROSS_LOCALE_ID_TO_EN: Record<string, string> = {
  "/jasa-website-hotel-villa/": "/en/hospitality-website/",
};
const CROSS_LOCALE_EN_TO_ID: Record<string, string> = {
  "/hospitality-website/": "/jasa-website-hotel-villa/",
};

function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

export function getLocaleSwitchHref(pathname: string, targetLocale: Locale): string {
  const basePath = stripLocalePrefix(pathname);

  if (targetLocale === "en" && CROSS_LOCALE_ID_TO_EN[basePath]) {
    return CROSS_LOCALE_ID_TO_EN[basePath];
  }
  if (targetLocale === "id" && CROSS_LOCALE_EN_TO_ID[basePath]) {
    return CROSS_LOCALE_EN_TO_ID[basePath];
  }

  const isLocalizedSlugDetail = LOCALIZED_SLUG_PREFIXES.some(
    (prefix) => basePath.startsWith(prefix) && basePath !== prefix,
  );
  if (isLocalizedSlugDetail) {
    return targetLocale === "en" ? "/en/projects/" : "/projects/";
  }

  const isIdOnly = ID_ONLY_PREFIXES.some((prefix) => basePath.startsWith(prefix));
  if (isIdOnly && targetLocale === "en") {
    return "/en/";
  }

  if (targetLocale === "en") {
    return basePath === "/" ? "/en/" : `/en${basePath}`;
  }

  return basePath;
}
