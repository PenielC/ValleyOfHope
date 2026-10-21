import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Button from './Button'
import { heroSlides } from '../data/heroSlides'

const AUTO_ADVANCE_MS = 6000

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = (event) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const timerRef = useRef(null)

  const goTo = useCallback((next) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length)
  }, [])

  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || reducedMotion) return undefined
    timerRef.current = window.setTimeout(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearTimeout(timerRef.current)
  }, [index, paused, reducedMotion])

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    }
  }

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Valley of Hope highlights"
      className="relative h-[640px] max-h-[90vh] min-h-[560px] overflow-hidden pt-20 sm:pt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      {heroSlides.map((slide, slideIndex) => (
        <div
          key={slide.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${slideIndex + 1} of ${heroSlides.length}`}
          aria-hidden={slideIndex !== index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            slideIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading={slideIndex === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/55 to-navy-deep/20" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-hope uppercase">
                {slide.eyebrow}
              </p>
              <h1 className="text-4xl leading-tight font-normal text-warm-white sm:text-5xl">
                {slide.title.split(slide.highlight).map((part, i, arr) => (
                  <span key={part}>
                    {part}
                    {i < arr.length - 1 ? (
                      <span className="text-hope">{slide.highlight}</span>
                    ) : null}
                  </span>
                ))}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-warm-white/85 sm:text-lg">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={slide.primaryCta.href} variant="primary">
                  {slide.primaryCta.label}
                </Button>
                <a
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-warm-white/60 px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-warm-white/10"
                >
                  <Play size={16} aria-hidden="true" />
                  {slide.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={goPrev}
        className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-warm-white/20 p-2 text-warm-white backdrop-blur transition-colors hover:bg-warm-white/35 sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-warm-white/20 p-2 text-warm-white backdrop-blur transition-colors hover:bg-warm-white/35 sm:right-6"
        aria-label="Next slide"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Slide selection">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={slideIndex === index}
            aria-label={`Go to slide ${slideIndex + 1}`}
            onClick={() => goTo(slideIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              slideIndex === index ? 'w-7 bg-hope' : 'w-2.5 bg-warm-white/50 hover:bg-warm-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
