import React, { useState } from 'react';
import { Mail, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = ({ personal, social }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // En un portafolio estático, se puede integrar Formspree, EmailJS o simplemente mailto
      setTimeout(() => {
        window.location.href = `mailto:${personal.email.replace('mailto:', '')}?subject=Contacto desde Portfolio de ${formData.name}&body=${encodeURIComponent(formData.message + '\n\nDe: ' + formData.email)}`;
      }, 700);
    }
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} /> Contacto
          </div>
          <h2 className="section-title">
            ¿Tienes un proyecto en mente? <br />
            <span className="gradient-text">Trabajemos juntos</span>
          </h2>
          <p className="section-subtitle">
            Estoy disponible para roles full-time, proyectos freelance o colaboraciones técnicas.
          </p>
        </div>

        <div className="contact-grid">
          {/* Tarjeta de información directa */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Canales directos</h3>
            <p className="contact-info-text">
              Si prefieres escribirme directamente por correo o revisar mis perfiles en redes profesionales, puedes usar cualquiera de estos enlaces:
            </p>

            <div className="contact-methods">
              <a href={personal.email} className="contact-method-item">
                <div className="method-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="method-label">Correo Electrónico</span>
                  <span className="method-value">Escríbeme por email</span>
                </div>
              </a>

              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method-item">
                <div className="method-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">Conectemos en LinkedIn</span>
                </div>
              </a>

              <a href={social.github} target="_blank" rel="noopener noreferrer" className="contact-method-item">
                <div className="method-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <span className="method-label">GitHub</span>
                  <span className="method-value">Revisa mis repositorios</span>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>¡Mensaje listo para enviar!</h3>
                <p>Abriendo tu cliente de correo para enviar la consulta...</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Tu Nombre</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Tu Correo Electrónico</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tu Mensaje</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto, propuesta o consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Enviar Mensaje <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
