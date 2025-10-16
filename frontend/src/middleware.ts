import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  const publicRoutes = ["/auth/login", "/auth/register", "/home"];
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // كل التحقق هيكون في الفرونت
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
