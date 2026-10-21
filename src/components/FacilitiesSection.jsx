import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import mainHouse from '../assets/facility/main-house.jpeg'
import loungeImg from '../assets/facility/lounge.jpeg'
import blueBeds from '../assets/facility/blue-beds.jpeg'
import whiteBeds from '../assets/facility/2-white-beds.jpeg'
import bedBible from '../assets/facility/bed-bible.jpeg'
import blueTub from '../assets/facility/blue-tub.jpeg'
import whiteTub from '../assets/facility/white-tub.jpeg'
import toiletImg from '../assets/facility/toilet.jpeg'

const photos = [
  { id: 'main-house', src: mainHouse, caption: 'Main House' },
  { id: 'lounge', src: loungeImg, caption: 'Lounge' },
  { id: 'blue-beds', src: blueBeds, caption: 'Bedroom' },
  { id: 'white-beds', src: whiteBeds, caption: 'Bedroom' },
  { id: 'bed-bible', src: bedBible, caption: 'Bedroom' },
  { id: 'blue-tub', src: blueTub, caption: 'Bathroom' },
  { id: 'white-tub', src: whiteTub, caption: 'Bathroom' },
  { id: 'toilet', src: toiletImg, caption: 'Bathroom' },
]

const PER_SLIDE = 3
const slides = Array.from({ length: Math.ceil(photos.length / PER_SLIDE) }, (_, i) =>
  photos.slice(i * PER_SLIDE, i * PER_SLIDE + PER_SLIDE),
)

export default function FacilitiesSection() {
  const [index, setIndex] = useState(0)

  const goTo = useCallback((next) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
  }, [])

  return (
    <section id="facilities" className="bg-mint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Take A Look Inside"
          title="Our Facilities"
          description="A safe, comfortable and well-maintained space designed to support rest, reflection and recovery."
          align="center"
        />

        <div className="reveal relative mt-10">
          <div className="relative h-56 overflow-hidden sm:h-72">
            {slides.map((group, slideIndex) => (
              <div
                key={group.map((photo) => photo.id).join('-')}
                className={`absolute inset-0 flex gap-4 transition-opacity duration-700 ease-in-out ${
                  slideIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                {group.map((photo, photoIndex) => (
                  <div key={photo.id} className="relative flex-1 overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={photo.src}
                      alt={`${photo.caption} at Valley of Hope Rehabilitation Centre`}
                      className="h-full w-full object-cover"
                      loading={slideIndex === 0 && photoIndex === 0 ? 'eager' : 'lazy'}
                    />
                    <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent px-3 py-2 text-xs font-semibold text-warm-white">
                      {photo.caption}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute top-1/2 left-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy p-2 text-warm-white shadow-md transition-colors hover:bg-navy-deep"
            aria-label="Previous facility photos"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-navy p-2 text-warm-white shadow-md transition-colors hover:bg-navy-deep"
            aria-label="Next facility photos"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Facility photo set selection">
          {slides.map((group, slideIndex) => (
            <button
              key={group.map((photo) => photo.id).join('-')}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Go to photo set ${slideIndex + 1}`}
              onClick={() => goTo(slideIndex)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                slideIndex === index ? 'w-7 bg-forest' : 'w-2.5 bg-navy/20 hover:bg-navy/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

