import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

import { ProductSection } from './components/ProductSection';
import { DevelopersSection } from './components/DevelopersSection';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <DevelopersSection />
        <CallToAction />
      </main>
      
      <footer className="py-12 text-center text-surface-on-variant text-sm">
        <p>© {new Date().getFullYear()} Novamir. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;