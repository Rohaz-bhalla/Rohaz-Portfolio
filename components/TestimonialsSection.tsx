import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "./TestimonialCard"

export default function TestimonialsSection() {
  return (
    <section className=" mx-auto max-w-6xl px-6 py-24">
      <h2 className=" float mb-12 text-center text-2xl tracking-widest">
        📖 What Others Say
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} data={t} />
        ))}
      </div>
    </section>
  )
}
