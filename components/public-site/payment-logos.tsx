import type { ReactNode } from "react"

/*
 * Payment trust row — monochrome icon/logo marks only (no text labels).
 * Every mark inherits `currentColor`, so the row renders as a single muted-grey
 * tone that lifts slightly on hover. Small, evenly spaced, premium. Themes
 * cleanly in dark and light mode.
 *
 * These are lightweight in-house monochrome renderings of each brand mark. To
 * use official artwork, drop a single-colour SVG in and swap the node — the
 * layout/colour handling here stays the same.
 */

const marks: { name: string; node: ReactNode }[] = [
  {
    name: "Visa",
    node: (
      <svg viewBox="0 0 58 20" className="h-[13px] w-auto" aria-hidden="true" fill="currentColor">
        <text
          x="0"
          y="16"
          fontSize="20"
          fontWeight="800"
          fontStyle="italic"
          letterSpacing="-1.2"
        >
          VISA
        </text>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    node: (
      <svg viewBox="0 0 34 20" className="h-[18px] w-auto" aria-hidden="true" fill="currentColor">
        <circle cx="13" cy="10" r="9" opacity="0.85" />
        <circle cx="21" cy="10" r="9" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Apple Pay",
    node: (
      <svg viewBox="0 0 52 24" className="h-[17px] w-auto" aria-hidden="true" fill="currentColor">
        <path d="M14.6 12c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.1-2.9.9-3.6.9-.8 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.2 2.9-2.3.6-.9.9-1.5 1.3-2.4-2.8-1.1-2.6-4.2-2.6-4.2z" />
        <path d="M12.3 5.6c.6-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.8 1.1.1 2.2-.5 2.8-1.2z" />
        <text x="22" y="17.5" fontSize="14" fontWeight="600">
          Pay
        </text>
      </svg>
    ),
  },
  {
    name: "Google Pay",
    node: (
      <svg viewBox="0 0 54 24" className="h-[17px] w-auto" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2.3">
          <path d="M16.8 12a6.4 6.4 0 1 1-1.9-4.5" />
          <path d="M17 12h-5" />
        </g>
        <text x="24" y="17.5" fontSize="14" fontWeight="600" fill="currentColor">
          Pay
        </text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    node: (
      <svg viewBox="0 0 360 150" className="h-[12px] w-auto" aria-hidden="true" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M360 77.4001C360 51.8001 347.6 31.6001 323.9 31.6001C300.1 31.6001 285.7 51.8001 285.7 77.2001C285.7 107.3 302.7 122.5 327.1 122.5C339 122.5 348 119.8 354.8 116V96.0001C348 99.4001 340.2 101.5 330.3 101.5C320.6 101.5 312 98.1001 310.9 86.3001H359.8C359.8 85.0001 360 79.8001 360 77.4001ZM310.6 67.9001C310.6 56.6001 317.5 51.9001 323.8 51.9001C329.9 51.9001 336.4 56.6001 336.4 67.9001H310.6Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M247.1 31.6001C237.3 31.6001 231 36.2001 227.5 39.4001L226.2 33.2001H204.2V149.8L229.2 144.5L229.3 116.2C232.9 118.8 238.2 122.5 247 122.5C264.9 122.5 281.2 108.1 281.2 76.4001C281.1 47.4001 264.6 31.6001 247.1 31.6001ZM241.1 100.5C235.2 100.5 231.7 98.4001 229.3 95.8001L229.2 58.7001C231.8 55.8001 235.4 53.8001 241.1 53.8001C250.2 53.8001 256.5 64.0001 256.5 77.1001C256.5 90.5001 250.3 100.5 241.1 100.5Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M169.8 25.7L194.9 20.3V0L169.8 5.3V25.7Z" />
        <path d="M194.9 33.3H169.8V120.8H194.9V33.3Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M142.9 40.7L141.3 33.3H119.7V120.8H144.7V61.5C150.6 53.8 160.6 55.2 163.7 56.3V33.3C160.5 32.1 148.8 29.9 142.9 40.7Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M92.8999 11.6001L68.4999 16.8001L68.3999 96.9001C68.3999 111.7 79.4999 122.6 94.2999 122.6C102.5 122.6 108.5 121.1 111.8 119.3V99.0001C108.6 100.3 92.7999 104.9 92.7999 90.1001V54.6001H111.8V33.3001H92.7999L92.8999 11.6001Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M25.3 58.7001C25.3 54.8001 28.5 53.3001 33.8 53.3001C41.4 53.3001 51 55.6001 58.6 59.7001V36.2001C50.3 32.9001 42.1 31.6001 33.8 31.6001C13.5 31.6001 0 42.2001 0 59.9001C0 87.5001 38 83.1001 38 95.0001C38 99.6001 34 101.1 28.4 101.1C20.1 101.1 9.5 97.7001 1.1 93.1001V116.9C10.4 120.9 19.8 122.6 28.4 122.6C49.2 122.6 63.5 112.3 63.5 94.4001C63.4 64.6001 25.3 69.9001 25.3 58.7001Z" />
      </svg>
    ),
  },
  {
    name: "PayPal",
    node: (
      <svg viewBox="0 0 30 24" className="h-[18px] w-auto" aria-hidden="true" fill="currentColor">
        <path opacity="0.55" d="M6 3h6.6c2.5 0 4.3 1.8 4 4.3-.3 2.6-2.4 4.2-5 4.2H8.4L7.5 18H4.1z" />
        <path d="M10.5 6h6.6c2.5 0 4.3 1.8 4 4.3-.3 2.6-2.4 4.2-5 4.2h-3.2L12 21H8.6z" />
      </svg>
    ),
  },
]

export function PaymentLogos({ className = "" }: { className?: string }) {
  return (
    <ul
      aria-label="Accepted payment methods"
      className={`flex flex-wrap items-center gap-x-5 gap-y-3 text-[var(--faint)] ${className}`}
    >
      {marks.map((m) => (
        <li
          key={m.name}
          title={m.name}
          className="inline-flex transition-colors duration-200 hover:text-[var(--muted)]"
        >
          {m.node}
        </li>
      ))}
    </ul>
  )
}
