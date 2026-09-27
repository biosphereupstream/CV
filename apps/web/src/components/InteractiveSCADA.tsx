"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, AlertTriangle, Play, Square, Gauge } from "lucide-react";

export function InteractiveSCADA() {
  const [valveOpen, setValveOpen] = useState(true);
  const [pumpRunning, setPumpRunning] = useState(true);
  const [flowRate, setFlowRate] = useState(420);
  const [pressure, setPressure] = useState(3.4);
  const [interlockTripped, setInterlockTripped] = useState(false);

  useEffect(() => {
    if (!pumpRunning || !valveOpen || interlockTripped) {
      setFlowRate(0);
      setPressure(0.8);
      return;
    }

    const interval = setInterval(() => {
      setFlowRate(Math.floor(410 + Math.random() * 25));
      setPressure(Number((3.2 + Math.random() * 0.4).toFixed(2)));
    }, 1200);

    return () => clearInterval(interval);
  }, [pumpRunning, valveOpen, interlockTripped]);

  const toggleInterlock = () => {
    setInterlockTripped((prev) => !prev);
    if (!interlockTripped) {
      setPumpRunning(false);
    }
  };

  return (
    <div className="bg-[#0f172a] text-slate-100 rounded-md p-4 sm:p-5 border border-slate-700 shadow-luxury">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#38bdf8] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
            SCADA OT INTERACTIVE MONITOR // TANK TRANSFER LOOP
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
              interlockTripped
                ? "bg-red-950/80 text-red-400 border border-red-800"
                : "bg-emerald-950/80 text-emerald-400 border border-emerald-800"
            }`}
          >
            {interlockTripped ? (
              <>
                <AlertTriangle className="w-3 h-3" /> INTERLOCK ALARM ACTIVE
              </>
            ) : (
              <>
                <ShieldCheck className="w-3 h-3" /> EHEDG & FSSC 22000 OK
              </>
            )}
          </span>
        </div>
      </div>

      {/* Visual Pipeline Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {/* Source Tank */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-center">
          <div className="text-[11px] font-mono text-slate-400 mb-1">SOURCE TANK [PG-01]</div>
          <div className="text-base font-bold text-white font-mono">10,000 L</div>
          <div className="text-[10px] text-slate-400">High-Viscosity Chemical</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-sky-500 h-full w-[78%]" />
          </div>
        </div>

        {/* Transfer Pump & Valve Controls */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-center">
          <div className="text-[11px] font-mono text-slate-400 mb-1">ACTUATOR STATUS</div>
          <div className="flex justify-center items-center gap-2 my-1">
            <button
              onClick={() => setPumpRunning((prev) => !prev)}
              disabled={interlockTripped}
              className={`px-2.5 py-1 text-xs font-mono font-bold rounded flex items-center gap-1 transition-colors ${
                pumpRunning
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-300"
              }`}
            >
              {pumpRunning ? <Square className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              {pumpRunning ? "PUMP ACTIVE" : "PUMP IDLE"}
            </button>
            <button
              onClick={() => setValveOpen((prev) => !prev)}
              className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-colors ${
                valveOpen
                  ? "bg-sky-600 hover:bg-sky-500 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-300"
              }`}
            >
              VALVE: {valveOpen ? "OPEN" : "CLOSED"}
            </button>
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            {pumpRunning && valveOpen ? "Flow circulating seamlessly" : "Loop closed"}
          </div>
        </div>

        {/* Telemetry Sensor Readout */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded text-center">
          <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center justify-center gap-1">
            <Gauge className="w-3 h-3 text-sky-400" /> CORIOLIS MASS FLOW
          </div>
          <div className="text-xl font-bold font-mono text-[#38bdf8]">
            {flowRate} <span className="text-xs text-slate-400 font-normal">kg/h</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400">
            Line Pressure: <span className="text-slate-200 font-bold">{pressure} bar</span>
          </div>
        </div>
      </div>

      {/* Simulator Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs font-mono">
        <span className="text-slate-400 text-[11px]">
          Simulating real-time SCADA loop deployed at PT Firmenich Indonesia.
        </span>
        <button
          onClick={toggleInterlock}
          className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-colors ${
            interlockTripped
              ? "bg-slate-700 hover:bg-slate-600 text-white"
              : "bg-amber-600/30 hover:bg-amber-600/50 text-amber-300 border border-amber-600/50"
          }`}
        >
          {interlockTripped ? "Reset Interlock" : "Test Safety Interlock Trip"}
        </button>
      </div>
    </div>
  );
}
