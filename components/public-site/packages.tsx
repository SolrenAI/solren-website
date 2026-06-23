import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "./reveal"

export type Pkg = {
  name: string
  tagline: string
  price: string
  cadence: string
  receive: string[]
  cta: string
  featured?: boolean
}

export const packages: Pkg[] = [
  {
    name: "Starter Install",
    tagline: "For one inbox and a simple setup.",
    price: "From A$2,997",
    cadence: "+ A$497 / month",
    receive: [
      "Gmail / email lead capture",
      "Fast first-reply draft",
      "Missed-lead recovery",
      "Follow-up reminders",
      "Monthly tune-ups",
      "Approval mode",
    ],
    cta: "Get started",
  },
  {
    name: "Growth Install",
    tagline: "For web, Google and phone enquiries.",
    price: "From A$4,997",
    cadence: "+ A$997 / month",
    receive: [
      "Everything in Starter",
      "Website form lead capture",
      "Enquiries from your Google listing",
      "SMS-ready follow-up workflow",
      "Booking and quote draft support",
      "Daily job summary",
      "Dashboard access when needed",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Enterprise Install",
    tagline: "For multiple teams, locations or high volume.",
    price: "Custom",
    cadence: "Custom install + from A$1,997 / month",
    receive: [
      "Everything in Growth",
      "Multiple inboxes or locations",
      "Facebook and Instagram lead routing",
      "SMS follow-up flows",
      "Custom reporting",
      "Priority support",
      "Custom workflow design",
    ],
    cta: "Talk to us",
  },
]

function Spec({ pkg }: { pkg: Pkg }) {
  const featured = pkg.featured
  return (
    <div
      className={`ps-card ${featured ? "ps-card-warm ring-1 ring-white/15 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.95)]" : ""} flex h-full flex-col rounded-[20px] p-5 sm:p-6 lg:rounded-[24px] lg:p-8`}
    >
      {/* title + recommended */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[22px] font-medium tracking-tight text-white">{pkg.name}</h3>
        {featured && (
          <span className="shrink-0 rounded-full border border-[#537FEA]/40 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86A2F0]">
            Recommended
          </span>
        )}
      </div>
      <p className="mt-2 text-[14px] text-[var(--muted)]">{pkg.tagline}</p>

      {/* price — install fee (hero) over monthly fee (distinct secondary line) */}
      <div className="mt-6">
        <div className="text-[28px] font-medium leading-none tracking-tight text-white tabular-nums">
          {pkg.price}
        </div>
        <div className="mt-2 text-[14px] text-[var(--silver)] tabular-nums">{pkg.cadence}</div>
      </div>

      <div className="ps-rule my-6" />

      {/* key features */}
      <ul className="flex-1 space-y-2.5">
        {pkg.receive.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-[var(--silver)]">
            <Check
              className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[var(--muted)]"
              strokeWidth={2.5}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`group mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-medium transition-all sm:mt-7 lg:mt-9 ${
          featured
            ? "bg-[#537FEA] text-black hover:bg-[#6A8FEE]"
            : "border border-[var(--hair-strong)] text-white hover:border-white/30 hover:bg-white/[0.03]"
        }`}
      >
        {pkg.cta}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  )
}

export function Packages({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {packages.map((pkg, i) => (
        <Reveal key={pkg.name} delay={i * 90}>
          <Spec pkg={pkg} />
        </Reveal>
      ))}
      {detailed && (
        <div className="md:col-span-3">
          <div className="ps-rule mb-7 mt-4" />
          <p className="mx-auto max-w-2xl text-center text-[13.5px] leading-relaxed text-[var(--muted)]">
            Prices are in AUD and exclude GST. SMS, Meta lead routing, and custom
            integrations depend on your current tools and approval.
          </p>
        </div>
      )}
    </div>
  )
}
