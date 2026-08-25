"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, MapPin, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/shared/whatsapp";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

function useScrolled(threshold = 12) {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback, { passive: true });
      return () => window.removeEventListener("scroll", callback);
    },
    () => window.scrollY > threshold,
    () => false,
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const scrolled = useScrolled();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href.startsWith("/") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="relative block h-10 w-32 shrink-0 sm:h-12 sm:w-36"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/assets/home/logo.png"
            alt="Cylofa Brands"
            fill
            priority
            unoptimized
            sizes="144px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-brand-600"
                  : "text-gray-700 hover:text-brand-600"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-600" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <div className="hidden items-center gap-2 border-l border-gray-300 pl-6 pr-6 text-sm font-medium text-gray-600 xl:flex">
            <MapPin className="h-4 w-4 text-brand-600" strokeWidth={1.75} />
            Ruiru Town
          </div>

          <div className="flex items-center gap-3 border-l border-gray-300 pl-6 xl:border-l-0 xl:pl-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Get in Touch
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe57]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden xl:inline">Enquire via WhatsApp</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 lg:hidden"
        >
          <Menu
            className={`absolute h-6 w-6 transition-all duration-300 ${
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`absolute h-6 w-6 transition-all duration-300 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </button>
      </div>

      {mounted &&
        createPortal(
          <>
            <div
              className={`fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <div
              className={`fixed inset-y-0 right-0 z-40 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="flex flex-1 flex-col gap-1 px-4 pt-24">
                {NAV_LINKS.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      transitionDelay: isOpen ? `${index * 60 + 100}ms` : "0ms",
                    }}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    } ${
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-brand-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-4 flex items-center gap-2 px-4 text-sm font-medium text-gray-500">
                  <MapPin className="h-4 w-4 text-brand-600" strokeWidth={1.75} />
                  Ruiru Town
                </div>
              </nav>

              <div className="flex flex-col gap-3 border-t border-gray-100 p-6">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe57]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
}
