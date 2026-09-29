import React from 'react';
import { Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center font-extrabold text-xs text-white">
                  GJ
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">G Jananishri</h3>
                <p className="text-xs text-slate-400 font-mono">
                  B.Tech AI & ML • Panimalar Engineering College '29
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed font-normal">
              Building practical AI, ML, and web solutions that solve real-world problems. Grounded in hardware resilience, modern full-stack development, and genuine problem solving.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                CGPA 9.5
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                SIH Project VARA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
              Portfolio Index
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Narrative
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Proficiency
                </a>
              </li>
              <li>
                <a href="#vara" className="hover:text-amber-300 transition-colors">
                  Featured Project: VARA
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  All Projects & Concepts
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-white transition-colors">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Internships & Experience
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
              Verified Profiles
            </p>
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors p-2 rounded-lg bg-slate-900/60 border border-white/5"
              >
                <Github className="w-4 h-4 text-white" />
                <span>github.com/jananishri-tech</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/60 border border-white/5"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-300 transition-colors p-2 rounded-lg bg-slate-900/60 border border-white/5"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} G Jananishri. Built for internships, hackathons, and developer opportunities.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Engineered with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
