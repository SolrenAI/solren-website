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

export function FinalCta({ premium = false }: { premium?: boolean }) {
  return (
    <section className="relative px-5 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
      <Reveal>
        {/* `premium` (desktop only): wider, calmer closing section — more side
            padding, reduced height, tighter inner spacing and a subtler hairline,
            so it reads less like a floating dashboard card. */}
        <div
          className={`ps-card ps-card-warm mx-auto rounded-[24px] px-6 py-8 text-center sm:rounded-[28px] sm:px-12 sm:py-12 ${
            premium
              ? "max-w-[960px] lg:px-20 lg:py-10 lg:!border-white/[0.06]"
              : "max-w-[840px]"
          }`}
        >
          {/* concrete benefits — two balanced columns carry the section */}
          <ul
            className={`mx-auto grid max-w-[600px] grid-cols-1 gap-x-14 gap-y-4 text-left sm:grid-cols-2 sm:gap-y-[26px] ${
              premium ? "lg:gap-y-5" : ""
            }`}
          >
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3.5">
                <Check className="h-5 w-5 shrink-0 text-[#6A8FEE]" strokeWidth={2.4} />
                <span className="text-[16px] leading-snug text-[var(--silver)] sm:text-[18px]">{b}</span>
              </li>
            ))}
          </ul>

          <div className={`mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center ${premium ? "lg:mt-7" : ""}`}>
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
            >
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--hair-strong)] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/[0.03]"
            >
              See pricing
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
