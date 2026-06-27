import type { Metadata } from "next"
import Link from "next/link"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Solren collects, uses, retains and shares information, and the rights you have over it.",
}

const sections: LegalSection[] = [
  {
    h: "Policy overview",
    body: [
      "This Privacy Policy explains how Solren collects, uses, retains, shares and protects information when you visit our website or use our services. It applies to our public website and to the Solren service we provide to client businesses.",
      "Solren is an AI lead and reply automation and follow-up system for service businesses. It helps a business catch enquiries, reply quickly, follow up automatically and keep more work moving.",
      "This policy is written in plain English and is intended to be clear rather than exhaustive. It is provided for general information and does not constitute legal advice. We may update it as the service develops, as described below.",
    ],
  },
  {
    h: "Who we are",
    body: [
      "Solren (“Solren”, “we”, “us” or “our”) operates this website and provides the Solren service. Where we provide the service to a client business, that client decides what information is sent to Solren and how the service is configured.",
      "In many cases, Solren processes customer enquiry information on behalf of the client business that uses the service. The client is responsible for the information it provides and for how it uses the service with its own customers.",
      "If you have a question about this policy, you can contact us at contact@solren.ai.",
    ],
  },
  {
    h: "Information we collect",
    body: [
      "Depending on how you use Solren and how the service is configured, we may collect or process the following categories of information:",
    ],
    bullets: [
      "Business owner and contact details, such as name, email address and phone number.",
      "Business information, such as business name, website, and trade or industry.",
      "Account and onboarding information provided when setting up the service.",
      "Customer enquiries and the messages sent to and from the business.",
      "Names, phone numbers and email addresses of the people who contact the business.",
      "Quote, booking and job information.",
      "Lead source information, such as how an enquiry arrived.",
      "Connected Gmail or Google Workspace data, where access is authorised.",
      "Workflow and automation data used to run the service.",
      "Billing and subscription information.",
      "Website analytics and cookie data.",
      "Support messages and other communications with us.",
    ],
  },
  {
    h: "Information clients provide to us",
    body: [
      "When a client signs up for or is onboarded onto Solren, we may collect information the client provides directly. This may include business profile details, account and contact information, onboarding form responses, configuration preferences, and the details needed to set up the service.",
      "We may also collect support messages and other communications a client sends to us, so that we can respond and provide the service.",
      "Clients are responsible for ensuring the information they provide to us is accurate and that they are permitted to provide it.",
    ],
  },
  {
    h: "Information collected through enquiries and workflows",
    body: [
      "As part of providing the service, Solren may process enquiries and related information that come into a client’s business. This may include:",
    ],
    bullets: [
      "The content of customer enquiries and the replies prepared or sent on the client’s behalf.",
      "Contact details of the people who enquire, such as names, phone numbers and email addresses.",
      "Quote, booking, job and follow-up details.",
      "Lead source and timing information used to organise and follow up enquiries.",
      "Workflow and automation data needed to run the configured processes.",
    ],
  },
  {
    h: "Information from connected services",
    body: [
      "Where a client connects a third-party account, such as Gmail or Google Workspace, Solren may access information from that account only where authorised by the client and only to provide the configured automation features, such as reading new enquiries and preparing replies.",
      "Clients are responsible for making sure they have the right to connect those accounts and to allow Solren to process the information they contain. Access can be disconnected at any time, after which Solren stops accessing new information from that connection.",
    ],
  },
  {
    h: "Website, cookies and analytics",
    body: [
      "Our website and service may use cookies and similar technologies, together with basic analytics, to keep the product working, understand how it is used and improve it. This may include general device, log and usage information.",
      "You can control or disable cookies through your browser settings. Some features of the website or service may not work as intended if certain cookies are disabled.",
    ],
  },
  {
    h: "How we use information",
    body: [
      "We use information to provide, operate, support, secure and improve the service. Depending on the situation, this may include:",
    ],
    bullets: [
      "Providing, operating and maintaining the service.",
      "Capturing, organising and responding to enquiries on a client’s behalf.",
      "Drafting, sending and scheduling the replies and follow-ups a client has configured.",
      "Supporting booking, quote and job workflows.",
      "Providing customer support and responding to requests.",
      "Monitoring, securing, troubleshooting and improving how Solren works.",
      "Processing payments and managing subscriptions.",
      "Meeting legal, accounting and reporting obligations.",
    ],
  },
  {
    h: "AI, automation and reply drafting",
    body: [
      "Solren may use AI providers, including OpenAI, to help draft replies and process message content, only where needed to provide the service. Content is processed to provide the configured features and is handled under the relevant provider’s terms.",
      "AI-generated drafts are intended to support a client’s team. Clients remain responsible for reviewing and approving how outputs are used, and for the messages ultimately sent from their business.",
    ],
  },
  {
    h: "Google Workspace and Gmail access",
    body: [
      "Where a client connects a Gmail or Google Workspace account, Solren accesses that account only where authorised and only to provide the automation features the client has requested, such as reading new enquiries and preparing or sending replies and follow-ups.",
      "Solren’s use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Solren does not use this information for purposes unrelated to providing the requested features.",
      "Clients are responsible for ensuring they are permitted to connect the account and to allow Solren to process the information it contains. Access can be disconnected at any time.",
    ],
  },
  {
    h: "Payments and billing",
    body: [
      "Payments are processed through Stripe. Card details are handled by Stripe and are not stored directly by Solren. We may receive limited billing and subscription information, such as plan, status and transaction records, to manage accounts and meet our obligations.",
      "For how billing, invoices, subscriptions and cancellations work, see our Billing page.",
    ],
  },
  {
    h: "How we share information",
    body: [
      "We do not sell your information. We share information only where reasonably needed to provide and operate the service, and in the situations described below.",
    ],
    bullets: [
      "With trusted service providers that help us run Solren, as described in the next section.",
      "Where a client has configured the service to send replies or follow-ups on their behalf.",
      "Where required by law, regulation or valid legal process.",
      "In connection with a business transfer, as described below.",
      "With a client’s consent or at their direction.",
    ],
  },
  {
    h: "Third-party service providers",
    body: [
      "Solren relies on trusted third-party service providers to deliver the service. These may include:",
    ],
    bullets: [
      "OpenAI: AI processing to help draft replies and handle message content.",
      "Google Workspace and Gmail: where a client connects these accounts.",
      "Stripe: payment processing.",
      "Supabase: database and storage.",
      "n8n: workflow automation.",
      "Vercel: website and application hosting.",
      "Hosting and infrastructure providers: running the underlying service.",
    ],
  },
  {
    h: "International processing",
    body: [
      "Solren and its service providers may process and store information in countries other than the one in which you are located. Where applicable, we take reasonable steps so that information continues to be handled in line with this policy when it is processed in another country.",
      "By using the service, you understand that information may be processed in this way as part of delivering the service.",
    ],
  },
  {
    h: "Data retention",
    body: [
      "We keep information only for as long as reasonably needed for the purposes described in this policy, including providing the service and meeting legal, billing, security or operational requirements.",
      "When information is no longer needed, we take reasonable steps to remove or de-identify it. Retention periods may vary depending on the type of information and the reason it is held.",
    ],
  },
  {
    h: "Security",
    body: [
      "We take reasonable technical and organisational measures designed to protect information against loss, misuse and unauthorised access. No system or method of transmission can be guaranteed to be completely secure, but we work to reduce risk over time.",
      "Our security practices are described in more detail on our Security page.",
    ],
  },
  {
    h: "Access, correction and deletion",
    body: [
      "You can ask what information we hold about you, ask us to correct it, request a copy, or ask us to delete it, subject to our legal and operational obligations. We will respond within a reasonable time.",
      "Where Solren processes customer enquiry information on behalf of a client business, requests from that business’s customers are generally directed to the client, who controls that information. We will support the client in responding where appropriate.",
      "Depending on where you are located, you may have additional rights under applicable data protection laws. Where such rights apply, we will honour them as required.",
    ],
  },
  {
    h: "Marketing communications",
    body: [
      "We may send service-related messages, such as account, billing, support and security notices, which are part of providing the service. We may also send occasional product updates.",
      "Where we send optional marketing messages, you can opt out using the unsubscribe option in the message or by contacting us. We do not sell your information to third parties for their own marketing.",
    ],
  },
  {
    h: "Children’s privacy",
    body: [
      "Solren is a service for businesses and is not directed to children. We do not knowingly collect information from children. If you believe a child has provided information to us, please contact us so we can take appropriate steps.",
    ],
  },
  {
    h: "Business transfers",
    body: [
      "If Solren is involved in a merger, acquisition, financing, reorganisation or sale of assets, information may be transferred as part of that transaction. Where this happens, we will take reasonable steps so that the information remains subject to appropriate protections, and we will provide notice where appropriate.",
    ],
  },
  {
    h: "Legal requests and compliance",
    body: [
      "We may access, retain or disclose information where we reasonably believe it is necessary to comply with applicable law, regulation or valid legal process, to enforce our terms, or to protect the rights, property or safety of Solren, our clients or others.",
      "Where applicable, we aim to handle such requests in line with relevant laws and to limit disclosure to what is reasonably required.",
    ],
  },
  {
    h: "Changes to this Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time as the service develops or as legal or operational needs change. When we do, we will revise the date shown at the top of this page.",
      "Where changes are material, we will take reasonable steps to provide notice where appropriate. Continued use of the service after an update means the updated policy applies.",
    ],
  },
  {
    h: "Privacy requests and complaints",
    body: [
      "You may contact Solren to request access to your personal information, ask for correction or deletion, or raise a privacy concern. We may need to verify your identity before responding. We will review privacy requests and respond where required by applicable law.",
      "If you believe your privacy has been mishandled, contact us at contact@solren.ai with details of your concern so we can review it.",
    ],
  },
  {
    h: "Contact us",
    body: [
      "If you have questions about this Privacy Policy or wish to make a privacy request, email us at contact@solren.ai and we will get back to you.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Privacy Policy"
      title={<>Privacy, explained clearly.</>}
      sub="This page explains what information we collect, why we collect it and how we protect it."
      lastUpdated="22 March 2026"
      dateLabel="Last reviewed"
      toc
      sections={sections}
      footer={
        <>
          This Privacy Policy is provided for general information about how Solren
          handles information. It may be updated as the service develops, and it
          does not constitute legal advice. For how we protect this information,
          see our{" "}
          <Link
            href="/security"
            className="text-[var(--silver)] underline-offset-2 hover:underline"
          >
            Security
          </Link>{" "}
          page.
        </>
      }
    />
  )
}
