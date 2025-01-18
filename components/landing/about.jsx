import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BlurText, BlurItem } from "@/components/motion/blur-fade";

export default function About() {
  return (
    <div className="container mx-auto mt-24 max-w-6xl px-4 xl:px-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-12">
        <article className="mx-auto flex flex-col gap-3 border p-4 md:gap-2 md:pt-16 lg:gap-5 lg:pt-24 xl:pt-32">
          <BlurText
            delay={0.3}
            className="text-xl font-semibold uppercase tracking-widest text-gray-700 md:text-lg lg:text-2xl dark:text-neutral-100"
          >
            <span>HEYA!</span>
          </BlurText>
          <BlurText
            delay={0.4}
            className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-4 font-serif text-8xl font-black tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] md:text-7xl lg:text-9xl dark:from-stone-200 dark:to-neutral-200"
          >
            <h2>I'm Sway.</h2>
          </BlurText>
          <BlurText
            deplay={0.5}
            className="max-w-lg pb-3 text-lg font-light text-gray-700 md:text-base lg:text-xl xl:text-2xl dark:text-gray-300"
          >
            <p>
              I'm a Full-Time Content Creator, currently partnered with Twitch
              and YouTube, streaming and releasing videos throughout the week. I
              create family-friendly entertainment centered around the concepts
              of positive mental attitude in gaming with the mantra of leaving
              someone's day better than I found it.
            </p>
          </BlurText>
          <BlurItem delay={0.4}>
            <Button asChild variant="main">
              <Link href="/about">Learn more!</Link>
            </Button>
          </BlurItem>
        </article>
        <aside className="flex justify-center border md:justify-end xl:px-4">
          <BlurItem delay={0.4} className="-mb-2">
            <Image
              src="/images/aboutpicture.png"
              alt="A cutout photo of Sway"
              width={500}
              height={900}
              className="h-auto w-auto max-w-full"
            />
          </BlurItem>
        </aside>
      </div>
    </div>
  );
}
