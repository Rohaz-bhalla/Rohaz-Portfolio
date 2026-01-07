import Image from "next/image"
import { Testimonial } from "@/data/testimonials"

type Props = {
  data: Testimonial
}

export function TestimonialCard({ data }: Props) {
  return (
    <div className="border-4 border-black bg-card p-5 shadow-[6px_6px_0_#000]">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="border-2 border-black bg-muted p-1">
          <Image
            src={data.avatar}
            alt={data.name}
            width={95}
            height={95}
            className="pixelated"
          />
        </div>

        <div>
          <p className="text-sm font-semibold">{data.name}</p>
          <p className="text-xs text-muted-foreground">{data.role}</p>
        </div>
      </div>

      {/* Message */}
      <p className="text-sm leading-relaxed">
        “{data.message}”
      </p>
    </div>
  )
}
