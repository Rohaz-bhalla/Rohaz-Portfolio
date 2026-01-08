"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { smoothScroll } from "@/utils/smoothScroll";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] border-b-4 border-black overflow-hidden">
      
      {/* Background */}
      <Image
        src="/bg/hero-image.png"
        alt="Hero background"
        fill
        priority
        className="object-contain sm:object-cover object-top"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CENTER CONTENT */}
      <div className=" float relative mx-auto flex max-w-7xl items-center justify-center px-4 py-6">
        <div
          className="
            bg-white/10
            p-6 sm:p-8
            border-4 border-black
            shadow-[6px_6px_0_#000]
          "
        >
          <div className="max-w-lg text-center sm:text-left">
            <h1 className="mb-4 text-xl sm:text-2xl leading-snug text-white">
              Entering Rohaz&apos;s World
            </h1>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="float absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button
            onClick={() => smoothScroll("projects")}
            className="w-full sm:w-auto border-4 border-black bg-green-700 hover:bg-green-800 shadow-[3px_3px_0_#000] px-6"
          >
            View Projects
          </Button>

          <Button
            variant="secondary"
            className="w-full sm:w-auto border-4 border-black shadow-[3px_3px_0_#000] px-6"
          >
            <Link href="/docs/Rohaz_Bhalla_Software_Engineer.pdf">
              My Resume
            </Link>
          </Button>

        </div>
      </div>
    </section>
  );
}
