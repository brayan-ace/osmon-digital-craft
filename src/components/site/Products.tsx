import laptop from "@/assets/product-laptop.jpg";
import printer from "@/assets/product-printer.jpg";
import camera from "@/assets/product-camera.jpg";
import gaming from "@/assets/product-gaming.jpg";
import { whatsappLink } from "@/lib/whatsapp";

const products = [
  { img: laptop, name: "Laptops & Desktops", tag: "Compute", blurb: "Performance machines for work, school and gaming." },
  { img: printer, name: "Printers & Scanners", tag: "Office", blurb: "Reliable office printing — sales, ink and service." },
  { img: camera, name: "Cameras & Imaging", tag: "Capture", blurb: "Cameras and accessories for creators and studios." },
  { img: gaming, name: "Gaming Accessories", tag: "Play", blurb: "Mechanical keyboards, mice, headsets and more." },
];

export function Products() {
  return (
    <section id="products" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Showcase</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Premium products, <span className="text-gradient">handpicked for you</span>
            </h2>
          </div>
          <a
            href={whatsappLink("Hello Rightwave Infotech, I'd like to see your full product catalogue.")}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-accent hover:text-foreground"
          >
            Ask for catalogue →
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                {p.tag}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.blurb}</p>
                <a
                  href={whatsappLink(`Hello Rightwave Infotech, I'm interested in: ${p.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold text-primary-foreground bg-[image:var(--gradient-primary)] hover:opacity-90"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
