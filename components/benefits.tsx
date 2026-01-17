"use client";

import { Section } from "@/components/layout/section";
import { SectionBadge } from "@/components/section-badge";
import { BenefitCard } from "@/components/benefit-card";
import { motion } from "framer-motion";
import {
  Zap,
  MessageSquare,
  Route,
  DollarSign,
  Database,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Increased Productivity",
    description:
      "Automate repetitive tasks and let your team focus on high-value activities that drive business growth.",
    icon: Zap,
  },
  {
    title: "Instant Communication",
    description:
      "Real-time updates and automated notifications keep everyone informed throughout the delivery process.",
    icon: MessageSquare,
  },
  {
    title: "Smarter Route Planning",
    description:
      "AI-optimized routes reduce travel time, fuel costs, and ensure on-time deliveries every time.",
    icon: Route,
  },
  {
    title: "Cost Reduction",
    description:
      "Minimize operational expenses through intelligent resource allocation and waste elimination.",
    icon: DollarSign,
  },
  {
    title: "Centralized Logistics Data",
    description:
      "All your logistics data in one place, providing complete visibility and actionable insights.",
    icon: Database,
  },
  {
    title: "Scalability & Growth",
    description:
      "Infrastructure that grows with your business, handling increased volume without added complexity.",
    icon: TrendingUp,
  },
];

export function Benefits() {
  return (
    <Section id="benefits">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionBadge className="mb-6">Benefits</SectionBadge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
          The Core Benefits of Intelligent Logistics.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BenefitCard
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
