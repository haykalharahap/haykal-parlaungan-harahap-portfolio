import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-transparent border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#111827] p-8 rounded-2xl border border-white/10 hover:border-blue-500/40 transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center mb-6">
                <i
                  className={`fas ${
                    group.category === 'Front-End'
                      ? 'fa-code'
                      : group.category === 'Tools'
                      ? 'fa-tools'
                      : 'fa-layer-group'
                  } text-xl`}
                ></i>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
