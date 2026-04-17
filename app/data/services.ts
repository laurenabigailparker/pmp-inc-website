export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  shortText: string;
  heroText: string;
  includes: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "luxury-concierge",
    title: "Luxury Concierge",
    eyebrow: "Concierge Service",
    shortText:
      "High-touch support designed to make access to trusted services and professionals feel more seamless, personal, and intentional.",
    heroText:
      "Luxury Concierge is designed for clients who want thoughtful guidance, trusted direction, and a more refined way to access the right support.",
    includes: [
      "Personalized guidance based on your needs",
      "Curated support and service direction",
      "A more seamless, high-touch experience",
      "Trusted introductions when appropriate",
    ],
    idealFor: [
      "Clients who value discretion and ease",
      "Busy professionals seeking trusted support",
      "Those wanting a more elevated experience",
    ],
  },
  {
    slug: "curated-referrals",
    title: "Curated Referrals",
    eyebrow: "Referral Service",
    shortText:
      "Thoughtfully selected professionals across home, business, wellness, and lifestyle needs — guided by trust, alignment, and quality.",
    heroText:
      "Curated Referrals is for clients who do not want random options. It is a more intentional path toward professionals who feel aligned from the start.",
    includes: [
      "Thoughtfully selected professional referrals",
      "Quality-focused recommendations",
      "More aligned introductions",
      "Reduced overwhelm and wasted time",
    ],
    idealFor: [
      "Clients who want trusted recommendations",
      "People looking for quality over quantity",
      "Anyone tired of sorting through endless options",
    ],
  },
  {
    slug: "design-support",
    title: "Design Support",
    eyebrow: "Gateway Design",
    shortText:
      "Through Gateway, we offer design-led guidance and elevated visual direction shaped by beauty, function, and intentional living.",
    heroText:
      "Design Support is rooted in visual clarity, thoughtful presentation, and a more elevated approach to how spaces and experiences feel.",
    includes: [
      "Design-led support through Gateway",
      "Visual direction and presentation guidance",
      "Beauty balanced with function",
      "A more intentional lifestyle aesthetic",
    ],
    idealFor: [
      "Clients who value visual polish",
      "Spaces that need refinement and alignment",
      "People seeking beauty with intention",
    ],
  },
  {
    slug: "private-lifestyle-support",
    title: "Private Lifestyle Support",
    eyebrow: "Lifestyle Service",
    shortText:
      "Refined support services chosen to fit modern life with more ease, confidence, comfort, and exclusivity.",
    heroText:
      "Private Lifestyle Support is designed to help clients move through life with greater ease, stronger access, and a more considered level of support.",
    includes: [
      "Lifestyle-focused support",
      "Thoughtful, elevated direction",
      "Services aligned to your standards",
      "A more exclusive, curated feel",
    ],
    idealFor: [
      "Clients who value access and discretion",
      "Those wanting a polished lifestyle experience",
      "People seeking more ease in day-to-day support",
    ],
  },
  {
  slug: "digital-presence",
  title: "Digital Presence",
  eyebrow: "Brand & Web",
  shortText:
    "Refined website design and digital presence built to reflect your brand with clarity, intention, and elevated aesthetic.",
  heroText:
    "Your online presence should feel just as intentional and refined as the experience you offer in real life. We design websites and digital spaces that reflect your brand with clarity, trust, and quiet confidence.",
  includes: [
    "Website design and layout",
    "Brand-aligned visual direction",
    "User experience refinement",
    "Mobile optimization",
    "Clean, modern development",
  ],
  idealFor: [
    "Business owners building a luxury brand",
    "Professionals wanting a more elevated online presence",
    "Clients seeking clean, modern, and intentional design",
  ],
}
];