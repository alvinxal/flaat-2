import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorized() {
  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Studio"',
    },
  });
}

export function proxy(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/dashboard")) return NextResponse.next();

  const user = process.env.STUDIO_BASIC_AUTH_USER;
  const pass = process.env.STUDIO_BASIC_AUTH_PASSWORD;
  if (!user || !pass) return NextResponse.next();

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

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
