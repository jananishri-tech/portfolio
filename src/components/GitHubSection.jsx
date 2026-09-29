import React, { useState, useEffect } from 'react';
import {
  Star,
  GitFork,
  ExternalLink,
  Code2,
  Activity,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { Github } from './Icons';
import { GITHUB_REPOSITORIES, PERSONAL_INFO } from '../data/portfolioData';

export default function GitHubSection() {
  const [repos, setRepos] = useState(GITHUB_REPOSITORIES);
  const [profileData, setProfileData] = useState({
    login: 'jananishri-tech',
    name: 'G Jananishri',
    public_repos: 10,
    followers: 0,
    following: 0,
    bio: 'AI/ML Enthusiast | Frontend Developer | Frontend Coordinator @ Coders Club | Building practical solutions with Python & Machine Learning',
    location: 'Chennai, Tamil Nadu, India',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Attempt dynamic fetch from GitHub API with graceful fallback
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const userRes = await fetch('https://api.github.com/users/jananishri-tech');
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfileData(userData);
        }

        const reposRes = await fetch('https://api.github.com/users/jananishri-tech/repos?sort=updated&per_page=10');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const formatted = reposData.map((r) => ({
              name: r.name,
              description: r.description || 'Public GitHub repository by G Jananishri.',
              language: r.language || 'Code',
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              topics: r.topics || [],
            }));
            setRepos(formatted);
          }
        }
      } catch (err) {
        // Rate-limited or offline: keep pre-seeded verified data
        console.log('Using verified repository cache');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const languageColors = {
    Kotlin: 'bg-purple-500',
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-amber-400',
    Python: 'bg-emerald-500',
    HTML: 'bg-orange-500',
    'HTML / CSS': 'bg-pink-500',
    'C++': 'bg-cyan-500',
    Java: 'bg-red-500',
    Code: 'bg-slate-400',
  };

  return (
    <section id="github" className="py-20 relative bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-white/10 mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open-Source Repositories & Activity
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Live and verified code repositories from my official GitHub profile. Every project links directly to its source repository.
          </p>
        </div>

        {/* Profile Summary Card */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-sm text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0a0d14] rounded-[15px] flex items-center justify-center overflow-hidden">
                  <Github className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{profileData.name || 'G Jananishri'}</h3>
                  <a
                    href="https://github.com/jananishri-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-indigo-400 hover:underline"
                  >
                    @{profileData.login}
                  </a>
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-xl font-normal">
                  {profileData.bio}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 self-start md:self-center">
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-white/5 text-center font-mono">
                <p className="text-base font-bold text-white">{profileData.public_repos}</p>
                <p className="text-[10px] text-slate-400">Repositories</p>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold font-mono flex items-center gap-2 shadow-md transition-all hover:scale-105"
              >
                <span>Follow on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {repos.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white group-hover:text-indigo-300 font-mono transition-colors break-all"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {repo.description}
                </p>

                {/* Topics if available */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic, tId) => (
                      <span
                        key={tId}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/20"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      languageColors[repo.language] || 'bg-indigo-400'
                    }`}
                  />
                  <span className="text-slate-300 text-[11px]">{repo.language}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] font-mono group-hover:text-indigo-300 transition-colors"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub Footer Button */}
        <div className="mt-10 text-center">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono font-semibold border border-white/10 hover:border-white/20 transition-all shadow-lg"
          >
            <Github className="w-4 h-4 text-white" />
            <span>Explore All 10 Repositories on github.com/jananishri-tech</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
