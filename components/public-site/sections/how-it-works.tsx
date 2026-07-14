import { Fragment } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, Globe, MessageSquare, PhoneMissed } from "lucide-react"
import { Reveal } from "../reveal"
import { SolrenMark } from "../mark"
import { CardStack, CardStackOutcomeRow, CardStackRow } from "../card-stack"
import { NumberedSteps, type NumberedStep } from "../numbered-steps"
import { CHANNELS, FacebookMark, InstagramMark } from "./trust"

/* Container discipline: a card exists only when it represents a real product
   object — the hero notification sequence, the dying-lead notifications, the
   numbered approve steps — or a single self-contained comparison, like the
   you-handle / Solren-handles panel. Everything else is plain text on black. */

/* How It Works page sections. The journey is told once — by the hero product
   moment (enquiry → draft → approve → booked); the sections below cover what
   Solren takes off your plate, the approval step, and the closing trust strip. */

/* ---------- 0. Platform hero: the 3-second read ----------
   Split hero: the claim in plain words on the left, the product moment on the
   right — a job ticket that tells the whole story in one glance: enquiry in,
   reply approved by you, BOOKED as the big blue payoff. The story cascades in
   once on load (~1s, ps-demo-* in public-site.css) and then holds; the
   headline stacks in three lines mirroring the ticket's three beats. Under
   reduced motion the finished ticket shows immediately. */

export function PlatformHero() {
  return (
    /* Desktop: the hero has NO height of its own — no 100vh, no min-height, no
       flex centring. Its height is a function of its content plus authored
       padding, so the air cannot be redistributed by the size of the monitor.
       The nav is position:fixed and therefore takes no layout space, so its
       rendered height (--nav-h) is carried in the top padding: the heading sits
       one --space-section clear of the nav's bottom edge, not of the viewport.
       A section owns its TOP padding only; padding-bottom is 0. */
    <section className="relative pb-8 pt-24 sm:pt-28 lg:pb-0 lg:pt-[calc(var(--nav-h)+var(--space-section))]">
      {/* Column geometry mirrors LeadsGoingCold exactly (460px track, gap-20)
          so the hero card stack and the cold-lead card stack share a left edge
          and a width — they are visual siblings and must land identically. */}
      <div className="ps-container grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-start lg:gap-20">
        {/* left: the claim — one idea per line */}
        <Reveal>
          <div className="text-center lg:text-left">
            {/* Breaks are set by hand, one beat per line — the container is not
                allowed to decide where the sentence turns. The <br>s are inert
                below lg (display:none), so mobile wrapping is unchanged. */}
            {/* The headline is the composition. 5vw lands exactly on 64px at
                1280 and 72px at 1440, so one clamp covers both desktop widths
                without a breakpoint between lg (1024) and xl (1280).

                Colour falls by meaning, not position: silver is the problem,
                white is the outcome. The old ps-silver gradient ran white→#c3c6cd
                down the block, making "Booked job." — the line the reader wants —
                the dimmest thing on the page. */}
            <h1 className="mx-auto max-w-[16ch] pb-[0.1em] text-[clamp(2rem,7.5vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.025em] lg:mx-0 lg:max-w-none lg:text-[clamp(64px,5vw,72px)] lg:leading-[1.05]">
              <span className="text-[color:var(--silver)]">Missed enquiry.</span>{" "}
              <br className="hidden lg:inline" />
              <span className="text-[color:var(--silver)]">Fast reply.</span>{" "}
              <br className="hidden lg:inline" />
              <span className="text-white">Booked job.</span>
            </h1>
            {/* Descending gaps — 40 / 24 / 16 — so the headline sits apart and
                each following element reads as subordinate to the one above. */}
            <p className="mx-auto mt-4 max-w-[38ch] text-[15.5px] leading-[1.65] text-[var(--silver)] sm:text-[16px] lg:mx-0 lg:mt-10 lg:text-[17px]">
              Solren catches every enquiry, replies in seconds, and follows up
              until the job is booked.
            </p>
            {/* The one sentence no competitor can copy: its own line, full contrast. */}
            <p className="mx-auto mt-3 max-w-[38ch] text-[15.5px] leading-[1.65] text-white sm:text-[16px] lg:mx-0 lg:text-[17px]">
              Nothing goes out until you say so.
            </p>
            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-6 lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#537FEA] px-7 py-3.5 text-[15px] font-medium text-black transition-colors hover:bg-[#6A8FEE]"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/pricing"
                className="text-[14px] font-medium text-[var(--muted)] transition-colors hover:text-white"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-4 text-[12.5px] text-[var(--muted)] sm:text-[13px] lg:text-[17px]">
              A$497 a month. One booked job covers it.
            </p>
          </div>
        </Reveal>

        {/* right: the enquiry → approved → booked story as three cards.
            On desktop the device chrome is switched off (see below) and the
            cards stand free on the ground as siblings of the cold-lead stack in
            the problem section. Below lg the phone is unchanged: a frame that
            promises "screenshot" only breaks that promise at sizes where the
            contents can't be a real screen. */}
        {/* The three cards mirror the three heading lines: enquiry / reply /
            booked. The booked card is filled blue because it is the outcome,
            matching the white heading line. Do not neutralise it. */}
        <Reveal delay={60}>
          {/* Desktop stays a free-standing CardStack (no frame). Below lg the
              phone chrome — bezel, notch, 6:51 clock — is stripped too, so mobile
              is the same free-standing proof-stack rows, full width. The lg:
              classes are the finished desktop layout and are left untouched. */}
          <div className="mx-auto w-full lg:max-w-[440px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <div className="lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
              {/* A tight gap keeps the three beats reading as ONE sequence
                  (6:42pm → 6:43pm → booked), carried by type size, not air. */}
              <CardStack>
                {/* beat 1 — the enquiry, quietest */}
                <CardStackRow className="ps-demo-in" style={{ animationDelay: "100ms" }}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 shrink-0 text-[var(--muted)]" strokeWidth={1.8} />
                      <span className="truncate text-[14.5px] font-medium text-[var(--silver)] lg:text-[15px]">
                        Website form · Dave M.
                      </span>
                    </span>
                    <span className="shrink-0 text-[13px] tabular-nums text-[var(--muted)] lg:text-[11.5px]">6:42pm</span>
                  </div>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[var(--muted)] lg:text-[15px]">
                    &ldquo;Hi, after a quote for a switchboard upgrade. Can
                    someone get back to me?&rdquo;
                  </p>
                </CardStackRow>

                {/* beat 2 — Solren replies, approved by the owner */}
                <CardStackRow variant="raised" className="ps-demo-in" style={{ animationDelay: "450ms" }}>
                  <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <SolrenMark size={14} />
                      <span className="text-[14.5px] font-medium text-white lg:text-[15px]">Solren</span>
                      {/* States the whole sequence: Solren drafts, the owner
                          approves. "Approved by you" alone read as Solren having
                          replied on its own with a badge asserting otherwise. */}
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#537FEA]/30 bg-[#537FEA]/[0.08] px-1.5 py-[2px] text-[11px] font-medium text-[#9DB8FA] lg:text-[11px]">
                        <Check className="h-2.5 w-2.5" strokeWidth={2.6} />
                        Drafted by Solren · Approved by you
                      </span>
                    </span>
                    <span className="shrink-0 text-[13px] tabular-nums text-[var(--muted)] lg:text-[11.5px]">6:43pm</span>
                  </div>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[var(--silver)] lg:text-[15px]">
                    Thanks Dave, we can quote that this week. Does Thursday
                    7:30am suit?
                  </p>
                </CardStackRow>

                {/* beat 3 — booked, the brightest thing on the screen */}
                <CardStackOutcomeRow className="ps-demo-stamp" style={{ animationDelay: "800ms" }}>
                  <span className="block text-[14.5px] font-medium tracking-[-0.01em] text-white lg:text-[15px]">
                    Booked · Thursday 7:30am
                  </span>
                  <span className="mt-0.5 block text-[13px] text-[var(--silver)] lg:text-[11.5px]">
                    Switchboard upgrade · customer confirmed
                  </span>
                </CardStackOutcomeRow>
              </CardStack>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 1. The problem: leads everywhere, going cold ----------
   The pain beat of the arc (win → pain → relief → proof). The chaos the hero
   ticket resolves: enquiries stacking up unanswered across channels while the
   owner is on the tools, each one older and colder than the last. Deliberately
   unresolved — no blue on the leads, no reply, time bleeding away. */

const COLD_LEADS: {
  icon: React.ComponentType<{ className?: string }>
  channel: string
  note: string
  age: string
  tilt: string
  /* the older the lead, the colder the card — time bleeding away, visibly */
  fade: string
  /* A missed call is how the enquiry ARRIVES, not a channel Solren answers —
     so that card must not claim an unanswered reply. Solren does not handle
     phone calls. The other three are channels it does reply on. */
  chip: string
  /* Mobile only: let this card's note wrap instead of truncating — its wider
     chip squeezes the note enough to clip at 360px. Others keep truncate. */
  wrapNote?: boolean
}[] = [
  { icon: PhoneMissed, channel: "Missed call", note: "Mobile · while on the tools", age: "4 min ago", tilt: "-rotate-1", fade: "opacity-100", chip: "They texted instead", wrapNote: true },
  /* SMS, not website form — the hero already tells the website-form story */
  { icon: MessageSquare, channel: "SMS", note: "“Can you do a quote Saturday?”", age: "26 min ago", tilt: "rotate-[0.75deg]", fade: "opacity-[0.86]", chip: "No reply" },
  { icon: FacebookMark, channel: "Facebook", note: "“Are you free this week?”", age: "1 hr ago", tilt: "-rotate-[0.5deg]", fade: "opacity-[0.74]", chip: "No reply" },
  { icon: InstagramMark, channel: "Instagram", note: "“How much roughly?”", age: "3 hrs ago", tilt: "rotate-1", fade: "opacity-[0.64]", chip: "No reply" },
]

/* The one type token for this section's heading rank: font-size, weight and
   line-height. "Your leads are everywhere." and the pullquote that concludes it
   MUST render at the same rank, so they share this constant. Change it here or
   in neither place — never re-derive it as a pixel value in one of the two. */
const PROBLEM_HEADING_TYPE =
  "text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[44px] lg:leading-[1.08]"

export function LeadsGoingCold() {
  return (
    <section className="relative pb-2 pt-6 sm:pb-6 sm:pt-10 lg:pb-0 lg:pt-[var(--space-section)]">
      {/* minmax(0,1fr) at base too: without it the implicit mobile column takes
          the cards' min-content width, which at 320px overflows the container
          by ~33px (clipped, so invisible) and drags the now-centred headline
          off the page axis. Same track sizing the lg template already uses. */}
      <div className="ps-container grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20">
        {/* left: the pain, named — one tight block (quote directly under the
            paragraph), centre-balanced against the stack so the small height
            difference splits evenly instead of pooling below. */}
        <Reveal>
          <div>
            {/* One rule page-wide: display lines (eyebrow, headline, and the
                heading-rank pullquote below — it shares the h2's type token)
                centre below lg; the body paragraph reads, so it stays left.
                Desktop keeps the split composition's left rag. */}
            <span className="ps-label block text-center lg:text-left">The problem</span>
            {/* one beat per line: the promise, then the cost of ignoring it */}
            <h2 className={`mx-auto mt-3 max-w-2xl text-center lg:mx-0 lg:text-left ${PROBLEM_HEADING_TYPE}`}>
              <span className="ps-silver">Your leads are everywhere.</span>{" "}
              <br className="hidden lg:inline" />
              <span className="text-[var(--muted)]">And going cold.</span>
            </h2>
            {/* The "every unanswered minute they cool" clause is carried by the
                card timestamps and the caption beneath them — the section was
                making the same point three times. */}
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:mt-4 lg:text-[17px]">
              Website, Google, Facebook, Instagram, SMS, email. They all
              land while you&apos;re on the tools.
            </p>
            {/* Promoted out of the bar: no left rule, no wrapper — the same type
                as the heading above it, at the same container edge. Both lines
                white: this is the conclusion, not the problem. */}
            <p className={`mx-auto mt-5 max-w-2xl text-center text-white sm:mt-6 lg:mx-0 lg:mt-[var(--space-block)] lg:text-left ${PROBLEM_HEADING_TYPE}`}>
              Most jobs aren&apos;t lost on price.{" "}
              <br className="hidden lg:inline" />
              They&apos;re lost on the clock.
            </p>
          </div>
        </Reveal>

        {/* right: the chaos — unanswered enquiries stacking up, ageing */}
        <Reveal delay={90}>
          <figure className="mx-auto w-full max-w-[440px]">
            {/* cold tone: dimmer shells, grey icons, no blue anywhere — and each
                card fades further the older its lead gets */}
            <ul className="space-y-3">
              {COLD_LEADS.map(({ icon: Icon, channel, note, age, tilt, fade, chip, wrapNote }) => (
                <li
                  key={channel}
                  className={`flex items-center gap-3.5 rounded-xl border border-white/[0.05] bg-white/[0.012] px-4 py-3 ${tilt} ${fade}`}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0 text-[var(--muted)]" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13.5px] font-medium text-[var(--silver)]">{channel}</span>
                    <span className={`block text-[12.5px] text-[var(--muted)] ${wrapNote ? "overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap" : "truncate"}`}>{note}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-[11.5px] tabular-nums text-[var(--muted)]">{age}</span>
                    <span className="mt-1 inline-block rounded-full border border-white/[0.06] px-2 py-0.5 text-[11px] text-[var(--muted)]">
                      {chip}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            {/* A caption for the four "No reply" timestamps above it. It lives
                inside the <figure>, so it travels with the stack. pl-[17px]
                aligns it to the cards' CONTENT edge (1px border + 16px padding),
                not their outer edge. */}
            <figcaption className="mt-3 text-left text-[12.5px] text-[var(--muted)] lg:mt-4 lg:pl-[17px] lg:text-[17px] lg:text-[color:var(--silver)]">
              Customers move on in minutes.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 2. You work. Solren follows up. ---------- */

const YOU_HANDLE = ["The job", "The customer", "The work"]
/* Four to your three: the length difference between the two rows IS the
   argument — the reader sees "they do more than I do" before reading a word. */
const SOLREN_HANDLES = ["New enquiries", "Fast replies", "Follow-ups", "Where every lead stands"]

/* Items separated by a middot with equal space either side (the 8px flex gap
   sits on both sides of every separator). A wrapping flex box is what puts the
   break opportunities BETWEEN items: as plain inline text the only places the
   browser can break are inside the strings themselves, which splits
   "Follow-ups" at its hyphen and orphans "stands" onto its own line.
   whitespace-nowrap keeps each item intact. */
function DotList({ items }: { items: readonly string[] }) {
  return (
    <span className="inline-flex flex-wrap items-baseline justify-start gap-x-2 lg:justify-center">
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && (
            <span aria-hidden="true" className="text-[color:var(--silver)]">
              ·
            </span>
          )}
          <span className="whitespace-nowrap">{item}</span>
        </Fragment>
      ))}
    </span>
  )
}

export function WorkSplit() {
  return (
    /* pb-0 at every size: the page's fade divider follows this section and
       owns the whole gap with its own symmetric margins — any padding here
       stacks on the divider's top side and throws it off centre. */
    <section className="relative">
      {/* No divider — controlled whitespace separates this from the section above. */}
      <div className="ps-container pt-4 sm:pt-8 lg:pt-[var(--space-section)]">
        {/* ONE centred column for the whole section. Children fill it and share
            its left edge — no per-child mx-auto, which would give each block a
            different left edge while all agreeing on the same centre. */}
        <div className="lg:mx-auto lg:max-w-[900px]">
        <Reveal>
          {/* The heading alone carries the claim — the hero already made the
              "catches every enquiry, replies in seconds" promise verbatim.
              Breaks are set by hand, one sentence per line. */}
          <h2 className="mx-auto max-w-2xl text-center text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.02em] ps-silver lg:max-w-none lg:text-[44px]">
            You do the work.{" "}
            <br className="hidden lg:inline" />
            Solren handles the chase.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <div>
            {/* Two stacked rows, centred on the section axis. No surface, no
                divider, no columns, no ticks: a two-column comparison of a
                3-item and a 5-item list cannot hold equal columns, a centred
                divider and equidistant content at once. Stacked, there is
                nothing left to align — and the second row running to two lines
                against the first row's one IS the argument. */}
            {/* Desktop margins sit BELOW their target gaps: the 1.7 line-height
                and the eyebrow's half-leading pad every glyph, so an 8px painted
                gap needs a 0 margin and a 40px painted gap needs 22px. The
                numbers the eye measures are the ink, not the box.
                The 5:1 ratio between the two is what makes each eyebrow bind to
                its own line and the two rows read as a pair. */}
            {/* One alignment rule page-wide: display lines centred, scanned
                content left. Below lg these rows are reading material, so they
                sit on the column's left edge with their eyebrows; desktop keeps
                the centred composition. */}
            <div className="mt-6 sm:mt-8 lg:mt-[var(--space-block)] lg:text-center">
              <div>
                <span className="ps-label !text-[12px]">You handle</span>
                <p className="mt-3 text-[15px] leading-[1.7] text-[var(--silver)] lg:mt-0 lg:text-[17px]">
                  <DotList items={YOU_HANDLE} />
                </p>
              </div>

              {/* Both rows are set identically — same size, same colour. The
                  argument is carried by the rows' differing LENGTH, not by tone
                  or scale: three items against four. */}
              {/* Same step as headline→row-one (mt-6/sm:mt-8): the three gaps in
                  this block share one rhythm below lg. Desktop keeps its
                  authored painted-gap margin. */}
              <div className="mt-6 sm:mt-8 lg:mt-[22px]">
                <span className="ps-label !text-[12px]">Solren handles</span>
                <p className="mt-3 text-[15px] leading-[1.7] text-[var(--silver)] lg:mt-0 lg:text-[17px]">
                  <DotList items={SOLREN_HANDLES} />
                </p>
              </div>
            </div>

            {/* the payoff of the section, not a caption to the left column */}
            {/* 30/38px, not mt-6/mt-8: the two gaps above land at 30/38 rendered
                because their target rows carry ~6px of eyebrow half-leading this
                bare line doesn't have — matching the RENDERED gap keeps the
                block's rhythm even below lg. */}
            <p className="mt-[30px] text-[13px] leading-relaxed text-[var(--muted)] sm:mt-[38px] lg:mt-[33px] lg:text-center lg:text-[28px] lg:leading-snug lg:text-[color:var(--silver)]">
              That&apos;s it. You stay on the tools.
            </p>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- 2. You approve — nothing sends without you ---------- */

/* Step 3 IS the auto-send, so step 1 and the heading must not claim "every".
   The concession is the point: the first reply is approved, the follow-ups are not. */
const APPROVE_STEPS: NumberedStep[] = [
  { title: "The first reply lands on your phone" },
  { title: "One tap to approve or edit" },
  { title: "Solren sends it and keeps following up" },
]

export function ApprovalGate() {
  return (
    /* pt-0 below lg: the fade divider above owns the section break with
       symmetric margins; top padding here stacked under the divider's bottom
       side and unbalanced it. */
    <section className="relative pb-8 sm:pb-12 lg:pb-0 lg:pt-[var(--space-section)]">
      {/* A numbered 1→2→3 sequence. On desktop the steps sit in a bounded panel
          with a continuous rail through masked number nodes; on mobile they stay
          plain typography with stub connectors. Everything centres on the
          section axis — half-centred reads worse than either extreme. */}
      <div className="ps-container">
        {/* ONE centred column, as in WorkSplit: children share its left edge. */}
        <div className="grid items-start gap-10 lg:mx-auto lg:max-w-[900px] lg:grid-cols-1 lg:gap-[var(--space-block)]">
          <Reveal>
            {/* Display lines (eyebrow + headline) centre at every size; the
                subhead is reading material, so below lg it drops to the
                column's left edge. Desktop keeps everything centred. */}
            <div className="text-center">
              <span className="ps-label block">You stay in control</span>
              <h2 className="mx-auto mt-3 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.02em] text-white lg:max-w-none lg:text-[44px] lg:leading-[1.08]">
                You approve the first reply.
              </h2>
              <p className="mt-3 max-w-xl text-left text-[15px] leading-relaxed text-[var(--muted)] sm:mt-4 lg:max-w-none lg:text-center lg:text-[17px]">
                Solren drafts it and holds it for you. The follow-ups run themselves, and stop the
                moment someone answers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            {/* The strongest trust claim on the page, so it gets a surface with
                real mass — the same hairline treatment as the checklist panel
                and the integrations strip. */}
            <div className="lg:mx-auto lg:max-w-[640px] lg:rounded-[24px] lg:border lg:border-[var(--hair)] lg:bg-white/[0.02] lg:px-12 lg:py-10">
              {/* Label-only rows — the numbered-row grammar itself lives in
                  NumberedSteps, shared with the industry template's workflow. */}
              <NumberedSteps steps={APPROVE_STEPS} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- 3. Installed around your business ---------- */

export function InstalledAround() {
  return (
    /* Mobile-only on How It Works (rendered inside a md:hidden wrapper; desktop
       uses Trust). Tightened lead-in from the cards above, with real bottom
       padding so the rounded capsule completes and the footer begins cleanly
       beneath it (no negative pull — that cropped the card under the footer). */
    <section className="relative pb-6">
      {/* No divider — whitespace separates this from the section above. */}
      <div className="ps-container pt-1 text-center md:text-left">
        <Reveal>
          <h2 className="text-[clamp(1.25rem,2.2vw,1.65rem)] font-medium leading-[1.15] tracking-[-0.02em] ps-silver">
            Built around your business.
          </h2>
          {/* Headline stays centred; the paragraph is reading material, so it
              takes the column's left edge (one rule page-wide). */}
          <p className="mx-auto mt-4 max-w-xl text-left text-[15px] leading-relaxed text-[var(--muted)] md:mx-0">
            We connect the channels you already use, set up the replies and follow-ups, and fit it
            around how your business already works.
          </p>
        </Reveal>

        <Reveal delay={90}>
          {/* No box: the channels read as a quiet monochrome icon set, silver on
              the ground, left-aligned like the reading content above. Reads the
              SAME CHANNELS array as the desktop strip in Trust — icons included,
              so the two breakpoints share both the list and the marks. This
              component only ever renders below md (the page wraps it in
              md:hidden), so there is no desktop variant here. */}
          <ul className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-left">
            {CHANNELS.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-x-2.5 text-[var(--silver)]">
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-[14px] font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-5 flex max-w-xl flex-col gap-1 text-left text-[14.5px] leading-relaxed text-[var(--silver)] md:mx-0">
            <p>Billing secured by Stripe. Card details stay with Stripe.</p>
            <p>Your data is stored on secure, access-controlled systems.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
