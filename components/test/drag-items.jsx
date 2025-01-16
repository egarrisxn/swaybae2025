import Image from "next/image";
import * as motion from "motion/react-client";

export function DragItems() {
  return (
    <div className="relative inline-flex">
      <h1 className="tracking-tightner inline-flex text-center text-7xl font-bold sm:text-9xl">
        Creator
        <br /> of Chaos
      </h1>
      <motion.div
        className="absolute right-[478px] top-[108px] hidden sm:inline"
        drag
        dragSnapToOrigin
      >
        <Image
          src="/test/cursor.png"
          alt="cursor"
          height={200}
          width={200}
          className="max-w-none"
          draggable="false"
        />
      </motion.div>
      <motion.div
        className="absolute left-[498px] top-[56px] hidden sm:inline"
        drag
        dragSnapToOrigin
      >
        <Image
          src="/test/message.png"
          alt="message"
          height={200}
          width={200}
          className="max-w-none"
          draggable="false"
        />
      </motion.div>
    </div>
  );
}
