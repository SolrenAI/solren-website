import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google"
import "./globals.css"
import "./public-site.css"
import { PublicNav } from "@/components/public-site/nav"
import { PublicFooter } from "@/components/public-site/footer"
import { StructuredData } from "@/components/public-site/structured-data"
import { ThemeToggle } from "@/components/public-site/theme-toggle"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

/* Display face for headlines (h1/h2): Inter Tight — a tight, modern cut paired
   with Inter for body and Geist Mono for labels. Applied via .ps h1, .ps h2. */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://solren.ai"),
  title: {
    default: "Solren. Reply faster. Book more jobs.",
    template: "%s · Solren",
  },
  description:
    "Solren installs a follow-up system for service businesses: reply faster, recover missed leads, less admin, more booked jobs. Built for electricians, roofers, HVAC, plumbers and more.",
  openGraph: {
    type: "website",
    siteName: "Solren",
    locale: "en_AU",
    url: "https://solren.ai",
    title: "Solren. Reply faster. Book more jobs.",
    description:
      "Solren installs a follow-up system for service businesses: reply faster, recover missed leads, less admin, more booked jobs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solren. Reply faster. Book more jobs.",
    description:
      "Solren installs a follow-up system for service businesses: reply faster, recover missed leads, less admin, more booked jobs.",
  },
}

export const viewport: Viewport = {
  themeColor: "#040506",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${geistMono.variable} antialiased`}>
      <body>
        {/* No-flash: apply the saved theme before the page paints */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('solren-theme')==='light'){document.documentElement.dataset.theme='light';}}catch(e){}})();",
          }}
        />
        <StructuredData />
        <a
          href="#main"
          className="ps sr-only z-[100] rounded-full border border-[var(--hair-strong)] bg-[#040506] px-5 py-3 text-[14px] font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-[#537FEA]/60"
        >
          Skip to content
        </a>
        <div className="ps relative min-h-screen">
          {/* Clean ground. No imagery, no glows — a single static depth gradient
              gives the page quiet dimension. Fixed, so there is nothing to repaint
              on scroll. Uses the theme variable so it adapts in light mode. */}
          <div className="fixed inset-0 -z-10 bg-[var(--ground)]" />
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(120% 65% at 50% -16%, rgba(83, 127, 234, 0.014) 0%, transparent 50%)",
            }}
          />
          {/* fine film grain; very subtle, static, never blocks clicks */}
          <div className="ps-grain" aria-hidden="true" />

          <PublicNav />
          <main id="main" tabIndex={-1} className="outline-none">{children}</main>
          <PublicFooter />
          {/* Theme toggle is a dev-only testing affordance. The public site is a
              finished dark experience, so it is not shown in production. */}
          {process.env.NODE_ENV === "development" && <ThemeToggle />}
        </div>
      </body>
    </html>
  )
}
