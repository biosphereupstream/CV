"use client";

import React from "react";
import { certificationData } from "@portfolio/shared";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CertificationsWall() {
  return (
    <section id="credentials" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" /> Compliance & Governance
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Licenses & Professional Certifications
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-2">
          Certified custodian for strict environmental safety, food hygiene engineering, and industrial operational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {certificationData.map((cert, idx) => (
          <div
            key={idx}
            className="glass-panel p-4 rounded-xl border border-white/10 hover:border-[#0ea5e9]/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0ea5e9]/10 text-[#38bdf8] border border-[#0ea5e9]/20">
                  {cert.issuerBadge}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                {cert.title}
              </h3>
            </div>

            <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Verified Credential</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
