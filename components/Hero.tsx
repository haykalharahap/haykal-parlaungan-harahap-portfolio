import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvUrl;
    link.download = 'cv-haykal-harahap.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div
            className="w-48 h-64 md:w-64 md:h-80 overflow-hidden shadow-xl border border-white/10 rounded-lg"
          >
            <img
              src="/profile.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-[center_5%]"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg animate-bounce hidden md:block">
            <i className="fab fa-whatsapp text-2xl"></i>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
            Available for new opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Hi, I’m {PERSONAL_INFO.name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
            {PERSONAL_INFO.title}
          </h2>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
            >
              <i className="fas fa-download"></i> Download CV
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center gap-2 shadow-lg"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-colors text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-red-400 transition-colors text-2xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
