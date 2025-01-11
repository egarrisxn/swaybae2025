import Link from "next/link";
import Image from "next/image";
import { socialCards, blogLinks, brandIcons, imageGrid } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { BlurFadeText } from "@/components/ui/blur-fade-text";
import { Button } from "@/components/ui/button";
import { TextBorder } from "@/components/ui/text-border";
import { Marquee } from "@/components/ui/marquee";
import { YouTubePlayer } from "@/components/youtube-player";
import { SocialCard } from "@/components/social-card";
import { TwitterCard } from "@/components/twitter-card";
import { CalendarList } from "@/components/calendar-list";
import { CardStack } from "@/components/card-stack";
import { BrandCard } from "@/components/brand-card";
import { ContactForm } from "@/components/contact-form";
import { ChaosScrollText } from "@/components/chaos-scroll-text";
// import { Footer } from "@/components/footer";
import { ChevronDown } from "@/components/icons/chevron-down";
import { ArrowRight } from "@/components/icons/arrow-right";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col">
      {/* Hero Section */}

      <section id="hero">
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute z-30 flex size-full items-center justify-center pb-36 text-center sm:pb-24 md:pb-16 lg:pb-24">
            <TextBorder text="Creator of Chaos" />
          </div>
          <div className="absolute bottom-5 z-30 flex w-full animate-bounce justify-center text-foreground lg:bottom-10">
            <ChevronDown className="size-7 md:size-8 lg:size-9 xl:size-10 2xl:size-12" />
          </div>
          <div className="absolute inset-0 z-10 hidden size-full md:block">
            <video
              aria-hidden="true"
              autoPlay
              className="pointer-events-none absolute inset-0 size-full rounded-3xl bg-background object-cover p-4"
              // loop
              muted
              playsInline
              poster="/hero/desktop.png"
              src="/hero/desktop.mp4"
            >
              <Image
                alt="Fallback image for desktop video"
                className="size-full object-cover"
                height={1440}
                src="/hero/desktop.png"
                width={2560}
              />
            </video>
          </div>
          <div
            className="absolute inset-0 z-10 block size-full md:hidden"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              aria-hidden="true"
              autoPlay
              className="pointer-events-none absolute inset-0 size-full object-cover"
              // loop
              muted
              playsInline
              poster="/hero/mobile.png"
              src="/hero/mobile.mp4"
            >
              <Image
                alt="hero photo"
                className="pointer-events-none absolute inset-0 size-full object-cover"
                height={1920}
                src="/hero/mobile.png"
                width={1080}
              />
            </video>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section id="about">
        <div className="container mx-auto mt-12 max-w-6xl px-4 xl:px-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12">
            <article className="mx-auto flex flex-col gap-3 p-4 md:mb-24 md:pt-24 lg:mb-0 lg:gap-5 xl:pt-32">
              <BlurFadeText
                className="text-xl font-semibold uppercase tracking-widest text-gray-700 sm:text-2xl dark:text-neutral-100"
                delay={BLUR_FADE_DELAY}
                text={`Heya!`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-4 text-7xl font-black tracking-tight text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] md:text-8xl xl:text-9xl dark:from-stone-200 dark:to-neutral-200"
                yOffset={8}
                text={`Hi, I'm Sway.`}
              />
              <BlurFadeText
                className="max-w-lg pb-3 font-light text-gray-700 md:text-lg lg:text-xl 2xl:text-2xl dark:text-gray-300"
                delay={BLUR_FADE_DELAY}
                text={`I'm a Full-Time Content Creator, currently partnered with Twitch and YouTube, streaming and releasing videos throughout the week. I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than I found it.`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Button asChild variant="main">
                  <Link href="/about">Learn more!</Link>
                </Button>
              </BlurFade>
            </article>
            <aside className="flex justify-center md:justify-end xl:px-4">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Image
                  src="/images/aboutpicture.png"
                  alt="A cutout photo of Sway"
                  width={500}
                  height={900}
                  className="h-auto max-w-[75%] md:max-w-full"
                />
              </BlurFade>
            </aside>
          </div>
        </div>
      </section>

      {/* Social Section */}

      <section
        id="social"
        className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950"
      >
        <div className="space-y-4 py-12 md:space-y-6 md:p-14 lg:pb-16 xl:pb-20 xl:pt-[4.5rem] 2xl:space-y-6">
          <BlurFadeText
            className="mx-auto flex items-center text-xs font-semibold uppercase text-white md:text-sm lg:text-base"
            delay={BLUR_FADE_DELAY * 3}
            text={`Lets get social`}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
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
          </BlurFade>
        </div>
      </section>

      {/* Youtube Section */}

      <section id="youtube">
        <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
            <aside className="flex w-full items-center justify-center py-4 sm:px-4 lg:mt-1 lg:items-start lg:px-2 xl:px-4">
              <div className="relative h-fit w-full max-w-xl overflow-hidden">
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <YouTubePlayer />
                </BlurFade>
              </div>
            </aside>
            <article className="flex w-full flex-col gap-3 p-4 sm:px-12 lg:px-2 xl:gap-5 xl:px-4">
              <BlurFadeText
                className="pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
                delay={BLUR_FADE_DELAY * 4}
                text={`Watch and learn`}
              />
              <BlurFadeText
                className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200"
                delay={BLUR_FADE_DELAY * 4}
                text={`Get inspired by my YouTube channel!`}
              />
              <BlurFadeText
                className="max-w-xl pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300"
                delay={BLUR_FADE_DELAY * 4}
                text={`I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than I found it.`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Button asChild variant="main">
                  <a
                    href="https://www.youtube.com/swaybaetv"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Watch Now
                  </a>
                </Button>
              </BlurFade>
            </article>
          </div>
        </div>
      </section>

      {/* Tweets Section */}

      <section id="twitter">
        <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0">
          <div className="grid grid-cols-1 place-items-center gap-8 lg:place-items-start lg:gap-8">
            <article className="flex w-full flex-col gap-1 p-2 sm:px-12 sm:py-4 lg:gap-3 lg:px-4">
              <BlurFadeText
                className="pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
                delay={BLUR_FADE_DELAY * 5}
                text={`Keeping It Social`}
              />
              <BlurFadeText
                className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200"
                delay={BLUR_FADE_DELAY * 5}
                text={`Follow me on my adventures!`}
              />
              <BlurFadeText
                className="max-w-3xl text-pretty pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300"
                delay={BLUR_FADE_DELAY * 5}
                text={`I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than I found it.`}
              />
            </article>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="flex w-full flex-col items-center justify-center gap-4 py-2 lg:flex-row lg:items-start lg:gap-3 lg:px-2 xl:gap-4">
                <TwitterCard id="1845907938369511535" />
                <TwitterCard id="1843019037678440841" />
                <TwitterCard id="1837740206122061936" />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Calendar Section */}

      <section id="calendar">
        <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12 2xl:gap-16">
            <aside className="order-2 flex flex-col py-4 sm:px-12 lg:order-1 lg:px-2 xl:px-4">
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <CalendarList />
              </BlurFade>
            </aside>
            <article className="order-1 flex w-full flex-col gap-3 p-4 sm:px-12 lg:order-2 lg:px-2 lg:pt-8 xl:gap-5 xl:px-4">
              <BlurFadeText
                className="pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
                delay={BLUR_FADE_DELAY * 6}
                text={`Stay up to date`}
              />
              <BlurFadeText
                className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200"
                delay={BLUR_FADE_DELAY * 6}
                text={`Check what is next on the calendar!`}
              />
              <BlurFadeText
                className="max-w-xl pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300"
                delay={BLUR_FADE_DELAY * 6}
                text={`I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than. I create family-friendly entertainment centered around the concepts of positive mental attitude in gaming with the mantra of leaving someone's day better than.`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <Button asChild variant="main">
                  <Link href="/calendar">Calendar Page</Link>
                </Button>
              </BlurFade>
            </article>
          </div>
        </div>
      </section>

      {/* Merch Section */}

      <section id="merch">
        <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-12 2xl:gap-16">
            <article className="order-2 flex w-full flex-col gap-3 p-4 xs:mt-10 sm:px-12 lg:order-1 lg:mt-0 lg:gap-5 lg:px-4">
              <BlurFadeText
                className="pb-1 font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
                delay={BLUR_FADE_DELAY * 7}
                text={`Official Merch Store`}
              />
              <BlurFadeText
                className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-5xl xl:text-6xl dark:from-stone-200 dark:to-neutral-200"
                delay={BLUR_FADE_DELAY * 7}
                text={` Stay fly in your Bae Squad gear!`}
              />
              <BlurFadeText
                className="max-w-xl pb-3 font-light leading-relaxed text-gray-700 lg:text-lg xl:text-xl dark:text-gray-300"
                delay={BLUR_FADE_DELAY * 7}
                text={`From t-shirts and hats, to water bottle and coffee mugs, Sway has you covered! Winter is around the corner, so you better grab your Its Not A Phase Sweater now! Winter is around the corner, so you better grab your Its Not A Phase Sweater now! Grab yours before they are gone!`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <Button asChild variant="main">
                  <a
                    href="https://shop.swaybae.net"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Shop Now!
                  </a>
                </Button>
              </BlurFade>
            </article>
            <aside className="order-1 flex size-full items-center justify-center py-4 lg:order-2 xl:pr-16">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <CardStack />
              </BlurFade>
            </aside>
          </div>
        </div>
      </section>

      {/* Blog Section */}

      <section id="blog">
        <div className="container mx-auto mt-24 max-w-6xl px-4 md:mt-12 xl:px-0">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 xl:gap-12">
            <aside className="relative order-2 flex justify-center md:order-1 md:justify-start xl:px-4">
              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <Image
                  src="/images/blogpicture.png"
                  alt="Another cutout photo of Sway"
                  width={500}
                  height={900}
                  className="h-auto max-w-[75%] md:max-w-full"
                />
              </BlurFade>
            </aside>
            <article className="order-1 flex flex-col gap-3 p-4 xs:gap-4 md:order-2 md:mb-24 md:pt-24 lg:mb-0 lg:gap-5 xl:pt-32">
              <BlurFadeText
                className="mx-auto flex items-center font-semibold uppercase tracking-wide text-gray-700 dark:text-neutral-100"
                delay={BLUR_FADE_DELAY * 8}
                text={`Latest Blog Posts`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 8}>
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
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                  <Button asChild variant="main">
                    <Link href="/blog">Read More!</Link>
                  </Button>
                </BlurFade>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Brands Section */}

      <section
        id="brands"
        className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      >
        <div className="space-y-1 pb-6 pt-12 md:pb-8 md:pt-14 lg:pt-16 xl:pt-[4.5rem]">
          <BlurFadeText
            className="mx-auto flex items-center text-xs font-semibold uppercase text-white md:text-sm lg:text-base"
            delay={BLUR_FADE_DELAY * 9}
            text={`Past Partnerships`}
          />
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="mx-auto flex max-w-[calc(100vw-1.2rem)] overflow-hidden">
              <Marquee pauseOnHover>
                {brandIcons.map((brand) => (
                  <BrandCard key={brand.img} {...brand} />
                ))}
              </Marquee>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact">
        <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-4xl xl:px-0">
          <div className="grid grid-cols-1 place-items-center gap-8 lg:place-items-start lg:gap-8">
            <div className="flex w-full flex-col gap-1 p-2 sm:px-12 lg:gap-3 lg:p-2 xl:pb-0">
              <BlurFadeText
                className="pb-2 text-lg font-semibold uppercase tracking-wide text-gray-700 lg:text-xl 2xl:text-2xl dark:text-neutral-100"
                delay={BLUR_FADE_DELAY * 10}
                text={`Questions?`}
              />
              <BlurFadeText
                className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-6xl dark:from-stone-200 dark:to-neutral-200"
                delay={BLUR_FADE_DELAY * 10}
                text={`Go ahead and reach out!`}
              />
              <BlurFadeText
                className="max-w-3xl font-light leading-relaxed text-gray-700 md:text-lg lg:text-xl dark:text-gray-300"
                delay={BLUR_FADE_DELAY * 10}
                text={`If you would prefer to direct email me, go right ahead. My email is sway.bae9000@gmail.com. I will get back with you in as soon as possible.`}
              />
            </div>
            <div className="flex w-full p-2 sm:px-10 xl:px-2 xl:pt-0">
              <BlurFade delay={BLUR_FADE_DELAY * 10} className="w-full">
                <ContactForm />
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}

      <section id="photos">
        <div className="mx-auto my-8 flex justify-center px-4">
          <div className="grid grid-cols-1">
            <div className="columns-2 gap-4 md:columns-3 md:gap-6">
              {imageGrid.map((imageUrl, idx) => {
                const width = 800;
                const height = 600;
                return (
                  <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                    <Image
                      className="mb-4 rounded-lg border object-contain shadow-lg md:mb-6"
                      src={imageUrl}
                      alt={`Public photo ${idx + 1}`}
                      width={width}
                      height={height}
                    />
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Text Scroll Section */}

      <section id="chaos">
        <ChaosScrollText />
      </section>
    </div>
  );
}
