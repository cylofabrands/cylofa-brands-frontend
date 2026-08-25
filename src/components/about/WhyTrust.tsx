import { Gem, Palette, Settings, Smile, Tag, Users } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const REASONS = [
  {
    icon: Palette,
    title: "Creative Designs",
    description: "Innovative concepts tailored to your brand's unique voice.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Uncompromising standards in every print and stitch.",
  },
  {
    icon: Settings,
    title: "Latest Technology",
    description: "State-of-the-art equipment for precise, vibrant results.",
  },
  {
    icon: Tag,
    title: "Friendly Prices",
    description: "Cost-effective solutions without sacrificing quality.",
  },
  {
    icon: Users,
    title: "Reliability & Teamwork",
    description: "A dedicated team working cohesively to meet your deadlines.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Your success and satisfaction are our ultimate metrics.",
  },
];

export default function WhyTrust() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-xl text-left">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
            Trusted Supplies · Quality Branding
          </span>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            The Cylofa <span className="text-brand-600">Difference</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Six reasons businesses across Ruiru Town trust us to deliver,
            every time.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 100}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
