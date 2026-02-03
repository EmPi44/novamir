import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import { LiquidMetalCTA } from './LiquidMetalCTA';
import resapassLogo from '../assets/logos/resapass.png';
import dronicleLogo from '../assets/logos/dronicle.png';
import umamiCommsLogo from '../assets/logos/umami-comms.jpeg';
import podsAndSpicesLogo from '../assets/logos/pods-and-spices.jpg';
import missionsOfHonorLogo from '../assets/logos/missions-of-honor.png';

const clients = [
  { name: 'Resapass', logo: resapassLogo },
  { name: 'Dronicle', logo: dronicleLogo },
  { name: 'Umami Comms', logo: umamiCommsLogo },
  { name: 'Pods & Spices', logo: podsAndSpicesLogo },
  { name: 'Missions of Honor', logo: missionsOfHonorLogo },
];

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
  const [count, setCount] = useState(0);

  // Count-up animation for the hours number
  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / 2200, 1);
      // Ease-out cubic — fast start, satisfying slowdown at the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 10000));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, 400);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, []);

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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-32 md:pb-44"
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
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in">
        <h1 className="flex justify-center mb-8">
            <span className="sr-only">Novamir</span>
            <Logo className="h-12 w-auto md:h-16 text-primary" />
        </h1>
        
        <p className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-surface-on leading-[1.2]">
          We eliminated{' '}
          <span className="inline-block bg-black text-white px-3 py-0.5 md:px-5 md:py-1 rounded-xl tabular-nums font-bold shadow-[0_0_40px_8px_rgba(255,255,255,0.08)]">
            {count.toLocaleString()}+ h
          </span>
          {' '}of manual work
          <br />
          <span className="text-surface-on-variant">with scalable AI systems.</span>
          <span className="block text-xl md:text-2xl mt-6 font-normal text-surface-on-variant">
            Your hours reclaimed for revenue, customers, and core decisions.
          </span>
        </p>

        <div className="mt-12">
          <LiquidMetalCTA
            variant="hero"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>

      {/* Client logo marquee at bottom of hero */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <p className="flex items-center justify-center gap-3 text-xs font-medium tracking-widest uppercase text-surface-on-variant mb-4">
          <span>Trusted by</span>
          <span className="w-px h-3.5 bg-current opacity-30"></span>
          <span>In collaboration with Genie AI Solutions</span>
        </p>
        <div className="w-full overflow-hidden marquee-mask">
          <div className="animate-marquee flex w-max">
            {[0, 1, 2, 3].map((setIndex) => (
              <div
                key={setIndex}
                className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12"
              >
                {clients.map((client) => (
                  <div
                    key={`${client.name}-${setIndex}`}
                    className="flex-shrink-0 flex items-center justify-center h-10 md:h-14"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto max-w-[140px] md:max-w-[180px] object-contain"
                      style={{
                        filter: 'grayscale(100%)',
                        opacity: 0.8,
                      }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};