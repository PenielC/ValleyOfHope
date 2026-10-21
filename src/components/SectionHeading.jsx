export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.2em] uppercase ${
            light ? 'text-hope' : 'text-forest'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl leading-tight font-normal sm:text-4xl ${
          light ? 'text-warm-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-warm-white/80' : 'text-muted'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
