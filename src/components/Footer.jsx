import { HandHeart } from 'lucide-react'
import navLinks from '../data/navLinks'
import { siteInfo } from '../data/siteInfo'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep py-12 text-warm-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-8 border-b border-warm-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
            <div className="leading-tight">
              <span className="block font-display text-base text-warm-white">
                Valley of Hope
              </span>
              <span className="block text-[11px] tracking-[0.18em] text-warm-white/60 uppercase">
                Rehabilitation Centre
              </span>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-hope">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#sponsor"
                  className="inline-flex items-center gap-1.5 font-semibold text-hope hover:text-warm-white"
                >
                  <HandHeart size={15} aria-hidden="true" />
                  Donate
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-warm-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Valley of Hope Rehabilitation Centre. All rights reserved.
          </p>
          <p>{siteInfo.address}</p>
        </div>
      </div>
    </footer>
  )
}
