import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import "./public-site.css"
import { PublicNav } from "@/components/public-site/nav"
import { PublicFooter } from "@/components/public-site/footer"
import { SiteChrome } from "@/components/public-site/site-chrome"
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

/* Brand serif: matches the high-contrast heritage cut of the SOLREN wordmark.
   Used sparingly — currently only the footer stance line. */
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
})

const SITE_DESCRIPTION =
  "Solren catches every enquiry, drafts the reply and the follow-ups, and you approve what goes out. We set it up and run it for you."
const SOCIAL_IMAGE = "/og-image.png"
const SOCIAL_IMAGE_ALT = "Solren - Done-for-you lead follow-up for trades"

export const metadata: Metadata = {
  metadataBase: new URL("https://solren.ai"),
  title: {
    default: "Solren",
    template: "%s · Solren",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Solren", url: "https://solren.ai" }],
  openGraph: {
    type: "website",
    siteName: "Solren",
    locale: "en_AU",
    url: "https://solren.ai",
    title: "Solren",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: SOCIAL_IMAGE_ALT,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solren",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: SOCIAL_IMAGE_ALT,
      },
    ],
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
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
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

          <SiteChrome nav={<PublicNav />} footer={<PublicFooter />}>
            {children}
          </SiteChrome>

          {/* Theme toggle is a dev-only testing affordance. The public site is a
              finished dark experience, so it is not shown in production. */}
          {process.env.NODE_ENV === "development" && <ThemeToggle />}
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
