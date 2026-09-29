import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
  CheckCircle2,
  Award,
  ExternalLink,
  Building2,
} from 'lucide-react';
import { EXPERIENCE_INTERNSHIPS, INDUSTRY_PROGRAMS } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & PRACTICAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships & Professional Programs
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Factual record of specialized machine learning internships, technical training, and corporate data analytics simulations.
          </p>
        </div>

        {/* Internships Timeline */}
        <div className="mb-16 text-left">
          <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider mb-8 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span>Formal Internships & Traineeships</span>
          </h3>

          <div className="space-y-6">
            {EXPERIENCE_INTERNSHIPS.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 transition-all backdrop-blur-sm relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 mb-4 gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-semibold text-indigo-300">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.duration}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono text-slate-400 mr-1">Focus Areas:</span>
                  {exp.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Simulations & Learning Badges */}
        <div className="text-left">
          <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider mb-8 flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            <span>Industry Job Simulations & Verified Credentials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INDUSTRY_PROGRAMS.map((prog, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white">{prog.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/50 text-purple-300 border border-purple-500/20 shrink-0">
                      {prog.type}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mb-3">Issued via {prog.provider}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{prog.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
