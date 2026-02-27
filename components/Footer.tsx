import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top section */}
        <div className="footer__top">
          <div>
            <h2 className="footer__headline">
              Let's build something great.
            </h2>
            <p className="footer__location">
              Currently based in {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="footer__actions">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn btn--outline"
              id="footer-email-btn"
            >
              <i className="fas fa-envelope"></i> Email Me
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              id="footer-contact-btn"
            >
              <i className="fab fa-whatsapp"></i> Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer__bottom">
          <div className="footer__copy">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="footer__socials">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
              id="footer-github"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
              id="footer-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
              id="footer-instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
