import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import PortfolioGlimpse from "@/components/home/PortfolioGlimpse";
import WhyUs from "@/components/home/WhyUs";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <PortfolioGlimpse />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
