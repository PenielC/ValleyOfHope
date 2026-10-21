import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Comprehensive Care for
                <br />
                Lasting Recovery
              </>
            }
            description="We offer a holistic approach to rehabilitation, focusing on mind, body and spirit. Our services are designed to help you heal, grow and build a healthier, more fulfilling life."
          />
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-navy-deep"
          >
            Explore All Services
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
