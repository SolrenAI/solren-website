"use client"

import { useState } from "react"

/* Interactive "cost of doing nothing" card. The visitor sets their average job
   value and how many enquiries they miss a month; the headline figure and the
   supporting line recompute live. Defaults (A$850 / 8) match the page on first
   load. Output is framed as a rough estimate, never a guarantee.

   Keeps the existing left-card styling (ps-card, same rounding, padding, type).
   On-brand preset chips fit the design rather than introducing new controls. */

const aud = (n: number) => `A$${n.toLocaleString("en-AU")}`

// Lowest job-value preset stays at A$500. The range spans a small job up to a
// builder's A$15,000, so the figure stays believable at any setting.
const VALUE_PRESETS = [500, 850, 2000, 5000, 15000]
const LEAD_PRESETS = [1, 2, 4, 8, 12]

const DEFAULT_VALUE = 850
const DEFAULT_LEADS = 8

function ChipGroup({
  label,
  options,
  selected,
  onSelect,
  format,
}: {
  label: string
  options: number[]
  selected: number
  onSelect: (value: number) => void
  format: (value: number) => string
}) {
  const groupId = `cc-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`
  return (
    <div role="radiogroup" aria-labelledby={groupId}>
      <span id={groupId} className="ps-label !text-[10px] text-[var(--muted)]">
        {label}
      </span>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = opt === selected
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(opt)}
              className={`min-h-[44px] rounded-full border px-4 py-2.5 text-[13px] font-medium tabular-nums transition-colors ${
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

  return (
    <div className="ps-card flex h-full flex-col rounded-[20px] p-6 sm:rounded-[24px] sm:p-8 lg:p-10">
      <span className="ps-label">The cost of doing nothing</span>
      <div className="mt-5 text-[34px] font-medium leading-none tracking-tight text-white tabular-nums sm:mt-6 sm:text-[40px]">
        {aud(product)}
        <span className="ml-1 text-[17px] font-normal text-[var(--muted)] sm:text-[18px]">/month</span>
      </div>
      <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--silver)] sm:mt-5 sm:text-[15px]">
        That&apos;s about <span className="font-medium text-white">{leads}</span> enquiries a month
        at <span className="font-medium text-white">{aud(value)}</span> a job.
      </p>

      <div className="mt-6 space-y-4 sm:mt-7">
        <ChipGroup
          label="Average job value"
          options={VALUE_PRESETS}
          selected={value}
          onSelect={setValue}
          format={aud}
        />
        <ChipGroup
          label="Missed enquiries a month"
          options={LEAD_PRESETS}
          selected={leads}
          onSelect={setLeads}
          format={(n) => String(n)}
        />
      </div>

      <p className="mt-5 text-[12px] leading-relaxed text-[var(--silver)]">
        A rough estimate based on your numbers, not a guarantee.
      </p>
    </div>
  )
}
