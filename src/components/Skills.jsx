import React, { useState } from 'react';
import {
  Brain,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Radio,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: Brain },
    { id: 'frontend', label: 'Frontend & Web', icon: Code2 },
    { id: 'backend-core', label: 'Backend & Core Languages', icon: Terminal },
    { id: 'databases-tools', label: 'Databases & Tools', icon: Database },
    { id: 'embedded-iot', label: 'Hardware & IoT', icon: Cpu },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Technical Stack
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Organized by functional domains and practical application across AI models, full-stack systems, and embedded hardware.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/15'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{category.title}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-normal">
                  {category.description}
                </p>

                {/* Individual Skill Cards */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200 font-mono">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/5">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Context Badge */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Applied in verified projects</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Application Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/60 border border-indigo-500/20 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Engineering Mindset & Learning Velocity
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Every tool and framework in my repertoire is backed by project implementation — from writing C++ for low-power ESP32 microcontrollers in the VARA project to architecting React interfaces for institutional complaint management and experimenting with AST parsing for developer tooling.
            </p>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold font-mono shadow-md transition-all hover:scale-105"
          >
            Review GitHub Repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
