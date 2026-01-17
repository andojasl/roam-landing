"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Clock,
  MapPin,
  Package,
  Pencil,
  Route,
  User,
} from "lucide-react";

export function RouteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-sm mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 text-white"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-lg font-semibold mb-3">
          <span className="text-white">6.173007</span>
          <span className="text-white/40">→</span>
          <span className="text-white">Netherlands</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/50">
          <div className="flex items-center gap-1.5">
            <User className="w-3 h-3" />
            <span>Test Driver</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3 h-3" />
            <span>ABC Manufacturing</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-white/50 mt-1">
          <Calendar className="w-3 h-3" />
          <span>Created: Oct 14, 2025</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-4" />

      {/* Distance & Duration */}
      <div className="flex items-center gap-6 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Route className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/50">Distance:</span>
          <span className="font-medium text-white">3002.9 km</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/50">Duration:</span>
          <span className="font-medium text-white">76 min</span>
        </div>
      </div>

      {/* Timeline indicator & Scheduled */}
      <div className="flex items-start gap-3 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full border-2 border-white/30 bg-transparent" />
          <div className="w-px h-16 bg-white/10" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-1.5 text-sm mb-3">
            <Clock className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white/50">Scheduled:</span>
            <span className="font-medium text-white">Jan 1, 2026</span>
          </div>

          {/* Cargo Details */}
          <div className="bg-white/5 rounded-xl p-3">
            <div className="flex items-center gap-1.5 text-sm font-medium text-white mb-2">
              <Package className="w-3.5 h-3.5" />
              <span>Cargo Details</span>
            </div>
            <div className="space-y-1 text-xs text-white/50">
              <div className="flex items-center justify-between">
                <span>Weight:</span>
                <span className="text-white">20 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dimensions:</span>
                <span className="text-white">20x20x20</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Route Button */}
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Pencil className="w-3.5 h-3.5" />
          <span>Edit Route</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
