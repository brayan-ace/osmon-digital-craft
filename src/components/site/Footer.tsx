import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import logo from "@/assets/rightwave-logo.png";
import { whatsappLink, PHONE_DISPLAY, MAPS_URL } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--navy)]">
      <div className="container-px mx-auto max-w-7xl py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Rightwave Infotech" className="h-9 w-9 rounded-lg" />
            <span className="font-display font-bold tracking-tight text-lg">
              Osmon <span className="text-gradient">Service</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Premium computer & digital services in Nigeria. Repairs, electronics,
            printing and creative work — done right.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-muted transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["Services", "#services"],
              ["Why us", "#why"],
              ["Products", "#products"],
              ["Gallery", "#gallery"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-foreground transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
            <li><a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="hover:text-foreground">{PHONE_DISPLAY}</a></li>
            <li><a href="mailto:contact@rightwaveinfotech.com" className="hover:text-foreground">contact@rightwaveinfotech.com</a></li>
            <li><a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Find us on Google Maps</a></li>
            <li>Mon–Sat · 8am – 7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Rightwave Infotech. All rights reserved.</div>
          <div>Made with care in Nigeria.</div>
        </div>
      </div>
    </footer>
  );
}
