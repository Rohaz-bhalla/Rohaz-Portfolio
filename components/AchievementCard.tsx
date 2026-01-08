import Image from "next/image"
import { Achievement } from "@/data/achievements"

type Props = {
  data: Achievement
}

export function AchievementCard({ data }: Props) {
  return (
    <div
      className="
        group
        flex flex-col sm:flex-row
        gap-4 sm:gap-6
        border-4 border-black
        bg-card
        p-4 sm:p-6
        shadow-[6px_6px_0_#000]
        transition-transform
        hover:-translate-y-0.5
        hover:shadow-[8px_8px_0_#000]
        active:translate-y-0
        active:shadow-[4px_4px_0_#000]
      "
    >
      {/* ICON BLOCK */}
      <div
        className="
          self-start
          shrink-0
          border-4 border-black
          bg-muted
          p-2
          shadow-[3px_3px_0_#000]
          transition-transform
          group-hover:-translate-y-0.5
          group-hover:shadow-[5px_5px_0_#000]
          active:translate-y-0
          active:shadow-[2px_2px_0_#000]
        "
      >
        <Image
          src={data.icon}
          alt={data.title}
          width={160}
          height={160}
          className="pixelated border-2 border-black bg-black"
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0">
        {/* min-w-0 is IMPORTANT for text wrapping */}

        <p className="text-xs text-muted-foreground">
          {data.year}
        </p>

        <h3 className="mt-1 text-base font-semibold wrap-break-word">
          {data.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground break-word">
          {data.description}
        </p>
      </div>
    </div>
  )
}
