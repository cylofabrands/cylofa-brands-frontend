import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/services/Hero";
import ServicesList from "@/components/services/ServicesList";
import CTA from "@/components/services/CTA";

export const metadata: Metadata = {
  title: "Services | Cylofa Brands",
  description:
    "Signage & large format, vehicle branding, corporate gifts & apparel, and office supplies & print — Cylofa Brands' full range of branding and advertising solutions.",
};

export default function ServicesPage() {
  return (
    <>
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
