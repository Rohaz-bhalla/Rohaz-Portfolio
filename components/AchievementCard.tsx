import Image from "next/image"
import { Achievement } from "@/data/achievements"

type Props = {
  data: Achievement
}

export function AchievementCard({ data }: Props) {
  return (
    <div className="flex gap-6 border-4 border-black bg-card p-6 shadow-[6px_6px_0_#000] hover:-translate-y-1 transition">
      
      {/* ICON BLOCK */}
      <div className="shrink-0 border-4 border-black bg-muted p-2 shadow-[3px_3px_0_#000]">
        <Image
          src={data.icon}
          alt={data.title}
          width={200}
          height={100}
          className="pixelated"
        />
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-xs text-muted-foreground">{data.year}</p>
        <h3 className="mt-1 text-base font-semibold">
          {data.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  )
}
