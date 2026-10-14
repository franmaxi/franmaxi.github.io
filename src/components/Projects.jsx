import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects = ({ projects, social }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Portafolio de Trabajo
          </div>
          <h2 className="section-title">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Una selección de aplicaciones web y proyectos que he desarrollado recientemente.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            <Sparkles size={14} /> Destacados ({projects.filter(p => p.featured).length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <div className="project-overlay-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        title="Ver Código en GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        title="Ver Demo en Vivo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GithubIcon size={16} /> Código
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary-link"
                    >
                      <ExternalLink size={16} /> Demo En Vivo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Callout to GitHub */}
        <div className="more-projects-box">
          <p>¿Buscas explorar más de mi código y contribuciones?</p>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={18} /> Explorar todos mis repositorios en GitHub
          </a>
        </div>

      </div>
    </section>
  );
};
