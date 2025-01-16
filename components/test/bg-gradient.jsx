import Image from "next/image";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("group relative p-[4px]", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export function BgGradient() {
  return (
    <div>
      <BackgroundGradient className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900">
        <Image
          src={`/images/twitchcon.png`}
          alt="twitchcon"
          height={400}
          width={400}
          className="object-contain"
        />
        <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
          Lorem ipsum dolor
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Semper, tempus ipsum a, vulputate justo. Aliquam at odio erat. In hac
          habitasse platea dictumst. Pellentesque dictum tellus purus, quis
          scelerisque augue ultrices vitae. Curabitur semper ante id ligula
          commodo varius. Nullam diam massa, porttitor in velit nec, mollis
          convallis mi.
        </p>
        <button className="mt-4 flex items-center space-x-1 rounded-full bg-black py-1 pl-4 pr-1 text-xs font-bold text-white dark:bg-zinc-800">
          <span>Test </span>
          <span className="rounded-full bg-zinc-700 px-2 py-0 text-[0.6rem] text-white">
            $1000
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
