import React from 'react';
import { EDUCATION, CERTIFICATIONS, LANGUAGES } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-transparent text-slate-200"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Education */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <i className="fas fa-graduation-cap text-blue-400"></i>
            Education
          </h2>

          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="border-l-2 border-blue-500/30 pl-4"
              >
                <div className="text-xs font-bold text-blue-400 mb-1">
                  {edu.period}
                </div>
                <h3 className="font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <i className="fas fa-certificate text-blue-400"></i>
            Certifications
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-[#111827] rounded-xl border border-white/10"
              >
                <div className="text-2xl text-blue-400">
                  <i className="fas fa-medal"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-slate-400 text-xs">
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <i className="fas fa-language text-blue-400"></i>
            Languages
          </h2>

          <div className="space-y-6">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white">
                    {lang.name}
                  </span>
                  <span className="text-sm text-blue-400 font-medium">
                    {lang.level}
                  </span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                    style={{
                      width:
                        lang.level === 'Native'
                          ? '100%'
                          : '85%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
