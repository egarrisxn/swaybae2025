"use client";
import { useCallback } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@/components/icons/moon-icon";
import { SunIcon } from "@/components/icons/sun-icon";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <button type="button" onClick={handleToggleTheme} aria-label="Toggle Theme">
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
