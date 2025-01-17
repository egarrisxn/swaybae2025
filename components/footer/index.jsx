"use client";
import Link from "next/link";
import React from "react";
import { Appear } from "@/components/motion/simple-motion";
import { RssIcon, SpotifyColored } from "@/components/icons";
import { ScrollToTop } from "./scroll-to-top";
import { SocialIcons } from "./social-icons";
import { SubscribeForm } from "./subscribe-form";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "https://shop.swaybae.net/", label: "Store", external: true },
];

const supportLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media Kit" },
];

const footerLinks = [
  { href: "/faq", label: "FAQs" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/rss.xml", label: "RSS", icon: <RssIcon width={12} height={12} /> },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto px-4 pb-16 xl:container lg:pb-0">
        {/* TOP */}
        <div className="py-20 lg:py-24">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            <Appear className="w-1/2 lg:w-1/4" delay={0.3}>
              <div className="relative">
                <ScrollToTop />
              </div>
              <div className="my-10">
                <SpotifyColored className="mb-1.5 size-5" />
                <a href="#" className="group">
                  <p className="whitespace-normal">
                    Currently listening to{" "}
                    <span className="font-medium transition-all duration-300 ease-out group-hover:text-green-500">
                      "Song"
                    </span>{" "}
                    by <span className="font-medium">Artist</span>.
                  </p>
                </a>
              </div>
              <h4 className="mb-1.5 uppercase tracking-[5px]">Contact</h4>
              <a
                href="#"
                className="text-sm font-medium text-black dark:text-white"
              >
                sway.bay9000@gmail.com
              </a>
            </Appear>

            <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
              {[
                { title: "Quick Links", links: quickLinks },
                { title: "Support", links: supportLinks },
              ].map(({ title, links }, index) => (
                <Appear key={title} delay={0.1 * (index + 1)}>
                  <h4 className="mb-9 text-sm font-medium text-black dark:text-white">
                    {title}
                  </h4>
                  <ul>
                    {links.map(({ href, label, external }) => (
                      <li key={label}>
                        {external ? (
                          <a
                            href={href}
                            aria-label={`${label} Page`}
                            className="mb-3 inline-block hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {label}
                          </a>
                        ) : (
                          <Link
                            href={href}
                            aria-label={`${label} Page`}
                            className="mb-3 inline-block hover:text-primary"
                          >
                            {label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </Appear>
              ))}

              <Appear delay={0.3}>
                <h4 className="mb-9 text-sm font-medium text-black dark:text-white">
                  Newsletter
                </h4>
                <p className="mb-1">Subscribe and join the club.</p>
                <SubscribeForm />
                <div className="hidden flex-row items-center gap-3 lg:mt-16 lg:flex">
                  <SocialIcons />
                </div>
              </Appear>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t py-7 lg:flex-row lg:justify-between lg:gap-0">
          <Appear className="lg:hidden">
            <div className="flex flex-row items-center gap-3">
              <SocialIcons />
            </div>
          </Appear>

          <Appear>
            <div className="z-30 flex flex-row items-center gap-2 lg:z-50">
              {footerLinks.map(({ href, label, icon }) => (
                <React.Fragment key={label}>
                  <Link
                    href={href}
                    className="z-30 flex items-center gap-0.5 underline-offset-4 hover:underline lg:z-50"
                  >
                    {icon ? (
                      <>
                        <span>{label}</span> {icon}
                      </>
                    ) : (
                      label
                    )}
                  </Link>
                  {label !== "RSS" && <span>&#x2022;</span>}
                </React.Fragment>
              ))}
            </div>
          </Appear>

          <Appear>
            <p>
              &copy; {new Date().getFullYear()} Sway Bae. All rights reserved.
            </p>
          </Appear>
        </div>
      </div>
    </footer>
  );
}
