import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/* A restrained help article card: title, one-line summary, quiet arrow.
   Premium dark, hairline border, small orange accent on hover. */
export function HelpCard({
  title,
  summary,
  href,
  accent = false,
  mobileBlue = false,
}: {
  title: string
  summary: string
  href: string
  /* use the restrained Solren-blue arrow as a branded navigation accent */
  accent?: boolean
  /* show the Solren-blue arrow on mobile only (<768px), reverting to the default
     grey treatment from md up — keeps desktop unchanged (used on Trust Centre) */
  mobileBlue?: boolean
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.03]"
    >
      <h3 className="flex items-start justify-between gap-3 text-[15.5px] font-medium tracking-tight text-white">
        <span>{title}</span>
        <ArrowUpRight
          className={`mt-0.5 h-4 w-4 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            accent
              ? "text-[#537FEA]/80 group-hover:text-[#537FEA]"
              : mobileBlue
                ? "text-[#537FEA] group-hover:text-[#537FEA] md:text-[var(--faint)] md:group-hover:text-[#86A2F0]"
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
