import Image from "next/image"
import { TimelineItem as ItemType } from "@/data/timeline"
import { XPBar } from "./XpBar"

type Props = {
  item: ItemType
}

export function TimelineItem({ item }: Props) {
  return (
    <div className="group relative flex gap-6 sm:gap-10 pb-20">
      
      {/* Vertical Rail (reacts on hover) */}
      <div className="
        absolute left-23 top-0 h-full w-2
        bg-black
        shadow-[2px_2px_0_#000]
        transition-colors
        group-hover:bg-neutral-800
      " />

      {/* LEFT – Image (Item Pickup Effect) */}
      <div className="relative z-10 w-45 shrink-0">
        <div
          className="
            relative
            border-4 border-black
            bg-white/20
            p-2
            shadow-[4px_4px_0_#000] transition-shadow transition-filter
            group-hover:-translate-y-1
            group-hover:shadow-[6px_6px_0_#000]
            group-hover:brightness-110
            active:translate-y-0
            active:shadow-[2px_2px_0_#000]
          "
        >
          {/* Glass overlay */}
          <div className="pointer-events-none absolute inset-0 bg-white/10" />

          {/* Glass reflection */}
          <div className="pointer-events-none absolute left-1 top-1 h-6 w-6 bg-white/30" />

          <Image
            src={item.image}
            alt={item.title}
            width={160}
            height={160}
            className="pixelated border-2 border-black bg-black"
          />
        </div>
      </div>

      {/* RIGHT – Content Card */}
      <div
        className="
          flex-1
          border-4 border-black
          bg-card
          p-4
          shadow-[4px_4px_0_#000] transition-shadow
          group-hover:-translate-y-0.5
          group-hover:shadow-[6px_6px_0_#000]
          active:translate-y-0
          active:shadow-[2px_2px_0_#000]
        "
      >
        <p className="text-xs text-muted-foreground tracking-wider">
          {item.year}
        </p>

        <h3 className="mt-1 text-lg font-bold">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* XP */}
        <div className="
          mt-4
          transition
          group-hover:brightness-110
        ">
          <XPBar value={item.xp} />
          <p className="mt-1 text-xs text-muted-foreground">
            XP: {item.xp}%
          </p>
        </div>
      </div>
    </div>
  )
}
