"use client";

import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider",
        "bg-white/5 text-muted-foreground border border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
