"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDot,
  Gauge,
  Route,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";

const checklistItems = [
  { icon: Settings, label: "System check" },
  { icon: CircleDot, label: "Process check" },
  { icon: Gauge, label: "Speed check" },
  { icon: Route, label: "Route analysis" },
  { icon: CheckCircle2, label: "Optimization" },
];

export function WorkflowAnalyzer() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % checklistItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center gap-6 p-4">
      {/* Circular Scanner */}
      <div className="relative flex flex-col items-center gap-3">
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />

          {/* Progress arc */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="4"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={276}
              initial={{ strokeDashoffset: 276 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* Rotating scanner line */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-1/2 h-0.5 bg-gradient-to-r from-white to-transparent origin-left" />
          </motion.div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-2 h-2 rounded-full bg-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Analyzing workflow..
        </p>
      </div>

      {/* Checklist */}
      <div className="flex flex-col gap-2">
        {checklistItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0.4 }}
              animate={{
                opacity: isActive || isCompleted ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                className={`w-3.5 h-3.5 ${
                  isActive
                    ? "text-white"
                    : isCompleted
                    ? "text-white/60"
                    : "text-white/30"
                }`}
              />
              <span
                className={`text-xs ${
                  isActive
                    ? "text-white"
                    : isCompleted
                    ? "text-white/60"
                    : "text-white/30"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  className="w-1 h-1 rounded-full bg-white ml-1"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
