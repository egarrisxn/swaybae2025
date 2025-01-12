"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  characterDelay = 0.03,
  animateByCharacter = false,
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  //! Used For animatedByCharacter
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex">
      <AnimatePresence>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          variants={combinedVariants}
          transition={{
            delay: 0.04 + delay,
            duration,
            ease: "easeOut",
          }}
          className={cn("inline-block", className)}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export { BlurFadeText };

// "use client";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "motion/react";
// import { useMemo } from "react";

// const BlurFadeText = ({
//   text,
//   className,
//   variant,
//   characterDelay = 0.03,
//   delay = 0,
//   yOffset = 8,
//   animateByCharacter = false,
// }) => {
//   const defaultVariants = {
//     hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
//     visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
//   };
//   const combinedVariants = variant || defaultVariants;
//   const characters = useMemo(() => Array.from(text), [text]);

//   if (animateByCharacter) {
//     return (
//       <div className="flex">
//         <AnimatePresence>
//           {characters.map((char, i) => (
//             <motion.span
//               key={i}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={combinedVariants}
//               transition={{
//                 yoyo: Infinity,
//                 delay: delay + i * characterDelay,
//                 ease: "easeOut",
//               }}
//               className={cn("inline-block", className)}
//               style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </AnimatePresence>
//       </div>
//     );
//   }
//   return (
//     <div className="flex">
//       <AnimatePresence>
//         <motion.span
//           initial="hidden"
//           animate="visible"
//           exit="hidden"
//           variants={combinedVariants}
//           transition={{
//             yoyo: Infinity,
//             delay,
//             ease: "easeOut",
//           }}
//           className={cn("inline-block", className)}
//         >
//           {text}
//         </motion.span>
//       </AnimatePresence>
//     </div>
//   );
// };

// export { BlurFadeText };
