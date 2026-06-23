import type { MetadataRoute } from "next"
import { helpArticles } from "@/components/public-site/help-data"

const BASE = "https://solren.ai"

/* Core marketing routes. /install-packages is a redirect and /thank-you is a
   post-submit page, so neither is listed. Help articles are appended from the
   same source that drives the dynamic /help/[slug] route. */
const ROUTES: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/integrations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/help", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact-support", priority: 0.6, changeFrequency: "monthly" },
  // industry landing pages
  { path: "/electricians", priority: 0.7, changeFrequency: "monthly" },
  { path: "/plumbers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/roofers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/hvac", priority: 0.7, changeFrequency: "monthly" },
  { path: "/builders", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cleaners", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concreters", priority: 0.7, changeFrequency: "monthly" },
  { path: "/handyman", priority: 0.7, changeFrequency: "monthly" },
  { path: "/landscapers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/painters", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pest-control", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pool-services", priority: 0.7, changeFrequency: "monthly" },
  // trust & support
  { path: "/trust", priority: 0.5, changeFrequency: "monthly" },
  { path: "/security", priority: 0.5, changeFrequency: "monthly" },
  { path: "/billing", priority: 0.4, changeFrequency: "monthly" },
  { path: "/changelog", priority: 0.4, changeFrequency: "weekly" },
  { path: "/status", priority: 0.4, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
  { path: "/brand", priority: 0.3, changeFrequency: "yearly" },
  // legal
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund", priority: 0.3, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const help: MetadataRoute.Sitemap = helpArticles.map((a) => ({
    url: `${BASE}/help/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  return [...pages, ...help]
}
