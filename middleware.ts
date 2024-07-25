import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // const token = request.cookies.get("user-token")?.value || "";
  // const isPublicPath = path === "/sign-up";
  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }
  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL("/sign-up", request.nextUrl));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
