import logo from '../assets/valley-of-hope-logo.webp'

export default function Logo({ className = 'h-12 w-auto' }) {
  return (
    <img
      src={logo}
      alt="Valley of Hope Rehabilitation Centre"
      className={`${className} object-contain`}
    />
  )
}
