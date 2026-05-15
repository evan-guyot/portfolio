"use client";

import { useTheme } from "../providers/ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="fixed top-6 left-6 z-50">
      <button
        onClick={toggle}
        className="px-4 py-2 rounded-xl border border-border bg-surface/70 backdrop-blur text-sm hover:bg-elevated cursor-pointer"
      >
        {isDark ? (
          <MdSunny className="w-4 h-4" />
        ) : (
          <FaMoon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
