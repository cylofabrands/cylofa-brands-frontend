import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/portfolio/Hero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Cylofa Brands",
  description:
    "A curated selection of real work delivered by Cylofa Brands across signage, large-format print, and branded promotional items.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
