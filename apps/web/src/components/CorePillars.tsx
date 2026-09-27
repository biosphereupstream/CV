"use client";

import React from "react";
import { technicalSkills } from "@portfolio/shared";
import { Cpu, Factory, Gauge, Shield, Layers, Award } from "lucide-react";

export function CorePillars() {
  const pillarIcons = [
    <Cpu key="0" className="w-5 h-5 text-[#38bdf8]" />,
    <Factory key="1" className="w-5 h-5 text-emerald-400" />,
    <Gauge key="2" className="w-5 h-5 text-sky-400" />,
    <Shield key="3" className="w-5 h-5 text-[#f59e0b]" />,
    <Award key="4" className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="pillars" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-2">
          <Layers className="w-3.5 h-3.5" /> Core Competencies & Capabilities
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering Architecture & Leadership Pillars
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-2">
          Proven multi-disciplinary leadership combining heavy-plant process automation, smart factory IIoT architectures, and stringent compliance standards.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technicalSkills.map((pillar, idx) => (
          <div
            key={idx}
            className={`glass-panel p-6 rounded-2xl transition-all duration-300 relative group overflow-hidden ${
              pillar.isFullWidth ? "md:col-span-2 border-l-4 border-l-[#0ea5e9]" : ""
            }`}
          >
            {/* Subtle glow hover effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/5 rounded-full blur-2xl group-hover:bg-[#0ea5e9]/10 transition-colors pointer-events-none" />

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                {pillarIcons[idx] || <Layers className="w-5 h-5 text-sky-400" />}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {pillar.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {pillar.skills}
            </p>
          </div>
        ))}
      </div>

      {/* Tier-1 Organizations Marquee / Badges */}
      <div className="mt-10 p-5 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
            Proven Industrial Track Record Across Tier-1 Giants
          </span>
          <span className="text-xs text-slate-300">
            Leading engineering transformations in multinational FMCG, Agribusiness & Automotive.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-white">
            PT Firmenich Indonesia (DSM-Firmenich)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-white">
            PT SMART Tbk (Sinarmas)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-white">
            PT Astra Otoparts Tbk
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-sky-950/60 border border-sky-800 text-xs font-mono font-bold text-[#38bdf8]">
            POLMAN Bandung (PMS-ITB)
          </span>
        </div>
      </div>
    </section>
  );
}
