"use client"

import { useState, type ReactNode } from "react"
import { Plus } from "lucide-react"
import { faqs } from "./faq-data"

/* Answers default to the shared `faqs` (plain strings). A page can pass its own
   `items` — and an answer can be a ReactNode, so page-specific FAQs can include
   real inline links (e.g. to Security/Trust) without changing the shared data. */
export function FaqAccordion({
  items = faqs,
  defaultOpenIndex = null,
  idPrefix = "",
  numeralClassName = "text-[var(--faint)]",
}: {
  items?: { q: string; a: ReactNode }[]
  /* Which item starts expanded; pass null to start with all collapsed. */
  defaultOpenIndex?: number | null
  /* prefix for panel ids so two instances on one page (e.g. a trimmed mobile set
     and the full desktop set) don't produce duplicate DOM ids / broken aria. */
  idPrefix?: string
  /* Tone of the 01/02/… markers. Defaults to --faint; /pricing lifts them to
     --silver. Kept a prop so recolouring one page cannot leak into another. */
  numeralClassName?: string
}) {
  const [open, setOpen] = useState<number | null>(defaultOpenIndex)

  return (
    <div className="divide-y divide-[var(--hair)] border-y border-[var(--hair)]">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-3 py-4 text-left sm:gap-6 sm:py-6"
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}faq-panel-${i}`}
            >
              <span className="flex items-baseline gap-3 sm:gap-5">
                <span className={`ps-label !text-[11px] ${numeralClassName}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-medium leading-snug tracking-tight text-white sm:text-[20px]">
                  {f.q}
                </span>
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-[#537FEA] transition-[transform,color] duration-300 group-hover:text-[#6A8FEE] ${
                  isOpen ? "rotate-45" : ""
                }`}
                strokeWidth={2}
              />
            </button>
            <div
              id={`${idPrefix}faq-panel-${i}`}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-5 pl-9 text-[14.5px] leading-relaxed text-[var(--silver)] sm:pb-8 sm:pl-[3.1rem] sm:text-[15px]">
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
