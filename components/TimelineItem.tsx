import Image from "next/image"
import { TimelineItem as ItemType } from "@/data/timeline"
import { XPBar } from "./XpBar"

type Props = {
  item: ItemType
}

export function TimelineItem({ item }: Props) {
  return (
    <div className="relative flex gap-8 pb-16">
      
      {/* Vertical Line */}
      <div className="absolute left-27.5 top-0 h-full w-1 bg-black" />

      {/* LEFT – Image */}
      <div className="relative z-10 w-55 shrink-0">
        <div className="border-4 border-black bg-card p-2 shadow-[4px_4px_0_#000]">
          <Image
            src={item.image}
            alt={item.title}
            width={180}
            height={180}
            className="pixelated"
          />
        </div>
      </div>

      {/* RIGHT – Content */}
      <div className="flex-1 border-4 border-black bg-card p-4 shadow-[4px_4px_0_#000]">
        <p className="text-xs text-muted-foreground">{item.year}</p>
        <h3 className="mt-1 text-lg">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* XP */}
        <XPBar value={item.xp} />
        <p className="mt-1 text-xs text-muted-foreground">
          XP Progress: {item.xp}%
        </p>
      </div>
    </div>
  )
}
