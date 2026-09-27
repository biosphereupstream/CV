"use client";

import React, { useState, useEffect } from "react";
import { contactData } from "@portfolio/shared";
import { FileText, Send, Coffee, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenCVModal: () => void;
}

export function Navbar({ onOpenCVModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Pillars", href: "#pillars" },
    { label: "Projects", href: "#projects" },
    { label: "Coffee Craft", href: "#coffee" },
    { label: "Career", href: "#career" },
    { label: "Credentials", href: "#credentials" },
  ];

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 no-print`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0c1017]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "bg-[#0c1017]/60 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] flex items-center justify-center text-white font-black text-xs shadow-[0_0_15px_rgba(14,165,233,0.4)]">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
              AGUS SOBARNA
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-1 hidden sm:inline">
              INDUSTRY 4.0 // MECHATRONICS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contactData.coffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#f59e0b] hover:text-[#fbbf24] transition-colors"
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>Biosphere Coffee</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenCVModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>View ATS CV</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] text-[#08090c] font-black transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCVModal}
            className="px-2.5 py-1 text-xs font-bold bg-white/10 text-white rounded-full border border-white/10"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-4 rounded-2xl bg-[#0c1017]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-300 hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contactData.coffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-[#f59e0b] py-1"
          >
            <Coffee className="w-4 h-4" />
            <span>Biosphere Roast Works</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-bold bg-white/10 text-white border border-white/10"
            >
              View ATS CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded-lg text-xs font-bold text-center bg-[#0ea5e9] text-[#08090c] font-black"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
