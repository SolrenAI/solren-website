import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* Standalone public marketing site. Fully separate from the dashboard
     app (solren-frontend). No Supabase, no auth, no /dashboard. */

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
