import Image from "next/image"
import { Project } from "@/data/projects"
import { Button } from "@/components/ui/button"

type Props = {
  project: Project
}

export function ProjectBlock({ project }: Props) {
  return (
    <div
      className="
        group
        border-4 border-black
        bg-card
        p-3
        shadow-[6px_6px_0_#000]
        transition-transform
        hover:-translate-y-1
        hover:shadow-[10px_10px_0_#000]
        active:translate-y-0
        active:shadow-[4px_4px_0_#000]
      "
    >
      {/* Project Image – Showcase Glass */}
      <div
        className="
          relative
          mb-3
          border-2 border-black
          bg-white/10
          shadow-[3px_3px_0_#000]
        "
      >
        {/* Glass shine */}
        <div className="pointer-events-none absolute inset-0 bg-white/5" />
        <div className="pointer-events-none absolute left-1 top-1 h-6 w-6 bg-white/20" />

        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="pixelated border-2 border-black bg-black"
        />
      </div>

      {/* Title */}
      <h3 className="mb-1 text-sm font-bold">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-xs text-muted-foreground">
        {project.description}
      </p>

      {/* Tech Stack – Item Tags */}
      <div className="mb-3 flex flex-wrap gap-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="
              border border-black
              bg-muted
              px-1
              text-[10px]
              shadow-[1px_1px_0_#000]
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2">
        {project.github && (
          <Button
            asChild
            size="sm"
            variant="default"
            className="
              border-2 border-black
              shadow-[2px_2px_0_#000]
              text-xs transition-shadow
              hover:-translate-y-0.5
              hover:shadow-[3px_3px_0_#000]
              active:translate-y-0
              active:shadow-none
            "
          >
            <a href={project.github} target="_blank">
              GitHub
            </a>
          </Button>
        )}

        {project.link && (
          <Button
            asChild
            size="sm"
            className="
              border-2 border-black
              bg-green-600 hover:bg-green-700
              shadow-[2px_2px_0_#000]
              text-xs
              transition-transform
              hover:-translate-y-0.5
              hover:shadow-[3px_3px_0_#000]
              active:translate-y-0
              active:shadow-none
            "
          >
            <a href={project.link} target="_blank">
              ▶ Live
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
