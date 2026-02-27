import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (category: string): string => {
    switch (category) {
      case 'Front-End': return 'fa-code';
      case 'Tools': return 'fa-wrench';
      default: return 'fa-layer-group';
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__header section__header--center reveal">
          <span className="section__label">What I Work With</span>
          <h2 className="section__title">Technical Expertise</h2>
          <p className="section__subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="skills__grid reveal-stagger">
          {SKILLS.map((group, idx) => (
            <div key={idx} className="skill-card" id={`skill-card-${idx}`}>
              <div className="skill-card__icon">
                <i className={`fas ${getIcon(group.category)}`}></i>
              </div>
              <h3 className="skill-card__title">{group.category}</h3>
              <div className="skill-card__tags">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
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
