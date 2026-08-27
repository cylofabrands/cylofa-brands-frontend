"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  QrCode,
  X,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_URL } from "@/components/shared/whatsapp";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Scan our QR code", icon: QrCode, href: "#" },
  { label: "Instagram", icon: Camera, href: "#" },
  { label: "X (Twitter)", icon: X, href: "#" },
  { label: "WhatsApp", icon: MessageCircle, href: WHATSAPP_URL },
];

export default function Footer() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href.startsWith("/") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <WhatsAppButton />
      <footer className="relative overflow-hidden bg-brand-600 pt-16 sm:pt-20">
      <Image
        src="https://images.unsplash.com/photo-1756093158082-37e567772896?w=1600&q=75&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-600/90" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <div className="relative h-10 w-36 brightness-0 invert">
              <Image
                src="/assets/home/logo.png"
                alt="Cylofa Brands"
                fill
                unoptimized
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              Your trusted partner in corporate branding, advertising, and
              office supplies in Ruiru Town.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-brand-600"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="sr-only">Quick Links</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isActive(link.href)
                        ? "font-semibold text-white"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="sr-only">Contact</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={1.75}
                />
                <span>
                  Wakulima House, Ground Floor, Backstreet, Ruiru Town
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-white"
                  strokeWidth={1.75}
                />
                <a href="tel:+254702716397" className="hover:text-white">
                  0702 716 397 / 0726 059 258
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-white"
                  strokeWidth={1.75}
                />
                <a
                  href="mailto:info@cylofabrands.co.ke"
                  className="hover:text-white"
                >
                  info@cylofabrands.co.ke
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-ink-800"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto px-6 py-6 text-center text-xs text-white/70 lg:px-8">
          <p>
            © 2026 Cylofa Brands. Professional Branding &amp; Advertising
            Excellence.
          </p>
        </div>
      </div>
      </footer>
    </>
  );
}
