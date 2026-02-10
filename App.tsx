import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 text-gray-100 min-h-screen selection:bg-shopify selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;