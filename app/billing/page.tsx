import type { Metadata } from "next"
import Link from "next/link"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Billing",
  description:
    "How payments, invoices, subscriptions, cancellations and refunds work with Solren.",
}

const sections: LegalSection[] = [
  {
    h: "Overview",
    body: [
      "This page explains how billing works with Solren, including payments, invoices, subscriptions, cancellations, refunds and billing questions.",
      "Solren is installed and managed for service businesses. Some fees relate to setup and configuration work, while others relate to ongoing monthly service.",
    ],
  },
  {
    h: "Prices and currency",
    body: [
      "Prices are shown in Australian dollars unless stated otherwise.",
      "Package prices, setup fees and monthly fees are shown at the time of purchase or agreement. Custom work, additional integrations, SMS usage, Meta lead routing or other third-party costs may be quoted separately where applicable.",
    ],
  },
  {
    h: "GST and taxes",
    body: [
      "Prices may exclude GST unless stated otherwise.",
      "If Solren is registered or required to be registered for GST, GST will be added where applicable and shown on invoices. If Solren is not registered for GST, GST will not be charged.",
      "Clients are responsible for any taxes, duties or charges that apply to their own business or jurisdiction.",
    ],
  },
  {
    h: "Setup and install fees",
    body: [
      "Some Solren packages include a setup, install or configuration fee.",
      "Setup fees cover work such as onboarding, account review, workflow planning, connecting services, configuring automations, testing and preparing the system for use.",
      "Setup and install fees may be payable before work begins.",
      "Because setup and configuration work is customised and begins once Solren starts working on the install, setup fees are generally non-refundable once work has started, unless required by law or otherwise agreed in writing.",
    ],
  },
  {
    h: "Monthly subscriptions",
    body: [
      "Monthly fees cover ongoing access, automation operation, monitoring, support and improvements included in the selected package.",
      "Monthly subscriptions are billed in advance on a recurring basis unless otherwise agreed in writing.",
      "Subscriptions continue until cancelled.",
    ],
  },
  {
    h: "What is included",
    body: [
      "Each package includes the features described at the time of purchase or agreement.",
      "Solren may improve, update or adjust features over time. If a requested feature or workflow is outside the selected package, Solren may quote it separately.",
    ],
  },
  {
    h: "Extra costs and third-party fees",
    body: ["Some costs may be additional, depending on your setup. These may include:"],
    bullets: [
      "SMS usage.",
      "Meta lead routing.",
      "Paid third-party tools.",
      "Custom integrations.",
      "Extra inboxes, locations or workflows.",
      "Unusual setup requirements.",
      "Changes requested after setup has started.",
    ],
  },
  {
    h: "Invoices and receipts",
    body: [
      "Receipts and invoices are issued through Stripe or Solren’s billing process.",
      "If you need a copy of an invoice, a billing update or a change to billing details, contact us at contact@solren.ai.",
      "Where tax invoices are required, Solren will provide them in line with applicable tax requirements.",
    ],
  },
  {
    h: "Payment processing",
    body: [
      "Payments are processed through Stripe or another approved payment provider.",
      "Card details are handled by Stripe, not stored directly by Solren.",
      "By providing payment details, you authorise Solren or its payment processor to charge fees due for your selected package, setup work, subscription or agreed services.",
    ],
  },
  {
    h: "Failed payments",
    body: [
      "If a payment fails, Solren may retry the payment, contact you for updated payment details, pause parts of the service, or suspend access until payment is resolved.",
      "You remain responsible for fees incurred before cancellation or suspension.",
    ],
  },
  {
    h: "Plan changes",
    body: [
      "You can request to change plans as your business needs change.",
      "Plan upgrades, downgrades or changes may affect available features, workflows, support level, monthly fees and setup requirements.",
      "Some changes may require additional setup or configuration fees.",
    ],
  },
  {
    h: "Cancellations",
    body: [
      "You may cancel future recurring billing by contacting Solren.",
      "Cancellation takes effect at the end of the current paid billing period unless otherwise agreed in writing.",
      "Cancelling does not automatically refund fees already paid.",
      "If connected services are removed or access is disconnected, parts of Solren may stop working before the end of the billing period.",
    ],
  },
  {
    h: "Refunds",
    body: [
      "Unless required by law or otherwise agreed in writing, fees already paid are non-refundable, including setup, installation, configuration and custom workflow work.",
      "If you believe there has been a billing error, contact us and we will review it.",
      "Nothing on this page limits rights that cannot be excluded under applicable law, including the Australian Consumer Law.",
    ],
  },
  {
    h: "Billing errors",
    body: [
      "If you believe you have been charged incorrectly, contact contact@solren.ai with the invoice, charge date and details of the issue.",
      "Solren will review billing errors reasonably and correct confirmed mistakes.",
    ],
  },
  {
    h: "Chargebacks and disputes",
    body: [
      "If you dispute a charge through your bank or payment provider without first contacting Solren, access to the service may be paused while the dispute is reviewed.",
      "This does not limit any rights you may have under applicable law.",
    ],
  },
  {
    h: "Access after cancellation",
    body: [
      "After cancellation, Solren may disable workflows, remove access, stop automations or disconnect services.",
      "You should save any records you need before cancellation takes effect.",
      "Solren may retain billing and account records where reasonably needed for legal, tax, security or operational purposes.",
    ],
  },
  {
    h: "Contact us",
    body: [
      "Questions about billing? Email contact@solren.ai and a real person will help.",
    ],
  },
]

export default function BillingPage() {
  return (
    <LegalDoc
      eyebrow="Billing"
      title={<>Billing.</>}
      sub="How payments, subscriptions, invoices, cancellations and refunds work."
      lastUpdated="22 June 2026"
      toc
      tightTop
      sections={sections}
      footer={
        <>
          This page is provided for transparency and does not constitute legal
          advice. For billing questions, email contact@solren.ai. Looking for
          plans and pricing? See{" "}
          <Link
            href="/pricing"
            className="text-[var(--silver)] underline-offset-2 hover:underline"
          >
            pricing
          </Link>
          .
        </>
      }
    />
  )
}
