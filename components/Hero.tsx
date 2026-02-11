import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import { LiquidMetalCTA } from './LiquidMetalCTA';
import { RingParticlesCanvas, RingParticlesCanvasHandle } from './RingParticlesCanvas';
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

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<RingParticlesCanvasHandle>(null);
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

  // Pointer tracking for the particle ring
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rawX = e.clientX / window.innerWidth;
      const rawY = e.clientY / window.innerHeight;
      // Clamp movement to ±6% around center so the pattern stays focused
      const x = 50 + (rawX - 0.5) * 12;
      const y = 50 + (rawY - 0.5) * 12;
      canvasRef.current?.setPointerPosition(x, y);
    };

    const handlePointerLeave = () => {
      canvasRef.current?.resetPointerPosition();
    };

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <section
      id="welcome"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-32 md:pb-44"
    >
      {/* Marquee animation styles */}
      <style>{`
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

      {/* Canvas-based particle ring background (cross-browser) */}
      <RingParticlesCanvas
        ref={canvasRef}
        ringRadius={80}
        ringThickness={750}
        particleCount={140}
        particleRows={35}
        particleSize={1.4}
        particleColor="#121317"
        particleMinAlpha={0.06}
        particleMaxAlpha={0.7}
        seed={200}
        className="absolute inset-0 w-full h-full"
      />

      {/* White glow behind text for readability */}
      <div className="absolute inset-0 z-[5] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 75% 55% at 50% 45%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 55%, transparent 75%)',
      }} />

      <div className="z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-in">
        <h1 className="flex justify-center mb-8">
            <span className="sr-only">Novamir - AI Systems That Reclaim Your Time</span>
            <Logo className="h-12 w-auto md:h-16 text-primary select-none" aria-hidden="true" />
        </h1>

        <p className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-surface-on leading-[1.2]">
          We eliminated
          <br className="md:hidden" />
          {' '}
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
                      loading="eager"
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
