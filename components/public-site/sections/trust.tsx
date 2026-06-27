import { Reveal } from "../reveal"

/* How It Works only (hidden md:block). The page's closing strip: one quiet line
   plus the customer channels Solren connects to, shown as plain text marks (the
   same dot + silver-text treatment used on mobile in "Built around your
   business") rather than our internal stack. No panel, no heading hierarchy. As
   the last #main child it inherits the shared closing rhythm. */
const CHANNELS = ["Gmail", "Website forms", "Google", "Facebook", "Instagram", "SMS"]

export function Trust() {
  return (
    <section className="relative hidden md:mt-4 md:block">
      {/* No divider — controlled whitespace separates the strip from the section above. */}
      <div className="mx-auto max-w-[1240px] px-6 pt-2">
        {/* compact strip: one quiet centred line + one flowing centred row of
            channels, echoing the centred cards above */}
        <Reveal>
          <div className="flex flex-col items-center gap-3.5">
            <p className="text-center text-[15px] leading-relaxed text-[var(--silver)]">
              Connects to the tools you already use.
            </p>
            <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-center gap-x-8 gap-y-5">
              {CHANNELS.map((c) => (
                <div key={c} className="flex shrink-0 items-center gap-x-3">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#537FEA]" />
                  <span className="text-[14px] font-medium text-[var(--silver)]">{c}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 text-center text-[13px] leading-relaxed text-[var(--muted)]">
              <p>Billing secured by Stripe. Card details stay with Stripe.</p>
              <p>Your data is stored on secure, access-controlled systems.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
