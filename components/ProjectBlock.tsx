import Image from "next/image"
import { Project } from "@/data/projects"

type Props = {
  project: Project
}

export function ProjectBlock({ project }: Props) {
  return (
    <div className="group border-4 border-black bg-card p-3 shadow-[6px_6px_0_#000] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_#000]">
      
      {/* Project Image */}
      <div className="mb-3 border-2 border-black bg-black">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="pixelated"
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

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-black bg-muted px-1 text-[10px]"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  )
}
