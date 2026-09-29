import React, { useState } from 'react';
import {
  Radio,
  Cpu,
  ShieldAlert,
  Zap,
  CheckCircle2,
  MapPin,
  Camera,
  Activity,
  ArrowRight,
  Flame,
  Droplets,
  Mountain,
  Waves,
  Terminal,
  FileCheck,
  Layers,
} from 'lucide-react';
import { FEATURED_PROJECT_VARA } from '../data/portfolioData';

export default function FeaturedProjectVara({ onOpenModal }) {
  const [activePhase, setActivePhase] = useState('pre');

  const disasterIcons = {
    Floods: Droplets,
    Landslides: Mountain,
    'Forest Fires': Flame,
    Earthquakes: Waves,
  };

  return (
    <section id="vara" className="py-24 relative overflow-hidden bg-slate-950/80 border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Pill & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10 mb-3 animate-pulse-subtle">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>MAJOR FEATURED HACKATHON PROJECT • SIH PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            VARA — Disaster-Resilient Offline Mesh
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            An offline-first disaster communication system engineered to maintain life-saving hazard detection, telemetry, and emergency distress reporting when conventional cellular and internet infrastructure collapses.
          </p>
        </div>

        {/* Central Core Concept & Equation Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/30 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left: Problem & The Critical Differentiator */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <ShieldAlert className="w-4 h-4" />
                <span>CRITICAL TECHNICAL DIFFERENTIATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Coaxial Multi-Sensor Arrangement on a Single ESP32
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Conventional IoT disaster sensors require a separate microcontroller node for every sensor, exponentially driving up hardware expense, power draw, and deployment failure points.
              </p>
              <p className="text-sm text-slate-200 leading-relaxed font-medium bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                💡 <strong>VARA Innovation:</strong> Connects <strong>3 risk-specific sensors</strong> through an optimized <strong>coaxial-format arrangement to ONE single ESP32</strong>. This achieves true offline resilience while drastically minimizing unit hardware and operational costs.
              </p>

              {/* Core Innovation Formula */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs sm:text-sm text-amber-300 flex items-center gap-2 flex-wrap">
                <span className="text-slate-400">CORE IDEA:</span>
                <span className="font-bold">OFFLINE RESILIENCE + ONE ESP32 + COAXIAL SENSORS</span>
                <span className="text-cyan-400">→ LOWER COST</span>
              </div>
            </div>

            {/* Right: Hackathon Milestone Badge */}
            <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-slate-400">Hackathon Journey</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Selected & Progressed
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">Panimalar Internal Hackathon</p>
                    <p className="text-[11px] text-slate-400">Ranked as selected internal winner</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">Smart India Hackathon (SIH)</p>
                    <p className="text-[11px] text-slate-400">Progressed as an officially nominated project</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">Hardware Prototype Validated</p>
                    <p className="text-[11px] text-slate-400">Demonstrated physical packet reception & LoRa sync</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenModal && onOpenModal(FEATURED_PROJECT_VARA)}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
              >
                <span>View Full System Architecture & Evidence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dual-Phase Disaster Workflow: Pre vs Post */}
        <div className="mb-14 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Dual-Phase Disaster Lifecycle</span>
                <span className="text-xs font-mono text-slate-400 font-normal">
                  (Pre-Hazard to Post-Disaster Resolution)
                </span>
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActivePhase('pre')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activePhase === 'pre'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pre-Disaster: Detect → Process → Warn
              </button>
              <button
                onClick={() => setActivePhase('post')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activePhase === 'post'
                    ? 'bg-indigo-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Post-Disaster: Report → Locate → Transfer → Reach
              </button>
            </div>
          </div>

          {/* Workflow Steps Cards */}
          {activePhase === 'pre' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURED_PROJECT_VARA.workflow.preDisaster.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-sm relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                      Stage 0{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      Pre-Disaster
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.step}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURED_PROJECT_VARA.workflow.postDisaster.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-indigo-500/20 backdrop-blur-sm relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                      Stage 0{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      Post-Disaster
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.step}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 4 Supported Disaster Scenarios */}
        <div className="mb-14 text-left">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>Supported Disaster Scenarios</span>
            <span className="text-xs font-mono text-slate-400 font-normal">
              (Multi-Hazard Sensor Configuration)
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_PROJECT_VARA.scenarios.map((sc, i) => {
              const Icon = disasterIcons[sc.title] || ShieldAlert;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{sc.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-normal">{sc.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prototype Evidence & Validation Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <span>Empirical Prototype Evidence</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Physical hardware validation metrics and field-tested features
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              Hardware Demonstration Confirmed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_PROJECT_VARA.prototypeEvidence.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Hardware Tech Stack Tags */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-slate-400 mr-2">VARA Tech Stack:</span>
            {FEATURED_PROJECT_VARA.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
