import {
  ArrowRight,
  Brain,
  Flower2,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Users,
} from 'lucide-react'

const iconMap = {
  Leaf,
  Brain,
  Flower2,
  Users,
  ShieldCheck,
  GraduationCap,
}

export default function ServiceCard({ icon, title, summary }) {
  const Icon = iconMap[icon] ?? Leaf

  return (
    <div className="reveal rounded-2xl border border-line bg-warm-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-mint text-forest">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="mb-2 font-display text-lg text-navy">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted">{summary}</p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-navy"
      >
        Learn More
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </div>
  )
}
