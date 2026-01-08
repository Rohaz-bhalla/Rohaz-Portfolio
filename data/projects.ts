export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "Mystery Message",
    description: "Built a secure full-stack app for anonymous messaging using Next.js, Nextauth, MongoDB enhancing user privacy and engagement with message suggestions.",
    image: "/projects/mystery-message.png",
    tech: ["Node.js", "Express", "MySQL", "EJS"],
    github: "https://github.com/Rohaz-bhalla/Mystery-Message",
  },
  {
    title: "Air Piano",
    description: "Play dedicated piano chords using gestures of your hands and fingers, listen and compose music live built this using mediapipe, TensorFlow.",
    image: "/projects/air-piano.png",
    tech: ["React", "TensorFlow", "WebAudio"],
    github: "https://github.com/Rohaz-bhalla/Air-Piano",
  },
  {
    title: "Cross-Drop",
    description: "A peer to peer File sharing as well as chat based web application made using Socket.io & Bun. You can share files to other devices such as ios, MacOS, Windows, Android etc.",
    image: "/projects/cross-drop.png",
    tech: ["React", "Websockets", "Bun"],
    github: "https://github.com/Rohaz-bhalla/Cross-Drop",
  },

  {
    title: "Mail-Mind",
    description: "Designed an automated email assistant using n8n to generate smart replies, analyze tone, and streamline communication with AI-powered workflows.",
    image: "/projects/n8n.png",
    tech: ["n8n", "gemini api", "Gmail"],
    github: "https://github.com/Rohaz-bhalla/Mail-Mind",
  },

   {
    title: "Axiom",
    description: "Developed a CLI based coding agent that can alter and modify your code files with an instance of a given prompt to increase productivity and client deliverability",
    image: "/projects/axiom.png",
    tech: ["Shell", "TypeScript", "Bun", "Groq api"],
    github: "https://github.com/Rohaz-bhalla/Mail-Mind",
  },

  {
    title: "Job-Finder",
    description: "Developed an Automation which helps the users to find current listed jobs based on their resume and structure the available jobs onto a Notion Page.",
    image: "/projects/job-finder.png",
    tech: ["LangFlow", "Gemini/groq api", "Notion Pages"],
    github: "https://github.com/Rohaz-bhalla/LangFlow-Workflows/tree/main/Job_Finder",
  },
]
