import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

export function BlurItem({
  className,
  children,
  variant,
  duration = 0.4,
  delay = 0.4,
}) {
  const defaultVariants = {
    hidden: { y: 6, opacity: 0, filter: `blur(6px)` },
    visible: { y: -6, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={combinedVariants}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlurText({
  className,
  children,
  variant,
  duration = 0.4,
  delay = 0,
}) {
  const defaultVariants = {
    hidden: { y: 8, opacity: 0, filter: `blur(6px)` },
    visible: { y: -8, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      variants={combinedVariants}
      viewport={{ once: true }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}
