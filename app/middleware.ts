import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { session } } = await supabase.auth.getSession();

  const protectedRoutes = ['/stimulasi'];
  const authRoutes = ['/Login', '/Signup'];

  const { pathname } = req.nextUrl;

  // Debug logs
  console.log('=== MIDDLEWARE DEBUG ===');
  console.log('Path:', pathname);
  console.log('Session exists:', !!session);
  console.log('Session user:', session?.user?.email || 'No user');

  // New logic for the root path '/'
  if (pathname === '/') {
    if (session) {
      // If user is authenticated, redirect from '/' to '/stimulasi'
      console.log('✅ User authenticated on root, redirecting to /stimulasi');
      return NextResponse.redirect(new URL('/stimulasi', req.url));
    } else {
      // If user is not authenticated, redirect from '/' to '/Login'
      console.log('❌ User not authenticated on root, redirecting to /Login');
      return NextResponse.redirect(new URL('/Login', req.url));
    }
  }

  // Fungsi untuk memeriksa apakah pathname cocok dengan salah satu protectedRoutes
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Jika tidak ada session dan mencoba akses protected route
  if (!session && isProtectedRoute) {
    console.log('❌ User not authenticated, redirecting to login');
    // Simpan URL yang dicoba diakses sebelum redirect ke login
    const redirectUrl = new URL('/Login', req.url);
    redirectUrl.searchParams.set('next', pathname); // Menyimpan pathname asli
    return NextResponse.redirect(redirectUrl);
  }

  // Jika sudah ada session dan di halaman auth (Login/Signup), redirect ke stimulasi
  if (session && authRoutes.includes(pathname)) {
    console.log('✅ User already authenticated, redirecting to stimulasi');
    return NextResponse.redirect(new URL('/stimulasi', req.url));
  }

  console.log('✅ Allowing access to:', pathname);
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)',
  ],
}