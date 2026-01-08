import { timelineData } from "@/data/timeline"
import { TimelineItem } from "./TimelineItem"

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mx-auto max-w-6xl px-4 sm:px-6 py-24"
    >
      <h2 className="float mb-20 text-3xl text-center font-bold">
        📜 Journey Timeline
      </h2>

      <div className="space-y-4">
        {timelineData.map((item) => (
          <TimelineItem key={item.year} item={item} />
        ))}
      </div>
    </section>
  )
}
