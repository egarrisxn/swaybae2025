"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialData } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUp } from "@/components/icons/arrow-up";
import { RssIcon } from "@/components/icons/rss-icon";
// import { SpotifyNowPlaying } from "./spotify-now-playing";

export function Footer() {
  const scrollOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="h-fit w-full border-2">
      <div className="grid grid-cols-1 place-items-center gap-6 p-6">
        <section className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:gap-0">
          <div className="order-2 md:order-1">Spotify Goes Here</div>
          {/* <div className="order-2 md:order-1">
            <SpotifyNowPlaying />
          </div> */}
          <div className="order-1 md:order-2">
            <button
              className="group flex items-center justify-center gap-0.5 font-semibold uppercase tracking-tighter"
              onClick={scrollOnClick}
            >
              <p>Back to Top</p>
              <ArrowUp
                width={16}
                height={16}
                className="mb-0.5 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105"
              />
            </button>
          </div>
        </section>
        <section className="mb-1 flex w-full flex-row items-center justify-center gap-2 md:mb-0 md:items-end md:justify-end">
          {Object.entries(socialData.social).map(([name, social]) => (
            <div key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "icon", size: "icon" }),
                      "size-10 rounded-full"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </section>
        <section className="order-3 flex w-full flex-col items-center gap-2 text-sm md:flex-row md:justify-between md:gap-0">
          <div>
            <p>© 2025 Sway Bae. All rights reserved.</p>
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <Link href="/faq" className="underline-offset-4 hover:underline">
              FAQs
            </Link>{" "}
            &#x2022;
            <Link href="/terms" className="underline-offset-4 hover:underline">
              Terms
            </Link>{" "}
            &#x2022;
            <Link
              href="/privacy"
              className="underline-offset-4 hover:underline"
            >
              Privacy
            </Link>{" "}
            &#x2022;
            <a
              href="/feed.xml"
              className="flex flex-row items-center gap-0.5 underline-offset-4 hover:underline"
            >
              <span>RSS</span> <RssIcon width={12} height={12} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
