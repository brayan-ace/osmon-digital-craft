import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Products } from "@/components/site/Products";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Osmon Service — Computer & Digital Services in Cameroon" },
      {
        name: "description",
        content:
          "Premium computer repair, electronics, printing, photo editing and digital services in Cameroon. Fast, reliable, professional.",
      },
      { property: "og:title", content: "Osmon Service — Tech & Digital Solutions in Cameroon" },
      {
        property: "og:description",
        content:
          "Repairs, accessories, printing & creative work — Osmon Service delivers fast, reliable, professional tech services.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Products />
        <Gallery />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
