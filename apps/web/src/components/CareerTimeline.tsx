"use client";

import React, { useState } from "react";
import { workExperience, educationData } from "@portfolio/shared";
import { Briefcase, Calendar, ChevronRight, GraduationCap } from "lucide-react";

export function CareerTimeline() {
  const [selectedJob, setSelectedJob] = useState(workExperience[0].id);

  const activeJob =
    workExperience.find((j) => j.id === selectedJob) || workExperience[0];

  return (
    <section id="career" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-2">
          <Briefcase className="w-3.5 h-3.5" /> Track Record
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Executive Career Milestones
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-2">
          Over 11 years of demonstrated operational technology leadership across Tier-1 multinational manufacturing giants.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Company Selector Tab List */}
        <div className="lg:col-span-4 space-y-2">
          {workExperience.map((job) => {
            const isSelected = selectedJob === job.id;
            return (
              <button
                key={job.id}
                onClick={() => setSelectedJob(job.id)}
                className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between group ${
                  isSelected
                    ? "bg-[#0ea5e9]/15 border border-[#0ea5e9]/40 text-white shadow-lg"
                    : "glass-panel text-slate-300 hover:text-white"
                }`}
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight">
                    {job.company}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#38bdf8]" />
                    {job.period}
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected
                      ? "text-[#38bdf8] translate-x-1"
                      : "text-slate-500 group-hover:translate-x-0.5"
                  }`}
                />
              </button>
            );
          })}

          {/* Education Block in Sidebar */}
          <div className="glass-panel p-4 rounded-xl mt-4 border-l-4 border-l-[#0ea5e9]">
            <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
              <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
              Alma Mater
            </div>
            <div className="text-xs font-bold text-[#38bdf8]">
              {educationData.institution}
            </div>
            <div className="text-[11px] text-slate-300 mt-0.5">
              {educationData.degree}
            </div>
            <div className="text-[10px] font-mono text-slate-400 mt-1">
              {educationData.year}
            </div>
          </div>
        </div>

        {/* Selected Company Details Card */}
        <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                {activeJob.company}
              </h3>
              <div className="text-xs sm:text-sm font-bold text-[#38bdf8] mt-0.5">
                {activeJob.roles[0]?.title}
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0ea5e9]/10 text-[#38bdf8] border border-[#0ea5e9]/30">
              {activeJob.period}
            </span>
          </div>

          <div className="space-y-6">
            {activeJob.roles.map((role, rIdx) => (
              <div key={rIdx} className="space-y-3">
                {activeJob.roles.length > 1 && (
                  <div className="text-xs sm:text-sm font-bold text-white pt-2 border-t border-white/5 flex items-center justify-between">
                    <span>{role.title}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">
                      {role.period}
                    </span>
                  </div>
                )}

                {role.scope && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    {role.scope}
                  </p>
                )}

                <div className="space-y-2 pt-1">
                  {role.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-lg bg-black/30 border border-white/5 text-xs text-slate-300 leading-relaxed"
                    >
                      <strong className="text-white font-bold block mb-0.5">
                        {pt.headline}
                      </strong>
                      <span className="text-slate-400">{pt.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
