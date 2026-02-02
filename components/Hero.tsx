import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';

declare global {
  namespace CSS {
    namespace paintWorklet {
      function addModule(url: string): void;
    }
  }
}

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [houdiniReady, setHoudiniReady] = useState(false);

  useEffect(() => {
    // Initialize Houdini Paint Worklet
    if ('paintWorklet' in CSS) {
      try {
        CSS.paintWorklet.addModule('https://unpkg.com/css-houdini-ringparticles/dist/ringparticles.js');
        setHoudiniReady(true);
      } catch (e) {
        console.warn('Houdini worklet failed to load', e);
      }
    }

    const el = heroRef.current;
    if (!el) return;

    let isInteractive = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (!isInteractive) {
        el.classList.add('interactive');
        isInteractive = true;
      }
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      el.style.setProperty('--ring-x', x.toString());
      el.style.setProperty('--ring-y', y.toString());
      el.style.setProperty('--ring-interactive', '1');
    };

    const handlePointerLeave = () => {
      el.classList.remove('interactive');
      isInteractive = false;
      el.style.setProperty('--ring-x', '50');
      el.style.setProperty('--ring-y', '50');
      el.style.setProperty('--ring-interactive', '0');
    };

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  // Inline styles for the specific Houdini custom properties and fallback
  const heroStyle: React.CSSProperties = {
    // Custom properties for the Houdini worklet
    // @ts-ignore
    '--ring-radius': '100',
    '--ring-thickness': '600',
    '--particle-count': '80',
    '--particle-rows': '25',
    '--particle-size': '2',
    '--particle-color': '#121317', // Navy-ish/Black
    '--particle-min-alpha': '0.1',
    '--particle-max-alpha': '1.0',
    '--seed': '200',
    backgroundImage: houdiniReady ? 'paint(ring-particles)' : 'none',
  };

  return (
    <section 
      id="welcome" 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      style={heroStyle}
    >
      {/* Animation Definitions for standard CSS */}
      <style>{`
        @keyframes ripple { 0% { --animation-tick: 0; } 100% { --animation-tick: 1; } }
        @keyframes ring { 0% { --ring-radius: 150; } 100% { --ring-radius: 250; } }
        #welcome {
          animation: ripple 6s linear infinite, ring 6s ease-in-out infinite alternate;
          transition: --ring-x 3s ease, --ring-y 3s ease;
        }
      `}</style>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="flex justify-center mb-8">
            <span className="sr-only">Novamir</span>
            <Logo className="h-12 w-auto md:h-16 text-primary" />
        </h1>
        
        <p className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-surface-on leading-[0.9]">
          Experience liftoff
          <span className="block text-2xl md:text-3xl mt-4 font-normal text-surface-on-variant">
            with the next-generation IDE
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">keyboard_command_key</span>
            <span>Download for macOS</span>
          </button>
          <button className="flex items-center gap-2 px-8 py-4 rounded-full text-lg font-medium text-surface-on bg-surface-container-high border border-transparent hover:bg-surface-container-highest transition-colors">
            Explore use cases
          </button>
        </div>
      </div>
    </section>
  );
};