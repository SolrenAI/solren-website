import type { Metadata } from "next"

import { LegalDoc, type LegalSection } from "@/components/public-site/legal-doc"

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Guidelines for using the Solren name, logo and visual identity.",
  alternates: { canonical: "/brand" },
}

const sections: LegalSection[] = [
  {
    h: "Overview",
    body: [
      "The Solren name, logo, S mark, website, product visuals, copy, design system and related brand assets are owned by Solren or licensed to Solren.",
      "These guidelines explain how Solren brand assets may and may not be used.",
    ],
  },
  {
    h: "No licence granted",
    body: [
      "These guidelines do not grant you any ownership, licence or other rights in Solren brand assets. Any use of Solren brand assets must follow these guidelines and any written permission we provide.",
    ],
  },
  {
    h: "Permission",
    body: [
      "Do not use the Solren name, logo, S mark or brand assets in a way that suggests partnership, sponsorship, endorsement, approval or affiliation with Solren unless we have agreed to it in writing.",
    ],
  },
  {
    h: "Logo and S mark",
    body: [
      "Do not alter, stretch, distort, recolour, recreate, crop, blur or modify the Solren logo or S mark.",
      "Do not place the logo on busy backgrounds or use it in a way that makes it unclear or misleading.",
    ],
  },
  {
    h: "Naming",
    body: [
      "Do not use Solren in the name of your product, company, domain, social handle, app, service or marketing campaign unless we have agreed to it in writing.",
    ],
  },
  {
    h: "Screenshots and references",
    body: [
      "You may refer to Solren truthfully when describing your use of the service, but you must not imply that Solren endorses your business unless we have agreed to it in writing.",
    ],
  },
  {
    h: "Prohibited use",
    body: ["Do not use Solren brand assets:"],
    bullets: [
      "In misleading advertising.",
      "In a competing product or service.",
      "In a way that damages Solren’s reputation.",
      "In unlawful, deceptive, harmful or confusing material.",
      "In a way that suggests official approval without permission.",
    ],
  },
  {
    h: "Third-party marks",
    body: [
      "Any third-party names, logos, products or services mentioned by Solren belong to their respective owners. References to third-party services do not imply endorsement, sponsorship or partnership unless stated.",
    ],
  },
  {
    h: "Removal requests",
    body: [
      "If we believe your use of Solren brand assets is confusing, misleading, harmful or inconsistent with these guidelines, we may ask you to update or stop that use.",
    ],
  },
  {
    h: "Contact",
    body: [
      "For brand questions, email contact@solren.ai.",
    ],
  },
]

export default function BrandPage() {
  return (
    <LegalDoc
      eyebrow="Brand"
      title={<>Solren brand.</>}
      sub="Logos, colours and brand assets for approved use."
      lastUpdated="22 June 2026"
      editorial
      sections={sections}
      footer={
        <>
          These guidelines are provided for clarity and do not grant ownership,
          licence or rights in Solren brand assets.
        </>
      }
    />
  )
}
