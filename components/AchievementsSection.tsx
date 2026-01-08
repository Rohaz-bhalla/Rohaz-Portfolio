import { achievements } from "@/data/achievements"
import { AchievementCard } from "./AchievementCard"

export default function AchievementsSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className=" float mb-12 text-center text-2xl tracking-widest">
        🏆 Achievements
      </h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {achievements.map((item) => (
          <AchievementCard key={item.title} data={item} />
        ))}
      </div>
    </section>
  )
}
