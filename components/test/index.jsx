import Image from "next/image";
import { TimelineDemo } from "./timeline";
import { LinkPreviewParagraph } from "./link-preview";
import { TextHighlight } from "./text-highlight";
import { BgGradient } from "./bg-gradient";
import { AnimatedGradientText } from "./animated-gradient-text";
import { DragItems } from "./drag-items";
import { AnimatedFaq } from "./animated-faq";
import { AnimatedTabs } from "./animated-tabs";
import ScrollExample from "../motion/scroll-example";
import TimelineExample from "../motion/timeline-example";
import LayoutExample from "../motion/layout-example";
import SharedLayoutExample from "../motion/shared-layout-example";
import ExitExample from "../motion/exit-example";
import PathDrawingExample from "../motion/path-drawing-example";
import KeyframeExample from "../motion/keyframe-example";
import GestureExample from "../motion/gesture-example";
import HTMLContentExample from "../motion/html-content-example";
import ScrollTrackingExample from "../motion/scroll-tracking-example";

export default function Test() {
  return (
    <>
      <ScrollTrackingExample />
      <div className="mx-auto w-full space-y-12 overflow-x-clip px-4 py-16 xl:px-0">
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <TextHighlight />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto py-16">
            <TimelineDemo />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto py-16">
            <LinkPreviewParagraph />
          </div>
        </div>

        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <BgGradient />
          </div>
        </div>
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

        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <HTMLContentExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <GestureExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <KeyframeExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <PathDrawingExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <ExitExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <SharedLayoutExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <LayoutExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto flex items-center justify-center py-16">
            <TimelineExample />
          </div>
        </div>
        <div className="mt-8 min-h-[50rem] w-full border-2">
          <div className="mx-auto py-16">
            <ScrollExample />
          </div>
        </div>
      </div>
    </>
  );
}
