import Image from "next/image"
import { Testimonial } from "@/data/testimonials"

type Props = {
  data: Testimonial
}

export function TestimonialCard({ data }: Props) {
  return (
    <div
      className="
        group
        relative
        border-4 border-black
        bg-card
        p-5
        shadow-[6px_6px_0_#000]
        transition-transform 
        hover:-translate-y-0.5
        hover:shadow-[8px_8px_0_#000]
        active:translate-y-0
        active:shadow-[4px_4px_0_#000]
      "
    >
      {/* Glass overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/5" />
      <div className="pointer-events-none absolute left-1 top-1 h-6 w-6 bg-white/20" />

      {/* Header */}
      <div className="relative mb-4 flex items-center gap-3">
        {/* Avatar = Item Frame */}
        <div
          className="
            border-2 border-black
            bg-muted
            p-1
            shadow-[3px_3px_0_#000]
            transition-transform transition-filter
            group-hover:-translate-y-0.5
            group-hover:brightness-110
            group-hover:shadow-[5px_5px_0_#000]
            active:translate-y-0
            active:shadow-[2px_2px_0_#000]
          "
        >
          <Image
            src={data.avatar}
            alt={data.name}
            width={95}
            height={95}
            className="pixelated border-2 border-black bg-black"
          />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold break-word">
            {data.name}
          </p>
          <p className="text-xs text-muted-foreground break-word">
            {data.role}
          </p>
        </div>
      </div>

      {/* Message */}
      <p
        className="
          relative
          text-sm
          leading-relaxed
          transition
          group-hover:brightness-105
        "
      >
        “{data.message}”
      </p>
    </div>
  )
}
