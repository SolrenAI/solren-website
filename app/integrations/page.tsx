import type { Metadata } from "next"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "The trusted services behind Solren, explained in plain English.",
  alternates: { canonical: "/integrations" },
}

/* The few recognizable services customers actually care about — each in one
   plain line. No internal plumbing, no roadmap, no badges. */
const services: { name: string; description: string }[] = [
  { name: "OpenAI", description: "Drafts fast, clear replies for your team to review." },
  { name: "Google Workspace", description: "Reads new enquiries and sends the replies you approve." },
  { name: "Stripe", description: "Handles billing securely. Card details stay with Stripe." },
  { name: "Supabase", description: "Stores your business data reliably in one place." },
]

const managed = [
  "You approve what gets sent.",
  "Your data is stored on secure, access-controlled systems.",
  "Every enquiry follows the same reliable process.",
  "You do not need to manage any technology.",
]

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title="Built on trusted services."
        sub="Solren runs on a few trusted services. Your enquiries move from first message to booked job."
        divider={false}
        compact
        topClass="pt-20 sm:pt-30 lg:pt-30"
        bottomClass="pb-3 sm:pb-8 lg:pb-7"
      />

      {/* No divider — controlled whitespace carries the eye from the hero into the
          cards; the grid sits close beneath the hero as one continuous story. */}
      <section className="pt-3 pb-6 sm:pt-4 sm:pb-12 md:pb-8 lg:pt-2">
        <div className="mx-auto max-w-[1240px] px-6">
          {/* the trusted services */}
          <Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-7"
                >
                  <h2 className="text-[18px] font-medium tracking-tight text-white">{s.name}</h2>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--silver)]">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* one calm reassurance */}
          <Reveal>
            <div className="mt-6 sm:mt-8 lg:mt-6">
              <h2 className="text-[19px] font-medium tracking-tight text-white">
                Installed and managed for you
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:mt-5 sm:grid-cols-2">
                {managed.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-3 text-[15.5px] leading-relaxed text-[var(--silver)]"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#537FEA]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
