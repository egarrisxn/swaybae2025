import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export function TextHighlight() {
  return (
    <h1 className="flex flex-wrap text-2xl">
      Semper, tempus ipsum a, vulputate justo. Aliquam at odio erat a{" "}
      <Highlight className="text-black dark:text-white">
        hac habitasse platea dictumst
      </Highlight>
      .
    </h1>
  );
}
