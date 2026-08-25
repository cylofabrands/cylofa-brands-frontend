import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/shared/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-30 flex items-center gap-3"
    >
      <span className="hidden rounded-lg bg-ink-900 px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:inline-block">
        Chat with us
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40"
          aria-hidden="true"
        />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
