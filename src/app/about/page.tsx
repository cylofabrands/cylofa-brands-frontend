import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Pillars from "@/components/about/Pillars";
import WhyTrust from "@/components/about/WhyTrust";

export const metadata: Metadata = {
  title: "About Us | Cylofa Brands",
  description:
    "Get to know the team behind Ruiru Town's trusted branding and office-supplies partner — our mandate, our commitment, and why businesses trust Cylofa Brands.",
};

export default function AboutPage() {
  return (
    <>
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
