// import {Analytics} from '@vercel/analytics/react'
// import {SpeedInsights} from '@vercel/speed-insights/next'
import { ViewTransitions } from "next-view-transitions";
import { Poppins as FontSans, Noto_Serif as FontSerif } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL("https://swaybae.net"),
  title: {
    template: "Sway Bae | %s",
    default: "Sway Bae | Creator of Chaos",
  },
  description: "The official online space for Sway Bae & The Bae Squad!",
  applicationName: "Sway Bae | Creator of Chaos",
  referrer: "origin-when-cross-origin",
  keywords: [
    "swaybae, sway_bae, swaybaetv, sway, bae, swaybaenet, swaybaecom, thebaesquad, the-bae-squad, baesquad, bae_squad, swaybae-twitch, swaybae-twitter, swaybae-youtube, swaybae-discord, swaybae-instagram, swaybae-tiktok, swaybae-merch, swaybae-store, swaybae-shop, swaybae-gaming, hearthstone, blizzard, streamer, stream, twitch, twitch-streamer, twitchtv, blog, swaybae-blog",
  ],
  creator: "https://egxo.dev.",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Sway Bae | Creator of Chaos",
    description: "The official online space for Sway Bae & The Bae Squad!",
    url: "https://swaybae.net",
    siteName: "swaybae.net",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The official online space for Sway Bae & The Bae Squad!",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sway Bae | Creator of Chaos",
    description: "The official online space for Sway Bae & The Bae Squad!",
    creator: "@sway_baeTV",
    site: "@sway_baeTV",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "The official online space for Sway Bae & The Bae Squad!",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icons/apple-touch-icon-precomposed.png",
      },
    ],
  },
  // verification: {
  //   google: "google",
  //   yandex: "yandex",
  //   yahoo: "yahoo",
  // },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#262323" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontSerif.variable}`}
      >
        <body className="m-0 min-h-[100dvh] w-full scroll-smooth p-0 font-sans antialiased">
          <ThemeProvider>
            <TooltipProvider delayDuration={0}>
              <main>{children}</main>
              <Navbar />
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
          {/* <Analytics />
        <SpeedInsights /> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
