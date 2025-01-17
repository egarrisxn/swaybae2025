"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarIcon,
  HandshakeIcon,
  ImagesIcon,
  HomeIcon,
  MailIcon,
  PenLineIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

const navData = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    { href: "/blog", icon: PenLineIcon, label: "Blog" },
    { href: "/calendar", icon: CalendarIcon, label: "Calendar" },
    { href: "/community", icon: HandshakeIcon, label: "Community" },
    { href: "/contact", icon: MailIcon, label: "Contact" },
    { href: "/media", icon: ImagesIcon, label: "Media Kit" },
    {
      href: "https://shop.swaybae.net/",
      icon: ShoppingCartIcon,
      label: "Store",
      external: true,
    },
  ],
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 mx-auto mb-4 flex h-full max-h-14">
      <div className="fixed inset-x-0 bottom-0 z-40 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full w-[19rem] items-center rounded-full border bg-background p-0.5 px-0.5 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] xs:w-max xs:p-2 xs:px-1 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {navData.navbar.map((item) => (
          <div
            key={item.label}
            className="flex cursor-pointer items-center justify-center rounded-full"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-8 rounded-full xs:size-12",
                      pathname === item.href
                        ? "text-blue-500"
                        : "text-foreground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-3.5 xs:size-4",
                        pathname === item.href
                          ? "text-blue-500"
                          : "text-foreground"
                      )}
                    />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-8 rounded-full xs:size-12",
                      pathname === item.href
                        ? "text-blue-500"
                        : "text-foreground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-3.5 xs:size-4",
                        pathname === item.href
                          ? "text-blue-500"
                          : "text-foreground"
                      )}
                    />
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <div className="mx-auto flex cursor-pointer items-center justify-center rounded-full">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
