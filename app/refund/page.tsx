import type { Metadata } from "next"
import Link from "next/link"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "How refunds and billing work for Solren's installed, managed follow-up service.",
  alternates: { canonical: "/refund" },
}

const sections: LegalSection[] = [
  {
    h: "Overview",
    body: [
      "This Refund Policy explains how refunds are handled for Solren. Solren is an installed and managed follow-up system for service businesses, with payments processed through Stripe or another approved payment provider.",
      "This policy should be read together with our Billing page and Terms of Service.",
    ],
  },
  {
    h: "Subscriptions",
    body: [
      "Solren is provided on a subscription basis unless otherwise agreed in writing.",
      "You may cancel future recurring billing by emailing contact@solren.ai, unless another cancellation process has been agreed in writing. Cancellation stops future charges from the end of the current paid billing period, but it does not automatically refund fees already paid or time already billed.",
    ],
  },
  {
    h: "Setup, installation and configuration",
    body: [
      "Some Solren packages include setup, installation, onboarding or configuration work.",
      "This work may include account review, workflow planning, connecting services, configuring automations, testing, preparing reply flows and setting up the system for your business.",
      "Because this work is customised and begins once Solren starts your install, setup, installation and configuration fees are generally non-refundable once work has started, unless required by law or otherwise agreed in writing.",
    ],
  },
  {
    h: "Custom work and third-party costs",
    body: [
      "Custom workflows, additional integrations, SMS usage, Meta lead routing, paid third-party tools or other agreed extras may be charged separately.",
      "Unless required by law or otherwise agreed in writing, fees for custom work, usage-based charges and third-party costs are generally non-refundable once incurred.",
    ],
  },
  {
    h: "Refund requests",
    body: [
      "If you believe there has been a billing issue or you are requesting a refund, contact us at contact@solren.ai with your invoice details, charge date and a short explanation of the request.",
      "We will review refund requests reasonably and in line with this policy, your agreement with Solren and applicable law.",
      "We do not generally provide refunds for change of mind, unused time, unused features, delays caused by missing client information or access, or a decision not to continue after setup work has started, unless required by law or otherwise agreed in writing.",
      "Unless required by law or otherwise agreed in writing, fees already paid are non-refundable, including setup, installation, configuration, subscription and custom workflow fees.",
    ],
  },
  {
    h: "Billing errors",
    body: [
      "If Solren confirms that you have been charged incorrectly, we will correct the billing error. This may include issuing a refund, credit or adjustment where appropriate.",
    ],
  },
  {
    h: "Australian Consumer Law",
    body: [
      "Nothing in this policy limits rights that cannot be excluded under applicable law, including the Australian Consumer Law.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "We may update this policy from time to time. When we make material changes, we will revise the date shown at the top of this page.",
    ],
  },
  {
    h: "Contact",
    body: [
      "To request a refund or ask about billing, email contact@solren.ai. You can also review billing information on the Billing page.",
    ],
  },
]

export default function RefundPage() {
  return (
    <LegalDoc
      eyebrow="Refunds"
      title={<>Refund Policy.</>}
      sub="How refunds, cancellations and billing reviews work."
      lastUpdated="22 June 2026"
      summary={{
        title: "Refund summary",
        items: [
          "Setup and configuration work is generally non-refundable once started.",
          "Cancelling stops future recurring billing, but does not automatically refund time already billed.",
          "Billing errors will be reviewed and corrected where appropriate.",
        ],
      }}
      sections={sections}
      footer={
        <>
          For billing details see the{" "}
          <Link
            href="/billing"
            className="text-[var(--silver)] underline-offset-2 hover:underline"
          >
            Billing
          </Link>{" "}
          page, and our{" "}
          <Link
            href="/terms"
            className="text-[var(--silver)] underline-offset-2 hover:underline"
          >
            Terms of Service
          </Link>
          . This page is provided for transparency and does not constitute legal
          advice.
        </>
      }
    />
  )
}
