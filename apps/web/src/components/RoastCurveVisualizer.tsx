"use client";

import React, { useState } from "react";
import { Flame, Wind, Gauge, ExternalLink } from "lucide-react";
import { coffeeEnthusiastData } from "@portfolio/shared";

export function RoastCurveVisualizer() {
  const [burnerPower, setBurnerPower] = useState(65);
  const [selectedPhase, setSelectedPhase] = useState("First Crack");

  const phases = [
    { name: "Charge / Turn Point", time: "1:15", temp: "92°C", ror: "18°C/min", desc: "Thermal equalization inside the roaster drum." },
    { name: "Dry / Yellowing", time: "4:30", temp: "150°C", ror: "14°C/min", desc: "Moisture evaporation & aroma precursor development." },
    { name: "Maillard Reaction", time: "7:45", temp: "178°C", ror: "10°C/min", desc: "Complex browning, melanoidins & mouthfeel creation." },
    { name: "First Crack", time: "9:20", temp: "201°C", ror: "7°C/min", desc: "Exothermic steam pressure release & origin flavor expansion." },
    { name: "Development / Drop", time: "10:45", temp: "208°C", ror: "4°C/min", desc: "Rapid cooling on agitation tray to freeze roast profile." },
  ];

  return (
    <div className="bg-[#1c140d] text-amber-50 rounded-md p-4 sm:p-5 border border-amber-900/60 shadow-luxury">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-[#f59e0b] animate-bounce" />
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-amber-200">
            BIOSPHERE ROAST WORKS // THERMAL PROCESS CONTROL LOOP
          </span>
        </div>
        <a
          href={coffeeEnthusiastData.domain.startsWith("http") ? coffeeEnthusiastData.domain : `https://${coffeeEnthusiastData.domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-white bg-amber-950/80 border border-amber-700/60 px-2.5 py-1 rounded transition-colors"
        >
          <span>VISIT BIOSPHEREROASTWORKS.MY.ID</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* SVG Roast Profile Curve */}
      <div className="relative w-full h-44 sm:h-52 bg-[#2a1d12] rounded p-2 border border-amber-900/50 mb-3 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[10px] font-mono text-amber-300/80 px-2 pt-1">
          <span>Y-AXIS: BEAN TEMP (°C) / RoR (°C/min)</span>
          <span>X-AXIS: ELAPSED TIME (0 - 12 MIN)</span>
        </div>

        {/* SVG Graphic with Bean Temp & RoR Curves */}
        <div className="relative w-full h-28 sm:h-32">
          <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="30" x2="400" y2="30" stroke="#452a15" strokeDasharray="3 3" />
            <line x1="0" y1="60" x2="400" y2="60" stroke="#452a15" strokeDasharray="3 3" />
            <line x1="0" y1="90" x2="400" y2="90" stroke="#452a15" strokeDasharray="3 3" />

            {/* RoR Curve (Rate of Rise - Declining) */}
            <path
              d="M 10 20 Q 80 40, 160 65 T 280 90 T 390 105"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />

            {/* Bean Temperature Curve (Ascending S-Curve) */}
            <path
              d="M 10 100 Q 50 110, 80 95 T 180 60 T 290 35 T 390 15"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3.5"
            />

            {/* Phase Markers */}
            <circle cx="80" cy="95" r="4" fill="#38bdf8" />
            <circle cx="180" cy="60" r="4" fill="#f59e0b" />
            <circle cx="290" cy="35" r="5" fill="#ef4444" />
            <circle cx="370" cy="18" r="4" fill="#10b981" />
          </svg>
        </div>

        <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-amber-200/90 px-2 pb-1 border-t border-amber-900/60">
          <span className="text-amber-400">● Bean Temp (BT)</span>
          <span className="text-sky-400">-- Rate of Rise (RoR)</span>
          <span className="text-rose-400 font-bold">● First Crack (201°C)</span>
          <span className="text-emerald-400">● Drop (208°C)</span>
        </div>
      </div>

      {/* Interactive Phase Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mb-3">
        {phases.map((p) => {
          const isSelected = selectedPhase === p.name;
          return (
            <button
              key={p.name}
              onClick={() => setSelectedPhase(p.name)}
              className={`p-2 rounded text-left transition-colors font-mono ${
                isSelected
                  ? "bg-amber-600/40 border border-amber-400 text-white"
                  : "bg-amber-950/40 hover:bg-amber-900/40 border border-amber-900/50 text-amber-300"
              }`}
            >
              <div className="text-[10px] text-amber-300 truncate">{p.name}</div>
              <div className="text-xs font-bold text-white">{p.temp}</div>
              <div className="text-[9px] text-amber-400">{p.time}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail */}
      {phases.find((p) => p.name === selectedPhase) && (
        <div className="bg-[#26180c] p-2.5 rounded border border-amber-900/80 text-xs font-mono text-amber-200/90 flex items-center justify-between">
          <span>
            <strong>{selectedPhase}:</strong>{" "}
            {phases.find((p) => p.name === selectedPhase)?.desc}
          </span>
          <span className="text-amber-400 font-bold shrink-0 ml-2">
            Target RoR: {phases.find((p) => p.name === selectedPhase)?.ror}
          </span>
        </div>
      )}
    </div>
  );
}
