import { FadeInChild, FadeInText } from "@/components/motion/advanced-motion";
import { Button } from "@/components/ui/button";
import { YouTubePlayer } from "@/components/youtube-player";

export default function YouTube() {
  return (
    <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
        <aside className="flex w-full items-center justify-center py-4 sm:px-4 lg:mt-1 lg:items-start lg:px-2 xl:px-4">
          <div className="relative h-fit w-full max-w-xl overflow-hidden">
            <YouTubePlayer />
          </div>
        </aside>
        <article className="flex w-full flex-col gap-3 p-4 sm:px-12 lg:px-2 xl:gap-5 xl:px-4">
          <FadeInText
            className="pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
            text={`Watch and learn`}
            delay={0.04}
            inView
          />
          <FadeInText
            className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200"
            text={`Get inspired by my YouTube channel!`}
            delay={0.04}
            inView
          />
          <FadeInText
            className="max-w-xl pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300"
            text={`I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than I found it.`}
            delay={0.04}
            inView
          />
          <FadeInChild delay={0.04} inView>
            <Button asChild variant="main">
              <a
                href="https://www.youtube.com/swaybaetv"
                rel="noopener noreferrer"
                target="_blank"
              >
                Watch Now
              </a>
            </Button>
          </FadeInChild>
        </article>
      </div>
    </div>
  );
}
