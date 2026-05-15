import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function CTABanner() {
  return (
    <section className="section-py">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-14 text-center">
          <div className="absolute -inset-px rounded-3xl opacity-50 pointer-events-none" style={{ background: "var(--gradient-primary)", filter: "blur(40px)", zIndex: -1 }} />
          <h3 className="text-3xl md:text-5xl font-bold">
            Ready to get your <span className="text-gradient">tech sorted?</span>
          </h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Book a free consultation today. Fast quotes, transparent pricing and pro-level service.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground bg-[image:var(--gradient-primary)] hover:opacity-90 transition glow"
          >
            <MessageCircle className="h-4 w-4" /> Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
