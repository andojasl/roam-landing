"use client";

import { Section } from "@/components/layout/section";
import { SectionBadge } from "@/components/section-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Does Roam provide real-time tracking?",
    answer:
      "Yes, Roam provides comprehensive real-time tracking for all your shipments. Our platform offers GPS-based location updates, estimated arrival times, and instant notifications for any status changes. You can monitor your entire fleet and individual deliveries from a single dashboard.",
  },
  {
    question: "Does Roam handle customs and documents?",
    answer:
      "Absolutely. Roam streamlines customs documentation and compliance processes. Our AI automatically generates required documentation, tracks regulatory requirements for different regions, and ensures all paperwork is completed accurately and on time, reducing delays at borders.",
  },
  {
    question: "Is Roam a single platform or multiple tools?",
    answer:
      "Roam is a unified, all-in-one platform. While it offers multiple features—route optimization, tracking, communication, and analytics—everything is integrated into a single, cohesive system. There's no need to switch between different tools or deal with complex integrations.",
  },
  {
    question: "How can I see Roam in action?",
    answer:
      "Book a demo with our team! We'll walk you through the platform, show you how it works with real scenarios, and answer any questions specific to your logistics operations. You can schedule a demo using the form on this page.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <SectionBadge className="mb-6">FAQs</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            We've Got the Answers You're Looking For
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-card border border-border p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-white hover:no-underline text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}
