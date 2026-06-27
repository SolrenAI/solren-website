"use client"

import { useState } from "react"

/* Mobile-only (sm:hidden) compact version of "How your quote works": three small
   tappable pills that swap one explanation below, instead of three tall stacked
   text blocks. Desktop keeps the existing 3-column strip (rendered separately and
   shown from sm up). Pills reuse the calculator chip styling — no heavy borders,
   no boxes. `steps` is the same data the desktop strip uses. */
type Step = { s: string; t: string; b: string }

export function QuoteStepsMobile({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0)
  const current = steps[active]

  return (
    <div className="mt-4 sm:hidden">
      <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="How your quote works">
        {steps.map((step, i) => {
          const isActive = i === active
          return (
            <button
              key={step.s}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex min-h-[44px] flex-col items-center justify-center gap-0.5 rounded-2xl border px-2 text-center leading-tight transition-colors ${
                isActive
                  ? "border-transparent bg-[#537FEA] text-black"
                  : "border-[var(--hair-strong)] text-[var(--silver)]"
              }`}
            >
              <span
                className={`text-[10px] font-medium tabular-nums ${
                  isActive ? "text-black/70" : "text-[var(--faint)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[12.5px] font-medium">{step.s}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-3">
        <p className="text-[14.5px] font-medium leading-snug text-white">{current.t}</p>
        <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{current.b}</p>
      </div>
    </div>
  )
}
