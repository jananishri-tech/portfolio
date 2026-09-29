import React, { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Shield,
  Bot,
} from 'lucide-react';
import { Github } from './Icons';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'Full-Stack', 'AI/ML + DevTools', 'AI/ML'];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Projects & Concepts
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Detailed breakdown of production workflow systems, AI developer tools, and practical technical architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                selectedFilter === tab
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/15'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-indigo-500/20">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{project.category}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-2.5">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Specific Highlight: Lifecycle for Panimalar Complaint Management */}
                {project.lifecycle && (
                  <div className="mb-4 p-3 rounded-xl bg-slate-950/70 border border-white/5">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <Workflow className="w-3 h-3 text-indigo-400" />
                      <span>6-Stage Workflow Lifecycle</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.lifecycle.map((stage, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950/60 text-indigo-200 border border-indigo-500/20"
                        >
                          {stage}
                          {sIdx < project.lifecycle.length - 1 && ' →'}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specific Highlight: Roles for Panimalar Complaint Management */}
                {project.roles && (
                  <div className="mb-4 text-[11px] text-slate-400">
                    <span className="font-mono text-slate-300 font-semibold">Supported Roles: </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {project.roles.join(', ')}
                    </span>
                  </div>
                )}

                {/* Contribution */}
                <div className="mb-4 p-2.5 rounded-lg bg-slate-950/50 border border-white/5 text-[11px] text-slate-300 leading-snug">
                  <strong className="text-indigo-300 font-mono">My Contribution: </strong>
                  {project.myContribution}
                </div>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-white/5 mb-4">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <button
                    onClick={() => onOpenModal(project)}
                    className="text-xs font-mono font-semibold text-indigo-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
