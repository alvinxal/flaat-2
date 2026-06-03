import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { locales, defaultLocale } from "@/lib/i18n/config";

function unauthorized() {
  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Studio"',
    },
  });
}

function getLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (locales.includes(first as never)) return first;
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // --- Basic Auth for dashboard ---
  if (pathname.startsWith("/dashboard")) {
    const user = process.env.STUDIO_BASIC_AUTH_USER;
    const pass = process.env.STUDIO_BASIC_AUTH_PASSWORD;
    if (user && pass) {
      const header = req.headers.get("authorization");
      if (!header?.startsWith("Basic ")) return unauthorized();

      const base64 = header.slice("Basic ".length);
      let decoded = "";
      try {
        decoded = Buffer.from(base64, "base64").toString("utf8");
      } catch {
        return unauthorized();
      }

      const idx = decoded.indexOf(":");
      const givenUser = idx >= 0 ? decoded.slice(0, idx) : "";
      const givenPass = idx >= 0 ? decoded.slice(idx + 1) : "";

      if (givenUser !== user || givenPass !== pass) return unauthorized();
    }
    return NextResponse.next();
  }

  // --- Locale routing ---
  const excludePatterns = [
    "/_next/",
    "/api/",
    "/manifest.webmanifest",
    "/server-sitemap.xml",
    "/robots.txt",
    "/sitemap.xml",
    "/favicon.ico",
    "/assets/",
  ];
  if (excludePatterns.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const locale = getLocale(pathname);

  if (locale !== defaultLocale) {
    if (locale === "en" && pathname.startsWith("/en/")) {
      const response = NextResponse.next();
      response.headers.set("x-locale", locale);
      return response;
    }
    if (locale === "en" && pathname === "/en") {
      req.nextUrl.pathname = "/en/";
      const response = NextResponse.redirect(req.nextUrl);
      response.headers.set("x-locale", locale);
      return response;
    }
  }

  if (locale === defaultLocale) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === defaultLocale) {
      const response = NextResponse.next();
      response.headers.set("x-locale", locale);
      return response;
    }

    req.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.rewrite(req.nextUrl);
    response.headers.set("x-locale", defaultLocale);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
