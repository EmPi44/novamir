import React from 'react';
import { AnimatedTabs, type Tab } from '@/components/ui/animated-tabs';
import giniImg from '../assets/gini.png';

interface Product {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  icon: string;
  tabs: Tab[];
  transparent?: boolean;
}

const products: Product[] = [
  {
    title: "Gini",
    subtitle: "AI Outbound Agent",
    desc: "Your autonomous AI sales agent that handles outreach, follow-ups, and lead qualification around the clock — so your team can focus on closing.",
    img: giniImg,
    icon: "smart_toy",
    transparent: true,
    tabs: [
      {
        id: "gini-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">trending_up</span>
              <span className="text-sm font-semibold text-surface-on">3x more qualified leads</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Companies using Gini see a 3x increase in qualified pipeline within the first 90 days, with 60% reduction in cost per lead.
            </p>
          </div>
        ),
      },
      {
        id: "gini-feature",
        label: "Feature",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">auto_awesome</span>
              <span className="text-sm font-semibold text-surface-on">Multi-channel sequencing</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Automated email, LinkedIn, and SMS outreach with AI-crafted personalization. Smart scheduling adapts to each prospect's timezone and engagement patterns.
            </p>
          </div>
        ),
      },
      {
        id: "gini-case",
        label: "Case Study",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">menu_book</span>
              <span className="text-sm font-semibold text-surface-on">SaaS Series A — 147% pipeline growth</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              A B2B SaaS startup deployed Gini to replace manual SDR outreach. Within 60 days they booked 3x more demos while cutting outbound costs by half.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Henry",
    subtitle: "AI Inbound Assistant",
    desc: "Intelligent customer service that understands context, resolves inquiries instantly, and escalates only when it matters. Always on, always helpful.",
    img: "https://picsum.photos/id/2/800/600",
    icon: "support_agent",
    tabs: [
      {
        id: "henry-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">schedule</span>
              <span className="text-sm font-semibold text-surface-on">85% faster resolution times</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Henry resolves most inquiries instantly, reducing average handle time from 12 minutes to under 2 — while lifting customer satisfaction scores by 40%.
            </p>
          </div>
        ),
      },
      {
        id: "henry-feature",
        label: "Feature",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">psychology</span>
              <span className="text-sm font-semibold text-surface-on">Context-aware conversations</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Henry remembers past interactions, reads order history, and understands nuanced questions. Intelligent escalation routes complex issues to the right human agent with full context.
            </p>
          </div>
        ),
      },
      {
        id: "henry-case",
        label: "Case Study",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">menu_book</span>
              <span className="text-sm font-semibold text-surface-on">E-commerce brand — 70% ticket deflection</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              A DTC brand with 50K+ monthly support tickets deployed Henry and deflected 70% of volume within the first month, saving $120K annually in support costs.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Missions of Honor Platform",
    subtitle: "Non-Profit Collaboration",
    desc: "A purpose-built collaboration platform connecting veterans, volunteers, and organizations to coordinate missions and create lasting impact together.",
    img: "https://picsum.photos/id/3/800/600",
    icon: "diversity_3",
    tabs: [
      {
        id: "moh-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">groups</span>
              <span className="text-sm font-semibold text-surface-on">5x volunteer engagement</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Organizations using the platform see 5x higher volunteer retention and a 200% increase in coordinated mission completions year over year.
            </p>
          </div>
        ),
      },
      {
        id: "moh-feature",
        label: "Feature",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">hub</span>
              <span className="text-sm font-semibold text-surface-on">Mission coordination hub</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Centralized dashboards for mission planning, volunteer matching, resource allocation, and real-time progress tracking — all in one secure workspace.
            </p>
          </div>
        ),
      },
      {
        id: "moh-case",
        label: "Case Study",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">menu_book</span>
              <span className="text-sm font-semibold text-surface-on">Veterans org — 12 states connected</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              A national veterans organization unified chapters across 12 states on the platform, coordinating 300+ missions in a single year with 95% completion rate.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Gini Command Center",
    subtitle: "Unified Operations Hub",
    desc: "Your autonomous AI sales agent that handles outreach, follow-ups, and lead qualification around the clock — so your team can focus on closing.",
    img: "https://picsum.photos/id/1/800/600",
    icon: "hub",
    tabs: [
      {
        id: "gcc-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">visibility</span>
              <span className="text-sm font-semibold text-surface-on">Complete operational visibility</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Teams running multiple agents report 50% fewer operational blind spots and 30% faster issue resolution through centralized monitoring and alerts.
            </p>
          </div>
        ),
      },
      {
        id: "gcc-feature",
        label: "Feature",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">dashboard</span>
              <span className="text-sm font-semibold text-surface-on">Real-time agent dashboards</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Live performance metrics, conversation analytics, and workflow status for every deployed agent. Set custom alerts and automate escalation rules from a single pane.
            </p>
          </div>
        ),
      },
      {
        id: "gcc-case",
        label: "Case Study",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">menu_book</span>
              <span className="text-sm font-semibold text-surface-on">Enterprise — 8 agents, 1 dashboard</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              A mid-market company managing 8 AI agents across sales, support, and ops consolidated everything into the Command Center — reducing management overhead by 60%.
            </p>
          </div>
        ),
      },
    ],
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
                <p className="text-lg text-surface-on-variant leading-relaxed font-light mb-6">{product.desc}</p>

                <AnimatedTabs
                  tabs={product.tabs}
                  defaultTab={product.tabs[0].id}
                  className="max-w-full"
                />
              </div>

              {/* Image */}
              <div className="flex-1 w-full flex items-center justify-center">
                {product.transparent ? (
                  <div className="relative flex items-center justify-center">
                    {/* Green glow behind image */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[110%] h-[110%] rounded-full bg-emerald-500/60 blur-[150px] transition-all duration-700 group-hover:bg-emerald-400/70 group-hover:blur-[180px]" />
                    </div>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="relative z-10 w-full max-w-md object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-surface-container">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
