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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
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
