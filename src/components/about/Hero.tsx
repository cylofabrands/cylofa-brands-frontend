import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-y-0 right-0 z-0 hidden w-1/2 sm:block">
        <Image
          src="/assets/home/hero-mockup.png"
          alt=""
          fill
          unoptimized
          className="object-contain object-right opacity-[0.06]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 sm:py-24 lg:px-8">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">About Us</span>
          </nav>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
            Our Story, Our Craft,{" "}
            <span className="text-brand-600">Our Commitment</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
            Get to know the team behind Ruiru Town&apos;s trusted branding
            and office-supplies partner. We blend corporate modernism with
            bold execution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
