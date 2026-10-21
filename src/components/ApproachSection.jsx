import { HeartHandshake, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Holistic, Patient-Centred Approach',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential & Safe',
  },
  {
    icon: UsersRound,
    title: 'Experienced Care Team',
  },
  {
    icon: HeartHandshake,
    title: 'Support for Long-Term Success',
  },
]

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="bg-gradient-to-br from-navy-deep to-navy py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="reveal max-w-sm">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-hope uppercase">
              Why Choose Us
            </p>
            <h2 className="text-3xl leading-tight font-normal text-warm-white sm:text-4xl">
              Your Recovery
              <br />
              <span className="text-hope">Matters</span>
            </h2>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 lg:grid-cols-4">
            {values.map(({ icon: Icon, title }) => (
              <div key={title} className="reveal flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-hope/40 text-hope">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p className="text-sm font-medium text-warm-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
