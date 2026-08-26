import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-900"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/home-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-right opacity-45"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 from-10% via-ink-900/85 via-45% to-ink-900/30" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 pt-28 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <h1
            className="text-4xl font-black leading-[1.05] tracking-tight text-white opacity-0 [animation:fade-in-up_0.6s_ease-out_both] sm:text-5xl lg:text-6xl"
          >
            We&apos;ve Got You Covered — From Branding to{" "}
            <span className="text-brand-500">Office Supplies</span>
          </h1>

          <p
            className="mt-6 max-w-md text-lg leading-relaxed text-white/70 opacity-0 [animation:fade-in-up_0.6s_ease-out_0.15s_both]"
          >
            Cylofa Brands is a creative branding, advertising, and
            office-supplies company helping businesses, schools, and
            government offices across Kenya build strong identities and run
            smoothly.
          </p>

          <div
            className="mt-8 flex flex-col gap-4 opacity-0 [animation:fade-in-up_0.6s_ease-out_0.3s_both] sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 active:translate-y-0"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink-900 active:translate-y-0"
            >
              View Our Services
            </Link>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-2xl opacity-0 [animation:fade-in-up_0.7s_ease-out_0.25s_both] lg:mx-0 lg:max-w-none"
        >
          <div
            className="absolute -right-4 -top-4 hidden h-24 w-24 opacity-40 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              color: "#ffffff",
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
              sizes="(min-width: 1024px) 40rem, 90vw"
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:scale-[1.03]"
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
