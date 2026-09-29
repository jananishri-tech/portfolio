import React from 'react';
import {
  Mail,
  ArrowRight,
  Sparkles,
  Cpu,
  Code2,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Award,
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambience & Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-up">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Panimalar Engineering College <span className="text-slate-500">•</span> Class of 2029
              </span>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                CGPA 9.5
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                G <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-cyan-300">JANANISHRI</span>
              </h1>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 font-mono cursor-blink">
                  AI Developer | Full-Stack Developer | ML Enthusiast
                </p>
              </div>
            </div>

            {/* Short Strong Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.shortBio}
            </p>

            <p className="text-sm text-slate-400 max-w-2xl leading-normal border-l-2 border-indigo-500/50 pl-4 py-0.5">
              Undergraduate engineer at <strong className="text-slate-200">Panimalar Engineering College</strong>. Innovator behind the <span className="text-amber-300 font-medium">VARA Disaster-Resilient Offline Mesh</span> (SIH Project) and Frontend Coordinator at <strong className="text-slate-200">CodersClub</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#vara"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] flex items-center gap-2 group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] flex items-center gap-2"
                title="View GitHub (jananishri-tech)"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-indigo-950/70 hover:bg-indigo-900/80 text-indigo-200 font-medium text-sm border border-indigo-500/30 hover:border-indigo-500/50 transition-all hover:scale-[1.02] flex items-center gap-2"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 font-medium text-sm border border-white/5 transition-all hover:text-white flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Stats Chips */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {QUICK_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm"
                >
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="text-base font-bold text-white font-mono mt-0.5">{stat.value}</p>
                  <p className="text-[10px] text-indigo-300/80 truncate mt-0.5">{stat.highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Uploaded Professional Photo & Technical Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-right animate-delay-200">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Glowing Aura Behind Photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-3xl blur-2xl -z-10" />

              {/* Main Card Housing the Uploaded Photo */}
              <div className="relative rounded-3xl bg-slate-900/80 border border-white/10 p-3 shadow-2xl backdrop-blur-xl">
                {/* Photo Container with Top Gradient Overlay */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                  <img
                    src="/jananishri.jpg"
                    alt="G Jananishri - AI Developer & Full-Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Vignette at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090e] via-[#07090e]/70 to-transparent" />

                  {/* Overlaid Caption Banner */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">G Jananishri</p>
                        <p className="text-[11px] text-slate-300 font-mono">B.Tech AI & ML • Class of 2029</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="text-[10px] font-mono font-medium text-indigo-200">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Technical Element: Top Right */}
                <div className="absolute -top-3 -right-3 px-3 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow">
                  <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Hardware & Mesh</p>
                    <p className="text-xs font-bold text-white font-mono">ESP32 + LoRa</p>
                  </div>
                </div>

                {/* Floating Technical Element: Bottom Left */}
                <div className="absolute -bottom-3 -left-3 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-purple-500/40 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Full-Stack Core</p>
                    <p className="text-xs font-bold text-white font-mono">React • Python • ML</p>
                  </div>
                </div>
              </div>

              {/* Minimal Terminal Card underneath */}
              <div className="mt-4 p-3 rounded-2xl bg-slate-950/90 border border-white/5 font-mono text-left">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-slate-500 ml-1">jananishri@pec-aiml</span>
                  </div>
                  <span className="text-[10px] text-indigo-400">bash</span>
                </div>
                <div className="text-xs space-y-1">
                  <p className="text-slate-400">
                    <span className="text-emerald-400">$</span> identity --focus
                  </p>
                  <p className="text-slate-300 text-[11px]">
                    <span className="text-cyan-400">→</span> "AI/ML Solutions" + "VARA Offline Mesh" + "Full-Stack Dev"
                  </p>
                  <p className="text-slate-400 pt-0.5">
                    <span className="text-emerald-400">$</span> location
                  </p>
                  <p className="text-slate-300 text-[11px]">
                    <span className="text-cyan-400">→</span> Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
