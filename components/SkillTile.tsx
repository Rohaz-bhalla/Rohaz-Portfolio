type Props = {
  name: string
  level: string
}

const levelColor = {
  Core: "bg-green-700",
  Advanced: "bg-blue-700",
  Familiar: "bg-gray-600",
}

export function SkillTile({ name, level }: Props) {
  return (
    <div className="group relative border-4 border-black bg-card p-4 shadow-[4px_4px_0_#000] hover:-translate-y-1 transition">
      <p className="text-sm text-center">{name}</p>

      {/* Hover label */}
      <span
        className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] border-2 border-black text-white opacity-0 group-hover:opacity-100 transition ${levelColor[level as keyof typeof levelColor]}`}
      >
        {level}
      </span>
    </div>
  )
}
