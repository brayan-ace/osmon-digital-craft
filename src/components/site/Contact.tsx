import { useState } from "react";
import { MapPin, MessageCircle, Phone, Mail, Clock, Send } from "lucide-react";
import { whatsappLink, MAPS_URL, PHONE_DISPLAY } from "@/lib/whatsapp";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Osmon Service, I'm ${form.name}.\n${form.message}\n(Email: ${form.email})`;
    window.open(whatsappLink(msg), "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Contact</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Let's talk <span className="text-gradient">tech</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Reach us on WhatsApp, give us a call or send a message. We're ready to help.
          </p>

          <div className="mt-8 space-y-3">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="glass rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition block">
              <div className="h-11 w-11 rounded-xl bg-[var(--whatsapp)]/20 text-[var(--whatsapp)] flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="glass rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition block">
              <div className="h-11 w-11 rounded-xl bg-accent/20 text-accent flex items-center justify-center"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Call</div>
                <div className="font-semibold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href="mailto:contact@osmonservice.cm" className="glass rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition block">
              <div className="h-11 w-11 rounded-xl bg-primary/20 text-primary flex items-center justify-center"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-semibold">contact@osmonservice.cm</div>
              </div>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="glass rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-0.5 transition block">
              <div className="h-11 w-11 rounded-xl bg-accent/20 text-accent flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Visit us</div>
                <div className="font-semibold">Open in Google Maps</div>
              </div>
            </a>
            <div className="glass rounded-2xl p-4 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-muted flex items-center justify-center"><Clock className="h-5 w-5 text-accent" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Business hours</div>
                <div className="font-semibold">Mon–Sat · 8am – 7pm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6 md:p-8">
          <h3 className="font-display text-xl font-bold">Send a message</h3>
          <p className="text-sm text-muted-foreground mt-1">We'll reply on WhatsApp within minutes.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Your name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell us how we can help…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-[image:var(--gradient-primary)] hover:opacity-90 transition glow"
            >
              <Send className="h-4 w-4" />
              {sent ? "Opening WhatsApp…" : "Send via WhatsApp"}
            </button>
          </form>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 block rounded-2xl overflow-hidden border border-border h-44 relative group"
          >
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2 group-hover:scale-105 transition">
                <MapPin className="h-4 w-4 text-accent" /> Open location in Google Maps
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
