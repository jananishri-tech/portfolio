import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Workflow,
  Cpu,
  Layers,
  Radio,
  FileCheck,
  Zap,
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isVara = project.id === 'vara';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-white/10 shadow-2xl p-6 sm:p-8 text-left my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-white/10 mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.badge || 'Project Specifications'}
            </span>
            {project.category && (
              <span className="text-xs font-mono text-slate-400">{project.category}</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title || project.name}
          </h2>
          {project.subtitle && (
            <p className="text-sm font-semibold text-amber-300 font-mono mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          {/* Problem & Solution */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              The Problem Context
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-white/5">
              {project.problem}
            </p>
          </div>

          {/* Differentiator or Solution */}
          {project.technicalDifferentiator && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Technical Differentiator & Innovation</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                {project.technicalDifferentiator}
              </p>
            </div>
          )}

          {project.solution && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-1.5">
                Engineered Solution
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-white/5">
                {project.solution}
              </p>
            </div>
          )}

          {/* Special VARA Details: Capabilities & Hardware Evidence */}
          {isVara && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Physical Hardware Prototype Evidence</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.prototypeEvidence.map((ev, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-950/80 border border-white/5 text-xs text-slate-200 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ev}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key System Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.capabilities.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-2.5 rounded-lg bg-slate-950/50 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Special Complaint System Workflow & Roles */}
          {project.lifecycle && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                <span>6-Stage Lifecycle Architecture</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.lifecycle.map((stage, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 text-center"
                  >
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Stage 0{idx + 1}</p>
                    <p className="text-xs font-bold text-white mt-0.5">{stage}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.roles && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Role-Based Access Modules
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.roles.map((role, rIdx) => (
                  <span
                    key={rIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contribution */}
          {project.myContribution && (
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300">
              <strong className="text-indigo-300 font-mono">My Specific Contribution: </strong>
              {project.myContribution}
            </div>
          )}

          {/* Technologies */}
          {(project.technologies || project.techStack) && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.techStack).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
          <a
            href={project.githubUrl || 'https://github.com/jananishri-tech'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold border border-white/10 flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GitHub Profile & Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
