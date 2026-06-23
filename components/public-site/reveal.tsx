"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * Reveal: fades/translates children into view once, on scroll.
 * Respects prefers-reduced-motion via the .ps-reveal CSS rules.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          ob.disconnect()
        }
      },
      // trigger as soon as the element is near the viewport (well before it
      // scrolls in) so content is already present, not popping in late
      { threshold: 0, rootMargin: "0px 0px 20% 0px" }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  // keep stagger to a barely-there hint so content never feels late
  const revealDelay = Math.min(Math.round(delay * 0.4), 60)

  return (
    <div
      ref={ref}
      className={`ps-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${revealDelay}ms` }}
    >
      {children}
    </div>
  )
}
