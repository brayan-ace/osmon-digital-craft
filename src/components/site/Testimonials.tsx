import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { name: "Aïcha N.", role: "Student", text: "Fast and professional laptop repair. Highly recommended — saved my final project!" },
  { name: "Boris M.", role: "Office Manager", text: "Best place for computer accessories and printing services. Quality every time." },
  { name: "Linda K.", role: "Creator", text: "Very reliable and affordable. The photo editing is genuinely top tier." },
  { name: "Eric T.", role: "Gamer", text: "Built my dream PC and tuned it perfectly. Their support is unmatched." },
  { name: "Marie F.", role: "Entrepreneur", text: "They handled my branding, CV and printing in one visit. Total game-changer." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="section-py relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(50% 60% at 50% 50%, color-mix(in oklab, var(--electric) 12%, transparent), transparent)" }} />
      <div className="container-px mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">
          Loved by <span className="text-gradient">hundreds of customers</span>
        </h2>

        <div className="mt-12 relative glass rounded-3xl p-8 md:p-14">
          <div className="flex items-center justify-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-lg md:text-2xl font-display leading-relaxed min-h-[6rem]">
            “{items[i].text}”
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="h-11 w-11 rounded-full bg-[image:var(--gradient-primary)] flex items-center justify-center font-bold text-primary-foreground">
              {items[i].name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm">{items[i].name}</div>
              <div className="text-xs text-muted-foreground">{items[i].role}</div>
            </div>
          </div>

          <div className="absolute inset-x-0 -bottom-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
              className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-muted"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-accent" : "w-1.5 bg-muted"}`}
                  aria-label={`Go to ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((x) => (x + 1) % items.length)}
              className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-muted"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
