"use client"

import { useEffect, useState } from "react"

/* A small, premium rotating line for the hero: the words stay fixed in place
   ("Quotes. Leads. Messages.") so there is zero layout shift, while a soft blue
   highlight + underline crossfades from one word to the next every 2.5s. */

const WORDS = ["Quotes", "Leads", "Messages"] as const
const INTERVAL_MS = 2500

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
              className="relative inline-block transition-colors duration-700 ease-out motion-reduce:transition-none"
              style={{ color: isActive ? "var(--rh-active)" : "var(--rh-muted)" }}
            >
              {word}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#537FEA]/20 via-[#537FEA]/80 to-[#537FEA]/20 transition-opacity duration-700 ease-out motion-reduce:transition-none"
                style={{ opacity: isActive ? 1 : 0 }}
              />
            </span>
            <span style={{ color: "var(--rh-muted)" }}>{isLast ? "." : ". "}</span>
          </span>
        )
      })}
    </span>
  )
}
