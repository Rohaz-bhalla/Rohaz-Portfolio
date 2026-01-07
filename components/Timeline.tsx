import { timelineData } from "@/data/timeline"
import { TimelineItem } from "./TimelineItem"

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-16 text-3xl text-center">
        📜 Journey Timeline
      </h2>

      <div>
        {timelineData.map((item) => (
          <TimelineItem key={item.year} item={item} />
        ))}
      </div>
    </section>
  )
}
