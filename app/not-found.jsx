import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bounce } from "@/components/motion/simple-motion";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFoundPage() {
  return (
    <section className="overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48 xl:pb-36 xl:pt-52">
      <Bounce className="mx-auto max-w-[518px] text-center" delay={0.3}>
        <Image
          src="/images/404-600x350.svg"
          alt="404"
          className="mx-auto"
          width={600}
          height={350}
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
      </Bounce>
    </section>
  );
}
