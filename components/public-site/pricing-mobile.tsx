"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, ChevronDown } from "lucide-react"

import { packages } from "./packages"

/* Mobile-first pricing: one package at a time via tabs (Growth selected by
   default), thin dividers, small Recommended pill, and a collapsed "Compare
   packages" accordion. Replaces the stacked desktop cards below lg so the page
   feels like picking a model, not configuring software. Desktop keeps the grid. */

const short = (name: string) => name.replace(/\s*Install$/, "")

function RecommendedPill() {
  return (
    <span className="rounded-full border border-[#537FEA]/40 bg-[#537FEA]/[0.08] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86A2F0]">
      Recommended
    </span>
  )
}

export function PricingMobile() {
  const defaultIndex = Math.max(
    packages.findIndex((p) => p.featured),
    0,
  )
  const [active, setActive] = useState(defaultIndex)
  const [compareOpen, setCompareOpen] = useState(false)
  const pkg = packages[active]

  return (
    <div className="mx-auto max-w-[440px]">
      {/* tabs */}
      <div
        role="tablist"
        aria-label="Packages"
        className="grid grid-cols-3 gap-1 rounded-full border border-[var(--hair)] bg-white/[0.02] p-1"
      >
        {packages.map((p, i) => {
          const selected = i === active
          return (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors ${
                selected
                  ? "bg-[#537FEA] text-black"
                  : "text-[var(--silver)] hover:text-white"
              }`}
            >
              {short(p.name)}
            </button>
          )
        })}
      </div>

      {/* active package */}
      <div className="mt-7">
        <h3 className="text-[22px] font-medium tracking-tight text-white">{pkg.name}</h3>
        {pkg.featured && (
          <div className="mt-3">
            <RecommendedPill />
          </div>
        )}
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--silver)]">{pkg.tagline}</p>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-[28px] font-medium tracking-tight text-white tabular-nums">
            {pkg.price}
          </span>
          <span className="text-[13px] text-[var(--muted)]">{pkg.cadence}</span>
        </div>

        <div className="ps-rule my-6" />

        <span className="ps-label">Features</span>
        <ul className="mt-4 space-y-3">
          {pkg.receive.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[14px] leading-snug text-[var(--silver)]"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#86A2F0]" strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#537FEA] px-5 py-3.5 text-[14.5px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
        >
          {pkg.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* compare packages — collapsed by default */}
      <div className="mt-8 border-t border-[var(--hair)]">
        <button
          type="button"
          onClick={() => setCompareOpen((v) => !v)}
          aria-expanded={compareOpen}
          aria-controls="compare-packages"
          className="flex w-full items-center justify-between py-4 text-left"
        >
          <span className="text-[15px] font-medium text-white">Compare packages</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-[#537FEA] transition-transform duration-300 ${
              compareOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          id="compare-packages"
          aria-hidden={!compareOpen}
          className={`grid transition-all duration-300 ease-out ${
            compareOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-6 pb-4">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className="border-t border-[var(--hair)] pt-4 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-[15px] font-medium text-white">{short(p.name)}</h4>
                    {p.featured && <RecommendedPill />}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {p.receive.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[var(--silver)]"
                      >
                        <Check
                          className="mt-0.5 h-3 w-3 shrink-0 text-[var(--muted)]"
                          strokeWidth={2.5}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-7 text-[12.5px] leading-relaxed text-[var(--muted)]">
        Prices are in AUD and exclude GST. SMS, Meta lead routing, and custom
        integrations depend on your current tools and approval.
      </p>
    </div>
  )
}
