"use client";
import { useTheme } from "next-themes";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-8 rounded-full xs:size-12"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="size-3.5 text-neutral-800 xs:size-4 dark:hidden dark:text-neutral-200" />
          <MoonStarIcon className="hidden size-3.5 text-neutral-800 xs:size-4 dark:block dark:text-neutral-200" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Theme</TooltipContent>
    </Tooltip>
  );
}

// "use client";
// import { useCallback } from "react";
// import { useTheme } from "next-themes";
// import { MoonIcon } from "@/components/icons/moon-icon";
// import { SunIcon } from "@/components/icons/sun-icon";

// export default function ThemeToggle() {
//   const { resolvedTheme, setTheme } = useTheme();
//   const handleToggleTheme = useCallback(() => {
//     setTheme(resolvedTheme === "light" ? "dark" : "light");
//   }, [resolvedTheme, setTheme]);

//   return (
//     <button onClick={handleToggleTheme} aria-label="Toggle Theme">
//       {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
//     </button>
//   );
// }
