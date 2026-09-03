import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/services/Hero";
import ServicesList from "@/components/services/ServicesList";
import CTA from "@/components/services/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, servicesSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Branding, Signage & Office Supplies Services",
  description:
    "Explore Cylofa Brands' full range: signage and large format printing, vehicle branding, corporate gifts and branded apparel, plus office supplies, printers, POS machines and printing papers — delivered and installed across Ruiru and Kenya.",
  path: "/services",
  keywords: [
    "signage and large format printing Kenya",
    "vehicle wrap and car branding Ruiru",
    "corporate gifts and branded apparel Kenya",
    "office supplies and printing papers Ruiru",
    "billboard and banner printing Kenya",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...servicesSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
        id="services"
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesList />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
