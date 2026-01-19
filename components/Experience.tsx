
import React from 'react';
import { WORK_EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Professional Journey</h2>
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-indigo-200 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white group-hover:scale-125 transition-transform"></div>
              <div className="mb-1 text-sm font-bold text-indigo-600 uppercase tracking-wider">{exp.period}</div>
              <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
              <div className="text-lg font-medium text-slate-500 mb-4">{exp.company}</div>
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start text-slate-600 leading-relaxed">
                    <span className="text-indigo-500 mr-2 mt-1.5 flex-shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
