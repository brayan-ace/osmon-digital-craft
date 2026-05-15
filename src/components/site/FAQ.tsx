import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How long does a typical repair take?", a: "Most software fixes are same-day. Hardware repairs usually take 24–48 hours depending on parts availability." },
  { q: "Do you offer warranty on repairs?", a: "Yes — every repair comes with a service warranty. We'll let you know the exact period when we hand over your device." },
  { q: "Can I book through WhatsApp?", a: "Absolutely. Tap any 'Book on WhatsApp' button and you'll be connected to our team right away." },
  { q: "Do you sell new and used devices?", a: "We sell quality new devices and inspected, certified used machines for every budget." },
  { q: "Where are you located?", a: "We are based in Cameroon. Find directions in the contact section or via the WhatsApp link." },
  { q: "Do you handle business clients and offices?", a: "Yes — from one workstation to a full office network setup, printing fleet and IT support." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-py">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                {open === i ? <Minus className="h-5 w-5 text-accent shrink-0" /> : <Plus className="h-5 w-5 text-accent shrink-0" />}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-up">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
