import { useEffect } from 'react'
import HeroCarousel from '../components/HeroCarousel'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import FacilitiesSection from '../components/FacilitiesSection'
import ApproachSection from '../components/ApproachSection'
import RadioFeatureSection from '../components/RadioFeatureSection'
import TestimonialsSection from '../components/TestimonialsSection'
import SponsorshipSection from '../components/SponsorshipSection'
import ContactSection from '../components/ContactSection'

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return undefined

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('reveal-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useRevealOnScroll()

  return (
    <main>
      <HeroCarousel />
      <ServicesSection />
      <AboutSection />
      <FacilitiesSection />
      <ApproachSection />
      <RadioFeatureSection />
      <TestimonialsSection />
      <SponsorshipSection />
      <ContactSection />
    </main>
  )
}
