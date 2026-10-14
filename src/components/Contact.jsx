import React from 'react';
import { Mail, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = ({ personal, social }) => {
  const contactLinks = [
    {
      label: 'LinkedIn',
      value: 'franco-ibañez',
      fullUrl: 'linkedin.com/in/franco-iba%C3%B1ez',
      href: social?.linkedin || 'https://www.linkedin.com/in/franco-iba%C3%B1ez/',
      icon: <LinkedinIcon size={24} />,
      isExternal: true,
    },
    {
      label: 'GitHub',
      value: 'franmaxi',
      fullUrl: 'github.com/franmaxi',
      href: social?.github || 'https://github.com/franmaxi',
      icon: <GithubIcon size={24} />,
      isExternal: true,
    },
    {
      label: 'Correo Electrónico',
      value: 'francoiba038@gmail.com',
      fullUrl: 'francoiba038@gmail.com',
      href: personal?.email || 'mailto:francoiba038@gmail.com',
      icon: <Mail size={24} />,
      isExternal: false,
    },
  ];

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
            Estoy disponible para nuevas oportunidades,
            puedes contactarme directamente a través de cualquiera de mis canales:
          </p>
        </div>

        <div className="contact-channels-grid">
          {contactLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="contact-channel-card"
            >
              <div className="method-icon">
                {item.icon}
              </div>
              <div className="channel-details">
                <span className="method-label">{item.label}</span>
                <span className="method-value">{item.value}</span>
              </div>
              <div className="channel-action">
                <span>{item.isExternal ? 'Visitar perfil' : 'Enviar correo'}</span>
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
