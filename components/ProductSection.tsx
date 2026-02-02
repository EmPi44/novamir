import React from 'react';

const products = [
  {
    title: "Gini",
    subtitle: "AI Outbound Agent",
    desc: "Your autonomous AI sales agent that handles outreach, follow-ups, and lead qualification around the clock — so your team can focus on closing.",
    img: "https://picsum.photos/id/1/800/600",
    icon: "smart_toy",
  },
  {
    title: "Henry",
    subtitle: "AI Inbound Assistant",
    desc: "Intelligent customer service that understands context, resolves inquiries instantly, and escalates only when it matters. Always on, always helpful.",
    img: "https://picsum.photos/id/2/800/600",
    icon: "support_agent",
  },
  {
    title: "Missions of Honor Platform",
    subtitle: "Non-Profit Collaboration",
    desc: "A purpose-built collaboration platform connecting veterans, volunteers, and organizations to coordinate missions and create lasting impact together.",
    img: "https://picsum.photos/id/3/800/600",
    icon: "diversity_3",
  },
  {
    title: "Gini Command Center",
    subtitle: "Unified Operations Hub",
    desc: "Gini meets the platform. Monitor all AI agents, track performance, and manage workflows from one central command center — full visibility, total control.",
    img: "https://picsum.photos/id/4/800/600",
    icon: "hub",
  },
];

export const ProductSection: React.FC = () => {
  return (
    <section id="product" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-8">
      {/* Products — alternating image left/right */}
      <div className="flex flex-col gap-24 lg:gap-36">
        {products.map((product, idx) => {
          const imageRight = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`group flex flex-col ${imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-surface-on-variant">{product.icon}</span>
                  <span className="text-sm font-medium tracking-widest uppercase text-surface-on-variant">{product.subtitle}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium mb-5 text-surface-on tracking-tight">{product.title}</h3>
                <p className="text-lg text-surface-on-variant leading-relaxed font-light">{product.desc}</p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-surface-container">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};