import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvUrl;
    link.download = 'cv-haykal-harahap.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero__content">
          {/* Profile Image with Circular frame & rotating text */}
          <div className="hero__image-wrapper reveal">
            {/* Rotating circular text */}
            <svg className="hero__rotating-text" viewBox="0 0 340 340">
              <defs>
                <path
                  id="circlePath"
                  d="M 170, 170 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                />
              </defs>
              <text>
                <textPath href="#circlePath">
                  COME ON LET'S TALK • FRONT-END DEVELOPER • LET'S BUILD TOGETHER •{' '}
                </textPath>
              </text>
            </svg>

            <div className="hero__image-frame">
              <img
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="hero__text reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for new opportunities
            </div>

            <h1 className="hero__name">
              {PERSONAL_INFO.name}
            </h1>

            <h2 className="hero__role">
              Software Engineer // Front-End Developer
            </h2>

            <p className="hero__summary">
              {PERSONAL_INFO.summary}
            </p>

            {/* Buttons */}
            <div className="hero__actions">
              <button
                onClick={handleDownloadCV}
                className="btn btn--primary"
                id="download-cv-btn"
              >
                <i className="fas fa-download"></i> Download CV
              </button>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                id="whatsapp-hero-btn"
              >
                <i className="fab fa-whatsapp"></i> Let's Talk
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero__socials">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
                id="social-github"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
                id="social-linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="hero__social-link"
                aria-label="Instagram"
                id="social-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hero__social-link"
                aria-label="Email"
                id="social-email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
