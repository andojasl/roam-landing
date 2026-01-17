"use client";

import { Section } from "@/components/layout/section";
import { SectionBadge } from "@/components/section-badge";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Services() {
  return (
    <Section id="services">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionBadge className="mb-6">Our Services</SectionBadge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
          AI-Powered Logistics Solutions for Smarter Operations.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-card border border-border overflow-hidden"
        >
          <div className="aspect-[4/3] w-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">
                UI Mockup Placeholder
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Sales & Marketing
              </h3>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Accelerate Logistics Operations
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Leverage AI to optimize your sales pipeline, automate marketing
              outreach, and convert more leads into long-term logistics
              partnerships. Our intelligent systems analyze market trends and
              customer behavior to drive growth.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
