import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import hero from "@/assets/hero-tech.jpg";
import { whatsappLink, PHONE_DISPLAY } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="absolute -top-20 -left-20 -z-10 h-96 w-96 rounded-full bg-electric/30 blur-3xl animate-blob" style={{ background: "color-mix(in oklab, var(--electric) 35%, transparent)" }} />
      <div className="absolute top-40 -right-24 -z-10 h-96 w-96 rounded-full blur-3xl animate-blob" style={{ background: "color-mix(in oklab, var(--cyan) 25%, transparent)", animationDelay: "4s" }} />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Trusted Tech Partner in Nigeria
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            Your Trusted{" "}
            <span className="text-gradient">Computer & Digital</span> Service Partner
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            From computer repairs and accessories to printing, photo editing and digital
            solutions — Osmon Service delivers fast, reliable and professional service.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-[image:var(--gradient-primary)] hover:opacity-90 transition glow"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold glass hover:bg-muted transition"
            >
              <Phone className="h-4 w-4" /> Call now
            </a>
            <a
              href={whatsappLink("Hello Osmon Service, I'd like a free consultation.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition px-2"
            >
              Get a free consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "1000+", l: "Devices repaired" },
              { v: "500+", l: "Happy clients" },
              { v: "5+", l: "Years experience" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="text-xl md:text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-6 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
          <div className="relative glass rounded-3xl p-2 shadow-[var(--shadow-card)] animate-float">
            <img
              src={hero}
              alt="Osmon Service tech repair workspace"
              width={1920}
              height={1080}
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 hidden sm:flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--whatsapp)] animate-pulse" />
            <div className="text-xs">
              <div className="font-semibold">Open today</div>
              <div className="text-muted-foreground">Mon–Sat · 8am – 7pm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
