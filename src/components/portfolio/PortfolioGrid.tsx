"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

type Category = "Signage" | "Print" | "Promotional";

type PortfolioItem = {
  src: string;
  type: string;
  category: Category;
};

const FILTERS: Array<"All" | Category> = [
  "All",
  "Signage",
  "Print",
  "Promotional",
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { src: "/assets/portfolio/work4.jpeg", type: "Exhibition Stand Design", category: "Signage" },
  { src: "/assets/portfolio/work2.jpeg", type: "Flyer Printing", category: "Print" },
  { src: "/assets/portfolio/work11.jpeg", type: "3D Acrylic Signage", category: "Signage" },
  { src: "/assets/portfolio/work1.jpeg", type: "Branded Caps", category: "Promotional" },
  { src: "/assets/portfolio/work5.jpeg", type: "Business Cards", category: "Print" },
  { src: "/assets/portfolio/work7.jpeg", type: "Teardrop Banner Flags", category: "Signage" },
  { src: "/assets/portfolio/work8.jpeg", type: "Branded Mugs", category: "Promotional" },
  { src: "/assets/portfolio/work12.jpeg", type: "Branded Gazebo Tents", category: "Signage" },
  { src: "/assets/portfolio/work9.jpeg", type: "Branded Tote Bags", category: "Promotional" },
  { src: "/assets/portfolio/work3.jpeg", type: "Custom Gift Boxes", category: "Print" },
  { src: "/assets/portfolio/work13.jpeg", type: "Pop-Up Banners", category: "Signage" },
  { src: "/assets/portfolio/work10.jpeg", type: "Branded Shopping Bags", category: "Promotional" },
  { src: "/assets/portfolio/work6.jpeg", type: "Custom Flags", category: "Signage" },
  { src: "/assets/portfolio/work19.jpeg", type: "Branded Pens", category: "Promotional" },
];

const PAGE_SIZE = 6;

function WorkCard({ item, large = false }: { item: PortfolioItem; large?: boolean }) {
  return (
    <div
      className={`group relative h-full w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        large ? "min-h-[320px] lg:min-h-[560px]" : "min-h-[280px]"
      }`}
    >
      <Image
        src={item.src}
        alt={item.type}
        fill
        unoptimized
        sizes={
          large
            ? "(min-width: 1024px) 50vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 pt-16">
        <span className="inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
          {item.type}
        </span>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const showcase = visible.length >= 3 ? visible.slice(0, 3) : [];
  const rest = visible.length >= 3 ? visible.slice(3) : visible;

  const handleFilter = (filter: "All" | Category) => {
    setActiveFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <div className="bg-white pb-16 pt-8 sm:pb-20">
        <Reveal className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 px-6 lg:px-8">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-amber-400 text-ink-900 shadow-sm"
                  : "border border-gray-200 text-gray-600 hover:border-brand-600 hover:text-brand-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </Reveal>
      </div>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {showcase.length === 3 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Reveal className="lg:h-full">
                <WorkCard item={showcase[0]} large />
              </Reveal>
              <div className="flex flex-col gap-6">
                <Reveal delay={100}>
                  <WorkCard item={showcase[1]} />
                </Reveal>
                <Reveal delay={200}>
                  <WorkCard item={showcase[2]} />
                </Reveal>
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                showcase.length === 3 ? "mt-6" : ""
              }`}
            >
              {rest.map((item, index) => (
                <Reveal key={item.src} delay={(index % 3) * 100}>
                  <WorkCard item={item} />
                </Reveal>
              ))}
            </div>
          )}

          {visible.length === 0 && (
            <p className="py-16 text-center text-gray-500">
              No projects in this category yet — check back soon.
            </p>
          )}

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="inline-flex items-center justify-center rounded-lg border border-ink-900 px-6 py-3.5 text-base font-semibold text-ink-900 transition-all hover:-translate-y-0.5 hover:bg-ink-900 hover:text-white active:translate-y-0"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
