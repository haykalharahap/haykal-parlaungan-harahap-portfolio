import React from 'react';
import { EDUCATION, CERTIFICATIONS, LANGUAGES } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section__header section__header--center reveal">
          <span className="section__label">Background</span>
          <h2 className="section__title">Education & More</h2>
          <p className="section__subtitle">
            Academic background, certifications, and language proficiency.
          </p>
        </div>

        <div className="education__grid reveal-stagger">
          {/* Education Column */}
          <div>
            <h3 className="edu-block__title">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="edu-item" id={`edu-item-${idx}`}>
                <div className="edu-item__period">{edu.period}</div>
                <div className="edu-item__name">{edu.degree}</div>
                <div className="edu-item__detail">{edu.institution}</div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="edu-block__title">
              <i className="fas fa-certificate"></i> Certifications
            </h3>
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="cert-card" id={`cert-card-${idx}`}>
                <span className="cert-card__icon">
                  <i className="fas fa-medal"></i>
                </span>
                <div>
                  <div className="cert-card__name">{cert.name}</div>
                  <div className="cert-card__year">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages Column */}
          <div>
            <h3 className="edu-block__title">
              <i className="fas fa-language"></i> Languages
            </h3>
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="lang-item" id={`lang-item-${idx}`}>
                <div className="lang-item__header">
                  <span className="lang-item__name">{lang.name}</span>
                  <span className="lang-item__level">{lang.level}</span>
                </div>
                <div className="lang-item__bar">
                  <div
                    className="lang-item__fill"
                    style={{
                      width: lang.level.trim() === 'Native' ? '100%' : '85%',
                    }}
                  />
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
