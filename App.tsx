import React, { useState, useEffect, useRef, useCallback } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationSection from './components/Education';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Theme state: defaults to dark if they prefer it or have saved it, else light
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const cursorRef = useRef<HTMLDivElement>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Active section tracking + back to top visibility
  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'projects', 'education'];

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const closeMobileNav = () => setMobileNavOpen(false);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvUrl;
    link.download = 'cv-haykal-harahap.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Cursor Glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Social Sidebar (Left) */}
      <div className="social-sidebar">
        <a
          href={PERSONAL_INFO.instagram}
          target="_blank"
          rel="noreferrer"
          className="social-sidebar__link"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="social-sidebar__link"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="social-sidebar__link"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar__inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
          <a href="#" className="navbar__logo" onClick={scrollToTop}>
            HH<span className="navbar__logo-dot">.</span>
          </a>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={handleDownloadCV}
            className="navbar__cta"
            id="navbar-download-cv"
          >
            <i className="fas fa-download"></i> Download CV
          </button>

          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button
            className="navbar__toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation menu"
            id="navbar-toggle-btn"
          >
            <i className={mobileNavOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav__link"
            onClick={closeMobileNav}
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={handleDownloadCV}
          className="btn btn--primary"
          style={{ marginTop: '16px', maxWidth: '200px' }}
        >
          <i className="fas fa-download"></i> Download CV
        </button>
      </div>

      <main>
        <Hero />

        {/* Brand / Client Strip */}
        <div className="brand-strip">
          <div className="container">
            <p className="brand-strip__label">Technologies & Tools I Work With</p>
            <div className="brand-strip__logos">
              <span className="brand-strip__logo">
                <i className="fab fa-react"></i> React
              </span>
              <span className="brand-strip__logo">
                <i className="fab fa-js-square"></i> JavaScript
              </span>
              <span className="brand-strip__logo">
                <i className="fab fa-html5"></i> HTML5
              </span>
              <span className="brand-strip__logo">
                <i className="fab fa-css3-alt"></i> CSS3
              </span>
              <span className="brand-strip__logo">
                <i className="fab fa-git-alt"></i> Git
              </span>
              <span className="brand-strip__logo">
                <i className="fab fa-github"></i> GitHub
              </span>
            </div>
          </div>
        </div>

        <Skills />
        <hr className="section__divider" />
        <Experience />
        <hr className="section__divider" />
        <Projects />
        <hr className="section__divider" />
        <EducationSection />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        id="back-to-top-btn"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default App;
