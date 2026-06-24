import type { Metadata } from "next"

import { PageHeader } from "@/components/public-site/page-header"
import { Reveal } from "@/components/public-site/reveal"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We are growing carefully. We expect one sales and growth role to open soon, and we are always interested in hearing from exceptional builders, engineers and AI automation people.",
}

const editorial = [
  {
    h: "How we work",
    body: [
      "We build carefully and keep things simple. We would rather ship one dependable thing than a dozen half-finished ones, and we hold a high bar for everything that reaches a customer. Our work is useful AI automation for real service businesses. Security, reliability and careful handling of customer data are part of how we build.",
    ],
  },
  {
    h: "Who we look for",
    body: [
      "We are interested in people who think clearly, care about detail and take ownership without needing layers of management.",
      "We are especially interested in future conversations with AI builders, senior engineers, automation specialists, product-minded programmers, operators and sales people who understand service businesses.",
    ],
  },
]

type Role = {
  eyebrow: string
  eyebrowAccent?: boolean
  dot?: boolean
  title: string
  body: string[]
  focus: string[]
}

const roles: Role[] = [
  {
    eyebrow: "Key future role",
    title: "AI Builder / Product Engineer",
    body: [
      "As Solren grows, we will need an exceptional AI builder who can work close to the core product and own large parts of the build.",
      "Comfortable across AI workflows, automation, backend, frontend detail, integrations and product judgement.",
    ],
    focus: [
      "AI workflow design",
      "n8n automation",
      "Supabase and database logic",
      "Frontend product detail",
      "Integrations",
      "Reliability testing",
    ],
  },
  {
    eyebrow: "Opening soon",
    eyebrowAccent: true,
    dot: true,
    title: "Sales / Growth",
    body: [
      "We expect one sales and growth role to open soon.",
      "Suits someone who can speak clearly with service business owners, understand their follow-up problems and help the right customers get started.",
    ],
    focus: [
      "Speaking with business owners",
      "Qualifying good-fit customers",
      "Explaining Solren clearly",
      "Helping customers choose the right install",
      "Professional follow-up",
    ],
  },
  {
    eyebrow: "Future security role",
    title: "Cybersecurity Engineer",
    body: [
      "As Solren grows, we will need someone who can help protect client workflows, connected accounts and customer enquiry data as more businesses run through the platform.",
      "This role suits someone who thinks carefully about security, infrastructure, access control, monitoring, incident response and operational risk.",
    ],
    focus: [
      "Access control",
      "Security reviews",
      "Data protection",
      "Monitoring and alerts",
      "Incident response",
      "Infrastructure hardening",
    ],
  },
]

function RoleCard({ role }: { role: Role }) {
  return (
    <div className="flex h-full flex-col rounded-[20px] border border-[var(--hair)] bg-white/[0.015] p-6 sm:p-7">
      <span
        className={`ps-label flex items-center gap-1.5 !text-[11px] !tracking-[0.14em] ${
          role.eyebrowAccent ? "!text-[#86A2F0]" : "!text-[#b4bac4]"
        }`}
      >
        {role.dot && <span className="h-1 w-1 rounded-full bg-[#537FEA]" aria-hidden="true" />}
        {role.eyebrow}
      </span>
      <h3 className="mt-3 text-[18px] font-medium tracking-tight text-white">{role.title}</h3>
      <div className="mt-3 space-y-3">
        {role.body.map((p, j) => (
          <p key={j} className="text-[14.5px] leading-relaxed text-[var(--silver)]">
            {p}
          </p>
        ))}
      </div>
      <span className="ps-label mt-6 block !text-[11px] !tracking-[0.14em] !text-[#b4bac4]">Focus areas</span>
      <ul className="mt-3 space-y-2">
        {role.focus.map((f, j) => (
          <li key={j} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--silver)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)]" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        containerClass="max-w-[1080px]"
        title={<>Build useful AI systems.</>}
        sub="We are growing carefully. We expect one sales and growth role to open soon, and we are always interested in hearing from exceptional builders and engineers."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-6">
          {/* editorial — left-rail heading + a readable reading column (two columns
              on desktop), separated by whitespace rather than rules */}
          <div className="space-y-14 sm:space-y-16">
            {editorial.map((s, i) => (
              <Reveal key={s.h} delay={i * 30}>
                <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-14">
                  <h2 className="text-[19px] font-medium tracking-tight text-white">{s.h}</h2>
                  <div className="mt-4 max-w-[680px] space-y-4 lg:mt-0">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-[16px] leading-[1.7] text-[var(--silver)]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* future roles — same rail; cards aligned to the content grid */}
          <Reveal>
            <div className="mt-16 border-t border-[var(--hair)] pt-12 sm:mt-20 sm:pt-14">
              <h2 className="text-[19px] font-medium tracking-tight text-white">Future roles</h2>
              <div className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {roles.map((role) => (
                  <RoleCard key={role.title} role={role} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* open roles + contact — same two-column editorial rhythm */}
          <Reveal>
            <div className="mt-16 border-t border-[var(--hair)] pt-12 sm:mt-20 sm:pt-14 lg:grid lg:grid-cols-[220px_1fr] lg:gap-14">
              <h2 className="text-[19px] font-medium tracking-tight text-white">Open roles</h2>
              <div className="mt-4 max-w-[680px] space-y-4 text-[16px] leading-[1.7] text-[var(--silver)] lg:mt-0">
                <p>
                  We are not hiring broadly right now, but we expect one sales and growth role to
                  open soon. We are also interested in hearing from exceptional builders, engineers
                  and AI automation people as Solren grows.
                </p>
                <p>
                  If you believe you could help build or grow Solren, contact us at{" "}
                  <a
                    href="mailto:contact@solren.ai"
                    className="text-white underline-offset-2 hover:underline"
                  >
                    contact@solren.ai
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
