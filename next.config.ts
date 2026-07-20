import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* Standalone public marketing site. Fully separate from the dashboard
     app (solren-frontend). No Supabase, no auth, no /dashboard. */

  /* Serve AVIF first (≈20–30% smaller than WebP at the same quality), with
     WebP as the fallback for browsers without AVIF. next/image transcodes the
     source JPG/PNG on demand and caches the result, so no source files change
     and the visual quality is unchanged — purely a smaller image payload. */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_678_400, // 31 days — optimized images rarely change
  },

  /* The round "N" badge is Next's dev-tools indicator — `next dev` only, never
     part of a production build. Bottom-left collides with the site's fixed
     theme toggle, so park it in the opposite corner during development. */
  devIndicators: {
    position: "bottom-right",
  },

  /* Hosted client quote pages (/q/[slug]) are unlinked client properties
     served from solren.ai that must stay out of search engines. Their
     metadata already sets noindex; the response header backs that up at the
     HTTP layer. */
  async headers() {
    return [
      {
        source: "/q/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      /* Logo used by the Supabase invite email. Static files default to
         "max-age=0, must-revalidate" plus a Content-Disposition carrying a
         filename, which reads as a download hint rather than an inline image.
         Mail image proxies (Gmail, Outlook/Exchange) are strict about both, so
         pin an immutable cache and a bare inline disposition. */
      {
        source: "/solren-invite-logo.png",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Disposition", value: "inline" },
          { key: "Content-Type", value: "image/png" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },

  /* The standalone Book a Call page was folded into /contact, the single
     conversion page. Permanently redirect the old route so it never 404s and
     any existing links keep working. */
  async redirects() {
    return [
      {
        source: "/book-a-call",
        destination: "/contact",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
