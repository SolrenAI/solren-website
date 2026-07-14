import type { Metadata } from "next"

import { PlatformHero, LeadsGoingCold, WorkSplit, ApprovalGate, InstalledAround } from "@/components/public-site/sections/how-it-works"
import { Trust } from "@/components/public-site/sections/trust"

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Missed enquiry. Fast reply. Booked job. Solren catches new leads, replies fast, follows up automatically, and helps you book more work. Installed and managed for you.",
  alternates: { canonical: "/how-it-works" },
}

export default function HowItWorksPage() {
  return (
    /* ps-hiw scopes this page's desktop type scale (see public-site.css). */
    <div className="ps-hiw">
      {/* The arc: win (hero) → pain (leads going cold) → relief (Solren handles
          the chase, you approve) → proof (tools, trust strip). */}
      <PlatformHero />

      <LeadsGoingCold />

      <WorkSplit />

      {/* The ONLY divider on the page — deliberately not a reusable separator.
          It marks the one hinge in the arc: the chase ends ("That's it. You stay
          on the tools.") and the control claim begins. --hair is the site's
          existing hairline, rgba(255,255,255,0.08).

          The divider OWNS the section break: below lg both neighbours contribute
          zero padding (WorkSplit pb-0, ApprovalGate pt-0), so the symmetric
          --space-block margins here centre the line in the gap by construction.
          At lg the same balance holds a size up: the lg top margin mirrors
          ApprovalGate's --space-section top padding below the line. Keep the
          neighbours' paddings zero — any padding they add stacks on one side of
          the line and reads as a void. */}
      <div className="ps-container mt-[var(--space-block)] mb-[var(--space-block)] lg:mt-[var(--space-section)] lg:mb-0">
        <div className="h-px w-full bg-[var(--hair)]" />
      </div>

      {/* The key trust moment: every reply is approved by the owner before it sends. */}
      <ApprovalGate />

      {/* The "Custom-built" pill is removed from the md+ layout in favour of the
          simpler closing trust strip below; kept on phones (where Trust is hidden)
          so the mobile layout is unchanged for now. */}
      <div className="md:hidden">
        <InstalledAround />
      </div>

      <Trust />
    </div>
  )
}
