import React from 'react';
import {
  Brain,
  Layers,
  Radio,
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Radio,
      title: 'Disaster & Offline Hardware Systems',
      description:
        'Engineered the VARA disaster communication system using ESP32 and LoRa radio frequencies, pioneering a coaxial 3-sensor single-microcontroller architecture for offline emergency mesh networks.',
      color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
    },
    {
      icon: Layers,
      title: 'Modern Full-Stack Engineering',
      description:
        'Building responsive, scalable web applications with React, Vite, Tailwind CSS, Node.js, Express, and PostgreSQL/Prisma. Hands-on experience developing institutional workflow platforms.',
      color: 'from-indigo-500/20 to-blue-500/10 text-indigo-400 border-indigo-500/30',
    },
    {
      icon: Brain,
      title: 'Practical AI & Prompt Engineering',
      description:
        'Exploring applied machine learning, LLM code contract inference (IntegrateAI), digital learning twins (AI_education in Kotlin/TypeScript), and data analytics (Tata & Deloitte simulations).',
      color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
    },
  ];

  const quickFacts = [
    { label: 'Institution', value: 'Panimalar Engineering College', icon: GraduationCap },
    { label: 'Department', value: 'Artificial Intelligence & Machine Learning', icon: Brain },
    { label: 'Academic Standing', value: 'CGPA 9.5 / 10', icon: Award },
    { label: 'Graduation Year', value: 'Class of 2029', icon: Calendar },
    { label: 'Location', value: 'Chennai, Tamil Nadu, India', icon: MapPin },
    { label: 'Campus Leadership', value: 'Frontend Coordinator @ CodersClub', icon: Users },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Hardware Resilience, AI & Modern Web
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            I am a student developer who believes in learning by building tangible, tested systems — from low-power microcontrollers to full-stack platforms and intelligent developer tooling.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left reveal-left">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Who I Am</span>
                <span className="text-xs font-normal font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5">
                  Real Developer Profile
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am currently pursuing my <strong>B.Tech in Artificial Intelligence & Machine Learning</strong> at <strong>Panimalar Engineering College</strong> (graduating in 2029) with a current <strong>CGPA of 9.5</strong>. Rather than limiting myself to textbooks, I actively participate in hackathons, symposiums, and college technical initiatives.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My approach to engineering combines curiosity for artificial intelligence with pragmatic implementation. Whether designing <strong>offline-first LoRa mesh hardware</strong> for natural disaster response, architecting institutional repair complaint platforms with React and PostgreSQL, or inferring API contract drift using AST parsers and LLMs, I prioritize practical utility and clean user experience.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                As the <strong>UI/UX Developer & Frontend Coordinator at CodersClub</strong>, I coordinate lab workshops, assist fellow students in modern frontend workflows, and uphold design standards across student projects.
              </p>

              {/* Verified Links Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>github.com/jananishri-tech</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-indigo-950/70 hover:bg-indigo-900/80 text-indigo-300 text-xs font-mono border border-indigo-500/30 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>linkedin.com/in/jananishri-g</span>
                  <ExternalLink className="w-3 h-3 text-indigo-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 text-left reveal-right">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono text-xs text-indigo-300 mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <span>Academic & Profile Snapshot</span>
              </h3>

              <div className="space-y-3.5">
                {quickFacts.map((fact, i) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/50 border border-white/5"
                    >
                      <div className="p-2 rounded-lg bg-slate-800/80 text-indigo-300 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-mono">{fact.label}</p>
                        <p className="text-sm font-semibold text-slate-100">{fact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 relative group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 border`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
