import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";

const AVATAR_GRADIENTS = [
  "from-brand-500 to-brand-700",
  "from-ink-800 to-ink-900",
  "from-brand-600 to-ink-900",
  "from-gray-400 to-gray-600",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/home-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-right opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-5% via-white/65 via-40% to-white/15" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 opacity-0 [animation:fade-in-up_0.6s_ease-out_both]"
          >
            <BadgeCheck className="h-4 w-4" />
            Ruiru Town&apos;s Trusted Branding Partner
          </span>

          <h1
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 opacity-0 [animation:fade-in-up_0.6s_ease-out_0.1s_both] sm:text-5xl lg:text-6xl"
          >
            We&apos;ve Got You Covered — From Branding to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-600">Office Supplies</span>
              <span className="absolute inset-x-0 bottom-1.5 h-3 rounded-full bg-brand-100 sm:bottom-2" />
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 opacity-0 [animation:fade-in-up_0.6s_ease-out_0.2s_both]"
          >
            Cylofa Brands is a creative branding, advertising, and office-supplies
            company helping businesses, schools, and government offices across
            Kenya build strong identities and run smoothly.
          </p>

          <div
            className="mt-8 flex flex-col gap-4 opacity-0 [animation:fade-in-up_0.6s_ease-out_0.3s_both] sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:translate-y-0"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-ink-900 px-6 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-ink-900 hover:text-white active:translate-y-0"
            >
              View Our Services
            </Link>
          </div>

          <div
            className="mt-12 flex items-center gap-4 opacity-0 [animation:fade-in-up_0.6s_ease-out_0.4s_both]"
          >
            <div className="flex -space-x-3">
              {AVATAR_GRADIENTS.map((gradient, index) => (
                <div
                  key={index}
                  className={`h-9 w-9 rounded-full bg-gradient-to-br ${gradient} ring-2 ring-white transition-transform hover:z-10 hover:scale-110`}
                />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Trusted by the best
            </p>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-lg opacity-0 [animation:fade-in-up_0.7s_ease-out_0.25s_both] lg:mx-0 lg:max-w-none"
        >
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

          <div className="relative aspect-[4/3]">
            <Image
              src="/assets/home/hero-mockup.png"
              alt="Cylofa Brands branded canopy tent mockup"
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-contain drop-shadow-[0_25px_35px_rgba(17,24,39,0.25)] transition-transform duration-500 ease-out hover:scale-[1.03]"
            />

            <div className="absolute bottom-[8%] left-0 opacity-0 [animation:pop-in_0.5s_ease-out_0.9s_both]">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-500 opacity-40" />
              <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-white bg-brand-600 text-white shadow-xl sm:h-24 sm:w-24">
                <span className="text-lg font-extrabold sm:text-xl">10+</span>
                <span className="text-center text-[8px] font-semibold uppercase leading-tight tracking-wide sm:text-[9px]">
                  Years
                  <br />
                  Trusted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
