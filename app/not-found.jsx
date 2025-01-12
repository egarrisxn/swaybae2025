import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFoundPage() {
  return (
    <section className="overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48 xl:pb-36 xl:pt-52">
      <div className="mx-auto max-w-[518px] text-center">
        <Image
          src="/images/404.svg"
          alt="404"
          className="mb-7.5 mx-auto"
          width={400}
          height={400}
        />
        <h2 className="mb-5 text-2xl font-semibold text-black md:text-4xl dark:text-white">
          This Page Does Not Exist
        </h2>
        <p className="mb-8">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Button variant="shimmer" size="lg" className="text-lg" asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </section>
  );
}

// export default function NotFound() {
//   return (
//     <div className="mx-auto grid grid-cols-1 place-items-center pt-36">
//       <h2 className="inline-block bg-gradient-to-t from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-[11rem] leading-none tracking-tighter text-transparent drop-shadow-2xl sm:text-[16rem] md:text-[20rem] lg:text-[22rem] 2xl:text-[30rem]">
//         404
//       </h2>
//       <p className="mb-4 text-wrap text-center text-base font-medium leading-none tracking-normal text-gray-700 drop-shadow-xl sm:mb-8 sm:text-xl md:mb-10 md:text-3xl lg:mb-12 lg:text-4xl 2xl:mb-14 2xl:text-5xl dark:text-gray-200">
//         The page seems to be missing.
//       </p>
//       <Button variant="shimmer" className="text-lg" asChild>
//         <Link href="/">Back Home</Link>
//       </Button>
//     </div>
//   );
// }
