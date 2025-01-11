import Link from "next/link";
import { ScrollToTop } from "./scroll-to-top";
import { BackHome } from "./back-home";
import { SocialIcons } from "./social-icons";
import { SpotifyNowPlaying } from "./spotify-now-playing";
import { RssIcon } from "../icons/rss-icon";

export function Footer({ hasScroll = false }) {
  return (
    <footer className="w-full border-t-2">
      <div className="grid grid-cols-1 place-items-center gap-6 p-6 md:gap-7 md:p-8">
        <section className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:gap-0">
          {/* <div className="order-2 md:order-1">Spotify Goes Here</div> */}
          <div className="order-2 md:order-1">
            <SpotifyNowPlaying />
          </div>
          <div className="order-1 md:order-2">
            {hasScroll && <ScrollToTop />}
            {!hasScroll && <BackHome />}
          </div>
        </section>
        <section className="mb-1 flex w-full flex-row items-center justify-center gap-2 md:mb-0 md:items-end md:justify-end">
          <SocialIcons />
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
