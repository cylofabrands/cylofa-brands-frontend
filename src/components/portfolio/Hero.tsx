import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="bg-white pb-4 pt-24 sm:pt-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
            Our <span className="text-brand-600">Masterpieces</span> in
            Branding
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Explore a curated selection of real work we&apos;ve delivered across
            signage, large-format print, and branded promotional items.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
