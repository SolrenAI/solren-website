import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "../reveal"

/* Closing card: makes the value feel complete and included. One calm "Included"
   list of concrete benefits, a single grounding line, then the two CTAs. No
   hype, no stats, no extra features — just what the visitor actually gets. */
const benefits = [
  "No missed enquiries",
  "No manual follow-ups",
  "Faster replies",
  "Less admin",
  "More booked work",
  "Installed & managed",
]

export function FinalCta() {
  return (
    <section className="relative px-6 pb-24 pt-8">
      <Reveal>
        <div className="ps-card ps-card-warm mx-auto max-w-[840px] rounded-[28px] px-8 py-10 text-center sm:px-12 sm:py-12">
          {/* concrete benefits — two balanced columns carry the section */}
          <ul className="mx-auto grid max-w-[600px] grid-cols-1 gap-x-14 gap-y-[26px] text-left sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3.5">
                <Check className="h-5 w-5 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                <span className="whitespace-nowrap text-[18px] leading-snug text-[var(--silver)]">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              See pricing
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
