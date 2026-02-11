import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter-text';

export const TransitionSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Animation phases: type "Stop doing admin," → strikethrough → type "Start growing..." → badges → rest
  type Phase = 'idle' | 'typing-stop' | 'strikethrough' | 'typing-start' | 'badges' | 'rest';
  const [phase, setPhase] = useState<Phase>('idle');

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Kick off the sequence when section scrolls into view
  useEffect(() => {
    if (isInView && phase === 'idle') {
      setPhase('typing-stop');
    }
  }, [isInView, phase]);

  // After strikethrough animation completes, start typing second line
  useEffect(() => {
    if (phase === 'strikethrough') {
      const timer = setTimeout(() => setPhase('typing-start'), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // After badges are shown, reveal the rest
  useEffect(() => {
    if (phase === 'badges') {
      // Wait for all 3 badges to animate in (0.3s initial + 2*0.35s stagger + 0.7s duration ≈ 1.7s) + breathing room
      const timer = setTimeout(() => setPhase('rest'), 2200);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3 + i * 0.35,
      },
    }),
  };

  const keywords = [
    { text: "Grow revenue", icon: "trending_up" },
    { text: "Reduce manual work", icon: "auto_awesome" },
    { text: "Peace of mind", icon: "verified" },
  ];

  // Static version for reduced motion
  if (prefersReducedMotion) {
    return (
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-surface-on leading-tight tracking-tight">
            <span className="relative inline-block opacity-35">
              Stop doing admin,
              <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] md:h-[3px] bg-surface-on rounded-full" />
            </span>
            <br />
            <span className="font-bold">Start</span> growing your business.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {keywords.map((keyword) => (
              <span
                key={keyword.text}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium"
              >
                <span className="material-symbols-outlined text-lg">{keyword.icon}</span>
                {keyword.text}
              </span>
            ))}
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-surface-on tracking-tight">
            Here's how this looks in practice.
          </p>
          {/* Scroll hint arrows - stacked chevrons - static */}
          <div className="flex flex-col items-center pt-6" aria-hidden="true">
            {[0.7, 0.45, 0.22].map((opacity, i) => (
              <svg
                key={i}
                width="60"
                height="24"
                viewBox="0 0 60 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-surface-on"
                style={{ opacity, marginTop: i > 0 ? '-6px' : 0 }}
              >
                <path d="M8 8l22 10 22-10" />
              </svg>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-surface">
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-10"
      >
        {/* Main headline — phased animation sequence */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-surface-on leading-tight tracking-tight min-h-[2.4em]">
          {/* Phase 1: Type "Stop doing admin," */}
          {phase === 'typing-stop' && (
            <Typewriter
              text="Stop doing admin,"
              speed={50}
              cursor="|"
              onComplete={() => setPhase('strikethrough')}
            />
          )}

          {/* Phase 2+: Static "Stop doing admin," with strikethrough */}
          {phase !== 'idle' && phase !== 'typing-stop' && (
            <>
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.35 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Stop doing admin,
                <motion.span
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] md:h-[3px] bg-surface-on rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.span>
              <br />
            </>
          )}

          {/* Phase 3: Type "Start growing your business." */}
          {phase === 'typing-start' && (
            <Typewriter
              text="Start growing your business."
              speed={50}
              cursor="|"
              onComplete={() => setPhase('badges')}
            />
          )}

          {/* Phase 4+: Static second line */}
          {(phase === 'badges' || phase === 'rest') && (
            <span>
              <span className="font-bold">Start</span>{' growing your business.'}
            </span>
          )}
        </h2>

        {/* Keyword badges — appear after second line is typed */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 min-h-[48px]">
          {(phase === 'badges' || phase === 'rest') && keywords.map((keyword, index) => (
            <motion.span
              key={keyword.text}
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium shadow-[0_0_30px_6px_rgba(0,0,0,0.08)]"
            >
              <span className="material-symbols-outlined text-lg">{keyword.icon}</span>
              {keyword.text}
            </motion.span>
          ))}
        </div>

        {/* Lead-in text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={phase === 'rest' ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-surface-on tracking-tight pt-6"
        >
          Here's how this looks in practice.
        </motion.p>

        {/* Scroll hint arrows - stacked chevrons */}
        <motion.div
          className="flex flex-col items-center pt-6"
          initial={{ opacity: 0 }}
          animate={
            phase === 'rest'
              ? { opacity: 1, y: [0, 10, 0] }
              : { opacity: 0 }
          }
          transition={{
            opacity: { duration: 0.5, ease: "easeOut", delay: 1.2 },
            y: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: 1.2,
            },
          }}
          aria-hidden="true"
        >
          {[0.7, 0.45, 0.22].map((opacity, i) => (
            <svg
              key={i}
              width="80"
              height="28"
              viewBox="0 0 80 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-surface-on"
              style={{ opacity, marginTop: i > 0 ? '-8px' : 0 }}
            >
              <path d="M8 8l32 13 32-13" />
            </svg>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
