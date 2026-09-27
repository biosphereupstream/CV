import React from "react";
import { educationData } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="mb-6">
      <SectionHeading title="EDUCATION" />
      <div className="bg-[#f8fafc] border border-[#e2e8f0] border-l-4 border-l-[#0f2942] p-4 rounded-sm shadow-card-subtle">
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
          <div className="font-extrabold text-[#0f2942] text-xs sm:text-sm flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#0284c7]" />
            {educationData.degree}
          </div>
          <span className="bg-[#f1f5f9] border border-[#cbd5e1] text-[#334155] text-[11px] font-bold px-2 py-0.5 rounded-full">
            {educationData.year}
          </span>
        </div>
        <div className="text-xs font-bold text-[#0284c7] italic mb-1">
          {educationData.institution}
        </div>
        <p className="text-xs text-[#475569] leading-relaxed text-justify">
          {educationData.description}
        </p>
      </div>
    </section>
  );
}
