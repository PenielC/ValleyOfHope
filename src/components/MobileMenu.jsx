import { X } from 'lucide-react'
import Button from './Button'
import Logo from './Logo'
import navLinks from '../data/navLinks'

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className="absolute inset-0 bg-navy-deep/50"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute top-0 right-0 flex h-full w-[82%] max-w-sm flex-col bg-warm-white p-6 shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo className="h-10 w-auto" />
          <button
            type="button"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="rounded-full p-2 text-navy hover:bg-mint"
            aria-label="Close menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-mint"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6">
          <Button href="#contact" variant="primary" tabIndex={open ? 0 : -1} onClick={onClose}>
            Get Help Now
          </Button>
        </div>
      </div>
    </div>
  )
}
