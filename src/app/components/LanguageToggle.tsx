"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCALE_COOKIE } from "@/lib/locale";

function stripTrailingSlash(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

function setLocaleCookie(locale: "en" | "fr") {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export default function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const rawPathname = usePathname() ?? "/";
  const pathname = stripTrailingSlash(rawPathname);

  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const strippedEn = pathname.replace(/^\/fr(?=\/|$)/, "");
  const pathToEnglish = strippedEn === "" ? "/" : strippedEn;
  const pathToFrench =
    pathname === "/" ? "/fr" : isFr ? pathname : `/fr${pathname}`;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative shrink-0" ref={rootRef}>
      <button
        type="button"
        id="lang-menu-button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="lang-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm md:text-base text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono"
      >
        <span className="tabular-nums">{isFr ? "FR" : "EN"}</span>
        <span
          className="text-slate-500 select-none dark:text-slate-400"
          aria-hidden
        >
          {open ? "▴" : "▾"}
        </span>
        <span className="sr-only">Choisir la langue</span>
      </button>

      {open ? (
        <div
          id="lang-menu"
          role="menu"
          aria-labelledby="lang-menu-button"
          className="absolute right-0 z-50 mt-1 min-w-[10.5rem] rounded-lg border border-slate-200 bg-white py-1 shadow-md dark:border-slate-700 dark:bg-slate-800"
        >
          <Link
            role="menuitem"
            href={pathToEnglish}
            lang="en"
            onClick={() => {
              setLocaleCookie("en");
              setOpen(false);
            }}
            className={`block px-3 py-2 text-sm font-mono transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/80 ${
              !isFr
                ? "bg-slate-50 text-slate-900 dark:bg-slate-700/40 dark:text-slate-100"
                : "text-slate-700 dark:text-slate-300"
            }`}
          >
            English
          </Link>
          <Link
            role="menuitem"
            href={pathToFrench}
            lang="fr"
            onClick={() => {
              setLocaleCookie("fr");
              setOpen(false);
            }}
            className={`block px-3 py-2 text-sm font-mono transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/80 ${
              isFr
                ? "bg-slate-50 text-slate-900 dark:bg-slate-700/40 dark:text-slate-100"
                : "text-slate-700 dark:text-slate-300"
            }`}
          >
            Français
          </Link>
        </div>
      ) : null}
    </div>
  );
}
