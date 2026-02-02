"use client";

import Link from "next/link";
import { useState } from "react";

export default function SeeMoreSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  const baseButtonClass =
    "inline-flex items-center justify-center font-medium rounded-xl px-4 py-2.5 text-sm md:text-base lg:text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD] dark:focus:ring-blue-400";

  const primaryClass =
    "bg-[#004AAD] hover:bg-[#003d8a] dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-md hover:shadow-lg active:scale-[0.98] " +
    baseButtonClass;

  const outlineClass =
    "border-2 border-[#004AAD] dark:border-blue-400 text-[#004AAD] dark:text-blue-400 hover:bg-[#004AAD] hover:text-white dark:hover:bg-blue-500 dark:hover:text-white " +
    baseButtonClass;

  return (
    <div>
      {expanded && <div className="mb-6 md:mb-8">{children}</div>}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className={primaryClass}
        >
          {expanded ? "See less" : "See more"}
        </button>
        <Link href="/experience" className={outlineClass}>
          Experiences
        </Link>
      </div>
    </div>
  );
}
