import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Protected routes — require an authenticated session.
 * Any route starting with one of these prefixes will be guarded.
 */
const PROTECTED_PREFIXES = [
    '/dashboard',
    '/profile',
    '/sessions',
];

/**
 * Routes exclusively for unauthenticated users.
 * Authenticated users are redirected to the dashboard.
 */
const AUTH_ONLY_ROUTES = ['/login', '/register'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Read session token from cookie (NextAuth default cookie name)
    const token = request.cookies.get('next-auth.session-token')?.value
        ?? request.cookies.get('__Secure-next-auth.session-token')?.value;

    const isAuthenticated = Boolean(token);

    // Redirect unauthenticated users away from protected routes
    const isProtected = PROTECTED_PREFIXES.some((prefix) =>
        pathname.startsWith(prefix)
    );
    if (isProtected && !isAuthenticated) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Redirect authenticated users away from auth-only routes
    const isAuthRoute = AUTH_ONLY_ROUTES.some((route) =>
        pathname.startsWith(route)
    );
    if (isAuthRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    /** Apply middleware only to these paths — excludes static assets and API routes */
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/sessions/:path*',
        '/login',
        '/register',
    ],
};
