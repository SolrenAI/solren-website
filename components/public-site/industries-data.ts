import {
  Zap,
  Droplets,
  Hammer,
  HardHat,
  Trees,
  Wind,
  SprayCan,
  Bug,
  Paintbrush,
  Waves,
  Wrench,
  Layers,
  type LucideIcon,
} from "lucide-react"

/* One ordered list of industries drives the Industries grid and each industry
   page. Copy is written naturally for each trade, not keyword stuffed. The hero,
   common problems, how-it-helps and FAQs are tailored per industry so every page
   reads like it was written for that trade; only the workflow is shared, since
   the mechanism is identical for everyone. */

export type Industry = {
  slug: string
  name: string
  /* lower-case audience phrase for the problems heading, e.g. "electricians",
     "HVAC businesses", "pool service businesses", "handymen" */
  audience: string
  label: string
  icon: LucideIcon
  image?: string
  /* desktop-only Industries-grid card image; mobile keeps `image` */
  imageDesktop?: string
  /* optional distinct hero image for the detail page (falls back to `image`) */
  heroImage?: string
  /* desktop-only detail-page image; mobile keeps `heroImage`/`image` (card photo) */
  heroImageDesktop?: string
  /* detail-page hero object-fit; defaults to "cover". "contain" shows the whole
     photo (letterboxed against the frame's near-black ground) without cropping */
  imageFit?: "cover" | "contain"
  objectPosition?: string
  heroTitle: string
  /* ---- the per-trade copy variables ----------------------------------------
     Rewritten trades run 3 problems / 3 helps / max 3 FAQs and omit helpsIntro
     (the hero sub does that job). The eleven not yet rewritten still run 4/4 and
     supply an intro, so the arrays stay loose and helpsIntro stays optional.
     TIGHTEN TO TUPLES ([string, string, string]) ONLY once all twelve are done —
     doing it earlier will not compile. */
  /* one line, the sting */
  heroSub: string
  /* the trade's pain, in their words. 3 once rewritten. */
  problems: string[]
  /* verb-led, each ending on a felt outcome. 3 once rewritten. */
  helps: string[]
  /* max 3. No question the hero or problems already answer. */
  faqs: { q: string; a: string }[]
  /* OPTIONAL. Legacy intro paragraph above the helps list. */
  helpsIntro?: string
  /* opt-in looser hero line-height for longer headlines that would otherwise
     clip glyph tops/bottoms when they wrap */
  heroLoose?: boolean
}

export const industries: Industry[] = [
  {
    slug: "electricians",
    name: "Electricians",
    audience: "electricians",
    label: "Electrical · on site",
    icon: Zap,
    image: "/images/trades/electricians/industries-electrician.jpg",
    heroImage: "/images/trades/electricians/electricians-industry.jpg",
    objectPosition: "center",
    heroTitle: "Win the job while you're still up the ladder.",
    heroSub:
      "Solren catches every enquiry and quote while you're up a ladder or in a roof space.",
    problems: [
      "Quote requests landing while you're mid-job and can't stop.",
      "After-hours job requests that sit unanswered until the morning.",
      "Enquiries scattered across website, Google, socials and email.",
    ],
    helps: [
      "Catches every message while your hands are full.",
      "Drafts the reply to a quote request in seconds. You approve it from your phone.",
      "Chases quiet switchboard and rewire quotes before the job goes to another sparky.",
    ],
    faqs: [
      {
        q: "What if a job comes in after hours?",
        a: "When someone messages or fills in your form at night, Solren replies straight away, so an urgent job is answered before morning.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    audience: "plumbers",
    label: "Plumbing · call out",
    icon: Droplets,
    image: "/images/trades/plumbing/industries-plumbing.jpg",
    heroImage: "/images/trades/plumbing/plumbing-industry.jpg",
    objectPosition: "center",
    heroTitle: "Book the leak before it books someone else.",
    heroSub: "From burst pipes to hot water quotes, Solren replies before the next plumber does.",
    problems: [
      "Emergency calls missed while you are under a sink or on a job.",
      "After-hours burst pipes and blocked drains that go to the next plumber who picks up.",
      "Hot water system quotes that slip down the inbox.",
      "Leads going cold before you can call back.",
    ],
    helpsIntro:
      "Solren catches urgent enquiries and quote requests while your hands are full, so the job doesn't go to the next plumber.",
    helps: [
      "Catches every message and form, even when you are mid-job or on the tools.",
      "Drafts a fast reply to a burst pipe or hot water quote for you to approve.",
      "Chases quiet quotes so a blocked drain or repair does not go cold.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "What if an urgent job comes in after hours?",
        a: "When someone messages about a leak or a blockage at night, Solren replies straight away, so the job's yours before they try the next plumber.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "builders",
    name: "Builders",
    audience: "builders",
    label: "Building · on site",
    icon: Hammer,
    image: "/images/trades/builders/builders-industry.jpg",
    heroImage: "/images/trades/builders/builders-individual.jpg",
    objectPosition: "center",
    heroTitle: "Win the quote while you're still on site.",
    heroSub: "Solren tracks every enquiry while you manage sites, subbies and clients.",
    problems: [
      "Enquiries lost in a busy inbox while you are running sites.",
      "Long quote cycles with no follow-up.",
      "Clients left waiting for a reply between site visits.",
      "Juggling subbies, trades and new leads at the same time.",
    ],
    helpsIntro:
      "Solren keeps every enquiry and quote moving while you are on site managing trades and clients.",
    helps: [
      "Catches every enquiry from clients, referrals and forms while you are on site.",
      "Drafts a fast reply to a new build or renovation enquiry for you to approve.",
      "Chases quiet quotes through long decision cycles so they do not stall.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it keep up during a busy build?",
        a: "Yes. New enquiries get a fast reply even when you're flat out on site, so a big job doesn't cost you the next one.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "roofers",
    name: "Roofers",
    audience: "roofers",
    label: "Roofing · at height",
    icon: HardHat,
    image: "/images/trades/roofers/industries-roofing.jpg",
    heroImage: "/images/trades/roofers/roofers-page.jpg",
    objectPosition: "50% 40%",
    heroTitle: "Catch the storm work before it blows over.",
    heroSub: "When storm work floods in, Solren answers every enquiry so none slip.",
    problems: [
      "Calls missed while you are up on a roof or working at height.",
      "Enquiry surges after storms and heavy weather.",
      "Re-roof and repair quotes that never get chased.",
      "Seasonal demand that is hard to keep up with.",
    ],
    helpsIntro:
      "Solren handles weather-driven enquiry spikes while you are up on the roof, so the good jobs do not slip.",
    helps: [
      "Catches every message and form while you are at height or on a roof.",
      "Drafts a fast reply to a leak, repair or re-roof enquiry for you to approve.",
      "Chases quiet quotes so storm-damage work does not go to the next roofer.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "What about a surge after a storm?",
        a: "Storm week is a flood of enquiries. Solren replies to every one, so the repair work goes to you and not the roofer who answered first.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    audience: "landscapers",
    label: "Landscaping · grounds",
    icon: Trees,
    image: "/images/trades/landscapers/landscapers-industry.jpg",
    heroImage: "/images/trades/landscapers/landscapers-page.jpg",
    objectPosition: "center",
    heroTitle: "Book the job while you're still on the round.",
    heroSub:
      "Solren replies and follows up while you're out on the round, so the quote's answered before you're back in the ute.",
    problems: [
      "Spring hits and quote requests pile up faster than you can get to them.",
      "Design and maintenance jobs that sit unanswered while you're on site.",
      "Enquiries landing across form, Google and socials all at once.",
    ],
    helps: [
      "Catches every enquiry while you're out on the round.",
      "Drafts the landscaping quote in seconds. You approve it from your phone.",
      "Chases the quiet ones before a faster landscaper takes it.",
    ],
    faqs: [
      {
        q: "Can it keep up in the busy season?",
        a: "When quotes peak in spring and summer, Solren answers every one in the background, so none slip while you're out on the round.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    audience: "HVAC businesses",
    label: "HVAC · rooftop",
    icon: Wind,
    image: "/images/trades/hvac-01.webp",
    heroImage: "/images/trades/hvac/hvac-page.jpg",
    objectPosition: "center",
    heroTitle: "Win the job while you're still on the roof.",
    heroSub: "Solren keeps up with peak-season demand so no install or breakdown waits until morning.",
    problems: [
      "Call volume that spikes through peak season.",
      "Breakdown call-outs that need a fast reply.",
      "Install and servicing quotes that never get chased.",
      "After-hours enquiries left waiting until morning.",
    ],
    /* "install" here is the HVAC trade's own work (fitting aircon units), not
       Solren's onboarding — it stays. Only Solren-setup "installs" were cut. */
    helpsIntro:
      "Solren keeps up with peak-season demand and breakdown jobs so you do not miss the work.",
    helps: [
      "Catches every message and form, even when you are mid-install or on a service.",
      "Drafts a fast reply to a breakdown or install quote for you to approve.",
      "Chases quiet install and servicing quotes before the customer moves on.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it keep up in peak season?",
        a: "When the heat hits and enquiries spike, Solren answers every message fast, so the busiest week of the year isn't the one you lose jobs in.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "cleaners",
    name: "Cleaners",
    audience: "cleaners",
    label: "Cleaning · crew",
    icon: SprayCan,
    image: "/images/trades/cleaners/cleaners-industry.jpg",
    heroImage: "/images/trades/cleaners/cleaners-page.jpg",
    objectPosition: "center",
    heroTitle: "Win the clean while you're still on the last one.",
    heroLoose: true,
    /* The master example for the rewritten voice: hero sub carries the sting (so
       no helpsIntro), 3 problems, 3 verb-led helps, 3 FAQs. */
    heroSub: "The first quote back books the clean. Solren makes sure it's yours.",
    problems: [
      "Quotes that sit for a day go to whoever replied first.",
      "Regular, one-off and end-of-lease jobs, all arriving at once.",
      "Enquiries landing after hours, while your crews are still out.",
    ],
    helps: [
      "Catches every enquiry while your crews are on the job.",
      "Drafts the quote in seconds. You approve it from your phone.",
      "Chases the quiet ones before a faster cleaner takes the clean.",
    ],
    faqs: [
      {
        q: "Can it keep up with a lot of small enquiries?",
        a: "Yes. Bond cleans, regulars and one-offs all get a fast reply, so a busy week doesn't mean quotes going unanswered.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    audience: "pest control businesses",
    label: "Pest control · field",
    icon: Bug,
    image: "/images/trades/pest-control/pest-control-industry.jpg",
    heroImage: "/images/trades/pest-control/pest-control-page.jpg",
    objectPosition: "40% center",
    heroTitle: "Book the job while it's still crawling.",
    heroSub: "Solren catches urgent jobs and recurring plans before they go cold.",
    problems: [
      "Urgent callouts that cannot wait.",
      "Seasonal spikes in enquiries.",
      "Inspection and recurring-plan quotes left unanswered.",
      "Calls missed while you are out treating a job.",
    ],
    helpsIntro:
      "Solren catches urgent jobs and recurring-plan enquiries while you are out on a treatment.",
    helps: [
      "Catches every message and form while you are out treating a job.",
      "Drafts a fast reply to a treatment, inspection or plan enquiry for you to approve.",
      "Chases quiet quotes so recurring plans get booked, not forgotten.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "What if an urgent job comes in?",
        a: "When someone messages because they've seen one, Solren replies straight away, because that's a job that won't wait for a callback.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "painters",
    name: "Painters",
    audience: "painters",
    label: "Painting · on site",
    icon: Paintbrush,
    image: "/images/trades/painters/painters-industry.jpg",
    heroImage: "/images/trades/painters/painters-page.jpg",
    objectPosition: "60% center",
    heroTitle: "Win the quote before the second painter answers.",
    heroLoose: true,
    heroSub: "Solren follows up on every quote so a slow reply does not lose the job.",
    problems: [
      "Quote-heavy enquiries that all need following up.",
      "Slow replies that lose jobs to the next painter.",
      "Enquiries from referrals and forms to keep track of.",
      "Site visits to schedule around the work.",
    ],
    helpsIntro:
      "Solren keeps quote enquiries moving so a slow reply does not lose the job.",
    helps: [
      "Catches every enquiry while you are on site or on the tools.",
      "Drafts a fast reply to an interior or exterior quote for you to approve.",
      "Chases quiet quotes so the job does not go to the next painter.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Will it follow up on quotes for me?",
        a: "Yes. Solren chases quiet quotes before the customer books the painter who replied first, so fewer of your quotes go cold.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "concreters",
    name: "Concreters",
    audience: "concreters",
    label: "Concrete · on site",
    icon: Layers,
    image: "/images/trades/concreters/concreters-industry-desktop.jpg",
    heroImage: "/images/trades/concreters/concreters-page.webp",
    objectPosition: "center",
    heroTitle: "Book the pour before it sets with someone else.",
    heroSub: "Solren catches enquiries and locks in pours while your hands are full on the slab.",
    problems: [
      "Enquiries missed during a pour or while finishing a slab.",
      "Quotes for slabs, driveways and paths left unanswered.",
      "Jobs that hinge on weather and timing.",
      "Calls that come in while you cannot stop.",
    ],
    helpsIntro:
      "Solren catches enquiries and locks in pours while your hands are full on the slab.",
    helps: [
      "Catches every enquiry while you are mid-pour or finishing a slab.",
      "Drafts a fast reply to a slab, driveway or path quote for you to approve.",
      "Chases quiet quotes so the next pour gets booked in.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it catch enquiries while I'm mid-pour?",
        a: "Yes. Site enquiries get a fast reply even when your hands are full, so the next pour doesn't get booked with another crew.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "pool-services",
    name: "Pool Services",
    audience: "pool service businesses",
    label: "Pool services · maintenance",
    icon: Waves,
    image: "/images/trades/pool-service/pool-service-industry.jpg",
    heroImage: "/images/trades/pool-service/pool-service-page.jpg",
    objectPosition: "center",
    heroTitle: "Book the job while the pool's still green.",
    heroSub: "From green pools to regular servicing, Solren keeps every job on track.",
    problems: [
      "Seasonal peaks in enquiries over summer.",
      "Recurring maintenance to keep organised.",
      "Urgent repair and green-pool requests to answer fast.",
      "Quotes that need following up.",
    ],
    helpsIntro:
      "Solren keeps maintenance, repairs and seasonal enquiries moving in one place.",
    helps: [
      "Catches every enquiry while you are out servicing pools.",
      "Drafts a fast reply to a maintenance, repair or green-pool job for you to approve.",
      "Chases quiet quotes so seasonal work gets booked early.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it keep up over the summer peak?",
        a: "When summer hits and the enquiries spike, Solren answers every one fast, so a green pool on Friday is booked by Friday.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
  {
    slug: "handyman",
    name: "Handyman",
    audience: "handymen",
    label: "Handyman · local jobs",
    icon: Wrench,
    image: "/images/industries/handyman.jpg",
    heroImage: "/images/trades/handyman/handyman-page.jpg",
    objectPosition: "60% center",
    heroTitle: "Win the job before the list gets longer.",
    heroSub: "Solren replies fast to a steady stream of enquiries so you are not living in your inbox.",
    problems: [
      "Lots of small enquiries to answer through the day.",
      "Fast replies that decide who gets the job.",
      "A wide mix of jobs to keep track of.",
      "Enquiries that are easy to lose on a busy day.",
    ],
    helpsIntro:
      "Solren replies fast to a steady stream of small jobs so you are not living in your inbox.",
    helps: [
      "Catches every enquiry while you are out on a job.",
      "Drafts a fast reply to a small-job or quote enquiry for you to approve.",
      "Chases quiet quotes so the job does not go to the next handyman.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle a lot of small enquiries?",
        a: "Yes. Small jobs get a fast reply so more of them turn into booked work, instead of a list of messages you never got back to.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts it, you approve it. Every message still sounds like you.",
      },
    ],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
