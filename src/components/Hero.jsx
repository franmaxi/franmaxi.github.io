import { ArrowRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = ({ personal, social }) => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        
        {/* Glow ambient background sphere */}
        <div className="hero-ambient-glow" />

        {/* Main headline */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Construyendo soluciones de software <br />
            con código <span className="gradient-text">escalable y preciso</span>.
          </h1>
          
          <p className="hero-subtitle">
            Hola, soy <strong className="hero-name-highlight">{personal.name}</strong> — {personal.role}.
          </p>

          <p className="hero-bio-short">
            {personal.bio}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons-wrapper">
          <a href="#proyectos" className="btn btn-primary">
            Ver Proyectos <ArrowRight size={18} />
          </a>
          <a href="#contacto" className="btn btn-secondary">
            <Mail size={18} /> Contactar
          </a>
          {personal.cvUrl && (
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              title="Descargar Curriculum Vitae"
            >
              <Download size={18} /> CV
            </a>
          )}
        </div>

        {/* Social Icons Quick Access */}
        <div className="hero-social-links">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={social.email}
            className="social-icon-btn"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-number gradient-text">{personal.yearsExperience}</span>
            <span className="metric-label">Años de Desarrollo</span>
          </div>
          <div className="metric-card">
            <span className="metric-number gradient-text">{personal.completedProjects}</span>
            <span className="metric-label">Proyectos Completados</span>
          </div>
          <div className="metric-card">
            <span className="metric-number gradient-text">{personal.contributions}</span>
            <span className="metric-label">Contribuciones Git</span>
          </div>
        </div>

      </div>
    </section>
  );
};
