import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-icon-box">
              <Code2 size={20} className="logo-icon" />
            </div>
            <span className="brand-name">
              {personal.name} <span className="brand-accent">/ Dev</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            title="Volver arriba"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personal.name}. Diseñado & Desarrollado con React.
          </p>
          <p className="footer-made-with">
            Construido con <Heart size={14} className="heart-icon" /> y código limpio.
          </p>
        </div>
      </div>
    </footer>
  );
};
