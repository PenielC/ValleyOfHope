import { HandHeart, Mail, MessageCircle } from 'lucide-react'
import { siteInfo } from '../data/siteInfo'

export default function SponsorshipSection() {
  const whatsappHref = `https://wa.me/${siteInfo.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(
    "Hi, I'd like to find out about sponsoring a client's recovery at Valley of Hope.",
  )}`
  const emailHref = `mailto:${siteInfo.email}?subject=${encodeURIComponent('Sponsorship Enquiry')}`

  return (
    <section id="sponsor" className="bg-forest py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-warm-white/15 text-warm-white">
          <HandHeart size={28} aria-hidden="true" />
        </span>
        <h2 className="text-3xl leading-tight font-normal text-warm-white sm:text-4xl">
          Sponsor a Client&apos;s Recovery
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-warm-white/85">
          Some of the people who come to us for help cannot afford the full cost of treatment.
          Your sponsorship can give a less privileged individual struggling with addiction the
          chance at a safe recovery and a new beginning. Reach out to us to find out how you can
          help.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-warm-white px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-mint"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a
            href={emailHref}
            className="inline-flex items-center gap-2 rounded-full border border-warm-white/60 px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-warm-white/10"
          >
            <Mail size={18} aria-hidden="true" />
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
