import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 pb-4 pt-24 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-xl -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
            Let&apos;s Build Your <span className="text-brand-600">Brand</span> Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Ready to elevate your presence? Reach out to our Ruiru team for
            bold branding and advertising strategies tailored to your vision.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
