import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/portfolio/Hero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Signage, Print & Branded Items",
  description:
    "See real branding work delivered by Cylofa Brands: exhibition stands, 3D acrylic signage, teardrop banners, branded gazebo tents, business cards, flyers, custom gift boxes, branded mugs, caps, tote bags and more for clients across Ruiru and Kenya.",
  path: "/portfolio",
  keywords: [
    "branding portfolio Kenya",
    "signage examples Ruiru",
    "branded promotional items Kenya",
    "exhibition stand design Kenya",
    "3D acrylic signage Kenya",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
        id="portfolio"
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
