import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

const PILLARS = [
  {
    title: "Our Mandate",
    description:
      "To be a credible partner in corporate branding, advertising services, and the supply of quality office stationery, printers, and printing papers — helping companies create excellent awareness of their business and operate efficiently.",
  },
  {
    title: "Our Calling Commitment",
    description:
      "We are committed to delivering trusted supplies and quality brands. From corporate branding, signage, and advertising to printing papers, office printers, and stationery, we provide solutions that grow your brand and keep your office running.",
  },
  {
    title: "Core Focus",
    description:
      "We offer quality branding services and office supplies designed for your satisfaction;",
    list: "Corporate Branding Services | Advertising Services | Office Stationery | Office Printers | Printing Papers - A4 Reams | POS Machines.",
  },
];

export default function Pillars() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
      <Image
        src="https://images.unsplash.com/photo-1756093158082-37e567772896?w=1600&q=75&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-brand-700/55" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {PILLARS.map(({ title, description, list }, index) => (
          <Reveal key={title} delay={index * 100}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white to-gray-50 p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(220,38,38,0.4)]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700" />
              <h3 className="text-xl font-bold text-brand-600">{title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {description}
              </p>
              {list && (
                <p className="mt-3 leading-relaxed text-ink-900">{list}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
