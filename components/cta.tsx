"use client";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
            Let AI Power Your Logistics Operations.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Centralize your routing, tracking, and visibility in one intelligent
            platform. Start transforming your logistics today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium group"
          >
            <a href="#contact">
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
