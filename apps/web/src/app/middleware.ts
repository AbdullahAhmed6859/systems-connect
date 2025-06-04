// middleware.ts (at project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@repo/jwt/utils";

const protectedPaths = ["/dashboard", "/profile", "/settings", "/feed"];
const authPaths = ["/login"];

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  // Define protected routes

  const isProtectedRoute = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  const isAuthRoute = authPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!(isAuthRoute || isProtectedRoute)) {
    NextResponse.next();
  }

  if (!accessToken) {
    // Redirect to login with return URL
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect_to", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  const isValid = await verifyToken(accessToken);

  if (isProtectedRoute && !isValid) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect_to", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isValid) {
    const redirectTo =
      request.nextUrl.searchParams.get("redirect_to") || "/feed";
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/feed/:path*",
    "/login",
  ],
};
