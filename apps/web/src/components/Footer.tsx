"use client";

import React from "react";
import { contactData } from "@portfolio/shared";
import { ArrowUp, Coffee } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6 max-w-6xl mx-auto text-xs text-slate-400 no-print">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="font-extrabold text-white text-sm tracking-tight mb-1">
            AGUS SOBARNA
          </div>
          <p className="text-[11px] text-slate-500 font-mono">
            Mechatronics Engineer | Automation & Industry 4.0 Specialist | Founder of Biosphere Roast Works
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={contactData.coffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f59e0b] hover:text-[#fbbf24] flex items-center gap-1 font-bold transition-colors"
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>biosphereroastworks.my.id</span>
          </a>

          <button
            onClick={scrollToTop}
            title="Return to top"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-mono gap-2">
        <span>© {new Date().getFullYear()} Agus Sobarna. Engineered with Bun, Elysia, and Next.js 15.</span>
        <span>Bogor, West Java, Indonesia</span>
      </div>
    </footer>
  );
}
