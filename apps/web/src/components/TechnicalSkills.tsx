import React from "react";
import { technicalSkills } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";

export function TechnicalSkills() {
  return (
    <section className="mb-6">
      <SectionHeading title="TECHNICAL SKILLS & DOMAIN EXPERTISE" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {technicalSkills.map((cat, idx) => (
          <div
            key={idx}
            className={`bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-sm shadow-card-subtle transition-all duration-200 hover:shadow-luxury ${
              cat.isFullWidth
                ? "md:col-span-2 border-l-4 border-l-[#0f2942]"
                : "border-l-4 border-l-[#0284c7]"
            }`}
          >
            <div className="font-bold text-[#0f2942] text-xs sm:text-[13px] mb-1">
              {cat.title}:
            </div>
            <div className="text-xs text-[#334155] leading-relaxed">
              {cat.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
