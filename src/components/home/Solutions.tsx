import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import TypewriterWord from "@/components/shared/TypewriterWord";

const HEADLINE_WORDS = ["Branding", "Printing", "Advertising"];

export default function Solutions() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Comprehensive{" "}
            <TypewriterWord words={HEADLINE_WORDS} className="text-brand-600" />{" "}
            Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expertly crafted visual communications designed to elevate your
            market presence across all touchpoints.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <Image
                src="/assets/home/solution1.png"
                alt="Cylofa Brands branded step-and-repeat backdrop"
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/25 to-transparent" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Brand Strategy &amp; Identity
                </h3>
                <p className="mt-2 max-w-md text-white/70">
                  Foundational design systems and strategic positioning that
                  communicate your core values with clarity and impact.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <h3 className="text-xl font-bold text-ink-900">
                Signage &amp; Banners
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                High-visibility large format printing and dimensional
                signage for impactful physical presence.
              </p>
              <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br from-ink-800 to-ink-900">
                <Image
                  src="/assets/home/solution2.png"
                  alt="Illuminated backlit signage mockup"
                  fill
                  unoptimized
                  className="object-contain p-4"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-4">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <Image
                src="https://images.unsplash.com/photo-1635274605638-d44babc08a4f?w=800&q=75&auto=format&fit=crop"
                alt="Folded uniform polo shirts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/82" />

              <div className="relative">
                <h3 className="text-xl font-bold text-ink-900">
                  Corporate Apparel
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Premium embroidered and printed uniforms that unify your
                  team and extend brand reach.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-ink-900">
                    Embroidery
                  </span>
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-ink-900">
                    Screen Print
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-8">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:p-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-ink-900">
                  Stationery &amp; Print
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Tactile, high-quality printed materials that leave a
                  lasting professional impression in every physical
                  interaction.
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50 sm:w-48 sm:shrink-0">
                <Image
                  src="/assets/home/solution4.png"
                  alt="Colorful office lever arch files and stationery"
                  fill
                  unoptimized
                  className="object-contain p-3"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
