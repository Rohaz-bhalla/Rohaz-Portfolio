import { skills } from "@/data/skills"
import { SkillTile } from "./SkillTile"

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="float mb-10 text-center text-2xl tracking-widest">
        🧰 Skills Inventory
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillTile
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  )
}
