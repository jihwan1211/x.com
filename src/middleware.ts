// export { auth as middleware } from "./auth";
// See "Matching Paths" below to learn more

import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  console.log("session : ", session);
  console.log("request url : ", new URL("/i/flow/login", "http://localhost:3000"));

  if (!session) {
    return NextResponse.redirect(new URL("/i/flow/login", "http://localhost:3000"));
  }

  /* next middleware 공식문서
  const isAuthenticated = authenticate(request);

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
  */
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};

// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
//   matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
// };
