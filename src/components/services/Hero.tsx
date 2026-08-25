import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <Reveal>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl">
            Our Branding &amp;{" "}
            <span className="text-brand-600">Advertising Solutions</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            We deliver high-impact visual identity solutions for businesses
            aiming to dominate the modern market. From large-scale physical
            installations to intricate corporate detailing.
          </p>

          <a
            href="#services-list"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
          >
            Explore Services
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            className="absolute -right-4 -top-4 hidden h-24 w-24 opacity-60 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              color: "var(--color-brand-200)",
            }}
            aria-hidden="true"
          />

          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl">
            <Image
              src="/assets/home/services-bg.png"
              alt="Office printers and printing equipment"
              fill
              unoptimized
              priority
              className="object-contain p-8"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-3">
              <div className="flex-1 bg-brand-600" />
              <div className="flex-1 bg-ink-900" />
              <div className="flex-1 bg-amber-400" />
              <div className="flex-1 bg-gray-400" />
            </div>
          </div>

          <div className="absolute -bottom-4 left-6 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink-900 shadow-lg">
            Premium Quality
          </div>
        </Reveal>
      </div>
    </section>
  );
}
