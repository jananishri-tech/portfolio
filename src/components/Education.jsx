import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Standing
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous undergraduate training in Artificial Intelligence & Machine Learning paired with foundational secondary education.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {EDUCATION.map((edu, idx) => {
            const isCollege = idx === 0;

            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl transition-all backdrop-blur-sm relative flex flex-col justify-between ${
                  isCollege
                    ? 'bg-slate-900/80 border border-indigo-500/30 shadow-xl shadow-indigo-500/5'
                    : 'bg-slate-900/60 border border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-300 mb-3">
                    {edu.institution}
                  </p>

                  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-950 border border-white/5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-300">{edu.grade}</span>
                  </div>

                  <div className="space-y-2.5">
                    {edu.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  {isCollege ? 'Current Academic Pursuit • Panimalar Engineering College' : 'Foundational Matriculation Education'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
