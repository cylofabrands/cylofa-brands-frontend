"use client";

import { useState } from "react";
import {
  BookOpen,
  Coffee,
  NotebookPen,
  PartyPopper,
  Presentation,
  Shirt,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";

type Category = "Signage" | "Print" | "Apparel";

type PortfolioItem = {
  title: string;
  tag: string;
  category: Category;
  icon: LucideIcon;
  gradient: string;
};

const FILTERS: Array<"All" | Category> = ["All", "Signage", "Print", "Apparel"];

const CATEGORY_STYLES: Record<Category, string> = {
  Signage: "from-brand-600 to-brand-800",
  Print: "from-ink-800 to-ink-900",
  Apparel: "from-amber-500 to-amber-700",
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "TechVision Global Identity",
    tag: "Corporate Rebrand",
    category: "Print",
    icon: BookOpen,
    gradient: CATEGORY_STYLES.Print,
  },
  {
    title: "Logistics Express Fleet",
    tag: "Fleet Graphics",
    category: "Signage",
    icon: Truck,
    gradient: CATEGORY_STYLES.Signage,
  },
  {
    title: "Nairobi Summit 2024",
    tag: "Event Branding",
    category: "Signage",
    icon: PartyPopper,
    gradient: CATEGORY_STYLES.Signage,
  },
  {
    title: "Ridgeway Academy Uniforms",
    tag: "School Branding",
    category: "Apparel",
    icon: Shirt,
    gradient: CATEGORY_STYLES.Apparel,
  },
  {
    title: "Highland Retail Signage",
    tag: "Storefront Branding",
    category: "Signage",
    icon: Store,
    gradient: CATEGORY_STYLES.Signage,
  },
  {
    title: "Amara Café Print Suite",
    tag: "Menu & Packaging",
    category: "Print",
    icon: Coffee,
    gradient: CATEGORY_STYLES.Print,
  },
  {
    title: "County Government Expo",
    tag: "Exhibition Stand",
    category: "Signage",
    icon: Presentation,
    gradient: CATEGORY_STYLES.Signage,
  },
  {
    title: "Corporate Staff Polos",
    tag: "Uniform Branding",
    category: "Apparel",
    icon: Shirt,
    gradient: CATEGORY_STYLES.Apparel,
  },
  {
    title: "Executive Notebook Set",
    tag: "Stationery",
    category: "Print",
    icon: NotebookPen,
    gradient: CATEGORY_STYLES.Print,
  },
];

const PAGE_SIZE = 3;

function CardVisual({ item, large = false }: { item: PortfolioItem; large?: boolean }) {
  const Icon = item.icon;
  return (
    <div
      className={`group relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl bg-gradient-to-br shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${item.gradient}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      <div className="flex h-full w-full items-center justify-center">
        <Icon
          className={`text-white/25 transition-transform duration-500 group-hover:scale-110 ${
            large ? "h-28 w-28" : "h-16 w-16"
          }`}
          strokeWidth={1.25}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-16">
        <span className="inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
          {item.tag}
        </span>
        <h3
          className={`mt-3 font-bold text-white ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}
        >
          {item.title}
        </h3>
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
                <CardVisual item={showcase[0]} large />
              </Reveal>
              <div className="flex flex-col gap-6">
                <Reveal delay={100}>
                  <CardVisual item={showcase[1]} />
                </Reveal>
                <Reveal delay={200}>
                  <CardVisual item={showcase[2]} />
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
                <Reveal key={item.title} delay={(index % 3) * 100}>
                  <CardVisual item={item} />
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
