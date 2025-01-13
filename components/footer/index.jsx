"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { RssIcon } from "@/components/icons";
import { SpotifyColored } from "@/components/icons";
// import { SpotifyNowPlaying } from "./spotify-now-playing";
import { ScrollToTop } from "./scroll-to-top";
import { SocialIcons } from "./social-icons";
import { SubscribeForm } from "./subscribe-form";

const quickLinks = {
  ql: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/community", label: "Community" },
    {
      href: "https://shop.swaybae.net/",
      label: "Store",
      external: true,
    },
  ],
};

const supportLinks = {
  sl: [
    { href: "/blog", label: "Blog" },
    { href: "/calendar", label: "Calendar" },
    { href: "/contact", label: "Contact" },
    { href: "/media", label: "Media Kit" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="border-t">
        <div className="mx-auto px-4 pb-16 xl:container lg:pb-0">
          {/* TOP */}
          <div className="py-20 lg:py-24">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-1/2 lg:w-1/4"
              >
                <div className="relative">
                  <ScrollToTop />
                </div>
                <div className="my-10">
                  {/* <SpotifyNowPlaying /> */}
                  <SpotifyColored className="mb-1.5 size-5" />
                  <a href="#" className="group">
                    <p className="whitespace-normal">
                      Currently listening to{" "}
                      <span className="font-medium transition-all duration-300 ease-out group-hover:text-green-500">
                        "Song"{" "}
                      </span>
                      by <span className="font-medium"> Artist</span>.
                    </p>
                  </a>
                </div>
                <h4 className="mb-1.5 uppercase tracking-[5px]">contact</h4>
                <a
                  href="#"
                  className="text-sm font-medium text-black dark:text-white"
                >
                  sway.bay9000@gmail.com
                </a>
              </motion.div>
              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=""
                >
                  <h4 className="mb-9 text-sm font-medium text-black dark:text-white">
                    Quick Links
                  </h4>
                  <ul>
                    {quickLinks.ql.map((item) => (
                      <li key={item.label}>
                        {item.external ? (
                          <a
                            href={item.href}
                            aria-label={`${item.label} Page`}
                            className="mb-3 inline-block hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            aria-label={`${item.label} Page`}
                            className="mb-3 inline-block hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=""
                >
                  <h4 className="mb-9 text-sm font-medium text-black dark:text-white">
                    Support
                  </h4>
                  <ul>
                    {supportLinks.sl.map((item) => (
                      <li key={item.label}>
                        {item.external ? (
                          <a
                            href={item.href}
                            aria-label={`${item.label} Page`}
                            className="mb-3 inline-block hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            aria-label={`${item.label} Page`}
                            className="mb-3 inline-block hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className=""
                >
                  <h4 className="mb-9 text-sm font-medium text-black dark:text-white">
                    Newsletter
                  </h4>
                  <p className="mb-1">Subscribe and join the club.</p>
                  <SubscribeForm />
                  <div className="hidden flex-row items-center gap-3 lg:mt-16 lg:flex">
                    <SocialIcons />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t py-7 lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:hidden"
            >
              <div className="flex flex-row items-center gap-3">
                <SocialIcons />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="/faq"
                  className="underline-offset-4 hover:underline"
                >
                  FAQs
                </Link>{" "}
                &#x2022;
                <Link
                  href="/terms"
                  className="underline-offset-4 hover:underline"
                >
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
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <p>
                &copy; {new Date().getFullYear()} Sway Bae. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
}

// import Link from "next/link";
// import { RssIcon } from "@/components/icons";
// // import { SpotifyNowPlaying } from "./spotify-now-playing";
// import { ScrollToTop } from "./scroll-to-top";
// import { SocialIcons } from "./social-icons";
// import { SubscribeForm } from "./subscribe-form";

// export default function Footer() {
//   return (
//     <footer className="size-full bg-slate-100 pb-[4.5rem] lg:pb-0 dark:bg-neutral-900">
//       {/* DESKTOP!!! */}
//       <div className="hidden place-items-center px-5 pb-3 pt-10 lg:grid lg:grid-cols-2 xl:px-6">
//         <section className="flex size-full flex-col items-start justify-between gap-4 lg:gap-7">
//           <div className="flex w-full flex-col items-start justify-start">
//             <p className="pb-0.5 text-sm font-medium uppercase tracking-tight">
//               Connect
//             </p>
//             <SocialIcons />
//           </div>
//           <div className="flex w-full items-start justify-start">
//             {/* <SpotifyNowPlaying /> */}
//             <p>Spotify Goes Here.</p>
//           </div>
//           <div className="flex w-full items-start justify-start text-sm font-bold tracking-tight text-black dark:text-white">
//             <p>
//               © 2019-2025 <span className="font-extrabold">Sway Bae</span>. All
//               rights reserved.
//             </p>
//           </div>
//         </section>
//         <section className="flex size-full flex-col items-end justify-between gap-4 lg:gap-7">
//           <div className="flex w-full items-end justify-end">
//             <ScrollToTop />
//           </div>
//           <div className="flex w-full flex-col items-end justify-end">
//             <p className="pb-0.5 text-sm font-medium uppercase tracking-tight">
//               Get on the list
//             </p>
//             <SubscribeForm />
//           </div>
//           <div className="flex w-full flex-row items-end justify-end gap-1.5 text-sm font-bold tracking-tight text-black dark:text-white">
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
//       {/* MOBILE!!! */}
//       <div className="grid grid-cols-1 place-items-center gap-6 p-4 pt-10 lg:hidden">
//         <div className="mb-0.5">
//           <ScrollToTop />
//         </div>
//         <div className="mb-2.5 flex flex-col items-center justify-center">
//           <p className="pb-0.5 text-sm font-medium tracking-tight">
//             Subscribe to my newsletter for updates!
//           </p>
//           <SubscribeForm />
//         </div>
//         <div className="mb-1.5 flex flex-row items-center justify-center gap-2">
//           <SocialIcons />
//         </div>
//         <div>
//           {/* <SpotifyNowPlaying /> */}
//           <p>Spotify Goes Here.</p>
//         </div>
//         <div className="flex flex-row items-center gap-2 font-medium">
//           <Link href="/faq" className="underline-offset-4 hover:underline">
//             FAQs
//           </Link>{" "}
//           &#x2022;
//           <Link href="/terms" className="underline-offset-4 hover:underline">
//             Terms
//           </Link>{" "}
//           &#x2022;
//           <Link href="/privacy" className="underline-offset-4 hover:underline">
//             Privacy
//           </Link>{" "}
//           &#x2022;
//           <a
//             href="/feed.xml"
//             className="flex flex-row items-center gap-0.5 underline-offset-4 hover:underline"
//           >
//             <span>RSS</span> <RssIcon width={12} height={12} />
//           </a>
//         </div>
//         <div className="x">
//           <p>© Sway Bae 2019-2025. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
