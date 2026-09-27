import React from "react";
import { HeaderBox } from "@/components/HeaderBox";
import { ProfessionalSummary } from "@/components/ProfessionalSummary";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { WorkExperience } from "@/components/WorkExperience";
import { ProjectHighlights } from "@/components/ProjectHighlights";
import { CoffeeEnthusiast } from "@/components/CoffeeEnthusiast";
import { KeyAchievements } from "@/components/KeyAchievements";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { ContactTerminal } from "@/components/ContactTerminal";

export default function HomePage() {
  return (
    <div className="space-y-2">
      {/* Executive Header Box */}
      <HeaderBox />

      {/* Professional Summary */}
      <ProfessionalSummary />

      {/* Technical Skills & Domain Expertise */}
      <TechnicalSkills />

      {/* Professional Work Experience */}
      <WorkExperience />

      {/* Key Project Highlights with Interactive Simulators */}
      <ProjectHighlights />

      {/* Passion & Venture: Coffee Enthusiast & Biosphere Roast Works */}
      <CoffeeEnthusiast />

      {/* Key Achievements & Quantified ROI */}
      <KeyAchievements />

      {/* Education */}
      <Education />

      {/* Licenses & Professional Certifications */}
      <Certifications />

      {/* Executive Inquiry & Connection Terminal */}
      <ContactTerminal />

      {/* Footer */}
      <footer className="pt-6 mt-6 border-t border-[#e2e8f0] text-center text-xs text-[#64748b] flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>
          © {new Date().getFullYear()} Agus Sobarna. All rights reserved.
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span>Mechatronics & Automation Specialist</span>
          <span>•</span>
          <a
            href="https://biosphereroastworks.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d97706] hover:underline font-bold"
          >
            biosphereroastworks.my.id
          </a>
        </div>
      </footer>
    </div>
  );
}
