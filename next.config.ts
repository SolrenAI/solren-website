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

  /* /jinksy-cleaning is an unlinked standalone page that must stay out of
     search engines. Its metadata already sets noindex; the response header
     backs that up at the HTTP layer. */
  async headers() {
    return [
      {
        source: "/jinksy-cleaning",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      /* Hosted client quote pages (/q/[slug]) are client properties served
         from solren.ai — kept out of search engines the same way. */
      {
        source: "/q/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
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
