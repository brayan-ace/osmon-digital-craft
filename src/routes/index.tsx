import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
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
      { title: "Rightwave Infotech — Computer & Digital Services in Nigeria" },
      {
        name: "description",
        content:
          "Premium computer repair, electronics, printing, photo editing and digital services in Nigeria. Fast, reliable, professional.",
      },
      { property: "og:title", content: "Rightwave Infotech — Tech & Digital Solutions in Nigeria" },
      {
        property: "og:description",
        content:
          "Repairs, accessories, printing & creative work — Rightwave Infotech delivers fast, reliable, professional tech services.",
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
      <main className="scene-3d">
        <Hero />
        <div className="scroll-3d"><Services /></div>
        <div className="scroll-3d"><WhyUs /></div>
        <div className="scroll-3d"><Products /></div>
        <div className="scroll-3d"><Gallery /></div>
        <div className="scroll-3d"><Testimonials /></div>
        <div className="scroll-3d"><CTABanner /></div>
        <div className="scroll-3d"><FAQ /></div>
        <div className="scroll-3d"><Contact /></div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
