"use client";

import React, { useState } from "react";
import { projectHighlights } from "@portfolio/shared";
import { InteractiveSCADA } from "./InteractiveSCADA";
import { DroneVisionSimulator } from "./DroneVisionSimulator";
import { Activity, Cpu, BarChart3, ChevronDown, ChevronUp, CheckCircle, Terminal } from "lucide-react";

export function ProjectShowcases() {
  const [activeSimulator, setActiveSimulator] = useState<string>("scada-chemical-transfer");

  const toggleSimulator = (id: string) => {
    setActiveSimulator((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-2">
          <Terminal className="w-3.5 h-3.5" /> High-Impact Case Studies
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering In Action & Live Interactive Simulators
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-2">
          Explore actual deployed engineering solutions with embedded digital twin simulators demonstrating SCADA loops, drone AI, and edge IoT architectures.
        </p>
      </div>

      <div className="space-y-6">
        {projectHighlights.map((proj) => {
          const isOpen = activeSimulator === proj.id;
          return (
            <div
              key={proj.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800 text-[#38bdf8] font-mono font-bold text-xs flex items-center justify-center">
                    0{proj.number}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      Client / Org: {proj.organization}
                    </span>
                  </div>
                </div>

                {/* Simulator Trigger */}
                <button
                  onClick={() => toggleSimulator(proj.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#0ea5e9]/30 transition-all shadow-sm"
                >
                  {proj.interactiveType === "scada" && <Activity className="w-3.5 h-3.5" />}
                  {proj.interactiveType === "drone-vision" && <Cpu className="w-3.5 h-3.5" />}
                  {proj.interactiveType === "telemetry" && <BarChart3 className="w-3.5 h-3.5" />}
                  <span>{isOpen ? "Close Simulator" : "Launch Interactive Demo"}</span>
                  {isOpen ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-2 mb-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  <strong className="text-white font-semibold">Challenge & Solution: </strong>
                  {proj.challengeSolution}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  <strong className="text-white font-semibold">Quantified Outcome: </strong>
                  {proj.outcome}
                </p>
              </div>

              {/* Metric badges & Tech Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {proj.metrics.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400"
                    >
                      <CheckCircle className="w-3 h-3" /> {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.techTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collapsible Live Simulator */}
              {isOpen && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                  {proj.id === "scada-chemical-transfer" && <InteractiveSCADA />}
                  {proj.id === "ai-fertilizer-spreader" && <DroneVisionSimulator />}
                  {proj.id === "smart-factory-iot" && (
                    <div className="bg-[#0f172a] text-slate-100 rounded-xl p-5 border border-slate-700 font-mono text-xs">
                      <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-800">
                        <span className="font-bold text-sky-400 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4" /> SCADA OEE ENGINE // LIVE MACHINE TELEMETRY
                        </span>
                        <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                          PLANT OEE: 86.4% (+20% GAIN)
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed mb-3">
                        Centralized non-invasive edge sensor gateways deployed on 10+ automotive component lines streaming live cycle times, vibration harmonics, temperature drifts, and automated downtime classification.
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <div className="text-slate-400 text-[10px]">AVAILABILITY</div>
                          <div className="text-base font-bold text-white">92.1%</div>
                        </div>
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <div className="text-slate-400 text-[10px]">PERFORMANCE</div>
                          <div className="text-base font-bold text-sky-400">94.8%</div>
                        </div>
                        <div className="bg-slate-900 p-2 rounded border border-slate-800">
                          <div className="text-slate-400 text-[10px]">QUALITY RATE</div>
                          <div className="text-base font-bold text-emerald-400">99.1%</div>
                        </div>
                      </div>
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
