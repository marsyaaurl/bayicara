import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const { data: { session } } = await supabase.auth.getSession();
  
  const protectedRoutes = ['/stimulasi'];
  
  const publicRoutes = ['/Login', '/Signup', '/'];
  
  const { pathname } = req.nextUrl;
  
  if (!session && protectedRoutes.some(route => pathname.startsWith(route))) {
    console.log('User not authenticated, redirecting to login');
    return NextResponse.redirect(new URL('/Login', req.url));
  }
  
  if (session && pathname === '/Login') {
    console.log('User already authenticated, redirecting to dashboard');
    return NextResponse.redirect(new URL('/stimulasi', req.url));
  }
  
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)',
  ],
}