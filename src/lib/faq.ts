/**
 * Shared FAQ content. Rendered visibly by <Faq /> and emitted as FAQPage
 * JSON-LD — Google requires the answer text to be visible on the page, so
 * both must read from this single source.
 */
export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Where is Cylofa Brands located?",
    answer:
      "Cylofa Brands is at Wakulima House, Ground Floor, Backstreet, Ruiru Town, Kiambu County, Kenya. We serve clients in Ruiru, Thika, Juja, Nairobi and across the country.",
  },
  {
    question: "What services does Cylofa Brands offer?",
    answer:
      "We handle corporate branding and advertising, signage and large format printing, vehicle branding, corporate gifts and branded apparel, plus office supplies including office printers, POS machines, stationery and printing papers such as A4 reams, HP and Double A.",
  },
  {
    question: "Do you deliver and install signage outside Ruiru?",
    answer:
      "Yes. We design, produce, deliver and install tents, banners, billboards and backlit signage for clients throughout Kiambu County, Nairobi and the wider Kenya market.",
  },
  {
    question: "Can Cylofa Brands supply offices, schools and government institutions?",
    answer:
      "Yes. We are a registered supplier of branding services and office supplies for businesses, schools, SACCOs and government offices, and can provide quotations and invoices for procurement.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call 0702 716 397 or 0726 059 258, email info@cylofabrands.co.ke, use the contact form, or message us on WhatsApp for a same-day response. We are open Monday to Saturday, 8:00am to 6:00pm.",
  },
];
