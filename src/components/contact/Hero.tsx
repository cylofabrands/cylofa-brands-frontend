import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="bg-gray-50 pb-4 pt-24 sm:pt-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
            Let&apos;s Build Your Brand Together
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
