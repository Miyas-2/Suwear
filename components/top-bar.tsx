"use client";

import * as React from "react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="flex items-center justify-center gap-6 text-xs font-medium p-2">
      <Link
        href="/map"
        className="hover:text-foreground/80 transition duration-300"
      >
        Peta Layanan
      </Link>
      <Link
        href="/blog"
        className="hover:text-foreground/80 transition duration-300"
      >
        Blog
      </Link>
    </div>
  );
}
