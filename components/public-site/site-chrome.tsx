"use client"

import { usePathname } from "next/navigation"

/* Gates the global marketing chrome (nav + footer) by route. Most pages render
   with the full site chrome; /book (the standalone customer request form) and
   /thank-you (its post-submit confirmation) are shown "bare" — no nav, no
   footer — so they feel like a form app rather than a marketing page. The
   nav/footer are passed in as already-rendered nodes so they stay server
   components; this gate only decides whether to show them. /jinksy-cleaning is
   a standalone unlinked page with its own branding, so it renders bare too. */
const BARE_ROUTES = new Set(["/book", "/thank-you", "/jinksy-cleaning"])

export function SiteChrome({
  nav,
  footer,
  children,
}: {
  nav: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const bare = BARE_ROUTES.has(pathname)

  return (
    <>
      {!bare && nav}
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      {!bare && footer}
    </>
  )
}
