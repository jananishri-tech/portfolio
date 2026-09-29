import React from 'react';
import {
  Trophy,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Target,
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Zap: Zap,
    CheckCircle: CheckCircle2,
    Sparkles: Sparkles,
  };

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Technical Achievements
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified competitive milestones across national symposia, university hackathons, and technical campus ambassador roles.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {ACHIEVEMENTS.map((item) => {
            const Icon = iconMap[item.icon] || Award;
            const isSpecial = item.id === 'velammal' || item.id === 'vara-hackathon';

            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group hover:-translate-y-1 ${
                  isSpecial
                    ? 'bg-slate-900/80 border border-amber-500/30 shadow-lg shadow-amber-500/5'
                    : 'bg-slate-900/60 border border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                        isSpecial
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-300 mb-2 font-medium">{item.event}</p>

                  <div className="mb-3 inline-block px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-xs font-mono font-semibold text-emerald-400">
                    {item.award}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified Student Honor</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
