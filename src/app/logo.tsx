"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function stripTrailingSlash(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function Logo() {
  const pathname = stripTrailingSlash(usePathname() ?? "/");
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const homeHref = isFr ? "/fr" : "/";
  const isHome = pathname === "/" || pathname === "/fr";

  return (
    <span className="text-lg md:text-xl lg:text-2xl whitespace-nowrap font-bold text-slate-900 dark:text-slate-100">
      {isHome ? (
        <span className="cursor-default pr-2">Christ Abessolo</span>
      ) : (
        <Link
          href={homeHref}
          className="hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1.5 rounded-lg -ml-2 transition-colors"
        >
          Christ Abessolo
        </Link>
      )}
    </span>
  );
}
