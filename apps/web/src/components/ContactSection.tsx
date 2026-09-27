"use client";

import React, { useState } from "react";
import { submitInquiry } from "@/lib/treaty";
import { contactData } from "@portfolio/shared";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  Coffee,
  MessageSquare,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    category: "Plant Leadership Role",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await submitInquiry(formState);
      if (res.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your executive inquiry has been safely received. Agus Sobarna will get back to you shortly.",
        });
        setFormState({
          name: "",
          email: "",
          company: "",
          category: "Plant Leadership Role",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: res.error || "Unable to send inquiry. Please email directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please email sobarna.agus@gmail.com directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto no-print">
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider mb-1">
              <MessageSquare className="w-3.5 h-3.5" /> Direct Executive Channel
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Initiate Strategic Discussion
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Whether you are scouting for executive engineering leadership, evaluating an Industry 4.0 plant transformation, or interested in specialty coffee collaborations through Biosphere Roast Works, let&apos;s connect directly.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0ea5e9]/40 text-xs font-semibold text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">PRIMARY EMAIL</div>
                  <div className="group-hover:text-[#38bdf8] transition-colors">{contactData.email}</div>
                </div>
              </a>

              <a
                href={`tel:${contactData.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0ea5e9]/40 text-xs font-semibold text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">DIRECT PHONE / WHATSAPP</div>
                  <div className="group-hover:text-[#38bdf8] transition-colors">{contactData.phone}</div>
                </div>
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0ea5e9]/40 text-xs font-semibold text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-800 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">LINKEDIN PROFILE</div>
                  <div className="group-hover:text-[#38bdf8] transition-colors">{contactData.linkedinDisplay}</div>
                </div>
              </a>

              <a
                href={contactData.coffeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#1c140d]/80 border border-[#d97706]/40 hover:border-[#d97706] text-xs font-bold text-[#f59e0b] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-700 text-[#f59e0b] flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-amber-400/80 font-mono">SPECIALTY COFFEE ROASTERY</div>
                  <div className="text-white group-hover:text-[#f59e0b] transition-colors">biosphereroastworks.my.id</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            {status.type === "success" ? (
              <div className="p-5 bg-emerald-950/60 border border-emerald-800 text-emerald-300 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed font-medium">
                  {status.message}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status.type === "error" && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Ir. Hartono Wijaya"
                      className="w-full text-xs p-3 bg-white/[0.04] border border-white/10 rounded-lg focus:outline-none focus:border-[#0ea5e9] text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="e.g. h.wijaya@manufacturing.com"
                      className="w-full text-xs p-3 bg-white/[0.04] border border-white/10 rounded-lg focus:outline-none focus:border-[#0ea5e9] text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      placeholder="e.g. Industrial Automation Corp"
                      className="w-full text-xs p-3 bg-white/[0.04] border border-white/10 rounded-lg focus:outline-none focus:border-[#0ea5e9] text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                      Subject Category *
                    </label>
                    <select
                      value={formState.category}
                      onChange={(e) =>
                        setFormState({ ...formState, category: e.target.value })
                      }
                      className="w-full text-xs p-3 bg-[#0d121c] border border-white/10 rounded-lg focus:outline-none focus:border-[#0ea5e9] text-white"
                    >
                      <option value="Plant Leadership Role">Plant Leadership Role</option>
                      <option value="Automation & Industry 4.0 Consultation">Automation & Industry 4.0 Consultation</option>
                      <option value="Smart Factory / SCADA Advisory">Smart Factory / SCADA Advisory</option>
                      <option value="Biosphere Roast Works Coffee Inquiry">Biosphere Roast Works Coffee Inquiry</option>
                      <option value="Other Discussion">Other Discussion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-bold">
                    Message / Agenda *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Briefly describe your plant modernizing requirement, strategic leadership opportunity, or specialty coffee partnership..."
                    className="w-full text-xs p-3 bg-white/[0.04] border border-white/10 rounded-lg focus:outline-none focus:border-[#0ea5e9] text-white placeholder-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] text-[#08090c] font-black text-xs sm:text-sm py-3 rounded-lg transition-all shadow-[0_0_25px_rgba(14,165,233,0.3)] disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? "Transmitting..." : "Send Executive Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
