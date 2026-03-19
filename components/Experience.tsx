import React from 'react';
import { WORK_EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__header section__header--center reveal-left">
          <span className="section__label">Where I've Been</span>
          <h2 className="section__title">Professional Journey</h2>
          <p className="section__subtitle">
            A timeline of my career and the roles that shaped my skills.
          </p>
        </div>

        <div className="timeline reveal">
          <div className="timeline__line" aria-hidden="true" />
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="timeline__item" id={`experience-item-${idx}`}>
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__period">{exp.period}</div>
              <h3 className="timeline__role">{exp.role}</h3>
              <div className="timeline__company">{exp.company}</div>
              <div className="timeline__points">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="timeline__point">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
