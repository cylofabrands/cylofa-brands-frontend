import type { Metadata } from "next";

/**
 * Central place for everything search engines and AI crawlers read about
 * Cylofa Brands. Keep NAP (name / address / phone) identical to the Google
 * Business Profile and the footer so the signals reinforce each other.
 */
export const SITE = {
  name: "Cylofa Brands",
  legalName: "Cylofa Brands",
  shortName: "Cylofa",
  // Production origin — override with NEXT_PUBLIC_SITE_URL in the deploy env.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://cylofabrands.co.ke").replace(
    /\/$/,
    "",
  ),
  locale: "en_KE",
  description:
    "Cylofa Brands is a trusted corporate branding, advertising, printing and office-supplies company in Ruiru Town, Kiambu County. We deliver signage and large format, vehicle branding, corporate gifts, branded apparel, printing papers, office printers, POS machines and stationery for businesses, schools and government offices across Kenya.",
  tagline: "Branding, Advertising & Office Supplies in Ruiru, Kenya",
  email: "info@cylofabrands.co.ke",
  phone: "+254702716397",
  phoneAlt: "+254726059258",
  phoneDisplay: "0702 716 397",
  address: {
    street: "Wakulima House, Ground Floor, Backstreet",
    locality: "Ruiru",
    region: "Kiambu County",
    country: "KE",
    countryName: "Kenya",
  },
  // Approximate coordinates for Ruiru Town centre — refine to the exact shop
  // location in the Google Business Profile for best local ranking.
  geo: { latitude: -1.1452, longitude: 36.9663 },
  openingHours: "Mon–Sat: 8:00am – 6:00pm",
  foundingYear: "2016",
  areaServed: ["Ruiru", "Thika", "Juja", "Kiambu County", "Nairobi", "Kenya"],
  sameAs: [
    // Add real profile URLs as they go live — these strengthen entity signals.
    // "https://www.facebook.com/cylofabrands",
    // "https://www.instagram.com/cylofabrands",
    // "https://twitter.com/cylofabrands",
  ] as string[],
} as const;

/** Site-wide keyword pool. Page-level keywords are merged on top of these. */
export const GLOBAL_KEYWORDS = [
  "Cylofa Brands",
  "Cylofabrands",
  "Cylofa Brands Ruiru",
  "branding company in Ruiru",
  "branding company in Kenya",
  "corporate branding services Kenya",
  "advertising company Ruiru",
  "signage company Ruiru",
  "large format printing Kenya",
  "vehicle branding Kenya",
  "car branding Ruiru",
  "corporate gifts Kenya",
  "branded apparel and uniforms Kenya",
  "embroidery and screen printing Kenya",
  "printing services Ruiru Town",
  "business cards printing Kenya",
  "banners and billboards Kenya",
  "office supplies Ruiru",
  "office stationery Kenya",
  "printing papers Kenya",
  "A4 printing paper reams",
  "HP printing paper Kenya",
  "Double A paper Kenya",
  "office printers Kenya",
  "POS machines Kenya",
];

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — ${SITE.tagline}`,
};

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/services". Used for the canonical URL. */
  path: string;
  keywords?: string[];
  /** Set false for pages that should not be indexed. */
  index?: boolean;
};

/**
 * Produces a complete, per-page Metadata object (canonical + Open Graph +
 * Twitter). Because Next merges `openGraph`/`twitter` shallowly, every page
 * must return the full object rather than relying on inheritance.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  index = true,
}: BuildMetadataInput): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const absoluteUrl = `${SITE.url}${canonical === "/" ? "" : canonical}`;

  return {
    title,
    description,
    keywords: [...new Set([...GLOBAL_KEYWORDS, ...keywords])],
    alternates: { canonical },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: absoluteUrl,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
