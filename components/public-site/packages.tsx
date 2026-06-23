import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "./reveal"

type Pkg = {
  index: string
  name: string
  tagline: string
  forWho: string
  price: string
  cadence: string
  receive: string[]
  cta: string
  featured?: boolean
}

const packages: Pkg[] = [
  {
    index: "01 / 03",
    name: "Starter Install",
    tagline: "Core email follow-up system.",
    forWho: "Best for one inbox, one team, and a simple setup.",
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
    index: "02 / 03",
    name: "Growth Install",
    tagline: "Beyond the inbox: web, Google and phone.",
    forWho:
      "Best for businesses getting leads from website forms, Google, and phone enquiries.",
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
    index: "03 / 03",
    name: "Enterprise Install",
    tagline: "Multi-channel lead system.",
    forWho: "Best for multiple teams, locations, inboxes, or higher lead volume.",
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
      className={`ps-card ${featured ? "ps-card-warm" : ""} flex h-full flex-col rounded-[20px] p-6 lg:rounded-[24px] lg:p-8`}
    >
      {/* header row */}
      <div className="flex items-center justify-between">
        <span className="ps-label">{pkg.index}</span>
        {featured && (
          <span className="rounded-full border border-[#537FEA]/40 bg-[#537FEA]/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#86A2F0]">
            Recommended
          </span>
        )}
      </div>

      <h3 className="mt-5 text-[22px] font-medium tracking-tight text-white lg:mt-6">
        {pkg.name}
      </h3>
      <p className="mt-1.5 text-[15px] text-[var(--silver)]">{pkg.tagline}</p>

      <p className="mt-4 text-[14px] leading-relaxed text-[var(--muted)] md:min-h-[2.6rem]">
        {pkg.forWho}
      </p>

      <div className="ps-rule my-7" />

      {/* price */}
      <div>
        <div className="text-[26px] font-medium tracking-tight text-white tabular-nums">
          {pkg.price}
        </div>
        <div className="mt-1 text-[13px] text-[var(--muted)]">{pkg.cadence}</div>
      </div>

      {/* receive list */}
      <ul className="mt-7 flex-1 space-y-3.5">
        {pkg.receive.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] text-[var(--silver)]">
            <Check
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                featured ? "text-[#86A2F0]" : "text-[var(--muted)]"
              }`}
              strokeWidth={2.5}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-medium transition-all lg:mt-9 ${
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
    <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
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
