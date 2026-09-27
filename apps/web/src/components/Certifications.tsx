import React from "react";
import { certificationData } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function Certifications() {
  return (
    <section className="mb-6">
      <SectionHeading title="LICENSES & PROFESSIONAL CERTIFICATIONS" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {certificationData.map((cert, idx) => (
          <div
            key={idx}
            className="bg-[#f8fafc] border border-[#e2e8f0] border-l-4 border-l-[#0284c7] p-2.5 rounded-sm shadow-card-subtle flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
              <span className="font-bold text-[#1e293b] text-xs">
                {cert.title}
              </span>
            </div>
            <span className="bg-[#f1f5f9] border border-[#cbd5e1] text-[#475569] text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
              {cert.issuerBadge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
