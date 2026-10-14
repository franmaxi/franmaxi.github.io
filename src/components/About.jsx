import React from 'react';
import { User, Code2, Rocket, ShieldCheck, Terminal } from 'lucide-react';

export const About = ({ personal }) => {
  return (
    <section id="sobre-mi" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} /> Sobre Mí
          </div>
          <h2 className="section-title">
            Pasión por la tecnología y el <span className="gradient-text">código de calidad</span>
          </h2>
          <p className="section-subtitle">
            Combino atención al detalle visual con buenas prácticas de arquitectura para crear soluciones digitales completas.
          </p>
        </div>

        <div className="about-grid">
          {/* Columna izquierda: Descripción y pilares */}
          <div className="about-details">
            <h3 className="about-headline">
              Transformando ideas complejas en productos sencillos y funcionales.
            </h3>
            <p className="about-text">
              Comencé en el desarrollo de software motivado por la curiosidad de entender cómo funcionan los sistemas a gran escala. A lo largo de mi camino he trabajado tanto en la creación de interfaces dinámicas e intuitivas como en el diseño de APIs seguras y bases de datos eficientes.
            </p>
            <p className="about-text">
              Disfruto colaborar en equipos ágiles, aprender continuamente sobre nuevas herramientas del ecosistema y mantenerme al día con las mejores prácticas de la industria.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon-box">
                  <Code2 size={22} />
                </div>
                <div>
                  <h4 className="feature-title">Frontend Intuitivo</h4>
                  <p className="feature-desc">Interfaces rápidas, accesibles y totalmente responsivas.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <Rocket size={22} />
                </div>
                <div>
                  <h4 className="feature-title">Backend Escalable</h4>
                  <p className="feature-desc">APIs RESTful estructuradas y optimizadas para rendimiento.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="feature-title">Código Mantenible</h4>
                  <p className="feature-desc">Buenas prácticas, control de versiones Git y arquitectura modular.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Terminal interactiva / decorativa */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-filename">developer_profile.ts</span>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
{`const developer = {
  name: "${personal.name}",
  role: "${personal.role}",
  location: "${personal.location}",
  status: "Open to opportunities",
  skills: [
    "React", "Node.js", 
    "TypeScript", "Clean Code"
  ],
  passion: "Building resilient apps",
  hardWorker: true,
  currentFocus: "High-performance full-stack web"
};

// Ready to ship value to users
developer.collaborate();`}
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
