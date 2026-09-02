import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

export default function Story() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="grid grid-rows-[1.2fr_1fr] gap-2 p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src="/assets/home/hero-mockup.png"
                  alt="Cylofa Brands branded canopy tent"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 32rem, 90vw"
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/assets/portfolio/work16.jpeg"
                    alt="Branded delivery van"
                    fill
                    sizes="(min-width: 1024px) 16rem, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/assets/portfolio/work15.jpeg"
                    alt="Branded notebook and desk stationery"
                    fill
                    sizes="(min-width: 1024px) 16rem, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-600">
            <span className="h-0.5 w-6 bg-brand-600" />
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Established in the Digital Era, Built on Trust
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            Established in the digital era, Cylofa Brands has built a
            credible reputation as a trusted supplier and branding partner
            in Ruiru Town. We offer corporate branding and advertising
            services, alongside quality office stationery, printers, and
            printing papers, for businesses, schools, and government
            offices.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            From corporate branding, signage, and advertising to HP and
            Double A printing papers, office printers, and stationery, we
            provide solutions that grow your brand and keep your office
            running — delivered by an in-house team committed to trusted
            supplies and quality craftsmanship.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
