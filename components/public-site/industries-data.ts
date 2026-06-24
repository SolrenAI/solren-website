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
  objectPosition?: string
  heroTitle: string
  heroSub: string
  problems: string[]
  helpsIntro: string
  helps: string[]
  faqs: { q: string; a: string }[]
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
    image: "/images/trades/electrician-01.jpg",
    objectPosition: "center",
    heroTitle: "Stay responsive while you are on the tools.",
    heroSub: "Solren catches every callout and quote while you are up a ladder or in a roof space.",
    problems: [
      "Calls missed while you are on the tools or up in a roof space.",
      "After-hours emergency callouts that sit until the morning.",
      "Switchboard and rewire quotes sent but never chased.",
      "Enquiries scattered across phone, email and website forms.",
    ],
    helpsIntro:
      "Solren keeps callouts and quotes moving while you are on the tools, so good jobs do not go to whoever answers first.",
    helps: [
      "Catches every call and message, even when you are up a ladder or in a roof space.",
      "Drafts a fast reply to a callout or quote request for you to approve.",
      "Chases quiet switchboard and rewire quotes before the customer rings another sparky.",
      "Sends a daily summary of new callouts, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle after-hours emergency callouts?",
        a: "Yes. Solren captures after-hours callouts the moment they land and drafts a reply, so urgent work does not wait until you are off the tools.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, shaped around how your callouts and quote requests come in.",
      },
    ],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    audience: "plumbers",
    label: "Plumbing · call out",
    icon: Droplets,
    image: "/images/industries/plumbers.jpg",
    objectPosition: "center",
    heroTitle: "Plumbing enquiries answered faster.",
    heroSub: "From burst pipes to hot water quotes, Solren replies before the next plumber does.",
    problems: [
      "Emergency calls missed while you are under a sink or on a job.",
      "After-hours burst pipes and blocked drains that go to the next plumber who picks up.",
      "Hot water system quotes that slip down the inbox.",
      "Leads going cold before you can call back.",
    ],
    helpsIntro:
      "Solren catches urgent callouts and quote enquiries while your hands are full, so the job does not go to whoever is on call elsewhere.",
    helps: [
      "Catches every call and message, even when you are mid-job or on the tools.",
      "Drafts a fast reply to a callout or hot water quote for you to approve.",
      "Chases quiet quotes so a blocked drain or repair does not go cold.",
      "Sends a daily summary of new callouts, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle after-hours emergency callouts?",
        a: "Yes. Solren captures after-hours burst pipes and blocked drains the moment they come in and drafts a reply, so urgent jobs do not wait.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, set up around how your callouts and quotes come in.",
      },
    ],
  },
  {
    slug: "builders",
    name: "Builders",
    audience: "builders",
    label: "Building · on site",
    icon: Hammer,
    image: "/images/trades/builder-01.jpg",
    objectPosition: "50% 42%",
    heroTitle: "Keep building enquiries organised.",
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
        a: "Yes. Solren captures and replies to enquiries in the background while you are on site, so nothing waits on you being free.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, shaped around how your enquiries and quotes come in.",
      },
    ],
  },
  {
    slug: "roofers",
    name: "Roofers",
    audience: "roofers",
    label: "Roofing · at height",
    icon: HardHat,
    image: "/images/trades/roofer-01.jpg",
    objectPosition: "50% 40%",
    heroTitle: "Keep roofing enquiries moving while you are on site.",
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
      "Catches every call and message while you are at height or on a roof.",
      "Drafts a fast reply to a leak, repair or re-roof enquiry for you to approve.",
      "Chases quiet quotes so storm-damage work does not go to the next roofer.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle a surge after a storm?",
        a: "Yes. When enquiries spike after bad weather, Solren captures every one and drafts replies, so you do not lose work in the rush.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, set up around how your enquiries come in.",
      },
    ],
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    audience: "landscapers",
    label: "Landscaping · grounds",
    icon: Trees,
    image: "/images/trades/landscaper-01.jpg",
    objectPosition: "center",
    heroTitle: "Stay on top of seasonal enquiries and quotes.",
    heroSub: "Solren replies and follows up while you are out on site or the mowing round.",
    problems: [
      "Seasonal surges in enquiries you cannot get to on site.",
      "Design and maintenance quotes left unanswered.",
      "Enquiries coming in from several channels at once.",
      "Site visits that pull you away from the phone.",
    ],
    helpsIntro:
      "Solren stays on top of seasonal enquiries and quotes while you are out on site.",
    helps: [
      "Catches every enquiry while you are on site or out on the mowing round.",
      "Drafts a fast reply to a maintenance or landscaping quote for you to approve.",
      "Chases quiet quotes so seasonal work gets booked before someone else.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it keep up during the busy season?",
        a: "Yes. When enquiries peak in spring and summer, Solren captures and replies to every one in the background, so none slip.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, shaped around how your enquiries and quotes come in.",
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
    objectPosition: "center",
    heroTitle: "Keep HVAC enquiries moving.",
    heroSub: "Solren keeps up with peak-season demand so no install or breakdown waits until morning.",
    problems: [
      "Call volume that spikes through peak season.",
      "Breakdown call-outs that need a fast reply.",
      "Install and servicing quotes that never get chased.",
      "After-hours enquiries left waiting until morning.",
    ],
    helpsIntro:
      "Solren keeps up with peak-season demand and breakdown call-outs so you do not miss the work.",
    helps: [
      "Catches every call-out and enquiry, even when you are mid-install or on a service.",
      "Drafts a fast reply to a breakdown or install quote for you to approve.",
      "Chases quiet install and servicing quotes before the customer moves on.",
      "Sends a daily summary of new call-outs, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle peak-season call volume?",
        a: "Yes. When breakdowns and enquiries spike in summer and winter, Solren captures every one and drafts replies, so none get missed.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, set up around how your call-outs and quotes come in.",
      },
    ],
  },
  {
    slug: "cleaners",
    name: "Cleaners",
    audience: "cleaners",
    label: "Cleaning · crew",
    icon: SprayCan,
    image: "/images/trades/cleaner-01.jpg",
    objectPosition: "center",
    heroTitle: "Turn cleaning enquiries into scheduled work.",
    heroLoose: true,
    heroSub: "Solren answers regular, one-off and end-of-lease jobs before another cleaner does.",
    problems: [
      "A high volume of small enquiries to answer.",
      "Regular, one-off and end-of-lease jobs to keep straight.",
      "After-hours enquiries that arrive when no one is on the phone.",
      "Enquiries coming in across several channels.",
    ],
    helpsIntro:
      "Solren replies fast to every enquiry, because the first quote back often wins the clean.",
    helps: [
      "Catches every enquiry while your crews are out on jobs.",
      "Drafts a fast reply to a regular, one-off or end-of-lease quote for you to approve.",
      "Chases quiet quotes so the job does not go to a faster cleaner.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle a high volume of small enquiries?",
        a: "Yes. Solren captures and drafts a reply to every enquiry, so even a busy day of small jobs gets answered quickly.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, shaped around how your enquiries come in.",
      },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    audience: "pest control businesses",
    label: "Pest control · field",
    icon: Bug,
    image: "/images/trades/pest-01.jpg",
    objectPosition: "40% center",
    heroTitle: "Respond fast before pests become someone else's job.",
    heroSub: "Solren catches urgent callouts and recurring plans before they go cold.",
    problems: [
      "Urgent callouts that cannot wait.",
      "Seasonal spikes in enquiries.",
      "Inspection and recurring-plan quotes left unanswered.",
      "Calls missed while you are out treating a job.",
    ],
    helpsIntro:
      "Solren catches urgent callouts and recurring-plan enquiries while you are out on a treatment.",
    helps: [
      "Catches every callout and enquiry while you are out treating a job.",
      "Drafts a fast reply to a treatment, inspection or plan enquiry for you to approve.",
      "Chases quiet quotes so recurring plans get booked, not forgotten.",
      "Sends a daily summary of new callouts, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it handle urgent callouts?",
        a: "Yes. Solren captures urgent pest callouts the moment they come in and drafts a reply, so they do not wait until you are back.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, set up around how your callouts and quotes come in.",
      },
    ],
  },
  {
    slug: "painters",
    name: "Painters",
    audience: "painters",
    label: "Painting · on site",
    icon: Paintbrush,
    image: "/images/industries/painters.jpg",
    objectPosition: "60% center",
    heroTitle: "Keep painting quotes moving without the chase.",
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
        q: "Can it follow up on quotes for me?",
        a: "Yes. Solren chases quiet quotes automatically, so a job you have quoted does not go cold while you are on site.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, shaped around how your enquiries and quotes come in.",
      },
    ],
  },
  {
    slug: "concreters",
    name: "Concreters",
    audience: "concreters",
    label: "Concrete · on site",
    icon: Layers,
    image: "/images/industries/concreters.jpg",
    objectPosition: "center",
    heroTitle: "Keep concrete enquiries moving before the schedule fills.",
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
      "Catches every call while you are mid-pour or finishing a slab.",
      "Drafts a fast reply to a slab, driveway or path quote for you to approve.",
      "Chases quiet quotes so the next pour gets booked in.",
      "Sends a daily summary of new enquiries, quotes and follow-ups.",
    ],
    faqs: [
      {
        q: "Can it catch enquiries while I am mid-pour?",
        a: "Yes. Solren captures every call and message while you are on the slab and drafts a reply, so you do not have to stop work to answer.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, set up around how your enquiries and quotes come in.",
      },
    ],
  },
  {
    slug: "pool-services",
    name: "Pool Services",
    audience: "pool service businesses",
    label: "Pool services · maintenance",
    icon: Waves,
    image: "/images/industries/pool-services.jpg",
    objectPosition: "center",
    heroTitle: "Keep pool service enquiries moving all season.",
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
        a: "Yes. When enquiries spike in the warmer months, Solren captures and replies to every one, so none get lost in the rush.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, shaped around how your enquiries come in.",
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
    objectPosition: "60% center",
    heroTitle: "Turn small jobs and callouts into booked work.",
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
        q: "Can it handle lots of small enquiries?",
        a: "Yes. Solren captures and drafts a reply to every enquiry, so even a steady stream of small jobs gets answered fast.",
      },
      {
        q: "Do I have to write every reply myself?",
        a: "No. Solren drafts the reply and you approve what sends, so every message still sounds like you.",
      },
      {
        q: "How long does setup take?",
        a: "Most installs are live in 7 to 14 days, set up around how your enquiries come in.",
      },
    ],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
