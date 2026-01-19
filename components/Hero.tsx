
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    // Simulating CV download - in a real environment this would be a direct link to a PDF
    const link = document.createElement('a');
    link.href = '#'; // Placeholder for actual file
    link.download = `CV_${PERSONAL_INFO.name.replace(/\s+/g, '_')}.pdf`;
    alert('Preparing your CV download...');
    // window.print() is a common fallback for portfolio builders to "save as PDF"
    window.print();
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 relative">
          {/* 
            Applying user-requested styles:
            border: 1px solid var(--enMi_w);
            border-radius: 8px;
            margin: auto;
            max-width: 100%; 
          */}
          <div 
            className="w-48 h-64 md:w-64 md:h-80 overflow-hidden shadow-xl"
            style={{
              border: '1px solid #e2e8f0', // Equivalent to var(--enMi_w) / slate-200
              borderRadius: '8px',
              margin: 'auto',
              maxWidth: '100%'
            }}
          >
            <img 
              src="./profile.jpg" 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover object-[center_5%]"
              onError={(e) => {
              }}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg animate-bounce hidden md:block">
            <i className="fab fa-whatsapp text-2xl"></i>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            Available for new opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Hi, I'm {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
            >
              <i className="fas fa-download"></i> Download CV
            </button>
            <a 
              href={PERSONAL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center gap-2 shadow-md"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex gap-6 justify-center md:justify-start text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-500 transition-colors text-2xl">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
