/* The numbered-row primitive. ONE definition of the 1→2→3 sequence, shared by
   the homepage approval gate (label-only rows) and the industry template's
   typical workflow (title + body rows).

   Desktop hangs the numbers on filled circles that mask a continuous rail;
   mobile drops to plain mono numerals over per-row connector segments that
   tile into one continuous line anchored to the numeral centres. The
   surrounding panel is NOT part of the primitive — the homepage bounds it in a
   hairline panel, the industry page lets it sit open in the body column. */

export type NumberedStep = {
  title: string
  /* Optional second line. Omit it and the row renders as a single label, which
     is the homepage's shape. */
  body?: string
}

export function NumberedSteps({ steps }: { steps: NumberedStep[] }) {
  return (
    <ol className="lg:relative">
      {/* One continuous rail behind the numbers, which sit on filled circles
          that mask it. Anchored to the first and last circle CENTRES (left/top/
          bottom = half the 32px circle), so its geometry follows the circle size
          and the <ol> box — never the panel padding, the text metrics or the
          viewport. */}
      {/* -translate-x-1/2 puts the 1px stroke's centre on the circle centre;
          left-4 alone lands its left edge there, half a pixel off, which renders
          as a blurred 2px line. */}
      <span
        aria-hidden="true"
        className="hidden lg:absolute lg:bottom-4 lg:left-4 lg:top-4 lg:block lg:w-px lg:-translate-x-1/2 lg:bg-[#537FEA]/35"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative mt-6 first-of-type:mt-0">
          {/* Mobile connector. Not a fixed-height stub between rows — that
              anchored to the bottom of the previous row's WRAPPED text, so the
              segments drifted whenever a body wrapped. Instead each row owns an
              absolutely-positioned segment sized by the row's real rendered
              height: middle rows span the mt-6 gap above through their full
              height (-top-6 → bottom-0), the first starts at its numeral's
              centre, the last stops at its numeral's centre (24px gap + 10px
              ≈ half the numeral's ~20px line box). Tiles meet exactly at li
              edges, so the line is continuous through every numeral centre with
              no gap before 1 and no overshoot past the last. The numeral masks
              the crossing, same trick as the desktop circles. x = 7px puts the
              1px stroke's centre at 7.5px — the centre of the 15px column. */}
          {steps.length > 1 && (
            <span
              aria-hidden="true"
              className={`absolute left-[7px] w-px bg-[#537FEA]/35 lg:hidden ${
                i === 0
                  ? "bottom-0 top-[10px]"
                  : i === steps.length - 1
                    ? "-top-6 h-[34px]"
                    : "-top-6 bottom-0"
              }`}
            />
          )}
          {/* A two-line row hangs from its top; a single label sits on the
              baseline, then centres against the circle once the circle exists. */}
          <div
            className={
              s.body
                ? "flex items-start gap-4 lg:gap-5"
                : "flex items-baseline gap-4 lg:items-center lg:gap-5"
            }
          >
            {/* text-center + bg-[var(--ground)] below lg: the digit sits on the
                connector's axis and masks the segment crossing behind it, so
                the line reads as running dot-centre to dot-centre. Both mobile
                contexts (how-it-works gate, industry workflow) sit directly on
                the page ground — the hairline panel is lg-only. */}
            <span
              className="relative z-10 w-[15px] shrink-0 bg-[var(--ground)] text-center text-[13px] font-medium tabular-nums text-[#6A8FEE] lg:flex lg:h-8 lg:w-8 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-[var(--hair-strong)] lg:bg-[var(--card)] lg:text-[15px]"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {i + 1}
            </span>
            {s.body ? (
              <div>
                <div className="text-[15px] font-medium leading-snug text-white">{s.title}</div>
                <div className="mt-1 text-[14px] leading-relaxed text-[var(--muted)]">{s.body}</div>
              </div>
            ) : (
              <span className="text-[15px] leading-snug text-white lg:text-[17px]">{s.title}</span>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
