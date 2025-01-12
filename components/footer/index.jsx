import Link from "next/link";
import { RssIcon } from "@/components/icons";
// import { SpotifyNowPlaying } from "./spotify-now-playing";
import { ScrollToTop } from "./scroll-to-top";
import { SocialIcons } from "./social-icons";
import { SubscribeForm } from "./subscribe-form";

export default function Footer() {
  return (
    <footer className="size-full bg-slate-100 pb-[4.5rem] lg:pb-0 dark:bg-neutral-900">
      {/* DESKTOP!!! */}
      <div className="hidden place-items-center p-5 pt-12 lg:grid lg:grid-cols-2 xl:p-6">
        <section className="flex size-full flex-col items-start justify-between gap-4 lg:gap-7">
          <div className="flex w-full flex-row items-start justify-start gap-2">
            <SocialIcons />
          </div>
          <div className="flex w-full items-start justify-start">
            {/* <SpotifyNowPlaying /> */}
            <p>Spotify Goes Here.</p>
          </div>
          <div className="flex w-full items-start justify-start">
            <p>© 2025 Sway Bae. All rights reserved.</p>
          </div>
        </section>
        <section className="flex size-full flex-col items-end justify-between gap-4 lg:gap-7">
          <div className="flex w-full items-end justify-end">
            <ScrollToTop />
          </div>
          <div className="flex w-full flex-col items-end justify-end">
            <p className="pb-0.5 text-sm font-medium tracking-tight">
              Subscribe to my newsletter for updates!
            </p>
            <SubscribeForm />
          </div>
          <div className="flex w-full flex-row items-end justify-end gap-1.5">
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
      {/* MOBILE!!! */}
      <div className="grid grid-cols-1 place-items-center gap-6 p-4 pt-10 lg:hidden">
        <div className="mb-0.5">
          <ScrollToTop />
        </div>
        <div className="mb-2.5 flex flex-col items-center justify-center">
          <p className="pb-0.5 text-sm font-medium tracking-tight">
            Subscribe to my newsletter for updates!
          </p>
          <SubscribeForm />
        </div>
        <div className="mb-1.5 flex flex-row items-center justify-center gap-2">
          <SocialIcons />
        </div>
        <div>
          {/* <SpotifyNowPlaying /> */}
          <p>Spotify Goes Here.</p>
        </div>
        <div className="flex flex-row items-center gap-2 font-medium">
          <Link href="/faq" className="underline-offset-4 hover:underline">
            FAQs
          </Link>{" "}
          &#x2022;
          <Link href="/terms" className="underline-offset-4 hover:underline">
            Terms
          </Link>{" "}
          &#x2022;
          <Link href="/privacy" className="underline-offset-4 hover:underline">
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
        <div className="x">
          <p>© 2025 Sway Bae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// import Link from "next/link";
// import { RssIcon } from "@/components/icons";
// import { SpotifyNowPlaying } from "./spotify-now-playing";
// import { ScrollToTop } from "./scroll-to-top";
// import { SocialIcons } from "./social-icons";
// import { SubscribeForm } from "./subscribe-form";

// export default function Footer() {
//   return (
//     <footer className="size-full -2">
//       <div className="grid grid-cols-1 place-items-center gap-6 p-6">
//         <section className="flex size-full flex-col items-center justify-center gap-2 md:flex-row md:items-start md:justify-between md:gap-0">
//           {/* <div className="order-2 md:order-1">Spotify Goes Here</div> */}
//           <div className="flex w-full flex-col items-center justify-center md:items-start md:justify-start">
//             <p className="pb-0.5 text-sm font-medium tracking-tight">
//               Subscribe to my newsletter for updates!
//             </p>
//             <SubscribeForm />
//           </div>
//           <div className="flex w-full flex-row items-center justify-center gap-2 md:items-end md:justify-end">
//             <SocialIcons />
//           </div>
//         </section>
//         <section className="flex size-full flex-col items-center justify-center gap-2 md:flex-row md:items-start md:justify-between md:gap-0">
//           <div className="flex w-full items-center justify-center md:items-start md:justify-start">
//             <SpotifyNowPlaying />
//           </div>
//           <div className="flex w-full items-center justify-center md:items-end md:justify-end">
//             <ScrollToTop />
//           </div>
//         </section>
//         <section className="order-3 flex w-full flex-col items-center gap-2 text-sm md:flex-row md:justify-between md:gap-0">
//           <div className="border">
//             <p>© 2025 Sway Bae. All rights reserved.</p>
//           </div>
//           <div className="flex flex-row items-center gap-1.5">
//             <Link href="/faq" className="underline-offset-4 hover:underline">
//               FAQs
//             </Link>{" "}
//             &#x2022;
//             <Link href="/terms" className="underline-offset-4 hover:underline">
//               Terms
//             </Link>{" "}
//             &#x2022;
//             <Link
//               href="/privacy"
//               className="underline-offset-4 hover:underline"
//             >
//               Privacy
//             </Link>{" "}
//             &#x2022;
//             <a
//               href="/feed.xml"
//               className="flex flex-row items-center gap-0.5 underline-offset-4 hover:underline"
//             >
//               <span>RSS</span> <RssIcon width={12} height={12} />
//             </a>
//           </div>
//         </section>
//       </div>
//     </footer>
//   );
// }
