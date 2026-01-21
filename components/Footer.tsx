import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Let’s build something great.
            </h2>
            <p className="text-slate-400">
              Currently based in {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-3 bg-[#111827] border border-white/10 text-slate-200 rounded-xl font-semibold hover:border-blue-500/40 transition-all text-center"
            >
              Email Me
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all text-center shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex gap-8 text-slate-400 text-xl">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
