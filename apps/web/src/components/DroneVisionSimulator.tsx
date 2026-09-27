"use client";

import React, { useState, useEffect } from "react";
import { Crosshair, Eye, Cpu, CheckCircle } from "lucide-react";

export function DroneVisionSimulator() {
  const [activeTree, setActiveTree] = useState(1);
  const [treesDetected, setTreesDetected] = useState(24);

  const trees = [
    { id: "PALM-01", x: "20%", y: "30%", conf: "96.4%", sprayed: true },
    { id: "PALM-02", x: "48%", y: "24%", conf: "97.1%", sprayed: true },
    { id: "PALM-03", x: "75%", y: "35%", conf: "95.8%", sprayed: false },
    { id: "PALM-04", x: "32%", y: "65%", conf: "98.2%", sprayed: false },
    { id: "PALM-05", x: "65%", y: "70%", conf: "96.0%", sprayed: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTree((prev) => (prev + 1) % trees.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [trees.length]);

  return (
    <div className="bg-[#0b1329] text-slate-100 rounded-md p-4 sm:p-5 border border-slate-700 shadow-luxury">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
            OPENCV + PYTHON // DRONE AERIAL TREE GEOLOCATION
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded">
          <Cpu className="w-3 h-3" /> MODEL: YOLO-v8 PALM DETECTOR (95% ACCURACY)
        </div>
      </div>

      {/* Simulated Drone Camera Canvas */}
      <div className="relative w-full h-52 sm:h-60 bg-[#16291e] rounded overflow-hidden border border-emerald-900/60 flex items-center justify-center">
        {/* Terrain Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* HUD Crosshair */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-12 h-12 border border-emerald-400/40 rounded-full flex items-center justify-center">
            <Crosshair className="w-6 h-6 text-emerald-400/60" />
          </div>
        </div>

        {/* Trees with Bounding Boxes */}
        {trees.map((t, idx) => {
          const isTargeted = activeTree === idx;
          return (
            <div
              key={t.id}
              style={{ left: t.x, top: t.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 p-1 rounded ${
                isTargeted
                  ? "border-2 border-emerald-400 bg-emerald-500/20 scale-110 z-10"
                  : "border border-emerald-600/50 bg-emerald-900/40"
              }`}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-700/80 border border-emerald-400/60 flex items-center justify-center text-[10px] font-mono text-emerald-100 font-bold shadow-sm">
                🌴
              </div>
              <div
                className={`text-[9px] font-mono whitespace-nowrap mt-1 px-1 rounded ${
                  isTargeted
                    ? "bg-emerald-400 text-slate-950 font-bold"
                    : "bg-slate-900/80 text-emerald-300"
                }`}
              >
                {t.id}: {t.conf}
              </div>
            </div>
          );
        })}

        {/* Camera HUD Telemetry Info */}
        <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-slate-950/80 px-2 py-1 rounded border border-slate-800 text-slate-300">
          ALT: 45.2m | SPEED: 3.4 m/s | LAT: 0°54&apos;12&quot;S LONG: 101°26&quot;34&quot;E
        </div>
        <div className="absolute top-2 right-2 text-[10px] font-mono bg-emerald-950/80 text-emerald-300 px-2 py-1 rounded border border-emerald-800">
          AUTO-SPREADER NOZZLE: READY
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center text-xs font-mono text-slate-400 pt-3">
        <span>Field validation: 30% labor reduction & \$200,000/yr OPEX savings at PT SMART Tbk.</span>
        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
          <CheckCircle className="w-3.5 h-3.5" /> Target Coordinates Linked to Hardware
        </span>
      </div>
    </div>
  );
}
