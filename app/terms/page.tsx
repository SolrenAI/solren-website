import type { Metadata } from "next"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use Solren, the AI follow-up and automation service for service businesses.",
}

const sections: LegalSection[] = [
  {
    h: "Agreement to terms",
    body: [
      "These Terms of Service (the “Terms”) govern your access to and use of Solren, including our website, the Solren service, and any related setup, onboarding and support.",
      "By using Solren, accessing the service, submitting onboarding details, connecting an account, approving work, or paying for a plan, you agree to these Terms. If you do not agree, do not use the service.",
      "If you are using Solren on behalf of a business, you accept these Terms on that business’s behalf.",
    ],
  },
  {
    h: "Who we are",
    body: [
      "Solren (“Solren”, “we”, “us” or “our”) operates this website and provides the Solren service to client businesses. Solren is installed and managed for clients as described in these Terms and at the time of purchase.",
      "You can contact us at contact@solren.ai.",
    ],
  },
  {
    h: "What Solren does",
    body: [
      "Solren is an AI lead and reply automation and follow-up system for service businesses. It can help capture enquiries, draft replies, send approved messages, organise leads and support booking and follow-up workflows.",
      "The exact features provided depend on the plan you purchased, your configuration and the services you connect.",
    ],
  },
  {
    h: "Business use only",
    body: [
      "Solren is intended for business use by service businesses. It is not intended for personal, household or consumer use, and it is not directed to children.",
      "You must use Solren only for lawful business purposes.",
    ],
  },
  {
    h: "Eligibility and authority",
    body: [
      "You must be able to form a binding contract to use Solren. If you use Solren on behalf of a business, you confirm that you have the authority to bind that business to these Terms.",
      "You are responsible for complying with the laws that apply to your business and your use of the service.",
    ],
  },
  {
    h: "Accounts and access",
    body: [
      "You are responsible for your account, the credentials used to access it, and the activity that occurs under it. You must keep access secure and limit it to authorised people.",
      "You must promptly notify us of any access issue, suspected unauthorised use or security concern.",
    ],
  },
  {
    h: "Client responsibilities",
    body: [
      "You are responsible for how you set up and use Solren. In particular, you are responsible for:",
    ],
    bullets: [
      "The accuracy and completeness of the information you provide.",
      "Having permission to contact the leads and customers you communicate with.",
      "Complying with the laws that apply to your business, including privacy, spam, consumer and marketing laws.",
      "Ensuring messages, offers, quotes and follow-ups are lawful and appropriate.",
      "Reviewing and approving drafts where approval mode is used.",
      "Configuring account access and connected services responsibly.",
      "Backing up important business records where needed.",
      "Promptly telling us about errors, access issues or suspicious activity.",
    ],
  },
  {
    h: "Connected services",
    body: [
      "Solren can only work properly when the services it depends on are available, authorised and correctly configured. You are responsible for maintaining access to your connected services, including Gmail or Google Workspace where relevant.",
      "If a connected service becomes unavailable, is disconnected or is changed, some or all of the service may be limited or stop working.",
    ],
  },
  {
    h: "Google Workspace and Gmail",
    body: [
      "When you connect Gmail or Google Workspace, you authorise Solren to access that account only to provide the configured automation features, such as reading enquiries, preparing replies, sending approved messages and supporting follow-up workflows.",
      "Solren’s use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
      "You can disconnect access at any time, but doing so may limit or stop parts of the service.",
    ],
  },
  {
    h: "AI-generated replies and automation",
    body: [
      "Solren uses AI providers, including OpenAI, to help draft replies and process message content, only where needed to provide the service. You acknowledge that:",
    ],
    bullets: [
      "AI outputs may be incomplete, inaccurate or unsuitable.",
      "AI-generated drafts are not legal, financial or professional advice.",
      "You remain responsible for reviewing, approving and using messages sent from your business.",
      "Solren supports communication workflows but does not guarantee that any message will produce a booking, sale, quote acceptance or revenue result.",
    ],
  },
  {
    h: "Human review and business judgement",
    body: [
      "Solren is a support tool and managed automation system, not a replacement for your business judgement.",
      "You remain responsible for your decisions, including quotes, pricing, job acceptance, bookings and your customer relationships.",
    ],
  },
  {
    h: "Setup, onboarding and dependencies",
    body: [
      "Setting up and running Solren depends on your cooperation. You acknowledge that:",
    ],
    bullets: [
      "Setup depends on you providing accurate information, access, approvals and timely responses.",
      "Installation timelines are estimates unless expressly agreed in writing.",
      "Delays caused by missing access, incomplete information, third-party issues or client delay may affect delivery.",
      "Solren may adjust setup steps as needed to suit your workflow.",
    ],
  },
  {
    h: "Subscriptions and payment",
    body: [
      "Fees and inclusions for your plan are described at the time of purchase. Unless otherwise agreed in writing:",
    ],
    bullets: [
      "Fees are payable in advance.",
      "Setup or installation fees may be required before work begins.",
      "Monthly fees renew automatically until cancelled.",
      "Taxes and GST, and charges such as SMS fees, Meta lead routing or custom integrations, may be additional where applicable.",
      "Failed or overdue payments may pause or limit the service.",
      "Payment processing is handled by Stripe under its own terms.",
    ],
  },
  {
    h: "Cancellations",
    body: [
      "You may cancel future recurring billing at any time. When you cancel:",
    ],
    bullets: [
      "Cancellation stops future recurring charges.",
      "Cancellation does not automatically refund amounts already paid.",
      "Access and service may continue until the end of the paid billing period, unless otherwise agreed.",
      "Custom setup or configuration work may not be recoverable once started.",
    ],
  },
  {
    h: "Refunds",
    body: [
      "As a specific exception to the general non-refund terms in this section, eligible clients are offered a 30-day satisfaction guarantee starting from go-live, as described on the Pricing page. If, within 30 days of going live, the service is not catching and replying to enquiries as described, you may request a refund of that month's subscription fee and cancel, with no lock-in. Other fees remain payable as agreed in writing or at the time of purchase.",
      "Unless required by law or otherwise agreed in writing, fees already paid are non-refundable, including setup, installation, configuration and custom workflow work. If you believe there has been a billing error, contact us and we will review it.",
      "Nothing in these Terms limits rights that cannot be excluded under applicable law, including the Australian Consumer Law.",
    ],
  },
  {
    h: "Availability and maintenance",
    body: [
      "We work to keep Solren reliable, but we do not guarantee that the service will be uninterrupted, timely, secure or error-free.",
      "Maintenance, updates, provider outages, client account issues or external factors may affect availability from time to time.",
    ],
  },
  {
    h: "Third-party services",
    body: [
      "Solren relies on third-party services such as OpenAI, Google Workspace, Gmail, Stripe, Supabase, n8n, Vercel and hosting infrastructure to operate.",
      "The availability, pricing, rules, permissions and terms of these services are outside our control. Changes made by third-party providers may affect features, and your use of connected services may also be subject to their terms.",
    ],
  },
  {
    h: "Customer data",
    body: [
      "As between you and Solren, your business data and your customers’ enquiry data remain yours.",
      "You grant Solren the permissions needed to process, store, transmit, access and use that data to provide, operate, support, secure and improve the service.",
      "You are responsible for having the right to provide or connect that data, including any necessary permissions or consents.",
    ],
  },
  {
    h: "Privacy and security",
    body: [
      "We handle information as described in our Privacy Policy and Security page. By using Solren, you acknowledge those pages.",
      "We take reasonable technical and organisational measures to protect information, but no system can be guaranteed completely secure.",
    ],
  },
  {
    h: "Intellectual property",
    body: [
      "Solren owns its software, workflows, systems, templates, designs, brand, documentation, configuration logic and internal processes, together with all related intellectual property.",
      "While you are subscribed or while the service is being provided, you receive a limited, non-exclusive, non-transferable right to use the service. No ownership of Solren’s systems transfers to you.",
      "Custom workflow configuration created as part of providing the service may be used by Solren to operate and improve the service, unless otherwise agreed in writing.",
    ],
  },
  {
    h: "Prohibited use",
    body: ["You must not use Solren to:"],
    bullets: [
      "Send unlawful, deceptive, abusive, harmful or unsolicited messages.",
      "Infringe the rights of others.",
      "Violate privacy, spam, consumer or marketing laws.",
      "Attempt to gain unauthorised access to any system or data.",
      "Interfere with or disrupt the service.",
      "Misuse AI outputs.",
      "Upload or process unlawful or harmful content.",
      "Use Solren for illegal or high-risk purposes.",
    ],
  },
  {
    h: "Disclaimers",
    body: [
      "To the maximum extent permitted by law, Solren is provided on an “as is” and “as available” basis. Results depend on your market, your offer, your response process, your connected accounts, customer behaviour and how you run your business.",
      "Solren does not guarantee:",
    ],
    bullets: [
      "Bookings, leads, quote acceptance or revenue.",
      "Customer replies or any particular response rate.",
      "Uninterrupted, secure or error-free service.",
      "Perfect accuracy of any output.",
      "That every enquiry will be captured or followed up.",
    ],
  },
  {
    h: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Solren is not liable for indirect, incidental, special, consequential or economic losses, including lost profits, lost revenue, lost opportunities, loss of data, business interruption, reputational harm or customer disputes.",
      "To the maximum extent permitted by law, Solren’s total liability arising out of or in connection with the service is limited to the amount you paid to Solren for the service in the previous 3 months, or, where permitted by law, the resupply of the service.",
      "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including the Australian Consumer Law.",
    ],
  },
  {
    h: "Indemnity",
    body: [
      "To the maximum extent permitted by law, you agree to indemnify Solren against claims, losses, costs or liabilities arising from:",
    ],
    bullets: [
      "Your misuse of the service.",
      "Unlawful or unauthorised messages sent through your use of the service.",
      "Customer disputes relating to your business.",
      "Inaccurate information you supply.",
      "Your breach of these Terms.",
      "Your connected accounts, offers, quotes or business operations.",
      "Your failure to obtain consent or permission to contact leads or customers.",
    ],
  },
  {
    h: "Changes to the service",
    body: [
      "We may update, improve, change, suspend or remove features over time.",
      "We may also update these Terms. When we make material changes, we will revise the date shown at the top of this page. Continued use of the service after an update means the updated Terms apply.",
    ],
  },
  {
    h: "Suspension and termination",
    body: [
      "You may stop using Solren at any time by cancelling and ceasing use. We may suspend or terminate access, in whole or in part, if:",
    ],
    bullets: [
      "Payments fail or are overdue.",
      "You breach these Terms.",
      "Connected accounts create a security or legal risk.",
      "The service is misused.",
      "Access required to provide the service is removed.",
      "Continuing the service creates an operational, legal or security risk.",
    ],
  },
  {
    h: "Governing law",
    body: [
      "These Terms are governed by the laws of Australia, unless a different jurisdiction is agreed in writing.",
      "Nothing in these Terms limits rights that cannot be excluded under applicable law.",
    ],
  },
  {
    h: "Contact",
    body: [
      "Questions about these Terms? Email us at contact@solren.ai and we will get back to you.",
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal terms"
      title={<>Terms of Service.</>}
      sub="These terms explain how Solren is provided, what we are responsible for and what you agree to when using Solren."
      lastUpdated="22 June 2026"
      toc
      sections={sections}
      footer={
        <>
          These Terms are provided for transparency and do not constitute legal
          advice. For questions, email contact@solren.ai. The refund and 30-day
          guarantee wording on this page is pending legal review.
        </>
      }
    />
  )
}
