import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationSection from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/10">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {/* Logo / Name */}
            </span>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
            </div>

            <a 
              href="https://wa.me/62816351991" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
