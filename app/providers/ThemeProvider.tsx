"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return (localStorage.getItem("theme") as Theme) ?? "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () => {
    const css = document.createElement("style");

    css.textContent = "* { transition: none !important; }";

    document.head.appendChild(css);

    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";

      localStorage.setItem("theme", next);

      return next;
    });

    requestAnimationFrame(() => {
      document.head.removeChild(css);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("ThemeProvider missing");
  }

  return ctx;
}
