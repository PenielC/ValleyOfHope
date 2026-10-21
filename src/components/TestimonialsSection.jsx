import { Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/testimonials'

export default function TestimonialsSection() {
  return (
    <section id="stories" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Success Stories"
            title="Real People. Real Change."
            description="Hear from individuals who have found hope and rebuilt their lives with our support."
          />
          <a
            href="#contact"
            className="text-sm font-semibold text-forest transition-colors hover:text-navy"
          >
            View More Stories →
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="reveal flex flex-col rounded-2xl border border-line bg-mint/40 p-6"
            >
              <Quote className="mb-3 text-forest/60" size={26} aria-hidden="true" />
              <blockquote className="flex-1 text-sm leading-relaxed text-body italic">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy">
                — {testimonial.name}
                <span className="block text-xs font-normal text-muted">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
