import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

import { ProductSection } from './components/ProductSection';
import { JourneySection } from './components/JourneySection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <JourneySection />
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;