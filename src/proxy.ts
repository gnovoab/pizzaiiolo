import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Guards /gabriellos and /api/menu using the Auth.js session. Named `proxy.ts`
// (not `middleware.ts`) per this Next.js version's file convention — see
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md.
export default auth((req) => {
  // TEMP: local-testing-only bypass. Set DISABLE_AUTH=true in .env.local to
  // skip the Google sign-in gate. Must never be set in production.
  if (process.env.DISABLE_AUTH === "true") return NextResponse.next();
  if (req.nextUrl.pathname === "/gabriellos/login") return NextResponse.next();
  if (req.auth) return NextResponse.next();
  if (req.nextUrl.pathname.startsWith("/api/menu")) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  return NextResponse.redirect(new URL("/gabriellos/login", req.url));
});

export const config = { matcher: ["/gabriellos/:path*", "/api/menu/:path*"] };
