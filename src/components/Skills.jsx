import React from 'react';
import { Cpu, Layers, Database, Code2, Network, GitBranch, Wrench } from 'lucide-react';

export const Skills = ({ skills }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layers size={20} />;
      case 'Backend & Lenguajes':
      case 'Backend':
        return <Cpu size={20} />;
      case 'Arquitectura & Servicios':
        return <Network size={20} />;
      case 'Bases de Datos':
      case 'Bases de Datos & Cloud':
        return <Database size={20} />;
      case 'Paradigmas de Programación':
      case 'Paradigmas & Fundamentos':
        return <Code2 size={20} />;
      case 'Control de Versiones & Herramientas':
      case 'Herramientas':
        return <GitBranch size={20} />;
      default:
        return <Wrench size={20} />;
    }
  };

  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} /> Stack Tecnológico
          </div>
          <h2 className="section-title">
            Habilidades & <span className="gradient-text">Herramientas</span>
          </h2>
          <p className="section-subtitle">
            Tecnologías, arquitectura de servicios, bases de datos y herramientas con las que desarrollo soluciones.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((categoryGroup, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(categoryGroup.category)}
                </div>
                <h3 className="category-title">{categoryGroup.category}</h3>
              </div>

              <div className="skill-badges-list">
                {categoryGroup.items.map((skill, sIdx) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  return (
                    <div key={sIdx} className="skill-pill">
                      <span className="skill-name">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
