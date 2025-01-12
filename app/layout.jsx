import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://swaybae.net"),
  title: "Sway Bae 2025",
  description: "The official site for Sway Bae & The Bae Squad!",

  referrer: "origin-when-cross-origin",
  keywords: [
    "swaybae, sway_bae, swaybaetv, sway, bae, swaybaenet, swaybaecom, thebaesquad, the-bae-squad, baesquad, bae_squad, swaybae-twitch, swaybae-twitter, swaybae-youtube, swaybae-discord, swaybae-instagram, swaybae-tiktok, swaybae-merch, swaybae-store, swaybae-shop, swaybae-gaming, hearthstone, blizzard, streamer, stream, twitch, twitch-streamer, twitchtv, blog, swaybae-blog",
  ],
  alternates: {
    rss: { url: "/feed.xml", title: "Sway Bae 2025 RSS Feed" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sway Bae | Creator of Chaos",
    url: "https://swaybae.net",
    siteName: "Swaybae.net",
    images: [
      {
        url: "https://swaybae.net/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "The official site for Sway Bae & The Bae Squad!",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    creator: "@sway_baeTV",
    site: "@sway_baeTV",
    title: "Sway Bae | Creator of Chaos",
    images: [
      {
        url: "https://swaybae.net/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "The official site for Sway Bae & The Bae Squad!",
      },
    ],
  },
  icons: {
    shortcut: "https://swaybae.net/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-[100dvh] w-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
