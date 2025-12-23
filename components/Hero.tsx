"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative min-h-[83vh] border-b-4 border-black overflow-hidden"
      style={{
        backgroundImage: "url('/bg/hero-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      {/* Dark overlay (light, not blocking bg) */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-2 py-1 animate-[float_3s_ease-in-out_infinite]">
        {/* CONTENT WRAPPER (RIGHT SIDE) */}
        <div className="flex items-center gap-10 bg-black/40 p-8 border-4 border-black shadow-[6px_6px_0_#000]">
          {/* PROFILE IMAGE (LEFT, SMALL) */}

          {/* TEXT CONTENT (RIGHT) */}
          <div className="max-w-lg text-left animate-[float_3s_ease-in-out_infinite]">
            <h1 className="mb-4 text-3xl leading-snug animate-[typing_2s_steps(30,end)] overflow-hidden whitespace-nowrap border-r-2 border-white">
              Entering Rohaz&apos;s World
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Center CTA */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 animate-[float_3s_ease-in-out_infinite]">
        <Button className="border-4 border-black bg-green-700 hover:bg-green-800 shadow-[3px_3px_0_#000] px-6">
          View Projects
        </Button>

        <Button
          variant="secondary"
          className="border-4 border-black shadow-[3px_3px_0_#000] px-6"
        >
          Contact Me
        </Button>
      </div>

      {/* Typing animation */}
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
