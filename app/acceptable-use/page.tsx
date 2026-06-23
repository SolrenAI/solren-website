import type { Metadata } from "next"
import Link from "next/link"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "The rules for using Solren responsibly, including prohibited activities and how we enforce them.",
  alternates: { canonical: "/acceptable-use" },
}

const sections: LegalSection[] = [
  {
    h: "Overview",
    body: [
      "This Acceptable Use Policy sets out how Solren may and may not be used. It should be read together with our Terms of Service, which govern your use of the service more broadly.",
      "By using Solren, you agree to use it lawfully, responsibly and in a way that does not harm others.",
    ],
  },
  {
    h: "Responsible use",
    body: [
      "You are responsible for the activity that takes place through your account and for ensuring the people you authorise use Solren in line with this policy.",
    ],
  },
  {
    h: "Prohibited activities",
    body: [
      "When using Solren, you must not:",
    ],
    bullets: [
      "Break any applicable law or regulation.",
      "Send unlawful, deceptive, harassing or abusive messages.",
      "Send unsolicited bulk messages or spam without a lawful basis or consent.",
      "Infringe the intellectual property or privacy rights of others.",
      "Attempt to access systems, data or accounts you are not authorised to access.",
      "Interfere with, disrupt or attempt to compromise the security of the service.",
      "Use the service to build a competing product or to scrape data at scale.",
    ],
  },
  {
    h: "Messaging and consent",
    body: [
      "You are responsible for having an appropriate lawful basis or consent for the enquiries and contacts you process through Solren, and for honouring opt-out and unsubscribe requests.",
    ],
  },
  {
    h: "AI-assisted messaging",
    body: [
      "You are responsible for reviewing, approving and using any AI-assisted drafts appropriately. Solren should not be used to send misleading, unlawful, harmful or unauthorised messages.",
    ],
  },
  {
    h: "Usage limits",
    body: [
      "Solren is provided for normal business use. We may apply reasonable limits to protect the stability, security and availability of the service for everyone.",
    ],
  },
  {
    h: "Enforcement",
    body: [
      "If we believe this policy has been breached, we may limit, suspend or terminate access, with or without notice, depending on the seriousness of the issue. Where appropriate, we may also report unlawful activity to the relevant authorities.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "We may update this Acceptable Use Policy from time to time as our service or legal requirements change. When we make material changes, we will revise the date shown at the top of this page.",
    ],
  },
  {
    h: "Contact us",
    body: [
      "Questions about acceptable use, or want to report a concern? Email contact@solren.ai and we will review your request.",
    ],
  },
]

export default function AcceptableUsePage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title={<>Acceptable Use Policy.</>}
      sub="The rules for using Solren lawfully, safely and responsibly."
      lastUpdated="1 January 2026"
      toc
      sections={sections}
      footer={
        <>
          This policy forms part of, and should be read together with, our{" "}
          <Link
            href="/terms"
            className="text-[var(--silver)] underline-offset-2 hover:underline"
          >
            Terms of Service
          </Link>
          . It is provided for transparency and does not constitute legal advice.
        </>
      }
    />
  )
}
