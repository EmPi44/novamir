import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AnimatedTabs, type Tab } from '@/components/ui/animated-tabs';
import { FeatureSectionWithHover, type SkillFeature } from '@/components/ui/feature-section-hover';
import {
  IconTargetArrow,
  IconRepeat,
  IconCalendarEvent,
  IconMessageQuestion,
  IconBellRinging,
  IconAddressBook,
  IconBolt,
  IconLanguage,
  IconUserHeart,
  IconInfinity,
  IconTrendingUp,
} from '@tabler/icons-react';
import giniImg from '../assets/gini.png';
import henryImg from '../assets/henry.png';
import mohImg from '../assets/moh.png';
import gccImg from '../assets/gcc.png';

// Gini Hard Skills
const giniHardSkills: SkillFeature[] = [
  {
    title: "Lead Qualification",
    description: "Automatically scores and qualifies leads based on engagement and buying signals.",
    icon: <IconTargetArrow className="w-5 h-5" />,
  },
  {
    title: "Follow-Up",
    description: "Never lets a lead go cold with intelligent, timely follow-up sequences.",
    icon: <IconRepeat className="w-5 h-5" />,
  },
  {
    title: "Meeting Scheduling",
    description: "Books meetings directly on your calendar with timezone-aware availability.",
    icon: <IconCalendarEvent className="w-5 h-5" />,
  },
  {
    title: "Knowledge Base Q&A",
    description: "Answers product questions instantly from your docs and FAQs.",
    icon: <IconMessageQuestion className="w-5 h-5" />,
  },
  {
    title: "Team Notification",
    description: "Alerts your sales team when high-value leads need human attention.",
    icon: <IconBellRinging className="w-5 h-5" />,
  },
  {
    title: "Manage CRM",
    description: "Automatically logs conversations and updates contact records.",
    icon: <IconAddressBook className="w-5 h-5" />,
  },
];

// Gini Soft Skills
const giniSoftSkills: SkillFeature[] = [
  {
    title: "Instant Response",
    description: "Responds within seconds, 24/7, so leads never wait.",
    icon: <IconBolt className="w-5 h-5" />,
  },
  {
    title: "Multi-Lingual",
    description: "Communicates fluently in 50+ languages to reach global audiences.",
    icon: <IconLanguage className="w-5 h-5" />,
  },
  {
    title: "Personalized Communication",
    description: "Tailors every message to the prospect's industry, role, and context.",
    icon: <IconUserHeart className="w-5 h-5" />,
  },
  {
    title: "Persistent Engagement",
    description: "Follows up consistently without being pushy.",
    icon: <IconInfinity className="w-5 h-5" />,
  },
  {
    title: "Scales with your needs",
    description: "Handles 10 or 10,000 conversations without quality degradation.",
    icon: <IconTrendingUp className="w-5 h-5" />,
  },
];

interface Product {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  icon: string;
  tabs: Tab[];
  transparent?: boolean;
  glowColor?: string;
  imgMaxWidth?: string;
}

const products: Product[] = [
  {
    title: "Gini",
    subtitle: "AI Sales Assistant - WhatsApp",
    desc: "Your autonomous AI sales agent that handles outreach, follow-ups, and lead qualification around the clock - so your team can focus on closing.",
    img: giniImg,
    icon: "smart_toy",
    transparent: true,
    glowColor: "bg-emerald-500/60",
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
        label: "Skills",
        content: (
          <AnimatedTabs
            layoutId="gini-skills-subtabs"
            defaultTab="hard-skills"
            className="max-w-full"
            tabs={[
              {
                id: "hard-skills",
                label: "Hard Skills",
                content: (
                  <FeatureSectionWithHover
                    features={giniHardSkills}
                    accentColor="bg-emerald-500"
                    hoverGradient="from-emerald-100 dark:from-emerald-900/30"
                  />
                ),
              },
              {
                id: "soft-skills",
                label: "Soft Skills",
                content: (
                  <FeatureSectionWithHover
                    features={giniSoftSkills}
                    accentColor="bg-emerald-500"
                    hoverGradient="from-emerald-100 dark:from-emerald-900/30"
                  />
                ),
              },
            ]}
          />
        ),
      },
      {
        id: "gini-case",
        label: "Case Study",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">menu_book</span>
              <span className="text-sm font-semibold text-surface-on">SaaS Series A - 147% pipeline growth</span>
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
    subtitle: "AI Customer Service - Voice Agent",
    desc: "Intelligent customer service that understands context, resolves inquiries instantly, and escalates only when it matters. Always on, always helpful.",
    img: henryImg,
    icon: "support_agent",
    transparent: true,
    glowColor: "bg-blue-500/60",
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
              Henry resolves most inquiries instantly, reducing average handle time from 12 minutes to under 2 - while lifting customer satisfaction scores by 40%.
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
              <span className="text-sm font-semibold text-surface-on">E-commerce brand - 70% ticket deflection</span>
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
    img: mohImg,
    icon: "diversity_3",
    transparent: true,
    glowColor: "bg-amber-500/50",
    imgMaxWidth: "max-w-2xl",
    tabs: [
      {
        id: "moh-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-surface-on">groups</span>
              <span className="text-sm font-semibold text-surface-on">80% less admin time</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              Organizations using the platform cut administrative overhead by up to 80%, freeing teams to spend more time on the missions that matter to veterans.
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
              Centralized dashboards for mission planning, volunteer matching, resource allocation, and real-time progress tracking - all in one secure workspace.
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
              <span className="text-sm font-semibold text-surface-on">E-veterans org - first missions launched</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              A veterans organization started managing their first missions, switching from paper notes and friction-filled databases to the new platform.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Gini Command Center",
    subtitle: "Unified Operations Hub",
    desc: "Your autonomous AI sales agent that handles outreach, follow-ups, and lead qualification around the clock - so your team can focus on closing.",
    img: gccImg,
    icon: "hub",
    transparent: true,
    glowColor: "bg-amber-500/50",
    imgMaxWidth: "max-w-2xl",
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
              <span className="text-sm font-semibold text-surface-on">Enterprise - 8 agents, 1 dashboard</span>
            </div>
            <p className="text-sm text-surface-on-variant leading-relaxed">
              A mid-market company managing 8 AI agents across sales, support, and ops consolidated everything into the Command Center - reducing management overhead by 60%.
            </p>
          </div>
        ),
      },
    ],
  },
];

const tiltSpring = { damping: 30, stiffness: 80, mass: 0.8 };
const glowSpring = { damping: 40, stiffness: 60, mass: 1 };

function TiltImage({ src, alt, glowColor = "bg-emerald-500/60", maxWidth = "max-w-md" }: { src: string; alt: string; glowColor?: string; maxWidth?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), tiltSpring);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), tiltSpring);
  const scale = useSpring(1, tiltSpring);
  const glowX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), glowSpring);
  const glowY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), glowSpring);

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
    scale.set(1.03);
  }

  function handleLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale, perspective: 1000 }}
      className="relative flex items-center justify-center [transform-style:preserve-3d] will-change-transform"
    >
      {/* Glow that follows mouse */}
      <motion.div
        className={`absolute w-[110%] h-[110%] rounded-full ${glowColor} blur-[150px] pointer-events-none`}
        style={{ x: glowX, y: glowY }}
      />
      <img
        src={src}
        alt={alt}
        className={`relative z-10 w-full ${maxWidth} object-contain`}
        loading="lazy"
      />
    </motion.div>
  );
}

export const ProductSection: React.FC = () => {
  return (
    <section id="product" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-8 overflow-hidden">
      {/* Products - alternating image left/right */}
      <div className="flex flex-col gap-24 lg:gap-36">
        {products.map((product, idx) => {
          const imageRight = idx % 2 === 0;
          const textFromX = imageRight ? -60 : 60;
          const imgFromX = imageRight ? 60 : -60;
          return (
            <div
              key={idx}
              className={`group flex flex-col ${imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
            >
              {/* Text */}
              <motion.div
                className="flex-1 flex flex-col justify-center"
                initial={{ opacity: 0, x: textFromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
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
              </motion.div>

              {/* Image */}
              <motion.div
                className="flex-1 w-full flex items-center justify-center"
                initial={{ opacity: 0, x: imgFromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {product.transparent ? (
                  <TiltImage src={product.img} alt={product.title} glowColor={product.glowColor} maxWidth={product.imgMaxWidth} />
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
