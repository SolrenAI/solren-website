/* Sitewide structured data. One Organization + WebSite graph, emitted once in
   the root layout so every page exposes the brand to search and AI crawlers.
   Page-specific schema (FAQPage, etc.) is added on the relevant route. */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://solren.ai/#organization",
      name: "Solren",
      url: "https://solren.ai",
      logo: "https://solren.ai/logos/solren-wordmark-clean.png",
      email: "contact@solren.ai",
      description:
        "Solren installs a follow-up system for service businesses: reply faster, recover missed leads, less admin, more booked jobs.",
    },
    {
      "@type": "WebSite",
      "@id": "https://solren.ai/#website",
      name: "Solren",
      url: "https://solren.ai",
      publisher: { "@id": "https://solren.ai/#organization" },
      inLanguage: "en-AU",
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/* FAQPage schema for any route that renders a list of Q&A pairs. Mirrors the
   visible content so rich results stay truthful. */
export function FaqStructuredData({
  faqs,
}: {
  faqs: { q: string; a: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
