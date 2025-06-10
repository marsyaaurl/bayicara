// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // --- TEST REDIRECT PAKSA UNTUK /stimulasi ---
  // Ini akan mengalihkan SEMUA akses ke /stimulasi ke /Login, tanpa peduli sesi
  if (pathname.startsWith('/stimulasi')) {
    console.log('--- TEST: Mengalihkan paksa /stimulasi ke /Login ---'); // Ini seharusnya muncul di log jika berhasil
    return NextResponse.redirect(new URL('/Login', req.url));
  }
  // --- AKHIR TEST ---


  // Kode middleware Anda yang sebelumnya (sisakan saja jika mau, tapi yang di atas adalah fokusnya)
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res }); // Uncomment jika perlu
  // const { data: { session } } = await supabase.auth.getSession(); // Uncomment jika perlu

  // console.log('=== MIDDLEWARE DEBUG ==='); // Uncomment jika perlu
  // console.log('Path:', pathname); // Uncomment jika perlu
  // console.log('Session exists:', !!session); // Uncomment jika perlu
  // console.log('Session user:', session?.user?.email || 'No user'); // Uncomment jika perlu


  // if (pathname === '/') {
  //   if (session) {
  //     return NextResponse.redirect(new URL('/stimulasi', req.url));
  //   } else {
  //     return NextResponse.redirect(new URL('/Login', req.url));
  //   }
  // }

  // const protectedRoutes = ['/stimulasi'];
  // const authRoutes = ['/Login', '/Signup'];
  // const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // if (!session && isProtectedRoute) {
  //   console.log('❌ User not authenticated, redirecting to login');
  //   const redirectUrl = new URL('/Login', req.url);
  //   redirectUrl.searchParams.set('next', pathname);
  //   return NextResponse.redirect(redirectUrl);
  // }

  // if (session && authRoutes.includes(pathname)) {
  //   console.log('✅ User already authenticated, redirecting to stimulasi');
  //   return NextResponse.redirect(new URL('/stimulasi', req.url));
  // }

  console.log('✅ Allowing access to:', pathname); // Ini log terakhir yang mungkin muncul
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)',
  ],
}