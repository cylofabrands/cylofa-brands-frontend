import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <Image
        src="/assets/portfolio/work14.jpeg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/75 to-brand-700/60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl text-left">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Let&apos;s Talk
          </span>
          <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ready to Build a Brand People{" "}
            <span className="text-brand-500">Remember?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Talk to our team today for branding, signage, or office supply
            solutions tailored to you.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+254702716397"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink-900 active:translate-y-0"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              Call 0702 716 397
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
