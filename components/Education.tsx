import React from 'react';
import { EDUCATION, CERTIFICATIONS, LANGUAGES } from '../constants';

const IssuerLogo: React.FC<{ issuer: string }> = ({ issuer }) => {
  switch (issuer) {
    case 'microsoft':
      return (
        <svg viewBox="0 0 23 23" width="22" height="22" fill="currentColor">
          <rect x="1" y="1" width="10" height="10" />
          <rect x="12" y="1" width="10" height="10" />
          <rect x="1" y="12" width="10" height="10" />
          <rect x="12" y="12" width="10" height="10" />
        </svg>
      );
    case 'meta':
      return (
        <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
          <path d="M449.446 0C482.648 0 512 28.154 512 62.554v386.892C512 483.846 482.648 512 449.446 512H62.554C28.154 512 0 483.846 0 449.446V62.554C0 28.154 28.154 0 62.554 0h386.892zM183.842 228.367c-20.085 30.514-33.376 65.508-33.376 95.386 0 30.084 13.62 48.347 35.624 48.347 19.322 0 34.458-17.592 53.09-52.722l10.09-19.062 4.8-9.23c-13.87-25.788-24.588-53.624-38.543-75.955-12.96-20.745-24.262-33.37-40.73-33.37-5.758 0-10.455 2.168-15.26 5.776l-3.91 3.37 28.215 37.46zm141.65-46.477c-26.006 0-46.776 22.97-68.596 57.39l-5.368 8.556-5.09 8.35 8.776 16.464c18.492 34.116 37.834 67.782 63.356 67.782 23.478 0 39.782-20.304 39.782-54.478 0-36.152-14.242-76.378-33.952-99.07l-4.254-4.22c2.192 13.236 3.512 27.244 3.512 40.93 0 24.508-6.558 40.382-17.73 40.382-13.186 0-26.396-22.154-44.478-56.924l-3.088-5.972 3.344-5.482c15.382-24.87 28.028-38.42 42.332-38.42 3.352 0 6.504.626 9.534 1.832l4.336 2.008c-3.796-12.308-13.27-19.76-24.07-19.76l-2.188.118 2.108-.172-1.266-.314h14.51zm-141.65-3.316c-22.51 0-42.138 16.556-57.992 42.776L112.8 243.1c-17.538 30.156-27.768 63.564-27.768 93.774 0 40.032 21.052 66.232 55.77 66.232 28.17 0 50.564-18.408 73.752-55.538l7.362-12.062 6.688-11.358-8.24-15.396c-20.856-38.278-38.69-67.632-65.522-67.632z" />
        </svg>
      );
    case 'google':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      );
    default:
      return <i className="fas fa-medal"></i>;
  }
};

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
                  <IssuerLogo issuer={cert.issuer} />
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
