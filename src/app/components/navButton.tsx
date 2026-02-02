"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButton = () => {
  const pathname = usePathname();

  const text = pathname == "/experience" ? "About" : "Experience";
  const link = pathname == "/experience" ? "/" : "experience";
  return (
    <Link
      href={link}
      className="inline-flex items-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg px-3 py-2 text-[#004AAD] dark:text-blue-400 text-sm md:text-base transition-colors"
    >
      {text}
    </Link>
  );
};

export default NavButton;
