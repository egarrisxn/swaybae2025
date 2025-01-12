"use client";
import { XCloseIcon, MenuIcon } from "@/components/icons";

export default function MenuToggle({
  handleToggleMenuOnClick,
  isToggleMenuOpen,
}) {
  return (
    <button
      type="button"
      onClick={handleToggleMenuOnClick}
      aria-label="Toggle Menu"
      // className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
    >
      {isToggleMenuOpen ? <XCloseIcon /> : <MenuIcon />}
    </button>
  );
}
