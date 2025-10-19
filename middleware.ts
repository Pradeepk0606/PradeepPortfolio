import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define public routes that don't require authentication
const publicRoutes = ['/', '/api/auth/signin', '/api/auth/error'];

// Define admin routes that require admin role
const adminRoutes = ['/admin'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes and static files
  if (pathname.startsWith('/_next') || 
      pathname.includes('.') || 
      pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  const token = await getToken({ req: request });
  
  // Redirect to login if not authenticated and trying to access protected route
  if (!token && !publicRoutes.some(route => pathname.startsWith(route))) {
    const url = new URL('/api/auth/signin', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  // Check admin access
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
