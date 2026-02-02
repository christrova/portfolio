"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-lg md:text-xl lg:text-2xl whitespace-nowrap font-bold text-slate-900 dark:text-slate-100">
      {pathname === "/" ? (
        <span className="cursor-default pr-2">Christ Abessolo</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1.5 rounded-lg -ml-2 transition-colors"
        >
          Christ Abessolo
        </Link>
      )}
    </span>
  );
}
