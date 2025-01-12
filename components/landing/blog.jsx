import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BlurFadeText } from "@/components/ui/blur-fade-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";

const blogLinks = [
  {
    id: "#2",
    title: "The best FREE Ways to Support Your Favorite Content Creators!",
    href: "/blog/post/the-best-free-ways-to-support-your-favorite-content-creators",
  },
  {
    id: "#1",
    title: "Sway Starts a BLOG!",
    href: "/blog/post/sway-starts-a-blog",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto mt-24 max-w-6xl px-4 md:mt-12 xl:px-0">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 xl:gap-12">
        <aside className="relative order-2 flex justify-center md:order-1 md:justify-start xl:px-4">
          <BlurFade delay={0.04} inView>
            <Image
              src="/images/blogpicture.png"
              alt="Another cutout photo of Sway"
              width={500}
              height={900}
              className="h-auto w-auto max-w-full"
              // className="h-auto max-w-[75%] md:max-w-full"
            />
          </BlurFade>
        </aside>
        <article className="order-1 flex flex-col gap-3 p-4 xs:gap-4 md:order-2 md:mb-24 md:pt-24 lg:mb-0 lg:gap-5 xl:pt-32">
          <BlurFadeText
            className="mx-auto flex items-center font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
            text={`Latest Blog Posts`}
            delay={0.04}
            inView
          />
          <BlurFade delay={0.04} inView>
            {blogLinks.map(({ id, title, href }) => (
              <div
                key={id}
                className="mb-0.5 mt-1.5 border-b border-foreground pb-8 md:pb-4 lg:p-8"
              >
                <Link href={href}>
                  <div className="group flex flex-row justify-between gap-2 font-extralight tracking-widest md:text-lg">
                    <div className="p-1">
                      <p>{id}</p>
                    </div>
                    <div className="flex-1 p-1 group-hover:underline group-hover:underline-offset-4">
                      <p>{title}</p>
                    </div>
                    <div className="flex items-center p-1">
                      <ArrowRight
                        width={16}
                        height={16}
                        strokeWidth={1.5}
                        className="-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </BlurFade>
          <div className="mt-12 flex items-center justify-center lg:mt-16">
            <BlurFade delay={0.04} inView>
              <Button asChild variant="main">
                <Link href="/blog">Read More!</Link>
              </Button>
            </BlurFade>
          </div>
        </article>
      </div>
    </div>
  );
}
