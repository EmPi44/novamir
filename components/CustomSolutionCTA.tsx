import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter-text';

export const CustomSolutionCTA: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [headlineComplete, setHeadlineComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <section className="py-20 md:py-28" aria-labelledby="custom-solution-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2
            id="custom-solution-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-surface-on leading-tight tracking-tight"
          >
            Every business runs differently.
          </h2>
          <p className="text-lg md:text-xl text-surface-on-variant font-light leading-relaxed max-w-2xl mx-auto">
            Tell us where you want to be in 3 months - we'll build the system that gets you there. Faster & with more peace of mind.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-surface-on text-surface px-6 py-3 rounded-full text-sm font-semibold"
          >
            Let's Design Yours
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      aria-labelledby="custom-solution-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        {/* Typewriter headline */}
        <h2
          id="custom-solution-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-surface-on leading-tight tracking-tight min-h-[1.4em]"
        >
          {isInView && !headlineComplete && (
            <Typewriter
              text="Every business runs differently."
              speed={35}
              cursor="|"
              onComplete={() => setHeadlineComplete(true)}
            />
          )}
          {headlineComplete && 'Every business runs differently.'}
        </h2>

        {/* Body copy — fades in after typewriter finishes */}
        <motion.p
          className="text-lg md:text-xl text-surface-on-variant font-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={headlineComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Tell us where you want to be in 3 months - we'll build the system that gets you there. Faster & with more peace of mind.
        </motion.p>

        {/* CTA button */}
        <motion.a
          href="#booking"
          className="inline-flex items-center gap-2 bg-surface-on text-surface px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={headlineComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Let's Design Yours
        </motion.a>
      </div>
    </section>
  );
};
