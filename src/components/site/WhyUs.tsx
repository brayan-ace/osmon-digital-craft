import { useEffect, useRef, useState } from "react";
import { Zap, BadgeDollarSign, Users, Award, Headphones, ShieldCheck } from "lucide-react";

const points = [
  { icon: Zap, t: "Fast Repairs", d: "Most repairs done same-day." },
  { icon: BadgeDollarSign, t: "Affordable Pricing", d: "Honest quotes, no surprises." },
  { icon: Users, t: "Experienced Technicians", d: "Years of hands-on expertise." },
  { icon: Award, t: "Quality Accessories", d: "Tested, reliable parts only." },
  { icon: Headphones, t: "Pro Customer Service", d: "Friendly help every step." },
  { icon: ShieldCheck, t: "Reliable Support", d: "Warranty on every job." },
];

const stats = [
  { v: 1000, suffix: "+", l: "Devices Repaired" },
  { v: 500, suffix: "+", l: "Happy Clients" },
  { v: 5, suffix: "+", l: "Years Experience" },
  { v: 24, suffix: "h", l: "Avg. Turnaround" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function WhyUs() {
  return (
    <section id="why" className="section-py relative">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Why choose us</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Built on trust, <span className="text-gradient">powered by expertise</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              We treat every device like our own. From a single charger to a full office
              setup, you get the same care, speed and attention to detail.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="glass rounded-2xl p-5 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] md:text-xs text-muted-foreground mt-1.5">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-[image:var(--gradient-primary)]">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
