import { FadeInChild, FadeInText } from "@/components/motion/advanced-motion";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="container mx-auto my-24 max-w-2xl px-4 lg:max-w-4xl xl:px-0">
      <div className="grid grid-cols-1 place-items-center gap-8 lg:place-items-start lg:gap-8">
        <div className="flex w-full flex-col gap-1 p-2 sm:px-12 lg:gap-3 lg:p-2 xl:pb-0">
          <FadeInText
            className="pb-2 text-lg font-semibold uppercase tracking-wide text-gray-700 lg:text-xl 2xl:text-2xl dark:text-neutral-100"
            delay={0.04}
            inView
          >
            <span>Questions?</span>
          </FadeInText>
          <FadeInText
            className="bg-gradient-to-t from-neutral-600 via-neutral-700 to-neutral-800 bg-clip-text pb-3 font-serif text-4xl font-bold text-transparent drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)] lg:text-6xl dark:from-stone-200 dark:to-neutral-200"
            delay={0.04}
            inView
          >
            <h2>Go ahead and reach out!</h2>
          </FadeInText>
          <FadeInText
            className="max-w-3xl font-light leading-relaxed text-gray-700 md:text-lg lg:text-xl dark:text-gray-300"
            delay={0.04}
            inView
          >
            <p>
              If you would prefer to direct email me, go right ahead. My email
              is sway.bae9000@gmail.com. I will get back with you in as soon as
              possible.
            </p>
          </FadeInText>
        </div>
        <div className="flex w-full p-2 sm:px-10 xl:px-2 xl:pt-0">
          <FadeInChild className="w-full" delay={0.04} inView>
            <ContactForm />
          </FadeInChild>
        </div>
      </div>
    </div>
  );
}
