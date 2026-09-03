import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Pillars from "@/components/about/Pillars";
import WhyTrust from "@/components/about/WhyTrust";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, organizationSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Ruiru's Trusted Branding & Supplies Partner",
  description:
    "Established in the digital era, Cylofa Brands is a credible corporate branding, advertising and office-supplies partner in Ruiru Town, Kiambu County. Meet the in-house team behind the signage, print, branded apparel and stationery businesses across Kenya rely on.",
  path: "/about",
  keywords: [
    "about Cylofa Brands",
    "branding partner Ruiru Town",
    "trusted office supplies company Kenya",
    "corporate branding team Kiambu",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
        id="about"
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Pillars />
        <WhyTrust />
      </main>
      <Footer />
    </>
  );
}
