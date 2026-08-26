import Reveal from "@/components/shared/Reveal";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pb-20 pt-8 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={150}>
          <ContactInfo />
        </Reveal>
      </div>
    </section>
  );
}
