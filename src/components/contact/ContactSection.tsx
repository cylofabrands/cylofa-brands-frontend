import Reveal from "@/components/shared/Reveal";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 pb-20 pt-8 sm:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
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
