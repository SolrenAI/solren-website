"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { Plus } from "lucide-react"

export type SecurityRow = { title: string; body: ReactNode }

/* Quiet accordion for the Security "in depth" rows. Subtle hairlines, restrained
   plus marker, smooth height/opacity reveal. One row open at a time. */
export function SecurityAccordion({
  rows,
  defaultOpen = 0,
}: {
  rows: SecurityRow[]
  defaultOpen?: number | null
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="divide-y divide-white/[0.05] border-y border-white/[0.05]">
      {rows.map((r, i) => {
        const isOpen = open === i
        return (
          <div key={r.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-4 py-5 text-left lg:gap-6"
              aria-expanded={isOpen}
              aria-controls={`sec-panel-${i}`}
            >
              <span className="text-[16px] font-medium tracking-tight text-white">
                {r.title}
              </span>
              <Plus
                className={`h-4 w-4 shrink-0 text-[#537FEA] transition-transform duration-300 group-hover:text-[#537FEA] md:text-[#537FEA] md:group-hover:text-[#6A8FEE] ${
                  isOpen ? "rotate-45" : ""
                }`}
                strokeWidth={1.5}
              />
            </button>
            <div
              id={`sec-panel-${i}`}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-[var(--silver)]">
                  {r.body}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
