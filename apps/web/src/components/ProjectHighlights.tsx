"use client";

import React, { useState } from "react";
import { projectHighlights } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";
import { InteractiveSCADA } from "./InteractiveSCADA";
import { DroneVisionSimulator } from "./DroneVisionSimulator";
import { ChevronDown, ChevronUp, Cpu, Activity, BarChart2 } from "lucide-react";

export function ProjectHighlights() {
  const [activeSimulator, setActiveSimulator] = useState<string | null>("scada-chemical-transfer");

  const toggleSimulator = (id: string) => {
    setActiveSimulator((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mb-6">
      <SectionHeading title="KEY PROJECT HIGHLIGHTS" />
      <div className="space-y-4">
        {projectHighlights.map((proj) => {
          const isOpen = activeSimulator === proj.id;
          return (
            <div
              key={proj.id}
              className="bg-[#f8fafc] border border-[#e2e8f0] border-l-4 border-l-[#0d9488] p-4 rounded-sm shadow-card-subtle transition-all"
            >
              {/* Header row */}
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <h3 className="text-xs sm:text-sm font-extrabold text-[#0f2942]">
                  {proj.number}. {proj.title}
                </h3>
                <span className="bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] text-[11px] font-bold px-2 py-0.5 rounded">
                  {proj.organization}
                </span>
              </div>

              {/* Challenge & Solution */}
              <div className="text-xs text-[#334155] leading-relaxed mb-2 text-justify">
                <strong className="text-[#0f2942] font-bold">Challenge & Solution: </strong>
                {proj.challengeSolution}
              </div>

              {/* Outcome */}
              <div className="text-xs text-[#334155] leading-relaxed mb-3 text-justify">
                <strong className="text-[#0f2942] font-bold">Outcome: </strong>
                {proj.outcome}
              </div>

              {/* Metric badges & Tech Tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#e2e8f0]/80">
                <div className="flex flex-wrap gap-1.5">
                  {proj.metrics.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="bg-white border border-[#cbd5e1] text-[#0f2942] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm"
                    >
                      ✓ {m}
                    </span>
                  ))}
                </div>

                {/* Simulator Trigger */}
                {proj.interactiveType && (
                  <button
                    onClick={() => toggleSimulator(proj.id)}
                    className="no-print inline-flex items-center gap-1 bg-white hover:bg-slate-50 border border-[#0d9488] text-[#0d9488] hover:text-[#0f766e] text-xs font-bold px-2.5 py-1 rounded transition-colors"
                  >
                    {proj.interactiveType === "scada" && <Activity className="w-3.5 h-3.5" />}
                    {proj.interactiveType === "drone-vision" && <Cpu className="w-3.5 h-3.5" />}
                    {proj.interactiveType === "telemetry" && <BarChart2 className="w-3.5 h-3.5" />}
                    <span>{isOpen ? "Hide Live Simulator" : "Launch Interactive Demo"}</span>
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>

              {/* Collapsible Live Simulator Drawer */}
              {isOpen && (
                <div className="mt-4 pt-3 border-t border-dashed border-[#cbd5e1] no-print">
                  {proj.id === "scada-chemical-transfer" && <InteractiveSCADA />}
                  {proj.id === "ai-fertilizer-spreader" && <DroneVisionSimulator />}
                  {proj.id === "smart-factory-iot" && (
                    <div className="bg-[#0f172a] text-slate-100 rounded-md p-4 border border-slate-700 font-mono text-xs">
                      <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800">
                        <span className="font-bold text-sky-400">
                          SCADA OEE MONITORING ENGINE // LINE TELEMETRY
                        </span>
                        <span className="text-emerald-400 font-bold">OEE: 86.4% (+20% vs baseline)</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        Non-invasive edge sensor gateways deployed on 10+ automotive lines streaming vibration, temperature, cycle count, and downtime classification. Unplanned downtime dropped 35% with automated MTTR alerts.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
