"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { faqs } from "./faq-data"

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-[var(--hair)] border-y border-[var(--hair)]">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-3 py-5 text-left sm:gap-6 sm:py-7"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="flex items-baseline gap-3 sm:gap-5">
                <span className="ps-label !text-[11px] text-[var(--faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-medium leading-snug tracking-tight text-white sm:text-[20px]">
                  {f.q}
                </span>
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-[#537FEA] transition-all duration-300 group-hover:opacity-100 ${
                  isOpen ? "rotate-45 opacity-100" : "opacity-75"
                }`}
                strokeWidth={1.5}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pl-9 text-[14.5px] leading-relaxed text-[var(--silver)] sm:pb-8 sm:pl-[3.1rem] sm:text-[15px]">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
