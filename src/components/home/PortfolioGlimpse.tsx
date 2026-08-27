"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category =
  | "Branding & Signage"
  | "Promotional Items"
  | "Office Supplies"
  | "Uniforms";

type GlimpseItem = {
  src: string;
  alt: string;
  category: Category;
  contain?: boolean;
  unoptimized?: boolean;
};

const FILTERS: Array<"All" | Category> = [
  "All",
  "Branding & Signage",
  "Promotional Items",
  "Office Supplies",
  "Uniforms",
];

const GLIMPSE_ITEMS: GlimpseItem[] = [
  {
    src: "/assets/home/portfolio4.png",
    alt: "Labor Day Sale roll-up banner stand",
    category: "Branding & Signage",
    contain: true,
    unoptimized: true,
  },
  {
    src: "/assets/home/solution1.png",
    alt: "Cylofa Brands step-and-repeat backdrop",
    category: "Branding & Signage",
    unoptimized: true,
  },
  {
    src: "/assets/home/solution2.png",
    alt: "Illuminated barber shop signage",
    category: "Branding & Signage",
    contain: true,
    unoptimized: true,
  },
  {
    src: "/assets/home/portfolio1.png",
    alt: "Branded Cylofa Prints polo shirt",
    category: "Uniforms",
    contain: true,
    unoptimized: true,
  },
  {
    src: "/assets/home/portfolio5.png",
    alt: "Stack of embroidered branded hoodies",
    category: "Uniforms",
  },
  {
    src: "/assets/home/solution7.png",
    alt: "Branded jute tote bag with water bottle",
    category: "Promotional Items",
  },
  {
    src: "/assets/home/portfolio3.png",
    alt: "Branded corporate gift set of mugs, notebooks, and pens",
    category: "Promotional Items",
  },
  {
    src: "/assets/home/solution3.png",
    alt: "Colorful stationery and pens display",
    category: "Office Supplies",
  },
];

export default function PortfolioGlimpse() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");

  const visibleItems =
    activeFilter === "All"
      ? GLIMPSE_ITEMS
      : GLIMPSE_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl text-left">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600">
            Gallery
          </span>
          <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Work That Speaks <span className="text-brand-600">For Itself</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            A closer look at the branding and supplies our clients trust.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-start gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-brand-600 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-brand-600 hover:text-brand-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {visibleItems.map((item) => (
            <div
              key={item.src}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl ${
                item.contain ? "bg-white" : "bg-gray-100"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized={item.unoptimized}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 45vw"
                className={`transition-transform duration-500 group-hover:scale-110 ${
                  item.contain ? "object-contain p-6" : "object-cover"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900 px-6 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-ink-900 hover:text-white active:translate-y-0"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
