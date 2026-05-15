import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-glow" />
      <span className="relative flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-[oklch(0.18_0.05_260)] pl-3 pr-4 py-3 shadow-[var(--shadow-card)] hover:scale-105 transition">
        <span className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="hidden sm:block text-sm font-bold">Chat with us</span>
      </span>
    </a>
  );
}
