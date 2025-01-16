import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ease } from "@/components/motion/simple-motion";

export default function About() {
  return (
    <div className="container mx-auto mt-12 max-w-6xl px-4 xl:px-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12">
        <article className="mx-auto flex flex-col gap-3 p-4 md:mb-24 md:pt-24 lg:mb-0 lg:gap-5 xl:pt-32">
          <Ease className="text-xl font-semibold uppercase tracking-widest text-gray-700 sm:text-2xl dark:text-neutral-100">
            Heya!
          </Ease>
          <Ease className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-4 text-7xl font-black tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] md:text-8xl xl:text-9xl dark:from-stone-200 dark:to-neutral-200">
            I'm Sway
          </Ease>
          <Ease className="max-w-lg pb-3 font-light text-gray-700 md:text-lg lg:text-xl 2xl:text-2xl dark:text-gray-300">
            I'm a Full-Time Content Creator, currently partnered with Twitch and
            YouTube, streaming and releasing videos throughout the week. I
            create family-friendly entertainment centered around the concepts of
            positive mental attitude in gaming with the mantra of leaving
            someone's day better than I found it.
          </Ease>
          <Ease>
            <Button asChild variant="main">
              <Link href="/about">Learn more!</Link>
            </Button>
          </Ease>
        </article>
        <aside className="flex justify-center md:justify-end xl:px-4">
          <Ease>
            <Image
              src="/images/aboutpicture.png"
              alt="A cutout photo of Sway"
              width={500}
              height={900}
              className="h-auto w-auto max-w-full"
            />
          </Ease>
        </aside>
      </div>
    </div>
  );
}
