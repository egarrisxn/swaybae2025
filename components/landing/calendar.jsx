import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurItem, BlurText } from "@/components/motion/blur-fade";
import { CalendarList } from "@/components/calendar-list";

export default function Calendar() {
  return (
    <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12 2xl:gap-16">
        <aside className="order-2 flex flex-col py-4 sm:px-12 lg:order-1 lg:px-2 xl:px-4">
          <BlurItem delay={0.4}>
            <CalendarList />
          </BlurItem>
        </aside>
        <article className="order-1 flex w-full flex-col gap-3 p-4 sm:px-12 lg:order-2 lg:px-2 lg:pt-8 xl:gap-5 xl:px-4">
          <BlurText
            delay={0.3}
            className="pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
          >
            <span>Stay up to date</span>
          </BlurText>
          <BlurText
            delay={0.4}
            className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200"
          >
            <h2>Check what is next on the calendar!</h2>
          </BlurText>
          <BlurText
            delay={0.5}
            className="max-w-xl pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300"
          >
            <p>
              I create family-friendly entertainment centered around the
              concepts of positive mental attitude in gaming with the mantra of
              leaving someone's day better than. I create family-friendly
              entertainment centered around the concepts of positive mental
              attitude in gaming with the mantra of leaving someone's day better
              than.
            </p>
          </BlurText>
          <BlurItem delay={0.4}>
            <Button asChild variant="main">
              <Link href="/calendar">Calendar Page</Link>
            </Button>
          </BlurItem>
        </article>
      </div>
    </div>
  );
}
