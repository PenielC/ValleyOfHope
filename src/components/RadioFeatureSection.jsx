import SectionHeading from './SectionHeading'
import montroseStudios from '../assets/features/montrose-studios.jpeg'
import studioFront from '../assets/features/studio-front.jpeg'
import studioVideo from '../assets/features/studio-video.mp4'

export default function RadioFeatureSection() {
  return (
    <section className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="In The Community"
          title="Valley Of Hope On Radio"
          description="Our team joined a live radio broadcast at Montrose Studios to speak openly about substance abuse, raising awareness about its impact on individuals and families and sharing how recovery and support are possible. The conversation reached listeners across the community, encouraging those affected to reach out and seek help."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={montroseStudios}
              alt="Valley of Hope team at Montrose Studios"
              className="reveal aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <img
              src={studioFront}
              alt="Outside the radio studio during the Valley of Hope broadcast"
              className="reveal aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          <video
            src={studioVideo}
            poster={studioFront}
            controls
            preload="none"
            className="reveal aspect-video w-full rounded-2xl bg-navy-deep object-cover shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
