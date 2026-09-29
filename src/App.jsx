import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjectVara from './components/FeaturedProjectVara';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import CodersClub from './components/CodersClub';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ScrollToTop from './components/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [modalProject, setModalProject] = useState(null);
  useScrollReveal();

  const handleOpenModal = (project) => {
    setModalProject(project);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Subtle Dot Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjectVara onOpenModal={handleOpenModal} />
        <Projects onOpenModal={handleOpenModal} />
        <GitHubSection />
        <Experience />
        <Achievements />
        <CodersClub />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal Overlay */}
      {modalProject && (
        <ProjectModal project={modalProject} onClose={handleCloseModal} />
      )}

      {/* Floating Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}
