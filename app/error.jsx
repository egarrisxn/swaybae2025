"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48 xl:pb-36 xl:pt-52">
      <div className="mx-auto max-w-[518px] text-center">
        <Image
          src="/images/OOPS-600x250.svg"
          alt="404"
          className="mx-auto"
          width={600}
          height={250}
        />
        <h2 className="mb-5 text-2xl font-semibold text-black md:text-4xl dark:text-white">
          There seems to be a problem.
        </h2>
        <p className="mb-8">
          If there are concerns about the error, please contact me directly at
          sway.bae9000@gmail.com.
        </p>
        <Button
          variant="shimmer"
          size="lg"
          className="text-lg"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </section>
  );
}
