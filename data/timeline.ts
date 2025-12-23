export type TimelineItem = {
  year: string
  title: string
  description: string
  image: string
  xp: number // 0–100
}

export const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "Started Learning Linux and Basics of Programming",
    description:
      "Entered the world of coding. Learned C, basics of programming, and problem-solving.",
    image: "/timeline/start.png",
    xp: 25,
  },
  {
    year: "2023",
    title: "Web Development",
    description:
      "Built projects using HTML, CSS, JavaScript, Node.js, and MySQL.",
    image: "/timeline/web.png",
    xp: 50,
  },
  {
    year: "2024",
    title: "Full Stack + Open Source",
    description:
      "Worked with MERN, Next.js, participated in hackathons such as StatusBrew's Skillsprints, HackerWrath etc.",
    image: "/timeline/fullstack.png",
    xp: 80,
  },
  {
    year: "2025",
    title: "Advanced Projects + Open Source",
    description:
      "Building scalable apps, AI integrations, leading web teams, Contributed in open-source by -  Successfully  Merging 6 Pull-Requests in HacktoberFest and Winning the T-shirt.",
    image: "/timeline/advanced.png",
    xp: 95,
  },
]
