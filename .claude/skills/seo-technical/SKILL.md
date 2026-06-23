---
name: seo-technical
description: Technical SEO audit and fixes for the Next.js site — metadata, Open Graph/Twitter, canonical, sitemap, robots, structured data (JSON-LD), crawlability, and indexing hygiene. Use when asked to improve SEO, fix metadata, add schema, or check how the site appears to crawlers/social. Triggers: "improve SEO", "metadata", "Open Graph", "sitemap", "structured data", "schema", "canonical", "rich results".
---

# Technical SEO

Production domain is `https://solren.ai` (hardcoded in `layout.tsx` metadataBase,
`sitemap.ts`, `robots.ts`). If the domain changes, update those three.

## Per-page metadata
- Every `page.tsx` exports unique `title` + `description`. Root template appends `· Solren`.
- Add `alternates.canonical` per page (relative path) for pages reachable by multiple URLs.
- Dynamic routes: `generateMetadata` (see `app/help/[slug]`).

## Social / sharing
- Root `metadata` has `openGraph` (type/siteName/locale/url) and `twitter`
  (summary_large_image). `app/opengraph-image.png` (1200×630) auto-attaches — keep it.
- Page-level OG overrides only when the page needs a distinct share image/title.

## Crawl infrastructure (already in place — keep correct)
- `app/sitemap.ts` — must list every indexable route. Keep it sourced from data files
  (e.g. `helpArticles`) so it can't drift. Exclude redirects (`/install-packages`) and
  thin/utility pages (`/thank-you`).
- `app/robots.ts` — allow `/`, disallow non-indexable routes, declare sitemap + host.
- `app/manifest.ts` — name, colors, icons.

## Structured data (JSON-LD) — biggest remaining opportunity
Add `<script type="application/ld+json">` via a Server Component. High-value types here:
- **Organization** (site-wide, in layout): name, url, logo, sameAs.
- **WebSite** with `potentialAction` SearchAction if/when site search exists.
- **FAQPage** on `/faq` and help articles that are Q&A (eligible for rich results).
- **BreadcrumbList** on deep pages (help articles, industry pages).
- **Service** / **LocalBusiness** for industry landing pages (trades + service area).
Validate with Google Rich Results Test before shipping.

## Hygiene checklist
- One `<h1>` per page; descriptive, keyword-relevant.
- Internal links use `next/link`; no orphan pages (every page linked from nav/footer/sitemap).
- Images have descriptive `alt` (doubles as SEO + a11y).
- No `noindex` on pages you want ranked; DO `noindex` thin/duplicate pages.

## Verify
- `npm run build`, then check `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.
- View page source: `og:*`, `twitter:*`, `canonical`, `manifest`, and any JSON-LD present.
- Run a route through Rich Results Test for schema validity.
