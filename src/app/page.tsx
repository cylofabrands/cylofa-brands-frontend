import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import PortfolioGlimpse from "@/components/home/PortfolioGlimpse";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Cylofa Brands | Branding, Signage & Office Supplies in Ruiru",
    description:
      "Cylofa Brands is a trusted branding, advertising, printing and office-supplies company in Ruiru Town, Kiambu. We deliver signage, vehicle branding, corporate gifts, branded apparel, printing papers, office printers and stationery for businesses, schools and government offices across Kenya.",
    path: "/",
  }),
  title: {
    absolute: "Cylofa Brands | Branding, Signage & Office Supplies in Ruiru",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} id="home" />
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <WhyUs />
        <PortfolioGlimpse />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
