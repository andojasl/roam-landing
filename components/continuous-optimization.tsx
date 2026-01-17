"use client";

import { motion } from "framer-motion";
import { ArrowUp, BarChart3, Clock, DollarSign, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Efficiency", value: 94, change: "+12%" },
  { label: "Cost saved", value: 78, change: "+8%" },
  { label: "On-time", value: 97, change: "+5%" },
  { label: "Satisfaction", value: 89, change: "+15%" },
];

export function ContinuousOptimization() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center gap-6 p-4">
      {/* Chart Visualization */}
      <div className="relative flex flex-col items-center gap-3">
        <div className="relative w-28 h-20 flex items-end justify-center gap-1.5">
          {/* Bar chart */}
          {[40, 55, 45, 70, 60, 85, 75, 95].map((height, i) => (
            <motion.div
              key={i}
              className="w-2 rounded-t bg-white/20 relative overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white/60"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          ))}

          {/* Trend line overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 4 65 L 18 50 L 32 55 L 46 35 L 60 42 L 74 20 L 88 28 L 102 8"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </svg>

          {/* Upward arrow indicator */}
          <motion.div
            className="absolute -top-1 right-0"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-3 h-3 text-white" />
          </motion.div>
        </div>

        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-white/60" />
          <p className="text-xs text-muted-foreground">Continuous improvement</p>
        </div>
      </div>

      {/* Metrics List */}
      <div className="flex flex-col gap-2">
        {[
          { icon: BarChart3, label: "Efficiency", value: "+12%" },
          { icon: DollarSign, label: "Cost savings", value: "+8%" },
          { icon: Clock, label: "On-time rate", value: "+5%" },
          { icon: TrendingUp, label: "Growth", value: "+15%" },
        ].map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeMetric;

          return (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              animate={{
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-white/30"}`} />
              <span className={`text-xs ${isActive ? "text-white" : "text-white/30"}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-[10px] text-green-400 ml-auto font-medium"
                >
                  {item.value}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
