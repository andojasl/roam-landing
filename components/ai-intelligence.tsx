"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const dataPoints = [
  "Processing routes...",
  "Analyzing patterns...",
  "Predicting delays...",
  "Optimizing allocation...",
];

export function AIIntelligence() {
  const [activeData, setActiveData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveData((prev) => (prev + 1) % dataPoints.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center gap-6 p-4">
      {/* Neural Network Visualization */}
      <div className="relative flex flex-col items-center gap-3">
        <div className="relative w-24 h-24">
          {/* Center brain icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Orbiting nodes */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/20 flex items-center justify-center"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [
                  Math.cos((i * Math.PI) / 2) * 40 - 6,
                  Math.cos((i * Math.PI) / 2 + Math.PI) * 40 - 6,
                  Math.cos((i * Math.PI) / 2) * 40 - 6,
                ],
                y: [
                  Math.sin((i * Math.PI) / 2) * 40 - 6,
                  Math.sin((i * Math.PI) / 2 + Math.PI) * 40 - 6,
                  Math.sin((i * Math.PI) / 2) * 40 - 6,
                ],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
          ))}

          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>

        <motion.p
          key={activeData}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-muted-foreground"
        >
          {dataPoints[activeData]}
        </motion.p>
      </div>

      {/* Data Flow */}
      <div className="flex flex-col gap-2">
        {[
          { icon: Cpu, label: "Data ingestion" },
          { icon: Sparkles, label: "Pattern recognition" },
          { icon: Zap, label: "Decision making" },
          { icon: Brain, label: "Learning model" },
        ].map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeData;

          return (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              animate={{
                opacity: isActive ? 1 : 0.4,
                x: isActive ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-white/30"}`} />
              <span className={`text-xs ${isActive ? "text-white" : "text-white/30"}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  className="flex gap-0.5 ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-white"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
