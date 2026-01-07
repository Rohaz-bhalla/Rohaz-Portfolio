export type Skill = {
  name: string
  level: "Core" | "Advanced" | "Familiar"
}

export const skills: Skill[] = [
  { name: "JavaScript", level: "Core" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Java", level: "Core" },
  { name: "Python", level: "Core" },
  { name: "React", level: "Core" },
  { name: "Node.js", level: "Core" },
  { name: "MongoDB", level: "Familiar" },
  { name: "Express.js", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "MySQL", level: "Core" },
  { name: "PostgreSQL", level: "Familiar" },
  { name: "Git & GitHub", level: "Core" },
  { name: "Docker", level: "Familiar" },
  { name: "LangChain", level: "Familiar" },
   { name: "Linux", level: "Core" },
]
