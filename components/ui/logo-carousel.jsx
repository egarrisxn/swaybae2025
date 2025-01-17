"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Data
const brandSvgs = [
  { src: "/brands/svgs/youtube-svg.svg", id: 1, name: "YouTube" },
  { src: "/brands/svgs/gcx-svg.svg", id: 2, name: "GCX" },
  { src: "/brands/svgs/hellofresh-svg.svg", id: 3, name: "Hello Fresh" },
  { src: "/brands/svgs/twitch-svg.svg", id: 4, name: "Twitch" },
  { src: "/brands/svgs/1000dreams-svg.svg", id: 5, name: "1000 Dreams Fund" },
  {
    src: "/brands/svgs/supergirl-svg.svg",
    id: 6,
    name: "Super Girl Gamer Pro",
  },
  { src: "/brands/svgs/blizzard-svg.svg", id: 7, name: "Blizzard" },
  { src: "/brands/svgs/dreamhack-svg.svg", id: 8, name: "Dreamhack" },
];

// Utility function to randomly shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Distributes logos across multiple columns ensuring a balanced number
const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos);
  const columns = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

// Memoized LogoColumn component
const LogoColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 3000; // Time each logo is displayed (ms)
  const columnDelay = index * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);

  const CurrentLogo = useMemo(
    () => logos[currentIndex].img,
    [logos, currentIndex]
  );

  return (
    <motion.div
      className="relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20 md:h-40 md:w-40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,

            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          <CurrentLogo className="h-12 max-h-[80%] w-12 max-w-[80%] object-contain sm:h-16 sm:w-16 md:h-32 md:w-32" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

LogoColumn.displayName = "LogoColumn";

// Main LogoCarousel component
function LogoCarousel({ columnCount = 2 }) {
  const [logoSets, setLogoSets] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const allLogos = useMemo(
    () =>
      brandSvgs.map((brand) => ({
        ...brand,
        img: () => (
          <Image width={400} height={400} src={brand.src} alt={brand.name} />
        ),
      })),
    []
  );

  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount);
    setLogoSets(distributedLogos);
  }, [allLogos, columnCount]);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  return (
    <div className="flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}

export { LogoCarousel };
