import React from "react";
import { workExperience } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";

export function WorkExperience() {
  return (
    <section className="mb-6">
      <SectionHeading title="PROFESSIONAL WORK EXPERIENCE" />
      <div className="space-y-6">
        {workExperience.map((job) => (
          <div key={job.id} className="relative pb-4 last:pb-0">
            {/* Company & Period Header */}
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
              <h3 className="text-sm sm:text-base font-extrabold text-[#0f2942]">
                {job.company}
              </h3>
              <span className="inline-block bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                {job.period}
              </span>
            </div>

            {/* Roles within company */}
            <div className="space-y-4">
              {job.roles.map((role, rIdx) => (
                <div key={rIdx} className="space-y-1.5">
                  <div className="text-xs sm:text-[13px] font-bold text-[#0284c7] italic">
                    {role.title} {role.period ? `| ${role.period}` : ""}
                  </div>

                  {role.scope && (
                    <p className="text-xs text-[#475569] leading-relaxed text-justify mb-2">
                      {role.scope}
                    </p>
                  )}

                  {/* Bullet points with ▪ icon */}
                  <ul className="space-y-1.5 pl-0">
                    {role.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="relative pl-4 text-xs text-[#1e293b] leading-relaxed text-justify"
                      >
                        <span className="absolute left-0 text-[#0284c7] font-bold text-sm leading-none top-[1px]">
                          ▪
                        </span>
                        <strong className="text-[#0f2942] font-bold">
                          {pt.headline}:
                        </strong>{" "}
                        {pt.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
