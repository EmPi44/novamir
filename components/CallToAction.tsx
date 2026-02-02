import React from 'react';
import { LiquidMetalCTA } from './LiquidMetalCTA';

export const CallToAction: React.FC = () => {
  return (
    <>
      <section id="who" className="py-24 max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-12 text-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-light text-surface-on">
            For developers<br/>
            <span className="text-surface-on-variant text-2xl md:text-3xl block mt-2">Achieve new heights</span>
          </h3>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all">
            Book a Call
          </button>
        </div>
        
        <div className="w-px h-32 bg-surface-container-higher hidden md:block"></div>
        
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-light text-surface-on">
            For organizations<br/>
            <span className="text-surface-on-variant text-2xl md:text-3xl block mt-2">Level up your entire team</span>
          </h3>
          <button className="bg-surface-container text-surface-on px-8 py-3 rounded-full font-medium hover:bg-surface-container-high transition-all">
            Notify me
          </button>
        </div>
      </section>

      <section id="beforeyougo" className="px-4 pb-24 max-w-[1400px] mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-surface-on mb-4">Novamir</h2>
            <p className="text-xl text-surface-on-variant">The future of development is liquid.</p>
        </div>
        
        {/* Replaces the old blue card with the requested design */}
        <LiquidMetalCTA />
      </section>
    </>
  );
};