"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="relative min-h-[65vh] overflow-hidden border-b-4 border-black"
      style={{
        backgroundImage: "url('/bg/hero-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-32">
        
        {/* LEFT — TEXT */}
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl leading-snug animate-pulse">
            Entering Rohaz&apos;s World
          </h1>

          <p className="mb-8 text-sm text-muted-foreground">
            Full-Stack Developer building modern web applications —  
            block by block.
          </p>

          <div className="flex gap-4">
            <Button className="border-4 border-black shadow-[3px_3px_0_#000]">
              View Projects
            </Button>

            <Button
              variant="secondary"
              className="border-4 border-black shadow-[3px_3px_0_#000]"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* RIGHT — PROFILE IMAGE */}
        <div className="relative hidden md:flex justify-end">
          <div className="border-4 border-black bg-card p-3 shadow-[6px_6px_0_#000]">
            <Image
              src="/profile/rohaz.jpg"
              alt="Rohaz Bhalla"
              width={320}
              height={320}
              priority
              className="pixelated"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
