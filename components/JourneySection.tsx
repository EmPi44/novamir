import React from 'react';
import { Timeline, type TimelineEntry } from '@/components/ui/timeline';

const journeyData: TimelineEntry[] = [
  {
    title: "Discovery",
    icon: "handshake",
    content: (
      <div className="bg-surface-container rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-2xl text-surface-on">handshake</span>
          <span className="text-sm font-medium tracking-widest uppercase text-surface-on-variant">Step 1</span>
        </div>
        <p className="text-base text-surface-on-variant leading-relaxed mb-5">
          We start with a focused conversation to understand your business and your next milestone - and identify the right approach, whether that's AI, automation, a custom platform, or a combination.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Map your current workflows and pain points
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Identify the highest-leverage automation opportunities
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Propose a tailored roadmap and timeline
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Development",
    icon: "code_blocks",
    content: (
      <div className="bg-surface-container rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-2xl text-surface-on">code_blocks</span>
          <span className="text-sm font-medium tracking-widest uppercase text-surface-on-variant">Step 2</span>
        </div>
        <p className="text-base text-surface-on-variant leading-relaxed mb-5">
          Our team builds your solution in focused sprint cycles, keeping you in the loop at every stage. You see real progress weekly - not just status updates.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Agile sprint cycles with weekly demos
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Custom configuration and training tailored to your data
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Seamless integration with your existing systems
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Continuous feedback loops so nothing is a surprise
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Go Live!",
    icon: "rocket_launch",
    content: (
      <div className="bg-surface-container rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-2xl text-surface-on">rocket_launch</span>
          <span className="text-sm font-medium tracking-widest uppercase text-surface-on-variant">Step 3</span>
        </div>
        <p className="text-base text-surface-on-variant leading-relaxed mb-5">
          Launch day is just the beginning. We deploy with a staged rollout, train your team, and make sure everything runs smoothly from minute one.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Staged rollout to minimize risk
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Hands-on team training and onboarding
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Real-time monitoring and alerting from day one
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            First-week performance review and quick wins
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Adapt",
    icon: "tune",
    content: (
      <div className="bg-surface-container rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-2xl text-surface-on">tune</span>
          <span className="text-sm font-medium tracking-widest uppercase text-surface-on-variant">Step 4</span>
        </div>
        <p className="text-base text-surface-on-variant leading-relaxed mb-5">
          Your system gets smarter over time - and so does your setup. We continuously monitor performance, refine where needed, and scale what works.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Live performance dashboards and reporting
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Ongoing refinement and optimization
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Scaling playbook as your needs grow
          </li>
          <li className="flex items-start gap-3 text-sm text-surface-on-variant">
            <span className="material-symbols-outlined text-base text-surface-on mt-0.5">check_circle</span>
            Dedicated support channel for your team
          </li>
        </ul>
      </div>
    ),
  },
];

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-10">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-surface-on tracking-tight">
          Your Journey With Us
        </h2>
        <p className="text-lg text-surface-on-variant font-light leading-relaxed max-w-xl">
          From first conversation to continuous optimization - here's how we bring your vision to life, step by step.
        </p>
      </div>
      <Timeline data={journeyData} />
    </section>
  );
};
