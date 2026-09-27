"use client";

import React, { useState } from "react";
import { coffeeEnthusiastData } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";
import { RoastCurveVisualizer } from "./RoastCurveVisualizer";
import { Coffee, Flame, ExternalLink, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

export function CoffeeEnthusiast() {
  const [showRoastSimulator, setShowRoastSimulator] = useState(true);

  return (
    <section className="mb-6">
      <SectionHeading
        title="PASSION & VENTURE: COFFEE ENTHUSIAST & ARTISAN ROASTER"
        badgeColor="bg-[#d97706]"
      />

      <div className="bg-[#f8fafc] border border-[#e2e8f0] border-l-4 border-l-[#d97706] p-4 sm:p-5 rounded-sm shadow-card-subtle transition-all">
        {/* Top Header */}
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#d97706] shrink-0 border border-[#fde68a]">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0f2942]">
                {coffeeEnthusiastData.brandName}
              </h3>
              <div className="text-xs font-bold text-[#d97706]">
                {coffeeEnthusiastData.headline}
              </div>
            </div>
          </div>

          <a
            href={
              coffeeEnthusiastData.domain.startsWith("http")
                ? coffeeEnthusiastData.domain
                : `https://${coffeeEnthusiastData.domain}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#d97706] hover:bg-[#b45309] text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm transition-colors"
          >
            <span>Visit biosphereroastworks.my.id</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Concept & Narrative */}
        <p className="text-xs text-[#334155] leading-relaxed text-justify mb-3">
          {coffeeEnthusiastData.narrative}
        </p>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
          {coffeeEnthusiastData.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e2e8f0] p-2.5 rounded shadow-card-subtle"
            >
              <div className="flex items-center gap-1.5 font-bold text-[#0f2942] text-xs mb-1">
                <Sparkles className="w-3 h-3 text-[#d97706]" />
                {pillar.title}
              </div>
              <p className="text-[11px] text-[#475569] leading-relaxed text-justify">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Roaster Control Simulator Toggle */}
        <div className="pt-2 border-t border-[#e2e8f0]">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-[#0f2942] flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#d97706]" />
              Thermodynamic Control & RoR Trajectory Simulator
            </span>
            <button
              onClick={() => setShowRoastSimulator((prev) => !prev)}
              className="no-print text-xs font-semibold text-[#d97706] hover:text-[#92400e] inline-flex items-center gap-1"
            >
              {showRoastSimulator ? "Hide Curve" : "Inspect Roast Curve"}
              {showRoastSimulator ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {showRoastSimulator && <RoastCurveVisualizer />}
        </div>
      </div>
    </section>
  );
}
