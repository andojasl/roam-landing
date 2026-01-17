"use client";

import { Section } from "@/components/layout/section";
import { SectionBadge } from "@/components/section-badge";
import { RouteCard } from "@/components/route-card";
import { motion } from "framer-motion";

export function CustomProjects() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <RouteCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <SectionBadge className="mb-6">Custom Projects</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Smarter Systems
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            ROAM adapts to your unique logistics workflows. Whether you need
            custom AI models for route optimization, specialized tracking
            systems, or bespoke automation pipelines, we build solutions that
            fit your operations perfectly.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-border text-sm text-white">
              Strategy
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-border text-sm text-white">
              Custom AI
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
