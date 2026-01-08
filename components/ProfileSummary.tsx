import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProfileSummary() {
  return (
    <section id="summary" className="mx-auto max-w-6xl px-6 py-24">
      
      {/* TOP CARD */}
      <div
        className="
          group
          flex flex-col md:flex-row items-center gap-12
          border-4 border-black
          bg-card
          p-8
          shadow-[6px_6px_0_#000] transition-shadow
          hover:-translate-y-0.5
          hover:shadow-[8px_8px_0_#000]
          active:translate-y-0
          active:shadow-[4px_4px_0_#000]
        "
      >
        {/* LEFT – IMAGE (Item Pickup) */}
        <div
          className="
            shrink-0
            border-4 border-black
            bg-muted
            p-2
            shadow-[4px_4px_0_#000] transition-shadow transition-filter
            group-hover:-translate-y-1
            group-hover:brightness-110
            group-hover:shadow-[6px_6px_0_#000]
            active:translate-y-0
            active:shadow-[2px_2px_0_#000]
          "
        >
          <Image
            src="/profile/rohaz.jpg"
            alt="Rohaz Bhalla"
            width={200}
            height={200}
            priority
            className="pixelated border-2 border-black bg-black"
          />
        </div>

        {/* RIGHT – SUMMARY */}
        <div>
          <h2
            className="
              mb-4 text-2xl tracking-widest
              transition
              group-hover:text-green-600
            "
          >
            Player Stats 
          </h2>

          <p id="contact"  className="text-sm leading-relaxed text-muted-foreground">
            Full-Stack Developer with strong experience in building scalable,
            production-ready web applications using Next.js, Node.js, Express,
            and MySQL. Experienced in leading teams, participating in hackathons,
            and contributing to open-source projects. Focused on clean
            architecture, performance, and real-world problem solving.
          </p>
        </div>
      </div>

      {/* DETAILS CARD */}
      <div
        
        className="
          mt-10
          border-4 border-black
          bg-card
          p-6
          shadow-[4px_4px_0_#000] transition-shadow
          hover:-translate-y-0.5
          hover:shadow-[6px_6px_0_#000]
          active:translate-y-0
          active:shadow-[2px_2px_0_#000]
        "
      >
        <div className="flex flex-col gap-4 text-sm">
          <h1>Contact Info -:</h1>

          <p className="transition hover:translate-x-1">
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+916283583232" className="underline">
              +91 62835 83232
            </a>
          </p>

          <p className="transition hover:translate-x-1">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:rohazbhalla3@gmail.com"
              className="underline"
            >
              rohazbhalla3@gmail.com
            </a>
          </p>

          <p className="transition hover:translate-x-1">
            <span className="font-semibold">Linkedin:</span>{" "}
            <a
              href="https://www.linkedin.com/in/rohaz-bhalla/"
              className="underline"
              target="blank"
            >
              Rohaz-Bhalla
            </a>
          </p>

          <p className="transition hover:translate-x-1">
            <span className="font-semibold">Github:</span>{" "}
            <a
              href="https://github.com/Rohaz-bhalla"
              className="underline"
              target="blank"
            >
              @Rohaz-bhalla
            </a>
          </p>

          <p className="transition hover:translate-x-1">
            <span className="font-semibold">X:</span>{" "}
            <a
              href="https://x.com/RohazBhalla"
              className="underline"
              target="blank"
            >
            @RohazBhalla
            </a>
          </p>

          {/* Resume Button = Hotbar Slot */}
          <Button
            asChild
            className="
              w-fit
              border-4 border-black
              shadow-[3px_3px_0_#000] transition-shadow
              hover:-translate-y-0.5
              hover:shadow-[5px_5px_0_#000]
              active:translate-y-0
              active:shadow-[2px_2px_0_#000]
            "
          >
            <a href="/docs/Rohaz_Bhalla_Software_Engineer.pdf" download>
              Download Resume
            </a>
          </Button>

        </div>
      </div>
    </section>
  )
}
