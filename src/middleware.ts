import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE } from "@/lib/locale";

function stripTrailingSlash(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

function isFrPath(path: string) {
  const p = stripTrailingSlash(path);
  return p === "/fr" || p.startsWith("/fr/");
}

function pathWithoutFrPrefix(path: string) {
  const p = stripTrailingSlash(path);
  const stripped = p.replace(/^\/fr(?=\/|$)/, "") || "/";
  return stripped === "" ? "/" : stripped;
}

function pathWithFrPrefix(path: string) {
  const p = stripTrailingSlash(path);
  if (p === "/") return "/fr";
  return `/fr${p}`;
}

function shouldSkipLocaleRedirect(pathname: string) {
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/images/")) return true;
  const last = pathname.split("/").pop() ?? "";
  if (/\.[a-z0-9]+$/i.test(last)) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (shouldSkipLocaleRedirect(pathname)) return NextResponse.next();

  const pref = request.cookies.get(LOCALE_COOKIE)?.value;
  if (pref !== "en" && pref !== "fr") return NextResponse.next();

  const p = stripTrailingSlash(pathname);
  const onFr = isFrPath(p);

  if (pref === "fr" && !onFr) {
    const url = request.nextUrl.clone();
    url.pathname = pathWithFrPrefix(p);
    return NextResponse.redirect(url);
  }

  if (pref === "en" && onFr) {
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutFrPrefix(p);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
