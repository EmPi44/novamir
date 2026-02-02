import React, { useEffect, useRef, useState } from 'react';
import giniImg from '../assets/gini.png';

export const SolutionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" className="py-24 px-4 sm:px-8 max-w-[1400px] mx-auto overflow-hidden">
      <p className="text-sm font-medium tracking-widest uppercase text-surface-on-variant mb-16">Our Solution</p>

      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Description */}
        <div
          className={`flex flex-col gap-6 opacity-0 ${visible ? 'animate-slide-in-left' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
              Gini
            </span>
          </h2>
          <p className="text-lg md:text-xl text-surface-on-variant leading-relaxed font-light max-w-lg">
            Your AI-powered WhatsApp sales agent that turns conversations into conversions — qualifying leads, nurturing prospects, and closing deals around the clock.
          </p>
          <ul className="flex flex-col gap-4 mt-2">
            {[
              'Automated lead qualification via WhatsApp',
              '24/7 intelligent sales conversations',
              'Seamless handoff to your human team when needed',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-surface-on-variant font-light">
                <span className="material-symbols-outlined text-xl mt-0.5 opacity-60">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Image */}
        <div
          className={`flex items-center justify-center opacity-0 ${visible ? 'animate-slide-in-right' : ''}`}
          style={{ animationDelay: '0.15s' }}
        >
          <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-emerald-950 to-emerald-900 shadow-2xl">
            <img
              src={giniImg}
              alt="Gini — AI WhatsApp Sales Agent"
              className="w-full max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
