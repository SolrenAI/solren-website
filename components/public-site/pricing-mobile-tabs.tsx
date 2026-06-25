"use client"

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react"

type Tab = { id: string; label: string; panel: ReactNode }

/* Mobile-only segmented control for the pricing page's supporting detail. Three
   equal-width tabs share one row; one panel shows at a time. Only rendered below
   lg (its container is lg:hidden), so it never affects the desktop layout. */
export function MobileSupportTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return
    e.preventDefault()
    const dir = e.key === "ArrowRight" ? 1 : -1
    const next = (active + dir + tabs.length) % tabs.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Pricing details"
        onKeyDown={onKeyDown}
        className="grid grid-cols-3 gap-1 rounded-full border border-[var(--hair)] bg-white/[0.02] p-1"
      >
        {tabs.map((t, i) => {
          const selected = i === active
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex min-h-[44px] items-center justify-center rounded-full px-2 text-center text-[13px] font-medium leading-tight transition-colors ${
                selected ? "bg-[#537FEA] text-black" : "text-[var(--silver)] hover:text-white"
              }`}
            >
              {t.label}
            </button>
          )
        })}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${baseId}-panel-${t.id}`}
          aria-labelledby={`${baseId}-tab-${t.id}`}
          hidden={i !== active}
          className="mt-7"
        >
          {t.panel}
        </div>
      ))}
    </div>
  )
}
