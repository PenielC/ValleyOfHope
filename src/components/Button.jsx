import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-forest text-warm-white hover:bg-[#066a41] focus-visible:bg-[#066a41]',
  outline:
    'border border-warm-white/70 text-warm-white hover:bg-warm-white/10',
  dark: 'bg-navy text-warm-white hover:bg-navy-deep',
}

export default function Button({
  as: Component = 'a',
  href,
  to,
  variant = 'primary',
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant] ?? variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      </a>
    )
  }

  return (
    <Component className={classes} {...rest}>
      {children}
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
    </Component>
  )
}
