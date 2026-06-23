import type { Metadata } from "next"
import Link from "next/link"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Solren uses cookies and similar technologies on our website and service, and how you can control them.",
  alternates: { canonical: "/cookies" },
}

const sections: LegalSection[] = [
  {
    h: "Overview",
    body: [
      "This Cookie Policy explains how Solren uses cookies and similar technologies on our website and, where relevant, our service. It should be read together with our Privacy Policy, which explains how we handle personal information more broadly.",
    ],
  },
  {
    h: "What cookies are",
    body: [
      "Cookies are small files placed on your device when you visit a website. Similar technologies may include local storage, pixels, tags, scripts and analytics tools.",
      "These technologies can help websites work, remember preferences, measure usage and understand how visitors interact with pages.",
    ],
  },
  {
    h: "Types of cookies we may use",
    body: [
      "Solren may use cookies and similar technologies for the following purposes:",
    ],
    bullets: [
      "Essential operation.",
      "Security.",
      "Preferences.",
      "Analytics and performance.",
      "Website and service improvement.",
      "Marketing or tracking, where enabled.",
    ],
  },
  {
    h: "Essential cookies",
    body: [
      "Essential cookies are needed for the website or service to work properly. They may support page loading, security, session handling, form submissions, account access, preference storage and other basic functionality.",
      "You may be able to block essential cookies in your browser, but some parts of the website or service may not work correctly.",
    ],
  },
  {
    h: "Analytics cookies",
    body: [
      "Solren may use analytics tools to understand how visitors use the website, which pages are viewed, how users move through the site and where improvements are needed.",
      "Analytics information may include pages visited, device or browser information, approximate location, referral source, interaction events and similar usage data.",
    ],
  },
  {
    h: "Preference cookies",
    body: [
      "Preference cookies may be used to remember choices such as display settings, cookie preferences, theme settings or other basic site preferences.",
    ],
  },
  {
    h: "Marketing and tracking technologies",
    body: [
      "Where enabled, Solren may use marketing or tracking technologies to understand campaign performance, improve advertising, measure lead sources or understand how visitors interact with the website.",
      "We do not use marketing or tracking technologies to collect sensitive information intentionally. If marketing pixels or similar technologies are used, they may be provided by third-party services and subject to those providers’ terms and privacy practices.",
    ],
  },
  {
    h: "Third-party services",
    body: [
      "Solren may use trusted third-party services that place or read cookies or similar technologies. These may include hosting, analytics, payment, advertising, form, security or performance providers.",
      "These providers may process information according to their own privacy policies and terms, where applicable.",
    ],
  },
  {
    h: "How to manage cookies",
    body: [
      "You can control or delete cookies through your browser settings. If Solren provides cookie controls on the website, you may also use those controls to manage certain preferences.",
      "If you block or delete cookies, some parts of the website or service may not work as intended.",
    ],
  },
  {
    h: "Browser settings",
    body: [
      "Most browsers allow you to block cookies, delete existing cookies or receive alerts before cookies are stored. Browser settings vary, so you should check your browser’s help or settings menu for instructions.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "We may update this Cookie Policy from time to time as our website, tools or legal requirements change. When we make material changes, we will revise the date shown at the top of this page.",
    ],
  },
  {
    h: "Contact us",
    body: [
      "Questions about cookies? Email contact@solren.ai and we will review your request.",
    ],
  },
]

export default function CookiesPage() {
  return (
    <LegalDoc
      eyebrow="Cookies"
      title={<>Cookie Policy.</>}
      sub="How we use cookies and how you can control them."
      lastUpdated="22 June 2026"
      toc
      sections={sections}
      footer={
        <>
          For more information about how Solren handles personal information, see
          our{" "}
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
