import { SocialCard } from "@/components/social-card";
import {
  TwitchIcon,
  YoutubeIcon,
  TiktokIcon,
  TwitterIcon,
  BluskyIcon,
  InstagramIcon,
  DiscordIcon,
  SpotifyIcon,
} from "@/components/icons";

const socialCards = [
  {
    title: "Twitch",
    subtitle: "@sway_bae",
    href: "https://www.twitch.tv/sway_bae",
    Icon: TwitchIcon,
  },
  {
    title: "YouTube",
    subtitle: "@swaybaetv",
    href: "https://youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA",
    Icon: YoutubeIcon,
  },
  {
    title: "TikTok",
    subtitle: "@sway_baetv",
    href: "https://tiktok.com/@sway_baetv",
    Icon: TiktokIcon,
  },
  {
    title: "Twitter/X",
    subtitle: "@sway_baetv",
    href: "https://twitter.com/sway_baetv",
    Icon: TwitterIcon,
  },
  {
    title: "Blusky",
    subtitle: "@Swaybae",
    href: "https://swaybae.bsky.social",
    Icon: BluskyIcon,
  },
  {
    title: "Instagram",
    subtitle: "@sway_baetv",
    href: "https://instagram.com/sway_baetv",
    Icon: InstagramIcon,
  },
  {
    title: "Discord",
    subtitle: "@sway_bae",
    href: "https://discord.com/invite/K73uN9k",
    Icon: DiscordIcon,
  },
  {
    title: "Spotify",
    subtitle: "@Swaybae",
    href: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
    Icon: SpotifyIcon,
  },
];

export default function Socials() {
  return (
    <div className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950">
      <div className="space-y-4 py-12 md:space-y-6 md:p-14 lg:pb-16 xl:pb-20 xl:pt-[4.5rem] 2xl:space-y-6">
        <h5 className="text-center text-xs font-semibold uppercase text-white md:text-sm lg:text-base">
          Lets get social
        </h5>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 px-4 sm:gap-6 md:gap-8 md:px-8 2xl:px-0">
          {socialCards.map(({ title, subtitle, href, Icon }) => (
            <SocialCard
              key={title}
              title={title}
              subtitle={subtitle}
              href={href}
              Icon={Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
