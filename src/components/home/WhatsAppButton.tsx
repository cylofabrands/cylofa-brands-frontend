import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/shared/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-30 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="hidden rounded-lg bg-ink-900 px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 md:inline-block">
        Chat with us
      </span>

      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40"
          aria-hidden="true"
        />
        <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
      </span>
    </a>
  );
}
