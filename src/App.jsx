import React, { useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './components/components.css';

export function App() {
  const { personal, social, skills, projects } = portfolioData;

  useEffect(() => {
    document.title = "Franco Ibañez Portafolio";
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar personal={personal} social={social} />
      <main>
        <About personal={personal} social={social} />
        <Skills skills={skills} />
        <Projects projects={projects} social={social} />
        <Contact personal={personal} social={social} />
      </main>
      <Footer personal={personal} social={social} />
    </div>
  );
}

export default App;
