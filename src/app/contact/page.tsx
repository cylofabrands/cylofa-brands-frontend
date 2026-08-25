import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/contact/Hero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Cylofa Brands",
  description:
    "Get in touch with Cylofa Brands' Ruiru team for branding, advertising, and office supply solutions tailored to your vision.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
