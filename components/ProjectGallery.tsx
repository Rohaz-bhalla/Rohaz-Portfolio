import { projects } from "@/data/projects"
import { ProjectBlock } from "./ProjectBlock"

export default function ProjectGallery() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="float mb-12 text-center text-3xl">
        🧱 Project Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectBlock key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
