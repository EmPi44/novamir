import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <p className="text-sm font-medium tracking-widest uppercase text-surface-on-variant mb-16">Our Solution</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Description */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
              Novamir Platform
            </span>
          </h2>
          <p className="text-lg md:text-xl text-surface-on-variant leading-relaxed font-light max-w-lg">
            An agentic development environment that evolves the IDE into the agent-first era — with tab autocompletion, natural language commands, and synchronized control across your editor, terminal, and browser.
          </p>
          <ul className="flex flex-col gap-4 mt-2">
            {[
              'Context-aware AI agent built into the editor',
              'Cross-surface orchestration of development workflows',
              'Task-based monitoring with verification and trust-building',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-surface-on-variant font-light">
                <span className="material-symbols-outlined text-xl mt-0.5 opacity-60">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Image */}
        <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-surface-container shadow-2xl">
          <img
            src="https://picsum.photos/id/60/800/600"
            alt="Novamir Platform"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
