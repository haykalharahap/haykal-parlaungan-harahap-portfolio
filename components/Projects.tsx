import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const getProjectIcon = (idx: number): string => {
    const icons = ['fa-shield-halved', 'fa-mug-hot', 'fa-mobile-screen-button'];
    return icons[idx] || 'fa-code';
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__header section__header--center reveal">
          <span className="section__label">Selected Work</span>
          <h2 className="section__title">Featured Projects</h2>
          <p className="section__subtitle">
            A curated selection of projects demonstrating clean architecture and modern UI patterns.
          </p>
        </div>

        <div className="projects__grid reveal-stagger">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="project-card" id={`project-card-${idx}`}>
              <div className="project-card__header">
                <i className={`fas ${getProjectIcon(idx)} project-card__icon`}></i>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__points">
                  {project.points.map((point, pIdx) => (
                    <div key={pIdx} className="project-card__point">
                      <span className="project-card__point-icon">
                        <i className="fas fa-circle"></i>
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
