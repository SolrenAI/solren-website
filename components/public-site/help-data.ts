/* Help Centre content. One ordered list of articles drives the index grid,
   the article pages (via a dynamic route), previous/next navigation and the
   related links. Australian spelling, friendly and plain, no hype. */

export const LAST_UPDATED = "June 2026"

export type HelpSection = { h?: string; p?: string[]; bullets?: string[] }

export type HelpArticle = {
  slug: string
  title: string
  category: string
  summary: string
  body: HelpSection[]
  cta?: { label: string; href: string }
  related?: string[]
}

export const helpCategories: { id: string; label: string }[] = [
  { id: "getting-started", label: "Getting Started" },
  { id: "billing", label: "Accounts & Billing" },
  { id: "integrations", label: "Integrations" },
  { id: "privacy", label: "Privacy and security" },
  { id: "support", label: "Support" },
]

export const helpArticles: HelpArticle[] = [
  {
    slug: "how-solren-works",
    title: "How does Solren work?",
    category: "getting-started",
    summary: "A quick overview of how Solren captures enquiries, drafts replies and follows up.",
    body: [
      {
        p: [
          "Solren is a follow-up system for service businesses. It watches the channels where your enquiries arrive, helps draft quick replies, and keeps following up until the job is booked or the lead is closed.",
        ],
      },
      {
        h: "Day to day",
        bullets: [
          "Captures new enquiries as they come in.",
          "Drafts a fast first reply for your team.",
          "Schedules follow-ups so quiet leads get another chance.",
          "Helps organise booking and quote details.",
        ],
      },
      {
        h: "You stay in control",
        p: [
          "Solren supports your team rather than replacing your judgement. You decide what sends, and the work itself stays with you.",
        ],
      },
    ],
    related: ["what-solren-automates", "setup-time", "businesses"],
  },
  {
    slug: "what-solren-automates",
    title: "What does Solren automate?",
    category: "getting-started",
    summary: "The parts Solren handles for you, and the parts that stay with your team.",
    body: [
      {
        h: "What Solren helps with",
        bullets: [
          "Capturing enquiries from connected channels.",
          "Drafting first replies.",
          "Sending timely follow-ups.",
          "Organising booking and quote details.",
          "Sending a daily summary so nothing slips.",
        ],
      },
      {
        h: "What stays with you",
        p: [
          "Approving messages, making the final call, and doing the work. Automated replies and follow-ups should be configured responsibly and reviewed by your team.",
        ],
      },
    ],
    related: ["how-solren-works", "setup-time"],
  },
  {
    slug: "setup-time",
    title: "How long does setup take?",
    category: "getting-started",
    summary: "Most installs are live within one to two weeks.",
    body: [
      {
        p: ["Most installs are live in 7 to 14 days, depending on how your enquiries come in and which tools you use."],
      },
      {
        h: "What happens during setup",
        bullets: [
          "We map how leads reach your business.",
          "We connect the tools you already use.",
          "We configure replies and follow-ups around your workflow.",
          "We test with example leads before anything goes live.",
        ],
      },
    ],
    related: ["how-solren-works", "businesses"],
  },
  {
    slug: "businesses",
    title: "Which businesses does Solren work best for?",
    category: "getting-started",
    summary: "Built for service businesses that rely on enquiries to win work.",
    body: [
      {
        p: ["Solren is built for service businesses that can't afford missed enquiries, including:"],
        bullets: [
          "Electricians",
          "Plumbers",
          "Roofers",
          "Builders",
          "Landscapers",
          "HVAC",
          "Cleaners",
          "Other service businesses",
        ],
      },
      {
        p: ["In short, it is built for the people who get the work done and cannot always stop to answer."],
      },
    ],
    related: ["how-solren-works", "what-solren-automates"],
  },
  {
    slug: "pricing",
    title: "Packages and pricing",
    category: "billing",
    summary: "How Solren packages are structured, from Starter to Enterprise.",
    body: [
      {
        p: [
          "Solren comes in three packages: Starter, Growth and Enterprise. You begin with core email follow-up and add more lead sources as you grow.",
          "Prices are in AUD and exclude GST. The pricing page has the current details for each plan.",
        ],
      },
    ],
    cta: { label: "See pricing", href: "/pricing" },
    related: ["payments", "cancellations", "refunds"],
  },
  {
    slug: "payments",
    title: "Payments and invoices",
    category: "billing",
    summary: "How billing works and where to find your receipts.",
    body: [
      {
        p: [
          "Payments are processed securely by Stripe. Paid plans are billed in advance on a recurring basis unless agreed otherwise, and your receipts and invoices are issued through Stripe.",
          "Solren does not store full card numbers. Card details are handled directly by Stripe.",
        ],
      },
    ],
    related: ["pricing", "cancellations", "refunds"],
  },
  {
    slug: "cancellations",
    title: "Cancelling a subscription",
    category: "billing",
    summary: "How to cancel and what happens to your access.",
    body: [
      {
        p: [
          "You can cancel your subscription at any time. Cancellation takes effect at the end of your current billing period, and you keep access until then.",
          "To cancel, get in touch and we will take care of it.",
        ],
      },
    ],
    cta: { label: "Contact us", href: "mailto:contact@solren.ai" },
    related: ["refunds", "pricing"],
  },
  {
    slug: "refunds",
    title: "Refunds",
    category: "billing",
    summary: "Our approach to refunds and billing errors.",
    body: [
      {
        p: [
          "Unless required by law or otherwise agreed in writing, fees already paid are non-refundable. If you think there has been a billing error, contact us and we will review it.",
        ],
      },
    ],
    related: ["payments", "cancellations"],
  },
  {
    slug: "openai",
    title: "OpenAI",
    category: "integrations",
    summary: "How Solren uses AI to help draft replies.",
    body: [
      {
        p: [
          "Solren uses OpenAI to help draft replies and process message content so the service can work. Content is processed only to provide the service and is handled under the relevant provider's terms.",
          "AI drafts are there to support your team. You remain responsible for reviewing and approving how outputs are used.",
        ],
      },
    ],
    related: ["gmail", "google-workspace", "data-handling"],
  },
  {
    slug: "google-workspace",
    title: "Google Workspace",
    category: "integrations",
    summary: "What connecting Google Workspace allows Solren to do.",
    body: [
      {
        p: [
          "When you connect a Google Workspace account, Solren accesses it only to provide the automation you have requested, such as reading new enquiries and sending the replies and follow-ups you have configured.",
          "Solren's use of Google data follows the Google API Services User Data Policy, including its Limited Use requirements. We do not sell this data or use it for advertising, and you can disconnect at any time.",
        ],
      },
    ],
    related: ["gmail", "openai", "privacy"],
  },
  {
    slug: "gmail",
    title: "Gmail",
    category: "integrations",
    summary: "Connecting a Gmail account so Solren can capture and reply to enquiries.",
    body: [
      {
        p: [
          "If you connect a Gmail account, Solren can capture new enquiries and send the replies and follow-ups you have set up. Access is used only to provide those features, and you can disconnect at any time.",
        ],
      },
    ],
    related: ["google-workspace", "openai"],
  },
  {
    slug: "stripe",
    title: "Stripe",
    category: "integrations",
    summary: "How payments are handled through Stripe.",
    body: [
      {
        p: [
          "Payments are processed by Stripe under its own terms and security standards. Card details are handled directly by Stripe, and Solren does not store full card numbers.",
        ],
      },
    ],
    related: ["payments", "pricing"],
  },
  {
    slug: "privacy",
    title: "Privacy and security",
    category: "privacy",
    summary: "A short overview of how Solren handles and protects information.",
    body: [
      {
        p: [
          "Solren uses reasonable technical and organisational measures to protect the information you and your customers trust us with, including access controls and encryption in transit.",
          "The full policy explains what we collect, how we use it, how long we keep it and your rights.",
        ],
      },
    ],
    cta: { label: "Read the full Privacy & Security policy", href: "/privacy" },
    related: ["terms", "data-handling"],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    category: "privacy",
    summary: "The terms that apply when you use Solren.",
    body: [
      {
        p: [
          "Our Terms of Service cover how you can use Solren, your responsibilities, billing, and the limits of the service. Results depend on your market, your offer and how you run your business, so we do not guarantee specific outcomes.",
        ],
      },
    ],
    cta: { label: "Read the Terms of Service", href: "/terms" },
    related: ["privacy", "data-handling"],
  },
  {
    slug: "data-handling",
    title: "How Solren handles data",
    category: "privacy",
    summary: "What data Solren processes and how it is stored.",
    body: [
      {
        p: ["Depending on how you use Solren, we may process:"],
        bullets: [
          "Business profile information.",
          "Customer enquiries and message content.",
          "Names, phone numbers and email addresses.",
          "Booking and follow-up details.",
          "Connected Gmail or Google Workspace data, when you enable it.",
          "Usage and technical analytics.",
          "Billing information, handled by Stripe.",
        ],
      },
      {
        p: [
          "Information is stored on secure, access-controlled infrastructure, kept only as long as needed, and never sold. The Privacy & Security policy has the full detail.",
        ],
      },
    ],
    cta: { label: "Read Privacy & Security", href: "/privacy" },
    related: ["privacy", "openai"],
  },
  {
    slug: "contact",
    title: "Talk to support",
    category: "support",
    summary: "How to reach the people who build and run Solren.",
    body: [
      {
        p: [
          "Email us at contact@solren.ai and a real person will get back to you. No call centre, and no bots between you and the team.",
        ],
      },
    ],
    cta: { label: "Email contact@solren.ai", href: "mailto:contact@solren.ai" },
    related: ["book-demo", "faqs"],
  },
  {
    slug: "book-demo",
    title: "Start your Solren install",
    category: "support",
    summary: "What to expect when Solren is installed for your business.",
    body: [
      {
        p: [
          "Tell us how your enquiries come in and we will show you what changes once Solren is installed for your business. The contact page has a short form to get started.",
        ],
      },
    ],
    cta: { label: "Get started", href: "/contact" },
    related: ["contact", "faqs"],
  },
  {
    slug: "faqs",
    title: "Common questions",
    category: "support",
    summary: "Common questions about Solren in one place.",
    body: [
      {
        p: [
          "Our FAQ page answers the questions we hear most often about how Solren works, setup and what to expect.",
        ],
      },
    ],
    cta: { label: "Browse the FAQ", href: "/faq" },
    related: ["contact", "book-demo"],
  },
]

export function getArticle(slug: string): HelpArticle | undefined {
  return helpArticles.find((a) => a.slug === slug)
}

export function getCategoryLabel(id: string): string {
  return helpCategories.find((c) => c.id === id)?.label ?? "Help"
}
