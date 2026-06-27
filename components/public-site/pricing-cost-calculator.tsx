"use client"

import { useEffect, useRef, useState } from "react"

/* Interactive "cost of doing nothing" card. The visitor sets their average job
   value and how many enquiries they miss a month; the headline figure and the
   supporting line recompute live. Defaults (A$850 / 2) match the page on first
   load. Output is framed as a rough estimate, never a guarantee.

   Keeps the existing left-card styling (ps-card, same rounding, padding, type).
   On-brand preset chips fit the design rather than introducing new controls. */

const aud = (n: number) => `A$${n.toLocaleString("en-AU")}`

// Lowest job-value preset stays at A$500. The range spans a small job up to a
// builder's A$15,000, so the figure stays believable at any setting.
const VALUE_PRESETS = [500, 850, 2000, 5000, 15000]
const LEAD_PRESETS = [1, 2, 4, 8, 12]

const DEFAULT_VALUE = 850
const DEFAULT_LEADS = 2

/* Smoothly rolls the displayed figure to `target` when the inputs change, counting
   up or down with an eased settle (not a frantic ticker). Falls back to an instant
   set under prefers-reduced-motion. The caller formats each frame, so AUD commas
   stay correct throughout. */
function useCountUp(target: number, duration = 650) {
  const [display, setDisplay] = useState(target)
  const displayRef = useRef(target)

  useEffect(() => {
    displayRef.current = display
  }, [display])

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const from = displayRef.current
    if (reduce || from === target) {
      setDisplay(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setDisplay(Math.round(from + (target - from) * eased))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return display
}

function ChipGroup({
  label,
  options,
  selected,
  onSelect,
  format,
  gridClass = "",
}: {
  label: string
  options: number[]
  selected: number
  onSelect: (value: number) => void
  format: (value: number) => string
  /* mobile-only fixed-row layout (e.g. "grid grid-cols-3"); desktop reverts to
     the wrapping flow via the sm: classes below, so tablet/desktop are unchanged */
  gridClass?: string
}) {
  const groupId = `cc-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`
  return (
    <div role="radiogroup" aria-labelledby={groupId}>
      <span id={groupId} className="ps-label !text-[10px] text-[var(--muted)]">
        {label}
      </span>
      <div className={`mt-2 gap-2 sm:mt-2.5 sm:flex sm:flex-wrap ${gridClass}`}>
        {options.map((opt) => {
          const isSelected = opt === selected
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(opt)}
              className={`min-h-[44px] rounded-full border px-3 py-2.5 text-[13px] font-medium tabular-nums transition-colors sm:px-4 ${
                isSelected
                  ? "border-transparent bg-[#537FEA] text-black"
                  : "border-[var(--hair-strong)] text-[var(--silver)] hover:border-white/30 hover:text-white"
              }`}
            >
              {format(opt)}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function CostCalculatorCard() {
  const [value, setValue] = useState(DEFAULT_VALUE)
  const [leads, setLeads] = useState(DEFAULT_LEADS)
  const product = value * leads
  const shown = useCountUp(product)

  return (
    <div className="ps-card flex h-full flex-col rounded-[20px] p-5 sm:rounded-[24px] sm:p-7 lg:px-8 lg:py-6">
      <span className="ps-label">Missed enquiries could cost you</span>
      <div className="mt-3 text-[34px] font-medium leading-none tracking-tight text-white tabular-nums sm:mt-5 sm:text-[40px]">
        {aud(shown)}
        <span className="ml-1 text-[17px] font-normal text-[var(--muted)] sm:text-[18px]">/month</span>
      </div>

      <div className="mt-4 space-y-3 pb-3 sm:mt-6 sm:space-y-3.5 sm:pb-5 lg:mt-4 lg:space-y-3 lg:pb-0">
        <ChipGroup
          label="Average job value"
          options={VALUE_PRESETS}
          selected={value}
          onSelect={setValue}
          format={aud}
          gridClass="grid grid-cols-3"
        />
        <ChipGroup
          label="Missed enquiries a month"
          options={LEAD_PRESETS}
          selected={leads}
          onSelect={setLeads}
          format={(n) => String(n)}
          gridClass="grid grid-cols-5"
        />
      </div>

      {/* desktop: hidden — the section qualifier "Rough estimate, not a promise."
          carries this now, so the card is tighter; mobile/tablet keep it */}
      <p className="mt-auto border-t border-[var(--hair)] pt-4 text-[12px] leading-relaxed text-[var(--muted)] sm:pt-5 lg:hidden">
        A rough estimate based on your numbers, not a guarantee.
      </p>
    </div>
  )
}
