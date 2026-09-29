import React from 'react';
import { Users, Code2, Palette, Terminal, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { LEADERSHIP_CODERSCLUB } from '../data/portfolioData';

export default function CodersClub() {
  return (
    <section id="codersclub" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-purple-950/30 border border-indigo-500/20 shadow-xl backdrop-blur-md text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header & Role Title */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                <Users className="w-3.5 h-3.5" />
                <span>STUDENT LEADERSHIP & COMMUNITY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                CodersClub Coordinator
              </h2>

              <p className="text-sm font-mono text-indigo-300 font-semibold">
                {LEADERSHIP_CODERSCLUB.role}
              </p>

              <p className="text-xs font-mono text-slate-400">
                {LEADERSHIP_CODERSCLUB.organization}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Selection Process: </span>
                {LEADERSHIP_CODERSCLUB.selectionProcess}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                  <Palette className="w-3.5 h-3.5 text-pink-400" />
                  <span>UI/UX Standards</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Frontend Sync</span>
                </div>
              </div>
            </div>

            {/* Right Responsibilities Checklist */}
            <div className="lg:col-span-7 bg-slate-950/60 p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Core Responsibilities & Technical Contribution</span>
              </h3>

              <div className="space-y-3">
                {LEADERSHIP_CODERSCLUB.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-snug">{resp}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                Active service in advancing peer technical culture, web development standards, and hackathon readiness at Panimalar Engineering College.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
