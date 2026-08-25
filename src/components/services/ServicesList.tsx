import { Boxes, Presentation, Shirt, Truck, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/components/shared/whatsapp";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  reverse?: boolean;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Signage & Large Format",
    description:
      "Command attention in the physical world. We design, produce, and install high-visibility tents, banners, and billboards. Our large format solutions use weather-resistant materials and ultra-sharp printing technology to ensure your brand stands out in high-traffic environments, from trade shows to highway displays.",
    icon: Presentation,
  },
  {
    number: "02",
    title: "Vehicle Branding",
    description:
      "Turn your fleet into moving billboards. We provide premium vehicle wraps and decals that integrate seamlessly with your brand identity. Using durable, automotive-grade vinyl, our designs offer long-lasting mobile marketing that captures thousands of impressions daily.",
    icon: Truck,
    reverse: true,
  },
  {
    number: "03",
    title: "Corporate Gifts & Apparel",
    description:
      "Cultivate loyalty and professional unity. We supply and brand premium corporate gifts, custom uniforms, and executive stationery. Our detailed embroidery and engraving services ensure your logo is presented with the highest level of craftsmanship, reinforcing your brand's premium positioning.",
    icon: Shirt,
  },
  {
    number: "04",
    title: "Office Supplies & Print",
    description:
      "Equip your workspace for success. Beyond branding, we provide essential office supplies, high-quality printing paper, and custom packaging solutions. We ensure consistency across every touchpoint, from everyday documents to the premium boxes your products ship in.",
    icon: Boxes,
    reverse: true,
  },
];

export default function ServicesList() {
  return (
    <section id="services-list" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 sm:gap-24 lg:px-8">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={service.reverse ? "lg:order-2" : ""}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="absolute -right-6 -top-6 h-24 w-24 opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "10px 10px",
                    color: "var(--color-brand-200)",
                  }}
                  aria-hidden="true"
                />
                <div className="flex h-full w-full items-center justify-center">
                  <service.icon
                    className="h-20 w-20 text-ink-800/70 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className={service.reverse ? "lg:order-1" : ""}>
              <div>
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
                  {service.number}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-ink-900 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi Cylofa Brands, I'd like to enquire about your ${service.title} service.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe57]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enquire via WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
