"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDown, Cpu, Sparkles, ShieldCheck, Activity } from "lucide-react";

interface CyberCanvasHeroProps {
  onOpenCVModal: () => void;
}

export function CyberCanvasHero({ onOpenCVModal }: CyberCanvasHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouse = { x: width / 2, y: height / 2, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Interaction with mouse
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= (dxMouse / distMouse) * force * 1.5;
          p1.y -= (dyMouse / distMouse) * force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p1.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden text-center"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Cyber Grid & Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0ea5e9]/20 via-[#0369a1]/15 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
          <span className="text-xs font-mono font-medium text-slate-300">
            Open for Strategic Plant Leadership & Industry 4.0 Advisory
          </span>
        </div>

        {/* Headline Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 tracking-tight leading-[1.08] mb-4">
          AGUS SOBARNA
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl font-bold text-[#38bdf8] mb-3 tracking-normal">
          Mechatronics Engineer | Automation & Industry 4.0 Specialist
        </p>

        {/* Narrative / Executive Summary */}
        <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
          Bridging physical Operational Technology (OT) with high-stakes plant performance. 11+ years delivering <span className="text-white font-semibold">turnkey CAPEX modernizations</span>, autonomous robotics, AI computer vision, and founder of <span className="text-[#f59e0b] font-semibold">Biosphere Roast Works</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-black bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] text-[#08090c] transition-all shadow-[0_0_25px_rgba(14,165,233,0.35)]"
          >
            <Activity className="w-4 h-4" />
            <span>Explore Engineering Works</span>
          </a>

          <button
            onClick={onOpenCVModal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
            <span>Inspect Verified CV</span>
          </button>
        </div>

        {/* Floating Telemetry Metric Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl">
          <div className="glass-panel p-3 rounded-xl text-left">
            <div className="text-lg sm:text-2xl font-black font-mono text-white">
              100%
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-[#38bdf8] uppercase">
              On-Time CAPEX Delivery
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl text-left">
            <div className="text-lg sm:text-2xl font-black font-mono text-emerald-400">
              -35%
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">
              Unplanned Downtime Cut
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl text-left">
            <div className="text-lg sm:text-2xl font-black font-mono text-sky-400">
              +20%
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">
              SCADA OEE Surge
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl text-left">
            <div className="text-lg sm:text-2xl font-black font-mono text-amber-400">
              95%
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">
              AI Vision Tree Detection
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#pillars"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-mono text-slate-500 hover:text-slate-300 transition-colors z-10"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
