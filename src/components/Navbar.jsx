import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code2 } from 'lucide-react';

export const Navbar = ({ personal, social }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <a href="#inicio" className="brand-logo">
          <div className="logo-icon-box">
            <Code2 size={20} className="logo-icon" />
          </div>
          <span className="brand-name">
            dev<span className="brand-accent">.portfolio</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-item">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contacto" className="btn btn-primary nav-contact-btn">
            Hablemos
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="btn btn-primary mobile-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
