"use client";

import React, { useState } from "react";
import { coffeeEnthusiastData } from "@portfolio/shared";
import { RoastCurveVisualizer } from "./RoastCurveVisualizer";
import { Coffee, Flame, ExternalLink, Sparkles, ChevronDown, ChevronUp, ThermometerSnowflake } from "lucide-react";

export function CoffeeSection() {
  const [showCurve, setShowCurve] = useState(true);

  return (
    <section id="coffee" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="glass-panel-amber p-6 sm:p-10 rounded-3xl relative overflow-hidden transition-all duration-300">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#d97706]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-mono text-[#f59e0b] uppercase tracking-wider mb-3">
              <Coffee className="w-3.5 h-3.5" /> Passion & Artisan Micro-Roastery Venture
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {coffeeEnthusiastData.brandName}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#f59e0b] mt-1">
              {coffeeEnthusiastData.headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[11px] font-mono text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Micro-Batch Roasting Active
            </span>

            <a
              href={
                coffeeEnthusiastData.domain.startsWith("http")
                  ? coffeeEnthusiastData.domain
                  : `https://${coffeeEnthusiastData.domain}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d97706] to-[#b45309] hover:from-[#f59e0b] hover:to-[#d97706] text-white text-xs sm:text-sm font-black transition-all shadow-[0_0_20px_rgba(217,119,6,0.35)]"
            >
              <span>Visit biosphereroastworks.my.id</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Story Narrative */}
        <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed text-justify max-w-4xl mb-8 relative z-10">
          {coffeeEnthusiastData.narrative}
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 relative z-10">
          {coffeeEnthusiastData.keyPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-black/40 border border-amber-900/50 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-200 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                  {p.title}
                </div>
                <p className="text-[11px] text-amber-200/70 leading-relaxed text-justify">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Roaster Control Simulator */}
        <div className="pt-6 border-t border-amber-900/60 relative z-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs sm:text-sm font-bold text-amber-200 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#f59e0b]" />
              Thermodynamic Process Control Loop & RoR Trajectory
            </span>

            <button
              onClick={() => setShowCurve((prev) => !prev)}
              className="text-xs font-mono font-bold text-amber-300 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              {showCurve ? "Hide Simulator" : "Inspect Roast Trajectory"}
              {showCurve ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {showCurve && <RoastCurveVisualizer />}
        </div>
      </div>
    </section>
  );
}
