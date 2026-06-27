"use client"

import { useEffect, useState } from "react"

/* A small, premium rotating line for the hero: the words stay fixed in place
   ("Calls. Forms. Messages.") so there is zero layout shift. All three sit in
   the brand blue used on the CTAs; a brighter light-up + underline crossfades
   from one word to the next every 2.5s. */

const WORDS = ["Calls", "Forms", "Messages"] as const
const INTERVAL_MS = 2500

/* Brand blue (the CTA accent). BASE keeps all three words clearly blue; ACTIVE
   is the brighter light-up that travels across them. */
const BASE = "#5F7BE6"
const ACTIVE = "#9DB8FA"

export function RotatingHighlight() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return
    const id = setInterval(() => setIndex((p) => (p + 1) % WORDS.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <span>
      {WORDS.map((word, i) => {
        const isActive = i === index
        const isLast = i === WORDS.length - 1
        return (
          <span key={word}>
            <span
              className="rh-word relative inline-block transition-colors duration-700 ease-out motion-reduce:transition-none"
              style={{ color: isActive ? ACTIVE : BASE, animationDelay: `${i * 150}ms` }}
            >
              {word}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#537FEA]/20 via-[#537FEA]/80 to-[#537FEA]/20 transition-opacity duration-700 ease-out motion-reduce:transition-none"
                style={{ opacity: isActive ? 1 : 0 }}
              />
            </span>
            <span style={{ color: BASE }}>{isLast ? "." : ". "}</span>
          </span>
        )
      })}
    </span>
  )
}
