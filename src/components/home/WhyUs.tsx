import Image from "next/image";
import { Trophy } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

type Item = {
  label: string;
  color: string;
  cord: number;
  featured?: boolean;
};

const ITEMS: Item[] = [
  { label: "Friendly Prices", color: "text-brand-600", cord: 24 },
  { label: "Customer Satisfaction", color: "text-blue-500", cord: 72 },
  { label: "Latest Technology", color: "text-amber-500", cord: 44 },
  { label: "Creative Designs", color: "text-brand-600", cord: 8 },
  { label: "Success", color: "text-emerald-500", cord: 88, featured: true },
  { label: "Quality", color: "text-amber-500", cord: 36 },
  { label: "Teamwork", color: "text-blue-500", cord: 60 },
  { label: "Reliability", color: "text-emerald-500", cord: 20 },
];

function Bulb({
  size,
  featured,
}: {
  size: number;
  featured?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 140"
      width={size}
      height={(size * 140) / 100}
      fill="none"
      className="overflow-visible"
    >
      <circle
        cx="50"
        cy="42"
        r="40"
        stroke="currentColor"
        strokeWidth="3"
        fill={featured ? "currentColor" : "white"}
        fillOpacity={featured ? 0.12 : 1}
      />
      <path
        d="M35 76 L35 98 Q35 104 41 104 L59 104 Q65 104 65 98 L65 76"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="36" y1="86" x2="64" y2="86" stroke="currentColor" strokeWidth="2.5" />
      <line x1="36" y1="94" x2="64" y2="94" stroke="currentColor" strokeWidth="2.5" />
      <rect
        x="41"
        y="104"
        width="18"
        height="9"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
      <Image
        src="https://images.unsplash.com/photo-1756093158082-37e567772896?w=1600&q=75&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-brand-700/55" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
            Why Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Should You Choose Us?
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-5 gap-y-16 sm:gap-x-6 lg:gap-x-8">
          {ITEMS.map((item, index) => (
            <Reveal key={item.label} delay={index * 70} className={item.color}>
              <div
                className="flex origin-top flex-col items-center"
                style={{
                  animation: `swing ${3.2 + (index % 4) * 0.4}s ease-in-out infinite`,
                  animationDelay: `-${(index % 5) * 0.35}s`,
                }}
              >
                <div
                  className="w-0.5 bg-current opacity-60"
                  style={{ height: item.cord }}
                />

                <div className="relative transition-transform duration-300 hover:scale-110">
                  {item.featured && (
                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      style={{
                        animation: "glow-pulse 2.4s ease-in-out infinite",
                      }}
                      aria-hidden="true"
                    >
                      {RAYS.map((angle) => (
                        <span
                          key={angle}
                          className="absolute h-2.5 w-1 rounded-full bg-current opacity-70"
                          style={{
                            transform: `rotate(${angle}deg) translateY(-78px)`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <Bulb size={item.featured ? 138 : 98} featured={item.featured} />

                  <div
                    className="absolute inset-x-0 flex flex-col items-center justify-center px-4 text-center"
                    style={{
                      top: item.featured ? "16%" : "16%",
                      height: item.featured ? "46%" : "42%",
                    }}
                  >
                    {item.featured && (
                      <Trophy
                        className="mb-1 h-5 w-5 text-current"
                        strokeWidth={1.75}
                      />
                    )}
                    <span
                      className={`font-bold leading-tight ${
                        item.featured ? "text-sm text-white" : "text-xs text-ink-900"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
