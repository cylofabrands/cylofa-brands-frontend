import {
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  type LucideIcon,
} from "lucide-react";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/shared/whatsapp";

type ContactDetail = {
  icon: LucideIcon;
  label: string;
  lines: string[];
};

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: MapPin,
    label: "Headquarters",
    lines: ["Wakulima House, Ground Floor", "Backstreet, Ruiru Town"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["0702 716 397", "0726 059 258"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@cylofabrands.co.ke"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Sat: 8:00am – 6:00pm"],
  },
];

const MAP_QUERY = "Wakulima House, Ruiru Town, Kiambu County, Kenya";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50">
        <h2 className="text-2xl font-bold text-ink-900">Reach Out</h2>
        <ul className="mt-6 space-y-6">
          {CONTACT_DETAILS.map(({ icon: Icon, label, lines }) => (
            <li key={label} className="group flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-semibold text-ink-900">{label}</p>
                {lines.map((line) => (
                  <p key={line} className="text-sm text-gray-500">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl bg-ink-900 p-6 shadow-xl shadow-gray-200/50 transition-colors hover:bg-ink-800"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <div>
          <p className="font-semibold text-white">Chat on WhatsApp</p>
          <p className="text-sm text-white/60">
            Get a same-day response from our team
          </p>
        </div>
      </a>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50">
        <p className="px-5 pt-5 text-xs font-bold uppercase tracking-wide text-gray-400">
          Find Us
        </p>
        <div className="relative mt-3 aspect-[4/3] w-full bg-gray-100">
          <iframe
            title="Cylofa Brands location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-ink-900 shadow-md transition-colors hover:bg-gray-50"
          >
            <Navigation className="h-3.5 w-3.5 text-brand-600" />
            View on Maps
          </a>
        </div>
      </div>
    </div>
  );
}
