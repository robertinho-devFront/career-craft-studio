import { MessageCircle } from "lucide-react";

const PHONE = "33610218662";
const MESSAGE = encodeURIComponent(
  "Bonjour, je souhaiterais des informations concernant vos services CV.",
);
const HREF = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export function WhatsAppButton() {
  return (
    <>
      {/* Mobile: icône flottante */}
      <a
        href={HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-elevated md:hidden"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>

      {/* Desktop: bouton avec libellé */}
      <a
        href={HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-[oklch(0.72_0.17_150)] px-5 py-3 text-sm font-medium text-white shadow-elevated transition-transform hover:-translate-y-0.5 md:inline-flex"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Discuter sur WhatsApp
      </a>
    </>
  );
}
