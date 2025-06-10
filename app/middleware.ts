import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Redirect ke '/' kalau user udah login tapi buka /login
  if (session && req.nextUrl.pathname === "/Login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Kalau belum login, arahkan ke /login
  if (!session) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!^api/|^_next/|favicon.ico|^Login$|^Signup$).*)",
  ],
};
