import { useState } from "react";
import { X } from "lucide-react";
import repair from "@/assets/gallery-repair.jpg";
import accessories from "@/assets/gallery-accessories.jpg";
import workspace from "@/assets/gallery-workspace.jpg";
import laptop from "@/assets/product-laptop.jpg";
import camera from "@/assets/product-camera.jpg";
import gaming from "@/assets/product-gaming.jpg";

const images = [
  { src: repair, alt: "Motherboard repair", h: "row-span-2" },
  { src: accessories, alt: "Computer accessories", h: "" },
  { src: workspace, alt: "Editing workspace", h: "row-span-2" },
  { src: laptop, alt: "Premium laptop", h: "" },
  { src: camera, alt: "Camera setup", h: "" },
  { src: gaming, alt: "Gaming gear", h: "" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Gallery</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Inside our <span className="text-gradient">workshop</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A look at the gear, the workspace and the work we love doing every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px_200px] md:grid-rows-[220px_220px_220px] gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-2xl ${img.h}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-xs font-medium text-foreground/90 opacity-0 group-hover:opacity-100 transition">
                {img.alt}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-background/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-up"
        >
          <button className="absolute top-5 right-5 p-2 rounded-full glass" aria-label="Close">
            <X />
          </button>
          <img src={active} alt="Preview" className="max-h-[88vh] max-w-full rounded-2xl shadow-[var(--shadow-card)]" />
        </div>
      )}
    </section>
  );
}
