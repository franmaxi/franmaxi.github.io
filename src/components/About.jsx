import React from 'react';
import { User, Server, Database, Users, Mail, ArrowRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import profileImg from '../assets/profile.jpg';

export const About = ({ personal, social }) => {
  return (
    <section id="sobre-mi" className="section about-section">
      <div className="container">
        
        <div className="about-intro-grid">
          {/* Foto de perfil */}
          <div className="about-photo-wrapper">
            <div className="about-photo-glow" />
            <div className="about-photo-container">
              <img
                src={profileImg}
                alt={personal?.name || 'Franco Ibañez'}
                className="about-profile-img"
              />
            </div>
          </div>

          {/* Información y presentación */}
          <div className="about-intro-content">
            <div className="section-tag">
              <User size={14} /> Sobre Mí
            </div>
            
            <h1 className="about-main-name">
              Hola, soy <span className="gradient-text">{personal?.name || 'Franco Ibañez'}</span>
            </h1>

            <p className="about-main-role">
              {personal?.role || 'Estudiante de Ingeniería en Sistemas | Backend & Arquitectura de Software'}
            </p>

            <p className="about-text">
              Estudiante de <strong>Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN)</strong>, finalizando actualmente el 3er año de la carrera. Me apasiona el diseño de arquitectura de servicios, el desarrollo backend y las bases de datos.
            </p>

            <p className="about-text">
              Motivado por el aprendizaje continuo y el crecimiento dentro del ecosistema IT, buscando profundizar conocimientos para aplicarlos en desafíos prácticos. Me caracterizo por ser organizado, detallista y comprometido con la calidad. Disfruto el trabajo en equipo y me desenvuelvo con naturalidad en roles de liderazgo, aportando comunicación clara, actitud empática y una mirada resolutiva.
            </p>

            <div className="about-actions-row">
              <a href="#proyectos" className="btn btn-primary">
                Ver Proyectos <ArrowRight size={16} />
              </a>
              <a
                href={personal?.cvUrl || "/Franco_Ibanez_CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Ver Curriculum Vitae de Franco Ibañez"
              >
                <FileText size={16} /> Ver CV
              </a>
              <a href="#contacto" className="btn btn-secondary">
                <Mail size={16} /> Contactar
              </a>
              {social?.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {social?.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Pilares técnicos y metodológicos */}
        <div className="about-pillars-grid">
          <div className="feature-item">
            <div className="feature-icon-box">
              <Server size={22} />
            </div>
            <div>
              <h4 className="feature-title">Backend & Arquitectura</h4>
              <p className="feature-desc">Microservicios, APIs RESTful, RabbitMQ y arquitecturas modulares.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Database size={22} />
            </div>
            <div>
              <h4 className="feature-title">Bases de Datos</h4>
              <p className="feature-desc">Modelado estructurado y consultas en MongoDB, SQL Server y MySQL.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Users size={22} />
            </div>
            <div>
              <h4 className="feature-title">Liderazgo & Trabajo en Equipo</h4>
              <p className="feature-desc">Comunicación clara, enfoque en el detalle, empatía y visión resolutiva.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
