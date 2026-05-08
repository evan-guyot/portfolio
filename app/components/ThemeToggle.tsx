"use client";

import { useTheme } from "../providers/ThemeProvider";
import { useSyncExternalStore } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function subscribe() {
  return () => {};
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && theme === "dark";

  return (
    <div className="fixed top-6 left-6 z-50">
      <button
        onClick={toggle}
        className="px-4 py-3 rounded-xl border border-border bg-surface/70 backdrop-blur text-sm hover:bg-elevated cursor-pointer"
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
