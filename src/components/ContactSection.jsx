import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Button from './Button'
import { siteInfo } from '../data/siteInfo'

const initialForm = {
  name: '',
  contactMethod: 'email',
  contactDetails: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.contactDetails.trim()) {
    errors.contactDetails =
      form.contactMethod === 'email'
        ? 'Please enter an email address so we can reach you.'
        : 'Please enter a phone number so we can reach you.'
  } else if (
    form.contactMethod === 'email' &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactDetails.trim())
  ) {
    errors.contactDetails = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) {
    errors.message = 'Please share a short message so we know how to help.'
  }
  return errors
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // TODO: wire up to an approved backend or trusted form service before launch.
    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 600)
  }

  return (
    <section id="contact" className="bg-navy-deep py-16 text-warm-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-hope uppercase">
              Take the First Step
            </p>
            <h2 className="text-3xl leading-tight font-normal sm:text-4xl">
              You&apos;re Not Alone.
              <br />
              Help is Here.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-white/80">
              Reach out today. Our team will respond during business hours to support you or
              your loved one on the journey to recovery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`} variant="primary">
                Get Help Now
              </Button>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-warm-white/60 px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-warm-white/10"
              >
                <Mail size={16} aria-hidden="true" />
                Contact Us
              </a>
            </div>

            <ul className="mt-10 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-hope" aria-hidden="true" />
                <a href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`} className="hover:text-hope">
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-hope" aria-hidden="true" />
                <a href={`tel:${siteInfo.altPhone.replace(/\s+/g, '')}`} className="hover:text-hope">
                  {siteInfo.altPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-hope" aria-hidden="true" />
                <a href={`tel:${siteInfo.USAPhone.replace(/\s+/g, '')}`} className="hover:text-hope">
                  {siteInfo.USAPhone} (USA)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-hope" aria-hidden="true" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-hope">
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-hope" aria-hidden="true" />
                {siteInfo.address}
              </li>
            </ul>
            <p className="mt-4 text-xs text-warm-white/60">
              This website is not an emergency service. If you or someone else is in immediate
              danger, please contact local emergency services.
            </p>
          </div>

          <form
            id="contact-form"
            noValidate
            onSubmit={onSubmit}
            className="reveal rounded-2xl bg-warm-white p-6 text-body shadow-xl sm:p-8"
          >
            <h3 className="mb-1 font-display text-xl text-navy">Send Us a Message</h3>
            <p className="mb-6 text-sm text-muted">
              We read every message carefully and will get back to you soon. Please avoid
              sharing detailed medical history here.
            </p>

            {status === 'success' ? (
              <p role="status" className="rounded-lg bg-mint p-4 text-sm font-medium text-forest">
                Thank you — your message has been sent. We will be in touch soon.
              </p>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
                    Name <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-lg border border-line px-3 py-2.5 text-sm focus:border-teal focus:outline-none"
                  />
                </div>

                <fieldset>
                  <legend className="mb-1 block text-sm font-medium text-navy">
                    Preferred contact method
                  </legend>
                  <div className="flex gap-4 text-sm">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={form.contactMethod === 'email'}
                        onChange={onChange}
                      />
                      Email
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={form.contactMethod === 'phone'}
                        onChange={onChange}
                      />
                      Phone
                    </label>
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="contactDetails"
                    className="mb-1 block text-sm font-medium text-navy"
                  >
                    {form.contactMethod === 'email' ? 'Email address' : 'Phone number'}
                  </label>
                  <input
                    id="contactDetails"
                    name="contactDetails"
                    type={form.contactMethod === 'email' ? 'email' : 'tel'}
                    value={form.contactDetails}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.contactDetails)}
                    aria-describedby={errors.contactDetails ? 'contactDetails-error' : undefined}
                    className="w-full rounded-lg border border-line px-3 py-2.5 text-sm focus:border-teal focus:outline-none"
                  />
                  {errors.contactDetails ? (
                    <p id="contactDetails-error" className="mt-1 text-xs text-red-600">
                      {errors.contactDetails}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full rounded-lg border border-line px-3 py-2.5 text-sm focus:border-teal focus:outline-none"
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1 text-xs text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <p className="text-xs text-muted">
                  By submitting this form you agree to be contacted about your enquiry. We
                  collect only the details needed to respond. See our privacy policy for how
                  submissions are stored and accessed.
                </p>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-[#066a41] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
