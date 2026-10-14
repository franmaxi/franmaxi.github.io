import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './components/components.css';

export function App() {
  const { personal, social, skills, projects, timeline } = portfolioData;

  return (
    <div className="portfolio-app">
      <Navbar personal={personal} social={social} />
      <main>
        <Hero personal={personal} social={social} />
        <About personal={personal} />
        <Skills skills={skills} />
        <Projects projects={projects} social={social} />
        <Timeline timeline={timeline} />
        <Contact personal={personal} social={social} />
      </main>
      <Footer personal={personal} />
    </div>
  );
}

export default App;
