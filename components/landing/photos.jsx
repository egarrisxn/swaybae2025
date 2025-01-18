import Image from "next/image";
import { BlurItem } from "@/components/motion/blur-fade";

const imageGrid = [
  "/grid/1.jpg",
  "/grid/2.jpg",
  "/grid/3.jpg",
  "/grid/4.jpg",
  "/grid/5.jpg",
  "/grid/6.jpg",
  "/grid/7.jpg",
  "/grid/8.jpg",
  "/grid/9.jpg",
];

export default function Photos() {
  return (
    <div className="mx-auto my-8 flex justify-center px-4">
      <div className="grid grid-cols-1">
        <div className="columns-2 gap-4 md:columns-3 md:gap-6">
          {imageGrid.map((imageUrl, idx) => {
            const width = 800;
            const height = 600;
            return (
              <BlurItem key={imageUrl} delay={0.25 + idx * 0.05}>
                <Image
                  className="mb-4 rounded-lg border object-contain shadow-lg md:mb-6"
                  src={imageUrl}
                  alt={`Public photo ${idx + 1}`}
                  width={width}
                  height={height}
                />
              </BlurItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
