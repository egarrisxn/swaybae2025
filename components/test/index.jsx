import Image from "next/image";
import { AnimatedGradientText } from "./animated-gradient-text";
import { DragItems } from "./drag-items";
import { AnimatedFaq } from "./animated-faq";
import { AnimatedTabs } from "./animated-tabs";
import { Lines } from "./lines";

export default function Test() {
  return (
    <>
      <Lines />
      <div className="mx-auto w-full space-y-12 overflow-x-clip px-4 py-16 xl:px-0">
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto py-16">
            <AnimatedGradientText />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <DragItems />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto py-16">
            <AnimatedFaq />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto max-w-4xl py-16">
            <Image
              src="/test/globe.svg"
              alt="globe"
              width={1000}
              height={800}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto max-w-4xl py-16">
            <AnimatedTabs />
          </div>
        </div>
      </div>
    </>
  );
}
