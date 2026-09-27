import React from "react";
import { keyAchievements } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";
import { Award } from "lucide-react";

export function KeyAchievements() {
  return (
    <section className="mb-6">
      <SectionHeading title="KEY ACHIEVEMENTS & QUANTIFIED IMPACT" />
      <div className="bg-[#fafbfc] border border-[#e2e8f0] border-l-4 border-l-[#d97706] p-4 rounded-sm shadow-card-subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {keyAchievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e2e8f0] p-3 rounded shadow-card-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-bold text-[#0f2942] text-xs sm:text-[13px] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#d97706]" />
                    {item.headline}
                  </h4>
                  <span className="bg-[#fef3c7] border border-[#fde68a] text-[#b45309] text-[10px] font-extrabold px-2 py-0.5 rounded-full shrink-0">
                    {item.metricBadge}
                  </span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed text-justify">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
