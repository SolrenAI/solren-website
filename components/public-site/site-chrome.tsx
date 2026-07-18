"use client"

import { usePathname } from "next/navigation"

/* Gates the global marketing chrome (nav + footer) by route. Most pages render
   with the full site chrome; /book (the standalone customer request form) and
   /thank-you (its post-submit confirmation) are shown "bare" — no nav, no
   footer — so they feel like a form app rather than a marketing page. The
   nav/footer are passed in as already-rendered nodes so they stay server
   components; this gate only decides whether to show them. The hosted client
   quote pages under /q/ are standalone client properties with their own
   branding, so they render bare too. */
const BARE_ROUTES = new Set(["/book", "/thank-you"])
const BARE_PREFIXES = ["/q/"]

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
  const bare =
    BARE_ROUTES.has(pathname) || BARE_PREFIXES.some((p) => pathname.startsWith(p))

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
