"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "../lib/cn";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/fr") ? "fr" : "en";

  const switchTo = currentLang === "en" ? "fr" : "en";

  const newPath = pathname.replace(/^\/(en|fr)/, `/${switchTo}`);

  return (
    <div className="fixed top-6 right-6 z-50">
      <Link
        href={newPath}
        className={
          "px-4 py-2 w-4 h-4 rounded-xl border border-border bg-surface/70 backdrop-blur text-sm hover:bg-elevated"
        }
      >
        {currentLang === "en" ? "FR" : "EN"}
      </Link>
    </div>
  );
}
