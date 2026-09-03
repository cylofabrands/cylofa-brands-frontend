import { SITE } from "./seo";

/**
 * JSON-LD builders. These feed Google rich results and give AI answer engines
 * (ChatGPT, Perplexity, Gemini, Google AI Overviews) a clean, machine-readable
 * description of who Cylofa Brands is, where it operates, and what it sells.
 */

const ORG_ID = `${SITE.url}/#organization`;
const BUSINESS_ID = `${SITE.url}/#localbusiness`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/assets/home/logo.png`,
    image: `${SITE.url}/opengraph-image`,
    description: SITE.description,
    foundingDate: SITE.foundingYear,
    email: SITE.email,
    telephone: SITE.phone,
    slogan: "Trusted Supplies · Quality Branding",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "KE",
        availableLanguage: ["en", "sw"],
      },
    ],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

const SERVICES: { name: string; description: string }[] = [
  {
    name: "Signage & Large Format Printing",
    description:
      "Design, production and installation of high-visibility tents, banners, billboards, backlit signage and exhibition stands using weather-resistant materials.",
  },
  {
    name: "Vehicle Branding",
    description:
      "Premium vehicle wraps and decals in durable automotive-grade vinyl that turn fleets into moving billboards.",
  },
  {
    name: "Corporate Gifts & Branded Apparel",
    description:
      "Supply and branding of corporate gifts, custom uniforms and executive stationery with embroidery, screen printing and engraving.",
  },
  {
    name: "Office Supplies & Print",
    description:
      "Office stationery, office printers, POS machines, printing paper (A4 reams, HP, Double A) and custom packaging for businesses, schools and government offices.",
  },
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": BUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/home/logo.png`,
    image: `${SITE.url}/opengraph-image`,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "KES",
    paymentAccepted: "Cash, M-Pesa, Bank transfer, POS",
    foundingDate: SITE.foundingYear,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Wakulima House, Ruiru Town, Kiambu County, Kenya",
    )}`,
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Branding, Advertising & Office Supplies",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": ORG_ID },
          areaServed: "KE",
        },
      })),
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-KE",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function servicesSchema() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    provider: { "@id": ORG_ID },
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
  }));
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
