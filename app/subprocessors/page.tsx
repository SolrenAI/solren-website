import type { Metadata } from "next"
import Link from "next/link"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Subprocessors",
  description:
    "The trusted third-party providers Solren uses to deliver its service, and the role each plays.",
  alternates: { canonical: "/subprocessors" },
}

/* The provider list. Wording is deliberately careful: each row states only the
   purpose and the kind of data involved — no certifications, no data-residency
   claims, and no claims about how providers train their own models. */
const providers: { provider: string; purpose: string; data: string }[] = [
  {
    provider: "OpenAI",
    purpose: "AI-assisted reply drafting and message processing",
    data: "Message content where required to provide the service",
  },
  {
    provider: "Google Workspace and Gmail",
    purpose: "Connected email services",
    data: "Email account connection and message data where a client connects Gmail",
  },
  {
    provider: "Stripe",
    purpose: "Payment processing",
    data: "Billing and payment information",
  },
  {
    provider: "Supabase",
    purpose: "Database and storage",
    data: "Client, lead and workflow data",
  },
  {
    provider: "n8n",
    purpose: "Workflow automation",
    data: "Workflow events and automation data",
  },
  {
    provider: "Vercel",
    purpose: "Website and application hosting",
    data: "Website and application hosting data",
  },
  {
    provider: "Hosting and infrastructure providers",
    purpose: "Running the underlying service",
    data: "Technical and infrastructure data",
  },
]

const headCell =
  "text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--silver)]"
const mobileLabel =
  "mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--faint)] sm:hidden"
const cols = "sm:grid sm:grid-cols-[1.1fr_1.5fr_1.6fr] sm:gap-8"
/* very faint vertical divider, desktop only — guides the eye between columns
   without the heavy lines that would make the table read like a spreadsheet */
const divCell = "sm:border-l sm:border-white/[0.05] sm:pl-8"

/* Why-this-page intro + the provider table, rendered between the contents box
   and the policy sections. */
const afterToc = (
  <>
    <Reveal>
      <h2 className="text-[19px] font-medium tracking-tight text-white">
        Why this page exists
      </h2>
      <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--silver)]">
        Solren uses a small number of trusted providers to host the service,
        process payments, connect email accounts, run automation and support
        AI-assisted reply drafting. This page explains who those providers are and
        what they help us do.
      </p>
    </Reveal>

    <Reveal>
      <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--hair)]">
        {/* header row — shown from sm up; on mobile each cell carries its own label */}
        <div className={`hidden border-b border-[var(--hair)] bg-white/[0.02] px-7 py-4 ${cols}`}>
          <span className={headCell}>Provider</span>
          <span className={`${headCell} ${divCell}`}>Purpose</span>
          <span className={`${headCell} ${divCell}`}>Data involved</span>
        </div>

        {providers.map((p, i) => (
          <div
            key={p.provider}
            className={`px-7 py-7 ${cols} ${
              i !== providers.length - 1 ? "border-b border-[var(--hair)]" : ""
            }`}
          >
            <div>
              <span className={mobileLabel}>Provider</span>
              <p className="text-[15px] font-medium text-white">{p.provider}</p>
            </div>
            <div className={`mt-3 sm:mt-0 ${divCell}`}>
              <span className={mobileLabel}>Purpose</span>
              <p className="text-[14.5px] leading-relaxed text-[var(--silver)]">
                {p.purpose}
              </p>
            </div>
            <div className={`mt-3 sm:mt-0 ${divCell}`}>
              <span className={mobileLabel}>Data involved</span>
              <p className="text-[14.5px] leading-relaxed text-[var(--silver)]">
                {p.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  </>
)

/* Sections support the table above rather than restating each provider: they
   explain what a subprocessor is, how providers are used and how we work with
   them. */
const sections: LegalSection[] = [
  {
    h: "What a subprocessor is",
    body: [
      "A subprocessor is a third-party service that may process limited information on Solren's behalf to help operate, secure and deliver the service. The table above lists the providers we currently rely on and what each helps us do.",
      "This page is provided for transparency. The providers listed may change over time as the service evolves.",
    ],
  },
  {
    h: "How we use providers",
    body: [
      "We use each provider only for the purpose shown above, and only with the information needed for that purpose. We aim to share the minimum necessary to run the service.",
      "Production systems are kept separate from day-to-day tools, and we work to limit how widely information is shared.",
    ],
  },
  {
    h: "Choosing and working with providers",
    body: [
      "We select providers we consider reputable and rely on the security and contractual protections they make available.",
      "Internal access to information is limited to what is needed to operate and support the service, and is reviewed and removed when it is no longer required.",
    ],
  },
  {
    h: "AI-assisted reply drafting",
    body: [
      "Where Solren helps draft replies, message content may be processed by an AI provider, such as OpenAI, only where needed to generate a draft.",
      "You stay in control of what is sent, and we share only what is required to provide the feature.",
    ],
  },
  {
    h: "Changes to this list",
    body: [
      "We may add, remove or replace providers as the service changes. When we make a material change, we will revise the date shown at the top of this page.",
    ],
  },
  {
    h: "Questions",
    body: [
      "Questions about our providers, or want more detail on how a specific provider is used? Email contact@solren.ai and we will review your request.",
    ],
  },
]

export default function SubprocessorsPage() {
  return (
    <LegalDoc
      eyebrow="Trust"
      title={<>Subprocessors.</>}
      sub="A transparent list of the trusted providers that help Solren run, process payments, connect email accounts and support AI-assisted reply drafting."
      dateLabel="Last reviewed"
      lastUpdated="1 January 2026"
      wide
      afterToc={afterToc}
      sections={sections}
      footer={
        <>
          For how we handle personal information more broadly, see our{" "}
          <Link
            href="/privacy"
            className="text-[var(--silver)] underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          . This page is provided for transparency and does not constitute legal
          advice.
        </>
      }
    />
  )
}
