"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE } from "@/lib/locale";

function stripTrailingSlash(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

export default function LanguageToggle() {
  const rawPathname = usePathname() ?? "/";
  const pathname = stripTrailingSlash(rawPathname);

  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const targetPath = isFr
    ? pathname.replace(/^\/fr(?=\/|$)/, "") || "/"
    : `/fr${pathname === "/" ? "" : pathname}`;

  return (
    <Link
      href={targetPath}
      onClick={() => {
        const value = isFr ? "en" : "fr";
        document.cookie = `${LOCALE_COOKIE}=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
      }}
      className="inline-flex items-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 text-sm md:text-base transition-colors"
      aria-label={isFr ? "Switch to English" : "Passer en français"}
      title={isFr ? "English" : "Français"}
    >
      {isFr ? "EN" : "FR"}
    </Link>
  );
}

