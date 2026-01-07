"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/utils/smoothScroll"
;
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] border-b-4 border-black overflow-hidden">
      
      {/* RESPONSIVE BACKGROUND IMAGE */}
      <Image
  src="/bg/hero-image.png"
  alt="Hero background"
  fill
  priority
  className="
    object-contain
    sm:object-cover
    object-top
  "
/>



      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CENTER CONTENT */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-2 py-1 animate-[float_3s_ease-in-out_infinite]">
        <div className="flex items-center gap-10 bg-black/40 p-8 border-4 border-black shadow-[6px_6px_0_#000]">

          <div className="max-w-lg text-left">
            <h1 className="mb-4 text-2xl leading-snug animate-[typing_2s_steps(30,end)] overflow-hidden whitespace-nowrap border-r-2 border-white">
              Entering Rohaz&apos;s World
            </h1>
          </div>

        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-[float_3s_ease-in-out_infinite]">

  {/* Buttons */}
  <div className="flex gap-6">
    <Button
      onClick={() => smoothScroll("projects")}
      className="border-4 border-black bg-green-700 hover:bg-green-800 shadow-[3px_3px_0_#000] px-6"
    >
      View Projects
    </Button>

    <Button
      variant="secondary"
      className="border-4 border-black shadow-[3px_3px_0_#000] px-6"
    >
      <Link href= "/docs/Rohaz_Bhalla_Software_Engineer.pdf" >My Resume</Link>
    </Button>
  </div>


</div>

      {/* Typing animation */}
      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
