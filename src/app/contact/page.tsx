import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/contact/Hero";
import ContactSection from "@/components/contact/ContactSection";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { FAQS } from "@/lib/faq";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Ruiru Town Branding & Office Supplies",
  description:
    "Talk to Cylofa Brands at Wakulima House, Ground Floor, Backstreet, Ruiru Town. Call 0702 716 397 or 0726 059 258, email info@cylofabrands.co.ke, or chat on WhatsApp for branding, signage, printing and office supply quotes. Open Mon–Sat, 8am–6pm.",
  path: "/contact",
  keywords: [
    "contact Cylofa Brands",
    "branding company phone number Ruiru",
    "Wakulima House Ruiru Town",
    "printing shop near me Ruiru",
    "office supplies quote Kenya",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
        id="contact"
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
