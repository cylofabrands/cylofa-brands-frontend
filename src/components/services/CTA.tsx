import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
      <Image
        src="https://images.unsplash.com/photo-1716471330463-f475b00f0506?w=1600&q=75&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/75 to-brand-700/60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl text-left">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500">
            Still Deciding?
          </span>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
            Not Sure What You <span className="text-brand-500">Need?</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Talk to our experts. We&apos;ll help you determine the most
            effective branding solutions for your specific goals.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink-900 active:translate-y-0"
            >
              View Portfolio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
