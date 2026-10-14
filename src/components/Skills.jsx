import React from 'react';
import { Cpu, Layers, Database, Wrench } from 'lucide-react';

export const Skills = ({ skills }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layers size={20} />;
      case 'Backend':
        return <Cpu size={20} />;
      case 'Bases de Datos & Cloud':
        return <Database size={20} />;
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
            El ecosistema técnico y tecnologías modernas que utilizo en el día a día para crear aplicaciones.
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
                {categoryGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
