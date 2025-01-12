"use client";
import { ArrowUp } from "@/components/icons";

export function ScrollToTop({ text = "Back to top" }) {
  const scrollOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="group flex items-center justify-center gap-0.5 font-semibold uppercase tracking-tighter xl:text-lg"
      onClick={scrollOnClick}
    >
      <p className="transition-all duration-300 ease-out group-hover:text-blue-500">
        {text}
      </p>
      <ArrowUp className="mb-0.5 size-4 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:text-blue-500 xl:mb-0 xl:size-5 xl:group-hover:-translate-y-0.5" />
    </button>
  );
}
