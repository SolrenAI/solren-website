import Link from "next/link"
import { PaymentLogos } from "./payment-logos"

type FooterLink = { label: string; href?: string }
type Block = { title: string; links?: FooterLink[]; social?: boolean }

/* Six chunked blocks read as a 2×3 grid:
     Platform  Trust   Support
     Company   Legal   Social
   Implemented as three columns of stacked pairs so each column controls its own
   vertical gap (Support → Social is tighter; the others breathe more). */
const platform: Block = {
  title: "Platform",
  links: [
    { label: "Platform", href: "/how-it-works" },
    { label: "Industries", href: "/industries" },
    { label: "Integrations", href: "/integrations" },
    { label: "Pricing", href: "/pricing" },
  ],
}
const company: Block = {
  title: "Company",
  links: [
    { label: "Why Solren", href: "/why-solren" },
    { label: "Our Story", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Brand", href: "/brand" },
  ],
}
const trust: Block = {
  title: "Trust",
  links: [
    { label: "Trust Centre", href: "/trust" },
    { label: "Security", href: "/security" },
    { label: "Privacy", href: "/privacy" },
    { label: "Subprocessors", href: "/subprocessors" },
    { label: "Status", href: "/status" },
  ],
}
const legal: Block = {
  title: "Legal",
  links: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Billing", href: "/billing" },
    { label: "Cookies", href: "/cookies" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Acceptable Use", href: "/acceptable-use" },
    { label: "Site Map", href: "/site-map" },
  ],
}
const support: Block = {
  title: "Support",
  links: [
    { label: "Help Centre", href: "/help" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Support", href: "/contact-support" },
    /* Book a Call points at the single conversion page; /book-a-call only
       exists as a permanent redirect alias to /contact (see next.config.ts) */
    { label: "Book a Call", href: "/contact" },
  ],
}
const social: Block = { title: "Social", social: true }

/* Row-major order: the grid renders Platform / Trust / Support across the top
   row and Company / Legal / Social across the bottom, so the section headers in
   each row share one baseline regardless of how many links a block holds. */
const footerBlocks: Block[] = [platform, trust, support, company, legal, social]

/* Mobile nav: the same key links as before, organised into three balanced groups
   of three so the footer reads as intentional sections rather than a flat list. */
const mobileGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Platform", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Trust Centre", href: "/trust" },
      { label: "Security", href: "/security" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "/status" },
    ],
  },
]

/* Monochrome social glyphs (currentColor). Non-navigating until real profile
   links are wired up. Lucide lacks X / TikTok / Discord, so they are inline. */
const socials: { label: string; path: string }[] = [
  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" },
  { label: "Instagram", path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" },
  { label: "Facebook", path: "M22 12a10 10 0 1 0-11.563 9.879v-6.988H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989A10.002 10.002 0 0 0 22 12z" },
  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" },
  { label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  { label: "Discord", path: "M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" },
]

function FooterLinkItem({ link }: { link: FooterLink }) {
  const cls =
    "inline-flex min-h-11 items-center text-[14px] text-white/60 transition-colors duration-200 hover:text-[var(--spark)] lg:min-h-0 lg:leading-tight"
  return link.href ? (
    <Link href={link.href} className={cls}>
      {link.label}
    </Link>
  ) : (
    <button type="button" className={`text-left ${cls}`}>
      {link.label}
    </button>
  )
}

function FooterBlock({ block }: { block: Block }) {
  return (
    <div>
      <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--silver)]">
        {block.title}
      </h3>
      {block.social ? (
        /* icons raised slightly so they sit near the first-link line */
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3.5">
          {socials.map((s) => (
            <span
              key={s.label}
              title={`${s.label} profile coming soon`}
              className="text-white/45"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" fillRule="evenodd" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </span>
          ))}
        </div>
      ) : (
        <ul className="mt-3 space-y-0 lg:mt-3 lg:space-y-1.5">
          {block.links!.map((l) => (
            <li key={l.label}>
              <FooterLinkItem link={l} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function PublicFooter() {
  return (
    /* md+ only: a modest band of black breathing room above the footer (96px).
       Combined with the page's trimmed final-section padding (~24px, see
       public-site.css) this reads as ~120px between content and footer — in the
       96-140px target. Pure outer margin: the footer's own height, columns,
       divider and bottom row are unchanged. Mobile (below md) is untouched. */
    <footer className="relative bg-[#050608] md:mt-6">
      {/* soft, edge-fading divider above the footer (desktop only — on mobile the
          page flows into the footer on whitespace, no line) */}
      <div
        aria-hidden="true"
        className="mx-auto hidden h-px w-full max-w-[1240px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent md:block"
      />
      <div className="ps-container pb-6 pt-1.5 md:hidden">
        {/* subtle top separator — the same thin, low-contrast hairline used above
            the desktop footer; a quiet anchor so the mobile footer reads as
            attached to the page rather than floating under an empty gap */}
        <div
          aria-hidden="true"
          className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
        />
        {/* brand block is just the serif stance line on mobile — no icon, no
            support line; sized as a sub-heading, with clear air before the links */}
        <p className="mt-10 font-[family-name:var(--font-serif)] text-[15px] font-medium leading-[1.6] text-white/90">
          Somewhere, a job just went cold.
          <br />
          Not yours.
        </p>
        {/* navigation — balanced 2×2: Platform / Trust, then Support / Social. */}
        <nav aria-label="Footer" className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
          {mobileGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--silver)]">
                {group.title}
              </h3>
              <ul className="mt-3">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <FooterLinkItem link={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social — fourth cell of the 2×2 (under Trust, beside Support) so the
              footer reads as one connected block with no empty half-column. */}
          <div>
            <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[var(--silver)]">
              Social
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2.5">
              {socials.map((item) => (
                <span
                  key={item.label}
                  title={`${item.label} profile coming soon`}
                  className="text-white/45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                    fillRule="evenodd"
                    aria-hidden="true"
                  >
                    <path d={item.path} />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </nav>

        {/* payment logos — full width below the groups */}
        <PaymentLogos className="mt-4" />

        {/* copyright last */}
        <p className="mt-2 text-[12.5px] text-[var(--muted)]">
          © {new Date().getFullYear()} Solren. All rights reserved.
        </p>
      </div>

      <div className="ps-container hidden md:block md:pb-4 md:pt-8">
        {/* Top: brand area (left) · vertical divider · three column-pairs (right) */}
        <div className="flex flex-col gap-y-12 sm:gap-y-14 lg:flex-row lg:gap-x-16">
          {/* Brand area — the anchor of the footer, given more presence than the nav.
              On lg the column stretches to the link grid's height and the quiet line
              anchors to the bottom, so the empty space sits between the stance line
              and the support text instead of pooling under the column. */}
          <div className="lg:flex lg:w-[300px] lg:shrink-0 lg:flex-col">
            {/* stance line — the one eye-catching line in the footer, set in the
                brand serif to echo the wordmark */}
            <p className="mb-4 font-[family-name:var(--font-serif)] text-[17px] font-medium leading-[1.55] text-white/90">
              Somewhere, a job just went cold.
              <br />
              Not yours.
            </p>
            <div className="max-w-[18rem] space-y-2.5 text-[13.5px] leading-[1.6] sm:space-y-2 lg:mt-auto lg:pb-1">
              <p className="text-white/75">
                Built to work quietly
                <br />
                in the background.
              </p>
            </div>
          </div>

          {/* Vertical divider between brand and columns */}
          <div
            aria-hidden="true"
            className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-white/[0.12] to-transparent lg:block"
          />

          {/* Two aligned rows of three — grid rows keep every header on a shared baseline */}
          <div className="grid flex-1 grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-x-14">
            {footerBlocks.map((block) => (
              <FooterBlock key={block.title} block={block} />
            ))}
          </div>
        </div>

        {/* Contained, edge-fading divider above the bottom bar — no harsh full-width line */}
        <div className="mx-auto mt-6 h-px w-full max-w-[1100px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent sm:mt-3" />

        {/* Bottom bar: copyright far left, payment marks far right — balanced row */}
        <div className="mt-5 flex items-center justify-between gap-6 sm:mt-3">
          <p className="text-[12.5px] text-[var(--muted)]">
            © {new Date().getFullYear()} Solren. All rights reserved.
          </p>
          <PaymentLogos />
        </div>
      </div>
    </footer>
  )
}
