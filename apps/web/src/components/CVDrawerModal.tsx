"use client";

import React from "react";
import { contactData } from "@portfolio/shared";
import { HeaderBox } from "./HeaderBox";
import { ProfessionalSummary } from "./ProfessionalSummary";
import { TechnicalSkills } from "./TechnicalSkills";
import { WorkExperience } from "./WorkExperience";
import { ProjectHighlights } from "./ProjectHighlights";
import { CoffeeEnthusiast } from "./CoffeeEnthusiast";
import { KeyAchievements } from "./KeyAchievements";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { X, Download, Printer, ExternalLink } from "lucide-react";
import { logTelemetry } from "@/lib/treaty";

interface CVDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVDrawerModal({ isOpen, onClose }: CVDrawerModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    logTelemetry("cv_download_modal", { timestamp: new Date().toISOString() });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-100 text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        {/* Drawer Toolbar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0f2942] text-white border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-wider">
              OFFICIAL ATS CURRICULUM VITAE // AGUS SOBARNA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contactData.resumePdfPath}
              download="Agus_Sobarna_CV.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold bg-[#0284c7] hover:bg-[#0369a1] text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              title="Print Clean A4 CV"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print A4</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#f8fafc]">
          <div className="max-w-[850px] mx-auto bg-white p-6 sm:p-10 border border-[#e2e8f0] shadow-sm rounded-sm">
            <HeaderBox />
            <ProfessionalSummary />
            <TechnicalSkills />
            <WorkExperience />
            <ProjectHighlights />
            <CoffeeEnthusiast />
            <KeyAchievements />
            <Education />
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
}
