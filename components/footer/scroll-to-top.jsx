"use client";
import { ArrowUp } from "@/components/icons/arrow-up";

export function ScrollToTop({ text = "Back to top" }) {
  const scrollOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="group flex items-center justify-center gap-0.5 font-semibold uppercase tracking-tighter"
      onClick={scrollOnClick}
    >
      <p>{text}</p>
      <ArrowUp
        width={16}
        height={16}
        className="mb-0.5 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105"
      />
    </button>
  );
}
