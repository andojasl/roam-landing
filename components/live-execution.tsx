"use client";

import { motion } from "framer-motion";
import { Bell, MapPin, MessageSquare, Radio, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const notifications = [
  { text: "Driver en route", type: "update" },
  { text: "ETA: 15 mins", type: "time" },
  { text: "Delivery confirmed", type: "success" },
  { text: "New pickup assigned", type: "alert" },
];

export function LiveExecution() {
  const [activeNotification, setActiveNotification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center gap-6 p-4">
      {/* Live Map Visualization */}
      <div className="relative flex flex-col items-center gap-3">
        <div className="relative w-28 h-20 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-white/30"
                style={{ top: `${(i + 1) * 20}%` }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-white/30"
                style={{ left: `${(i + 1) * 16.6}%` }}
              />
            ))}
          </div>

          {/* Route path */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              d="M 10 60 Q 40 20 70 40 T 100 25"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <motion.path
              d="M 10 60 Q 40 20 70 40 T 100 25"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Origin point */}
          <div className="absolute left-2 bottom-3">
            <MapPin className="w-3 h-3 text-white/60" />
          </div>

          {/* Moving truck */}
          <motion.div
            className="absolute"
            animate={{
              left: ["8%", "85%"],
              top: ["70%", "25%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <Truck className="w-2.5 h-2.5 text-white" />
            </div>
          </motion.div>

          {/* Destination point */}
          <motion.div
            className="absolute right-2 top-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
          </motion.div>

          {/* Live indicator */}
          <div className="absolute top-1 left-1 flex items-center gap-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-[8px] text-white/60 uppercase">Live</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">Real-time tracking</p>
      </div>

      {/* Notification Feed */}
      <div className="flex flex-col gap-2">
        {[
          { icon: Radio, label: "Live updates" },
          { icon: Bell, label: "Notifications" },
          { icon: MessageSquare, label: "Team chat" },
          { icon: Truck, label: "Fleet status" },
        ].map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeNotification;

          return (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              animate={{
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`w-5 h-5 rounded flex items-center justify-center ${
                  isActive ? "bg-white/20" : "bg-white/5"
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? "text-white" : "text-white/30"}`} />
              </div>
              <span className={`text-xs ${isActive ? "text-white" : "text-white/30"}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] text-white/60 ml-auto"
                >
                  now
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
