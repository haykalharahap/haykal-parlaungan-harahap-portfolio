import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-transparent text-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent works focusing on clean architecture and modern UI patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#111827] rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-colors shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border-b border-white/10 overflow-hidden">
                <i
                  className={`fas ${
                    idx === 0 ? 'fa-user-shield' : 'fa-mobile-alt'
                  } text-6xl text-blue-400 opacity-60 group-hover:scale-110 transition-transform duration-500`}
                ></i>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start text-slate-300 text-sm"
                    >
                      <span className="text-blue-500 mr-3 mt-1">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
