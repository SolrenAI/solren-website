import type { MetadataRoute } from "next"

/* Technical SEO: the public marketing, legal and help pages are open. Private
   and internal areas are disallowed. /install-packages is a redirect and
   /thank-you is a post-submit page, so neither needs to be crawled. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard",
        "/admin",
        "/api",
        "/unauthorized",
        "/install-packages",
        "/thank-you",
      ],
    },
    sitemap: "https://solren.ai/sitemap.xml",
    host: "https://solren.ai",
  }
}
