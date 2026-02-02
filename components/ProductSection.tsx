import React from 'react';

const icons = [
  'keyboard_return', 'keyboard_tab', 'merge', 'folder', 'deployed_code', 
  'dashboard_customize', 'commit', 'chat_add_on', 'device_hub', 'refresh', 
  'code', 'file_copy', 'code_blocks', 'keyboard_command_key', 'upload', 
  'terminal', 'swap_horiz', 'last_page', 'apps_outage', 'keyboard_option_key', 
  'recenter', 'power_settings_new', 'design_services', 'widgets'
];

const features = [
  {
    title: "An AI IDE Core",
    desc: "Novamir's Editor view offers tab autocompletion, natural language code commands, and a configurable, and context-aware configurable agent.",
    img: "https://picsum.photos/id/1/800/600"
  },
  {
    title: "Higher-level Abstractions",
    desc: "A more intuitive task-based approach to monitoring agent activity, presenting you with essential artifacts and verification results to build trust.",
    img: "https://picsum.photos/id/2/800/600"
  },
  {
    title: "Cross-surface Agents",
    desc: "Synchronized agentic control across your editor, terminal, and browser for powerful development workflows.",
    img: "https://picsum.photos/id/3/800/600"
  },
  {
    title: "User Feedback",
    desc: "Intuitively integrate feedback across surfaces and artifacts to guide and refine the agent’s work.",
    img: "https://picsum.photos/id/4/800/600"
  },
  {
    title: "An Agent-First Experience",
    desc: "Manage multiple agents at the same time, across any workspace, from one central mission control view.",
    img: "https://picsum.photos/id/5/800/600"
  }
];

export const ProductSection: React.FC = () => {
  return (
    <section id="product" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-8">
      <div className="mb-24 md:w-2/3 lg:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-8">
          <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
            Novamir is our agentic development platform, evolving the IDE into the agent-first era.
          </span>
        </h2>
      </div>

      {/* Floating Icons Strip */}
      <div className="w-full overflow-hidden mb-32 mask-linear-fade">
        <div className="flex gap-4 animate-slide-left w-max">
          {[...icons, ...icons].map((icon, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface-container flex items-center justify-center border border-surface-container-higher backdrop-blur-sm animate-wobble"
              style={{ animationDelay: `${i * -0.2}s` }}
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl text-surface-on-variant opacity-60">
                {icon}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
        {features.map((feature, idx) => (
          <div key={idx} className="group flex flex-col gap-6 sticky-card" style={{ top: `${(idx + 1) * 20}px` }}>
            <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-surface-container">
              <img 
                src={feature.img} 
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-normal mb-3 text-surface-on">{feature.title}</h3>
              <p className="text-lg text-surface-on-variant leading-relaxed font-light">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};