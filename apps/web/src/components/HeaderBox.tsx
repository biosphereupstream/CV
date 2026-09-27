"use client";

import React from "react";
import { contactData } from "@portfolio/shared";
import {
  MapPin,
  Phone,
  Mail,
  Coffee,
  Download,
  Send,
  Printer,
  Sparkles,
} from "lucide-react";
import { logTelemetry } from "@/lib/treaty";

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

export function HeaderBox() {
  const handleDownloadCV = () => {
    logTelemetry("cv_download", { timestamp: new Date().toISOString() });
  };

  const handleCoffeeClick = () => {
    logTelemetry("coffee_click", { destination: contactData.coffeeUrl });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="relative bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#edf2f7] border border-[#e2e8f0] border-l-4 sm:border-l-[6px] border-l-[#0f2942] rounded-md p-5 sm:p-7 shadow-luxury mb-6 transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2942] uppercase tracking-tight">
              {contactData.name}
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] text-xs font-semibold px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-[#1d4ed8]" />
              Plant & Automation Lead
            </span>
          </div>
          <div className="text-sm sm:text-base font-bold text-[#0284c7] tracking-normal mb-1">
            {contactData.title}
          </div>
          <div className="text-xs sm:text-sm font-medium text-[#475569]">
            {contactData.tagline}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 no-print self-stretch md:self-auto">
          <a
            href={contactData.resumePdfPath}
            download="Agus_Sobarna_CV.pdf"
            onClick={handleDownloadCV}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 bg-[#0f2942] hover:bg-[#183d5f] text-white text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-md shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download ATS CV
          </a>
          <a
            href="#contact"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-[#0f2942] border border-[#cbd5e1] text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-md transition-colors"
          >
            <Send className="w-3.5 h-3.5 text-[#0284c7]" />
            Connect
          </a>
          <button
            onClick={handlePrint}
            title="Print Clean A4 CV"
            className="hidden sm:inline-flex items-center justify-center p-2 bg-white hover:bg-slate-50 text-[#475569] border border-[#cbd5e1] rounded-md transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contact Pills Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e2e8f0]/80">
        <span className="inline-flex items-center gap-1.5 bg-white border border-[#cbd5e1] px-2.5 py-1 rounded-full text-xs font-medium text-[#334155] shadow-card-subtle">
          <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
          {contactData.location}
        </span>

        <a
          href={`tel:${contactData.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-[#cbd5e1] px-2.5 py-1 rounded-full text-xs font-medium text-[#334155] transition-colors shadow-card-subtle"
        >
          <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
          {contactData.phone}
        </a>

        <a
          href={`mailto:${contactData.email}`}
          className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-[#cbd5e1] px-2.5 py-1 rounded-full text-xs font-medium text-[#0f2942] font-semibold transition-colors shadow-card-subtle"
        >
          <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
          {contactData.email}
        </a>

        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-[#cbd5e1] px-2.5 py-1 rounded-full text-xs font-medium text-[#0f2942] font-semibold transition-colors shadow-card-subtle"
        >
          <LinkedinIcon className="w-3.5 h-3.5 text-[#0284c7]" />
          {contactData.linkedinDisplay}
        </a>

        {/* Coffee Enthusiast Pill */}
        <a
          href={contactData.coffeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCoffeeClick}
          className="inline-flex items-center gap-1.5 bg-[#fef3c7] hover:bg-[#fde68a] border border-[#fcd34d] px-2.5 py-1 rounded-full text-xs font-bold text-[#92400e] transition-colors shadow-card-subtle group"
        >
          <Coffee className="w-3.5 h-3.5 text-[#d97706] group-hover:rotate-12 transition-transform" />
          <span>☕ {contactData.coffeeBrand}</span>
          <span className="text-[10px] text-[#b45309] font-normal hidden sm:inline">
            (biosphereroastworks.my.id)
          </span>
        </a>
      </div>
    </header>
  );
}
