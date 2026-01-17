"use client";

import { useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CustomProjects } from "@/components/custom-projects";
import { Process } from "@/components/process";
import { Benefits } from "@/components/benefits";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { useHeroScrollTracking } from "@/hooks/use-hero-scroll-tracking";

export default function Home() {
  const heroLogoRef = useRef<HTMLDivElement>(null);

  const { isNavbarVisible, showLogoAndCta } =
    useHeroScrollTracking(heroLogoRef);

  return (
    <main className="min-h-screen bg-background">
      <Navbar
        isVisible={isNavbarVisible}
        showLogoAndCta={showLogoAndCta}
      />
      <Hero logoRef={heroLogoRef} />
      <Services />
      <CustomProjects />
      <Process />
      <Benefits />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
