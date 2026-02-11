import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter-text';

export const TransitionSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [headlineComplete, setHeadlineComplete] = useState(false);
  const [badgesComplete, setBadgesComplete] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: i * 0.15
      },
    }),
  };

  const keywords = [
    { text: "Grow revenue", icon: "trending_up" },
    { text: "Reduce manual work", icon: "auto_awesome" },
    { text: "Peace of mind", icon: "verified" },
  ];

  // Trigger badges animation after small delay when headline completes
  useEffect(() => {
    if (headlineComplete) {
      const timer = setTimeout(() => setBadgesComplete(true), 300);
      return () => clearTimeout(timer);
    }
  }, [headlineComplete]);

  // Static version for reduced motion
  if (prefersReducedMotion) {
    return (
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-surface-on leading-tight tracking-tight">
            Stop doing admin,<br />Start growing your business.
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
        {/* Main headline with typewriter effect */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-surface-on leading-tight tracking-tight min-h-[2.4em] whitespace-pre-line">
          {isInView && (
            <Typewriter
              text={"Stop doing admin,\nStart growing your business."}
              speed={35}
              cursor="|"
              onComplete={() => setHeadlineComplete(true)}
            />
          )}
        </h2>

        {/* Keyword badges with black background */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 min-h-[48px]">
          {headlineComplete && keywords.map((keyword, index) => (
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

        {/* Lead-in text - more dominant */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={badgesComplete ? { opacity: 1, y: 0 } : {}}
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
            badgesComplete
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
