import { ArrowRight, HeartHandshake, ShieldCheck, UserCheck, UsersRound } from 'lucide-react'
import founderPhoto from '../assets/mancube.jpg'
import matronPhoto from '../assets/happiness.jpg'
import securityPhoto from '../assets/security/security.jpeg'

const highlights = [
  { icon: UserCheck, label: 'Experienced Professionals' },
  { icon: ShieldCheck, label: 'Personalised Care Plans' },
  { icon: HeartHandshake, label: 'Safe & Supportive Environment' },
  { icon: UsersRound, label: 'Compassionate Community' },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-mint py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div className="reveal relative pb-10 pl-10 sm:pb-14 sm:pl-14">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src={founderPhoto}
              alt="Founder of Valley of Hope Rehabilitation Centre"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <p className="absolute top-4 left-4 rounded-full bg-navy/90 px-4 py-1.5 text-sm font-semibold text-warm-white backdrop-blur">
              Founder &amp; Nurse
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-2/5 overflow-hidden rounded-2xl border-4 border-warm-white shadow-xl">
            <img
              src={matronPhoto}
              alt="Matron at Valley of Hope Rehabilitation Centre"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <p className="bg-navy px-3 py-1.5 text-xs font-semibold text-warm-white">Matron</p>
          </div>

          <div className="absolute right-0 bottom-0 w-2/5 overflow-hidden rounded-2xl border-4 border-warm-white shadow-xl">
            <img
              src={securityPhoto}
              alt="Security team at Valley of Hope Rehabilitation Centre"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <p className="bg-navy px-3 py-1.5 text-xs font-semibold text-warm-white">Security Team</p>
          </div>
        </div>

        <div className="reveal">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-forest uppercase">
            About Us
          </p>
          <h2 className="text-3xl leading-tight font-normal text-navy sm:text-4xl">
            Hope, Healing and
            <br />A New Beginning
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Valley of Hope Rehabilitation Centre is a safe, supportive and nurturing
            environment where individuals can overcome addiction, heal from past trauma and
            rediscover their purpose. Our dedicated team of professionals is committed to
            walking with you every step of the way.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/30 text-forest">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-navy">{label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#approach"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-navy-deep"
          >
            Learn More About Us
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
