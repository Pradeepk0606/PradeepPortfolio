import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function securityHeaders(request: NextRequest) {
  // Clone the headers
  const headers = new Headers(request.headers);
  
  // Security Headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https: http:",
    "font-src 'self'",
    "connect-src 'self' https: http:",
    "frame-src 'self'",
    "media-src 'self'",
  ].join('; ');
  
  headers.set('Content-Security-Policy', csp);
  
  return headers;
}
