"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export function ProcessCard({
  step,
  title,
  description,
  className,
  children,
}: ProcessCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative p-6 rounded-2xl",
        "bg-card border border-border",
        "hover:border-white/20 transition-colors duration-300",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold text-white">
            {step}
          </span>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="aspect-video w-full rounded-xl bg-white/5 border border-border flex items-center justify-center overflow-hidden">
          {children || (
            <span className="text-xs text-muted-foreground">Placeholder</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
