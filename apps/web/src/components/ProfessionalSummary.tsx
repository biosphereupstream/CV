import React from "react";
import { professionalSummary } from "@portfolio/shared";
import { SectionHeading } from "./SectionHeading";

export function ProfessionalSummary() {
  return (
    <section className="mb-6">
      <SectionHeading title="PROFESSIONAL SUMMARY" />
      <div className="bg-[#fafbfc] border border-[#f1f5f9] border-l-4 border-l-[#64748b] p-4 rounded-sm shadow-card-subtle">
        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed text-justify">
          Innovative <strong className="text-[#0f2942] font-bold">Mechatronics Engineer</strong>{" "}
          with extensive professional experience in industrial automation, robotics, smart factories, and process optimization. Expertise in{" "}
          <strong className="text-[#0f2942] font-bold">SCADA systems, IoT, machine vision (OpenCV-Python)</strong>, and utility management. Proven track record in reducing operational costs, implementing{" "}
          <strong className="text-[#0f2942] font-bold">Industry 4.0</strong> solutions, and leading cross-functional engineering projects across palm oil industry, automotive, and chemical industries, managing comprehensive{" "}
          <strong className="text-[#0f2942] font-bold">CAPEX/OPEX</strong> projects, and driving operational efficiency through innovative automation solutions. Recognized for bridging technical operational technology (OT) with high-level plant performance, safety, and strict regulatory standards.
        </p>
      </div>
    </section>
  );
}
