"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CyberCanvasHero } from "@/components/CyberCanvasHero";
import { CorePillars } from "@/components/CorePillars";
import { ProjectShowcases } from "@/components/ProjectShowcases";
import { CoffeeSection } from "@/components/CoffeeSection";
import { CareerTimeline } from "@/components/CareerTimeline";
import { CertificationsWall } from "@/components/CertificationsWall";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CVDrawerModal } from "@/components/CVDrawerModal";

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090c] text-[#f1f5f9] relative selection:bg-[#0ea5e9] selection:text-[#08090c]">
      {/* Floating Glass Dock Navbar */}
      <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

      {/* Hero: Interactive 3D Cyber-Physical Canvas */}
      <CyberCanvasHero onOpenCVModal={() => setCvModalOpen(true)} />

      {/* Core Engineering Pillars Bento Grid */}
      <CorePillars />

      {/* Project Highlights with Live Simulators */}
      <ProjectShowcases />

      {/* Dedicated Luxury Coffee Feature: Biosphere Roast Works */}
      <CoffeeSection />

      {/* Interactive Career Timeline */}
      <CareerTimeline />

      {/* Licenses & Professional Certifications */}
      <CertificationsWall />

      {/* Modern Executive Inquiry Terminal */}
      <ContactSection />

      {/* Minimalist Luxury Footer */}
      <Footer />

      {/* Slide-over ATS CV Drawer Modal */}
      <CVDrawerModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
