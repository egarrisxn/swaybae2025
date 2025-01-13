import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

export const socialIcons = {
  twitch: (props) => <TwitchIcon {...props} />,
  youtube: (props) => <YoutubeIcon {...props} />,
  tiktok: (props) => <TiktokIcon {...props} />,
  twitter: (props) => <TwitterIcon {...props} />,
  blusky: (props) => <BluskyIcon {...props} />,
  instagram: (props) => <InstagramIcon {...props} />,
  discord: (props) => <DiscordIcon {...props} />,
  spotify: (props) => <SpotifyIcon {...props} />,
};

export const socialData = {
  social: {
    Twitch: {
      name: "Twitch",
      url: "https://www.twitch.tv/sway_bae",
      icon: socialIcons.twitch,
    },
    YouTube: {
      name: "YouTube",
      url: "https://youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA",
      icon: socialIcons.youtube,
    },
    TikTok: {
      name: "TikTok",
      url: "https://tiktok.com/@sway_baetv",
      icon: socialIcons.tiktok,
    },
    Twitter: {
      name: "Twitter",
      url: "https://twitter.com/sway_baetv",
      icon: socialIcons.twitter,
    },
    Blusky: {
      name: "Blusky",
      url: "https://swaybae.bsky.social",
      icon: socialIcons.blusky,
    },
    Instagram: {
      name: "Instagram",
      url: "https://instagram.com/sway_baetv",
      icon: socialIcons.instagram,
    },
    Discord: {
      name: "Discord",
      url: "https://discord.com/invite/K73uN9k",
      icon: socialIcons.discord,
    },
    Spotify: {
      name: "Spotify",
      url: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
      icon: socialIcons.spotify,
    },
  },
};

export function SocialIcons() {
  return (
    <>
      {Object.entries(socialData.social).map(([name, social]) => (
        <div key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={social.url} aria-label={`${social.name} Icon`}>
                <social.icon className="size-6 text-foreground/70 hover:text-foreground" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ))}
    </>
  );
}

// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   TwitchIcon,
//   YoutubeIcon,
//   TiktokIcon,
//   TwitterIcon,
//   BluskyIcon,
//   InstagramIcon,
//   DiscordIcon,
//   SpotifyIcon,
// } from "@/components/icons";

// export const socialIcons = {
//   twitch: (props) => <TwitchIcon {...props} />,
//   youtube: (props) => <YoutubeIcon {...props} />,
//   tiktok: (props) => <TiktokIcon {...props} />,
//   twitter: (props) => <TwitterIcon {...props} />,
//   blusky: (props) => <BluskyIcon {...props} />,
//   instagram: (props) => <InstagramIcon {...props} />,
//   discord: (props) => <DiscordIcon {...props} />,
//   spotify: (props) => <SpotifyIcon {...props} />,
// };

// export const socialData = {
//   social: {
//     Twitch: {
//       name: "Twitch",
//       url: "https://www.twitch.tv/sway_bae",
//       icon: socialIcons.twitch,
//     },
//     YouTube: {
//       name: "YouTube",
//       url: "https://youtube.com/channel/UCbpQhE5NYQ05pSp_DJJQxCA",
//       icon: socialIcons.youtube,
//     },
//     TikTok: {
//       name: "TikTok",
//       url: "https://tiktok.com/@sway_baetv",
//       icon: socialIcons.tiktok,
//     },
//     Twitter: {
//       name: "Twitter",
//       url: "https://twitter.com/sway_baetv",
//       icon: socialIcons.twitter,
//     },
//     Blusky: {
//       name: "Blusky",
//       url: "https://swaybae.bsky.social",
//       icon: socialIcons.blusky,
//     },
//     Instagram: {
//       name: "Instagram",
//       url: "https://instagram.com/sway_baetv",
//       icon: socialIcons.instagram,
//     },
//     Discord: {
//       name: "Discord",
//       url: "https://discord.com/invite/K73uN9k",
//       icon: socialIcons.discord,
//     },
//     Spotify: {
//       name: "Spotify",
//       url: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
//       icon: socialIcons.spotify,
//     },
//   },
// };

// export function SocialIcons() {
//   return (
//     <div className="flex w-full flex-row items-start justify-start gap-2">
//       {Object.entries(socialData.social).map(([name, social]) => (
//         <div key={name}>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link
//                 href={social.url}
//                 aria-label={social.name}
//                 className={cn(
//                   buttonVariants({ variant: "icon", size: "icon" }),
//                   "size-8 rounded-full md:size-9 lg:size-10"
//                 )}
//               >
//                 <social.icon className="size-4 lg:size-5" />
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>{name}</p>
//             </TooltipContent>
//           </Tooltip>
//         </div>
//       ))}
//     </div>
//   );
// }
