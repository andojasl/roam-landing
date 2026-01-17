"use client";

import { Section } from "@/components/layout/section";
import { SectionBadge } from "@/components/section-badge";
import { ProcessCard } from "@/components/process-card";
import { WorkflowAnalyzer } from "@/components/workflow-analyzer";
import { AIIntelligence } from "@/components/ai-intelligence";
import { LiveExecution } from "@/components/live-execution";
import { ContinuousOptimization } from "@/components/continuous-optimization";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const processSteps: {
  step: number;
  title: string;
  description: string;
  animation: ReactNode;
}[] = [
  {
    step: 1,
    title: "Route & Operation Planning",
    description:
      "We analyze your logistics data to create optimized route plans and operational strategies tailored to your business needs.",
    animation: <WorkflowAnalyzer />,
  },
  {
    step: 2,
    title: "AI-Powered Intelligence",
    description:
      "Our AI systems process real-time data to make intelligent decisions, predict delays, and optimize resource allocation automatically.",
    animation: <AIIntelligence />,
  },
  {
    step: 3,
    title: "Live Execution & Communication",
    description:
      "Execute operations with real-time tracking, automated notifications, and seamless communication between all stakeholders.",
    animation: <LiveExecution />,
  },
  {
    step: 4,
    title: "Continuous Optimization",
    description:
      "Learn from every delivery to continuously improve routes, reduce costs, and enhance customer satisfaction over time.",
    animation: <ContinuousOptimization />,
  },
];

export function Process() {
  return (
    <Section id="process">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionBadge className="mb-6">Our Process</SectionBadge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Our Process
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {processSteps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProcessCard
              step={item.step}
              title={item.title}
              description={item.description}
            >
              {item.animation}
            </ProcessCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
