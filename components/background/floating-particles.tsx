"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  floatX: number;
  floatY: number;
}

export function FloatingParticles() {
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5, // 1.5-4.5px
      opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
      duration: Math.random() * 8 + 6, // 6-14s (faster floating)
      delay: Math.random() * 5,
      floatX: (Math.random() - 0.5) * 60, // -30 to 30px (total range ~60px)
      floatY: (Math.random() - 0.5) * 60, // -30 to 30px
    }));
  }, []);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, particle.floatX, 0],
            y: [0, particle.floatY, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
