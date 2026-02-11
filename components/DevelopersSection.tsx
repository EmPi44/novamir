import React, { useRef } from 'react';

const cases = [
  {
    role: "Frontend Developer",
    desc: "Streamline UX development by leveraging browser-in-the-loop agents to automate repetitive tasks.",
    img: "https://picsum.photos/id/6/600/800"
  },
  {
    role: "Full stack Developer",
    desc: "Build production-ready applications with confidence with thoroughly designed artifacts and comprehensive verification tests.",
    img: "https://picsum.photos/id/7/600/800"
  },
  {
    role: "Enterprise Developer",
    desc: "Streamline operations and reduce context switching by orchestrating agents across workspaces.",
    img: "https://picsum.photos/id/8/600/800"
  }
];

export const DevelopersSection: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = window.innerWidth * 0.6;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="developers" className="py-24 border-t border-surface-container-higher">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-surface-on">Built for developers for the agent-first era</h2>
          <p className="text-lg text-surface-on-variant font-light leading-relaxed">
            Novamir is built for user trust, whether you're a professional developer working in a large enterprise codebase, a hobbyist vibe-coding in their spare time, or anyone in between.
          </p>
        </div>
        
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="p-3 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors" aria-label="Previous">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors" aria-label="Next">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto gap-6 px-4 sm:px-8 pb-12 snap-x snap-mandatory no-scrollbar"
        style={{ scrollPaddingInline: '2rem' }}
      >
        {cases.map((item, idx) => (
          <div key={idx} className="flex-none w-[85vw] sm:w-[75vw] md:w-[60vw] snap-start group">
            <figure className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-6">
              <img src={item.img} alt={item.role} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-3xl font-light tracking-wide">{item.role}</span>
              </div>
            </figure>
            <h3 className="text-2xl font-normal mb-2 text-surface-on">{item.role}</h3>
            <p className="text-lg text-surface-on-variant font-light mb-4 w-4/5">{item.desc}</p>
            <a href="#" className="inline-flex items-center gap-2 text-surface-on-variant hover:text-primary transition-colors group/link">
              <span className="font-medium">View case</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="flex-none w-8"></div>
      </div>
    </section>
  );
};