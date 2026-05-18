import {
  Laptop, Wrench, Printer, Palette, MonitorCog, ShieldCheck,
  HardDrive, Camera, FileText, Network, ImageIcon, Briefcase,
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const groups = [
  {
    title: "Computer & Electronics",
    items: [
      { icon: Laptop, name: "Laptop Sales", desc: "New & quality used laptops for students, pros and gamers." },
      { icon: MonitorCog, name: "Desktop Computers", desc: "Custom builds and ready-to-use desktops for any budget." },
      { icon: HardDrive, name: "Accessories & Storage", desc: "Keyboards, mice, SSDs, flash drives, chargers, adapters." },
      { icon: Network, name: "Networking", desc: "Routers, switches and reliable office network setup." },
    ],
  },
  {
    title: "Repair Services",
    items: [
      { icon: Wrench, name: "Laptop & Desktop Repair", desc: "Fast diagnosis, hardware fixes and component upgrades." },
      { icon: ShieldCheck, name: "Software & Virus Removal", desc: "Windows install, software setup and malware cleanup." },
      { icon: Printer, name: "Printer Repair", desc: "Servicing, ink systems and paper-feed troubleshooting." },
      { icon: HardDrive, name: "Data Recovery", desc: "Recover lost files from drives, cards and devices." },
    ],
  },
  {
    title: "Printing & Media",
    items: [
      { icon: Printer, name: "Printing & Photocopy", desc: "High-quality color & B/W printing, scanning and copies." },
      { icon: Camera, name: "Passport Photos", desc: "Standard-compliant passport and ID photos in minutes." },
      { icon: ImageIcon, name: "Photo Editing", desc: "Photoshop retouching, restoration and creative edits." },
      { icon: Palette, name: "Graphic Design", desc: "Flyers, business cards and brand visuals that pop." },
    ],
  },
  {
    title: "Digital Services",
    items: [
      { icon: FileText, name: "Typing & CV Creation", desc: "Professional CVs, cover letters and document formatting." },
      { icon: Briefcase, name: "Business Branding", desc: "Logo, identity and marketing kits for small businesses." },
      { icon: ShieldCheck, name: "Online Registrations", desc: "Help with forms, applications and admin online." },
      { icon: Network, name: "Internet Services", desc: "Browsing, downloads, research and email setup." },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">What we do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Premium tech services, <span className="text-gradient">all under one roof</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you need a quick repair, a brand-new device or polished digital work,
            our team delivers with speed, care and pro-level quality.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-5">
                {g.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {g.items.map(({ icon: Icon, name, desc }) => (
                  <div
                    key={name}
                    className="group glass rounded-2xl p-6 hover:border-accent/40 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                  >
                    <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-[image:var(--gradient-primary)]/10 border border-border group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="mt-4 font-semibold text-base">{name}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                    <a
                      href={whatsappLink(`Hello Rightwave Infotech, I'd like to book: ${name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-foreground transition"
                    >
                      Book now →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
