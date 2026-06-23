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
  { name: "Stripe", description: "Handles billing securely — card details stay with Stripe." },
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
        title="Built on proven technology."
        sub="Solren runs on a few trusted services so your enquiries move from first message to booked work."
        divider={false}
      />

      {/* section divider aligned to the card grid width (not full page):
          left edge of the OpenAI card to the right edge of Google Workspace */}
      <div className="mx-auto max-w-[1080px] px-6">
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        />
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          {/* the trusted services */}
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7"
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
            <div className="mt-16">
              <h2 className="text-[19px] font-medium tracking-tight text-white">
                Installed and managed for you
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
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
