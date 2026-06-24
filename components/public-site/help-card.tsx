import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/* A restrained help article card: title, one-line summary, quiet arrow.
   Premium dark, hairline border, small orange accent on hover. */
export function HelpCard({
  title,
  summary,
  href,
  accent = false,
  blue = false,
  light = false,
}: {
  title: string
  summary: string
  href: string
  /* use the restrained Solren-blue arrow as a branded navigation accent */
  accent?: boolean
  /* Solren-blue arrow on all breakpoints (used on Trust Centre) — the arrow itself
     is #537FEA; no background, highlight or glow, keeping the existing hover lift */
  blue?: boolean
  /* lighter weight for dense card indexes (Help Centre): softer hairline, fainter
     fill and a subtle Solren-blue hover instead of a brightening white border */
  light?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-200 ${
        light
          ? "border-white/[0.06] bg-white/[0.01] hover:border-[#537FEA]/30 hover:bg-[#537FEA]/[0.035]"
          : "border-white/[0.08] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.03]"
      }`}
    >
      <h3 className="flex items-start justify-between gap-3 text-[15.5px] font-medium tracking-tight text-white">
        <span>{title}</span>
        <ArrowUpRight
          className={`mt-0.5 h-4 w-4 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            accent
              ? "text-[#537FEA]/80 group-hover:text-[#537FEA]"
              : blue
                ? "text-[#537FEA] group-hover:text-[#86A2F0]"
                : "text-[var(--faint)] group-hover:text-[#86A2F0]"
          }`}
        />
      </h3>
      <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--muted)]">
        {summary}
      </p>
    </Link>
  )
}
