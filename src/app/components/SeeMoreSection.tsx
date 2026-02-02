"use client";

import Link from "next/link";
import { useState } from "react";

export default function SeeMoreSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  const buttonClass =
    "inline-flex hover:bg-gray-100 rounded-sm p-2 text-[#004AAD]";

  return (
    <div>
      {expanded && <div className="mb-4">{children}</div>}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className={buttonClass}
        >
          {expanded ? "See less" : "See more"}
        </button>
        <Link href="/experience" className={buttonClass}>
          Experiences
        </Link>
      </div>
    </div>
  );
}
