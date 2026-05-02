import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PATHS = ["/work/disputes360", "/work/autobahn"];
const COOKIE_NAME = "cs-unlocked";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PATHS.includes(pathname);
  if (!isProtected) return NextResponse.next();

  if (req.cookies.get(COOKIE_NAME)?.value === "1") {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  url.search = `?next=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/work/disputes360", "/work/autobahn"],
};
