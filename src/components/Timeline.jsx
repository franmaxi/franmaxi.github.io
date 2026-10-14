import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Timeline = ({ timeline }) => {
  return (
    <section id="trayectoria" className="section timeline-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} /> Experiencia & Formación
          </div>
          <h2 className="section-title">
            Mi <span className="gradient-text">Trayectoria</span>
          </h2>
          <p className="section-subtitle">
            Un recorrido por mi experiencia práctica, proyectos y formación continua en desarrollo de software.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-list">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot" />
                </div>
                
                <div className="timeline-card">
                  <div className="timeline-badge">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
