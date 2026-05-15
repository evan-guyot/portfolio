import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log("middlewarereached");

  if (pathname.startsWith("/fr") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  const language = request.headers.get("accept-language") || "";

  const locale = language.startsWith("fr") ? "fr" : "en";

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
