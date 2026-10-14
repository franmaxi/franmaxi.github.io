import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = ({ personal, social }) => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main-grid">
          {/* Columna 1: Nombre y biografía */}
          <div className="footer-col footer-col-about">
            <h3 className="footer-col-title">{personal?.name || 'Franco Ibañez'}</h3>
            <p className="footer-col-text">
              Estudiante de Ingeniería en Sistemas de Información (UTN) apasionado por la arquitectura de software, desarrollo backend y bases de datos.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="footer-col footer-col-nav">
            <h3 className="footer-col-title">Navegación</h3>
            <ul className="footer-nav-list">
              <li>
                <a href="#sobre-mi" className="footer-link">Sobre mí</a>
              </li>
              <li>
                <a href="#habilidades" className="footer-link">Habilidades</a>
              </li>
              <li>
                <a href="#proyectos" className="footer-link">Proyectos</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">Contacto</h3>
            <div className="footer-contact-list">
              <a
                href={personal?.email || 'mailto:francoiba038@gmail.com'}
                className="footer-contact-item"
              >
                <Mail size={16} className="footer-item-icon" />
                <span>francoiba038@gmail.com</span>
              </a>

              {social?.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <LinkedinIcon size={16} className="footer-item-icon" />
                  <span>linkedin.com/in/franco-ibañez</span>
                </a>
              )}

              {social?.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <GithubIcon size={16} className="footer-item-icon" />
                  <span>github.com/franmaxi</span>
                </a>
              )}

              <div className="footer-contact-item static">
                <MapPin size={16} className="footer-item-icon" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea inferior de copyright */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personal?.name || 'Franco Ibañez'}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
