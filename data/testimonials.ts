export type Testimonial = {
  name: string
  role: string
  message: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Kuldeep singh",
    role: "Associate Professor at Guru Nanak Dev University",
    message:
      "Thank you 𝙍𝙤𝙝𝙖𝙯 𝘽𝙝𝙖𝙡𝙡𝙖 & Hitaishi Lohtia for developing website of DIECAI 2025 and assisting in this conference as volunteers. Best wishes for your bright future ahead 🙏",
    avatar: "/testimonials/kuldeep-sir.jpg",
  },
  {
    name: "Dr. Rajandeep singh",
    role: "Head Professor at Guru Nanak Dev University",
    message:
      "I'm incredibly proud of 𝙍𝙤𝙝𝙖𝙯 𝘽𝙝𝙖𝙡𝙡𝙖, by the resilience and dedication shown by him. Despite the pressure, the team demonstrated remarkable composure. His ability to balance demanding academic schedules with ongoing responsibilities is truly commendable.",
    avatar: "/testimonials/rajandeep-singh.jpg",
  },
  {
    name: "Sparsh Khanna",
    role: "Hackathon Lead Collaborator",
    message:
      "Rohaz asks the right questions and focuses on building maintainable code, not just features.",
    avatar: "/testimonials/sparsh.jpg",
  },
]
