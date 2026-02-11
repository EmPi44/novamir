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
  IconHeadset,
  IconBook,
  IconClipboardCheck,
  IconMoodSmile,
  IconBrain,
} from '@tabler/icons-react';
import giniImg from '../assets/gini.png';
import henryImg from '../assets/henry.png';
import atlasImg from '../assets/atlas.png';
import gccImg from '../assets/gcc.png';

// Gini Hard Skills
const giniHardSkills: SkillFeature[] = [
  {
    title: "Lead Qualification",
    description: "Scores leads based on your criteria - more flow or more quality. The right strategy at the right moment.",
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
    description: "Learns your company and products to answer leads with full context.",
    icon: <IconMessageQuestion className="w-5 h-5" />,
  },
  {
    title: "Team Notification",
    description: "Alerts your sales team when a high-value lead is qualified and ready for a conversation.",
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
    description: "Responds within seconds, 24/7, so you never lose leads to a competitor.",
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

// Henry Hard Skills
const henryHardSkills: SkillFeature[] = [
  {
    title: "Inquiry Resolution",
    description: "Resolves common customer questions instantly without human involvement.",
    icon: <IconHeadset className="w-5 h-5" />,
  },
  {
    title: "Knowledge Base",
    description: "Answers from your docs, FAQs, and policies with accuracy.",
    icon: <IconBook className="w-5 h-5" />,
  },
  {
    title: "Ticket Management",
    description: "Creates, tracks, and closes support tickets automatically.",
    icon: <IconClipboardCheck className="w-5 h-5" />,
  },
  {
    title: "Meeting Scheduling",
    description: "Books callbacks or follow-up meetings on your team's calendar.",
    icon: <IconCalendarEvent className="w-5 h-5" />,
  },
  {
    title: "Team Notification",
    description: "Alerts your team when a customer needs immediate human attention.",
    icon: <IconBellRinging className="w-5 h-5" />,
  },
];

// Henry Soft Skills
const henrySoftSkills: SkillFeature[] = [
  {
    title: "Natural Voice",
    description: "Speaks with a natural, human-like tone customers feel comfortable with.",
    icon: <IconMoodSmile className="w-5 h-5" />,
  },
  {
    title: "Instant Response",
    description: "Picks up every call in seconds, 24/7 - no hold music, no waiting.",
    icon: <IconBolt className="w-5 h-5" />,
  },
  {
    title: "Multi-Lingual",
    description: "Communicates fluently in 50+ languages to serve any customer.",
    icon: <IconLanguage className="w-5 h-5" />,
  },
  {
    title: "Context Awareness",
    description: "Remembers past interactions, order history, and customer preferences.",
    icon: <IconBrain className="w-5 h-5" />,
  },
  {
    title: "Patient & Consistent",
    description: "Never gets frustrated - delivers the same quality on every call.",
    icon: <IconUserHeart className="w-5 h-5" />,
  },
  {
    title: "Scales with Demand",
    description: "Handles 10 or 10,000 calls without wait times or quality loss.",
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
    desc: "Your AI Sales Assistant on WhatsApp that handles the admin for your team around the clock - so your team can focus on selling.",
    img: giniImg,
    icon: "smart_toy",
    transparent: true,
    glowColor: "bg-emerald-500/60",
    tabs: [
      {
        id: "gini-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-emerald-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">group</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Who is it for</span>
              </div>
              <p className="text-base font-medium text-white/95 leading-snug">
                Teams that want to fix lead qualification and nurturing to only speak to qualified leads - and focus on increasing sales, not admin.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "schedule", title: "Save 10-15 admin hours per week", desc: "Gini saves every team member 10-15 hours of admin work per week - time they can spend selling instead." },
                { icon: "bolt", title: "Respond in seconds, not hours", desc: "Gini responds in seconds so your brand image stays strong and you never lose a customer to a competitor due to slow response times and inconsistent follow-ups." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 border-l-2 border-emerald-500 bg-emerald-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-emerald-600 shrink-0 mt-px">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-surface-on">{item.title}</span>
                    <span className="text-sm text-surface-on-variant leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "gini-pain",
        label: "Pain",
        content: (
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-surface-on leading-snug">
              Sales teams drown in admin work - slow follow-ups, unqualified leads, zero visibility.
              <span className="text-red-600 font-semibold"> They lose sales.</span>
            </p>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "timer_off", text: "Lost leads from slow follow-ups" },
                { icon: "person_search", text: "Chasing unqualified leads" },
                { icon: "chat_bubble", text: "Answering repetitive questions" },
                { icon: "visibility_off", text: "No visibility into the sales funnel" },
                { icon: "sync_problem", text: "CRM data outdated and inconsistent" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 border-l-2 border-red-500 bg-red-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-red-600 shrink-0">{item.icon}</span>
                  <span className="text-sm font-semibold text-surface-on">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">trending_down</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Business Impact</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Losing customers",
                  "Burning marketing budget",
                  "No time for closing deals",
                  "Wasting money on unused CRMs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    <span className="text-sm font-medium text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "gini-solution",
        label: "Solution",
        content: (
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-surface-on leading-snug">
              In response we built a multi-agent AI system designed to handle lead communication and CRM tasks at scale.
            </p>

            <AnimatedTabs
              layoutId="gini-skills-subtabs"
              defaultTab="gini-overview"
              className="max-w-full"
              tabs={[
                {
                  id: "gini-overview",
                  label: "Gini",
                  content: (
                    <div className="flex flex-col gap-1.5">
                      {[
                        { icon: "smart_toy", text: "Conversational multi-agent AI for lead engagement" },
                        { icon: "contact_page", text: "Manage CRM automatically and via conversation with the AI" },
                        { icon: "chat", text: "Seamless integration on WhatsApp" },
                        { icon: "hub", text: "Connected to lead sources (property platforms, ads, website)" },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 border-l-2 border-emerald-500 bg-emerald-50/60"
                        >
                          <span className="material-symbols-outlined text-xl text-emerald-600 shrink-0">{item.icon}</span>
                          <span className="text-sm font-semibold text-surface-on">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  ),
                },
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
          </div>
        ),
      },
      {
        id: "gini-demo",
        label: "Demo",
        content: (
          <div className="flex flex-col items-center gap-4 py-6">
            <p className="text-sm text-surface-on-variant text-center">Curious how Gini works for your business?</p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              Let's Talk - Book a Demo
            </a>
          </div>
        ),
      },
    ],
  },
  {
    title: "Henry",
    subtitle: "AI Customer Service - Voice Agent",
    desc: "Your 24/7 customer service on the phone that understands context, resolves inquiries instantly, and escalates only when it matters.",
    img: henryImg,
    icon: "support_agent",
    transparent: true,
    glowColor: "bg-blue-500/60",
    tabs: [
      {
        id: "henry-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-blue-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">group</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Who is it for</span>
              </div>
              <p className="text-base font-medium text-white/95 leading-snug">
                Customer support teams handling high ticket volumes that need instant, always-on resolution.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "smart_toy", title: "Handles 85%+ of inquiries autonomously", desc: "Henry resolves the vast majority of customer inquiries without human involvement - your team only steps in when it truly matters." },
                { icon: "schedule", title: "80% faster resolution times", desc: "Average handle time drops from 12 minutes to under 2 - while clearly shifting reviews from 1-2 star ratings to 4-5." },
                { icon: "savings", title: "Cut support costs significantly", desc: "Deflect the majority of routine tickets automatically - smaller team needed, same quality, lower costs." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 border-l-2 border-blue-500 bg-blue-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-blue-600 shrink-0 mt-px">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-surface-on">{item.title}</span>
                    <span className="text-sm text-surface-on-variant leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "henry-pain",
        label: "Pain",
        content: (
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-surface-on leading-snug">
              Support teams are overwhelmed - long wait times, repetitive tickets, inconsistent answers.
              <span className="text-red-600 font-semibold"> They lose customers.</span>
            </p>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "hourglass_top", text: "Customers waiting on hold for minutes" },
                { icon: "repeat", text: "Team answering the same questions over and over" },
                { icon: "trending_up", text: "Ticket volumes growing faster than headcount" },
                { icon: "language", text: "No multilingual support for global customers" },
                { icon: "nightlight", text: "No coverage outside business hours" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 border-l-2 border-red-500 bg-red-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-red-600 shrink-0">{item.icon}</span>
                  <span className="text-sm font-semibold text-surface-on">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">trending_down</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Business Impact</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Losing customers to bad experiences",
                  "Rising support costs",
                  "Team burnout and high turnover",
                  "Negative reviews and brand damage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    <span className="text-sm font-medium text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "henry-solution",
        label: "Solution",
        content: (
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-surface-on leading-snug">
              In response we built an AI voice agent that resolves customer inquiries instantly - with natural conversation, full context, and 24/7 availability.
            </p>

            <AnimatedTabs
              layoutId="henry-skills-subtabs"
              defaultTab="henry-overview"
              className="max-w-full"
              tabs={[
                {
                  id: "henry-overview",
                  label: "Henry",
                  content: (
                    <div className="flex flex-col gap-1.5">
                      {[
                        { icon: "record_voice_over", text: "Natural voice AI that customers feel comfortable with" },
                        { icon: "support_agent", text: "Instant resolution for common inquiries without human involvement" },
                        { icon: "language", text: "Fluent in 50+ languages for global customer support" },
                        { icon: "schedule", text: "Always on - 24/7 coverage with zero wait times" },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 border-l-2 border-blue-500 bg-blue-50/60"
                        >
                          <span className="material-symbols-outlined text-xl text-blue-600 shrink-0">{item.icon}</span>
                          <span className="text-sm font-semibold text-surface-on">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  id: "hard-skills",
                  label: "Hard Skills",
                  content: (
                    <FeatureSectionWithHover
                      features={henryHardSkills}
                      accentColor="bg-blue-500"
                      hoverGradient="from-blue-100 dark:from-blue-900/30"
                    />
                  ),
                },
                {
                  id: "soft-skills",
                  label: "Soft Skills",
                  content: (
                    <FeatureSectionWithHover
                      features={henrySoftSkills}
                      accentColor="bg-blue-500"
                      hoverGradient="from-blue-100 dark:from-blue-900/30"
                    />
                  ),
                },
              ]}
            />
          </div>
        ),
      },
      {
        id: "henry-demo",
        label: "Demo",
        content: (
          <div className="flex flex-col items-center gap-4 py-6">
            <p className="text-sm text-surface-on-variant text-center">Curious how Henry handles your customer conversations?</p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              Let's Talk - Book a Demo
            </a>
          </div>
        ),
      },
    ],
  },
  {
    title: "Atlas",
    subtitle: "Operations Management Platform",
    desc: "A centralized operations platform for organizations that coordinate people, assignments, schedules, and communication - replacing spreadsheet chaos with operational clarity.",
    img: atlasImg,
    icon: "hub",
    transparent: true,
    glowColor: "bg-amber-500/50",
    imgMaxWidth: "max-w-2xl",
    tabs: [
      {
        id: "atlas-outcome",
        label: "Business Outcome",
        content: (
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-amber-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">group</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Who is it for</span>
              </div>
              <p className="text-base font-medium text-white/95 leading-snug">
                Organizations that coordinate people, assignments, schedules, and communication - and need operational clarity instead of spreadsheet chaos.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "schedule", title: "Reduce operational workload", desc: "Eliminate repetitive coordination work and manual updates - so teams focus on execution, not administration." },
                { icon: "visibility", title: "Full operational visibility", desc: "See who is assigned, what is pending, what is blocked, and what is at risk - in one structured system." },
                { icon: "verified", title: "Fewer errors, fewer surprises", desc: "Structured workflows reduce missed steps, outdated data, and last-minute chaos." },
                { icon: "trending_up", title: "Increase throughput without increasing headcount", desc: "Handle more cases, projects, or events with the same team - because processes are standardized and automated." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 border-l-2 border-amber-500 bg-amber-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-amber-600 shrink-0 mt-px">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-surface-on">{item.title}</span>
                    <span className="text-sm text-surface-on-variant leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "atlas-pain",
        label: "Pain",
        content: (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              {[
                { icon: "folder_off", title: "Data is fragmented", desc: "Information lives across spreadsheets, emails, notes, and messaging tools - no single source of truth." },
                { icon: "sync_problem", title: "Manual updates constantly break", desc: "Status changes are forgotten. Lists are outdated the moment they're created." },
                { icon: "swap_horiz", title: "Assignments are unclear and time-consuming", desc: "Matching people to roles, schedules, or tasks happens ad hoc and is hard to track or justify later." },
                { icon: "chat_bubble", title: "Communication is unstructured", desc: "Conversations happen across channels without history, templates, or consistency." },
                { icon: "warning", title: "Last-minute changes create operational stress", desc: "Availability shifts, cancellations, or updates create cascading issues across the system." },
                { icon: "bar_chart", title: "No real-time reporting", desc: "Leaders lack clear dashboards for bottlenecks, workload, completion rates, and performance metrics." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 border-l-2 border-red-500 bg-red-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-red-600 shrink-0 mt-px">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-surface-on">{item.title}</span>
                    <span className="text-sm text-surface-on-variant leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">trending_down</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Operational impact</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Team overload and burnout",
                  "Repeated coordination mistakes",
                  "Slower execution cycles",
                  "Low transparency for leadership",
                  "Scaling requires hiring instead of improving systems",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    <span className="text-sm font-medium text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "atlas-solution",
        label: "Solution",
        content: (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              {[
                { icon: "hub", title: "One centralized operations hub", desc: "All people, assignments, schedules, tasks, and communication in one structured platform." },
                { icon: "rule", title: "Structured workflows and status logic", desc: "Clear lifecycle stages and transitions - so every case, project, or assignment follows defined steps." },
                { icon: "checklist", title: "Task and process tracking", desc: "Standardized checklists ensure nothing is forgotten and accountability is visible." },
                { icon: "sms", title: "Integrated communication layer", desc: "Centralized messaging with templates, history, and automation - tied directly to operational records." },
                { icon: "bar_chart", title: "Real-time dashboards and reporting", desc: "Track workload, bottlenecks, completion rates, and resource allocation instantly." },
                { icon: "lock", title: "Roles, permissions, and audit trail", desc: "Control access by role and maintain full transparency over changes and actions." },
                { icon: "description", title: "Full process documentation", desc: "Every workflow, procedure, and decision is documented in one place - a single source of truth the entire team can reference." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 border-l-2 border-amber-500 bg-amber-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-amber-600 shrink-0 mt-px">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-surface-on">{item.title}</span>
                    <span className="text-sm text-surface-on-variant leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "atlas-demo",
        label: "Demo",
        content: (
          <div className="flex flex-col items-center gap-4 py-6">
            <p className="text-sm text-surface-on-variant text-center">Curious how the platform streamlines your operations?</p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              Let's Talk - Book a Demo
            </a>
          </div>
        ),
      },
    ],
  },
  {
    title: "Gini - Command Center",
    subtitle: "Customer Relationship Management (CRM)",
    desc: "A conversational, AI-driven CRM built on WhatsApp. Track KPIs, manage leads, run outbound campaigns, and manage products - all from one place.",
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
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-amber-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">group</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Who is it for</span>
              </div>
              <p className="text-base font-medium text-white/95 leading-snug">
                Sales managers and business owners who need full pipeline visibility and campaign control in one place.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "visibility", title: "Full funnel visibility and control", desc: "Replace disconnected CRMs and manual tracking with a single dashboard. Monitor lead status, campaign performance, and sales KPIs in real time." },
                { icon: "campaign", title: "Launch campaigns from WhatsApp", desc: "Run outbound WhatsApp campaigns with templates, scheduling, and tracking - no separate tool needed." },
                { icon: "inventory_2", title: "Manage products in one place", desc: "Keep your product catalog up to date so Gini can reference it in every conversation with leads." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 border-l-2 border-amber-500 bg-amber-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-amber-600 shrink-0 mt-px">{item.icon}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-surface-on">{item.title}</span>
                    <span className="text-sm text-surface-on-variant leading-relaxed">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "gcc-pain",
        label: "Pain",
        content: (
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-surface-on leading-snug">
              Sales teams use disconnected tools - one for leads, one for campaigns, one for reporting.
              <span className="text-red-600 font-semibold"> They fly blind.</span>
            </p>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "visibility_off", text: "No real-time visibility into pipeline health" },
                { icon: "device_hub", text: "Scattered tools that don't talk to each other" },
                { icon: "edit_note", text: "Manual reporting that's always outdated" },
                { icon: "person_off", text: "Customer data spread across spreadsheets" },
                { icon: "trending_down", text: "No way to track campaign ROI" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 border-l-2 border-red-500 bg-red-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-red-600 shrink-0">{item.icon}</span>
                  <span className="text-sm font-semibold text-surface-on">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-600 px-4 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-lg text-white">trending_down</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">Business Impact</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Lost deals from blind spots",
                  "Wasted ad spend without tracking",
                  "Decisions based on gut, not data",
                  "Inconsistent follow-ups",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    <span className="text-sm font-medium text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "gcc-solution",
        label: "Solution",
        content: (
          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-surface-on leading-snug">
              In response we built an AI-driven CRM on WhatsApp that gives your team full pipeline visibility, campaign control, and product management - all from one conversational interface.
            </p>

            <div className="flex flex-col gap-1.5">
              {[
                { icon: "hub", text: "Unified CRM built natively on WhatsApp" },
                { icon: "chat", text: "Manage leads, campaigns, and products via conversation" },
                { icon: "monitoring", text: "Real-time KPI dashboards and pipeline tracking" },
                { icon: "smart_toy", text: "Powered by AI - connected to Gini for seamless automation" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 border-l-2 border-amber-500 bg-amber-50/60"
                >
                  <span className="material-symbols-outlined text-xl text-amber-600 shrink-0">{item.icon}</span>
                  <span className="text-sm font-semibold text-surface-on">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        id: "gcc-demo",
        label: "Demo",
        content: (
          <div className="flex flex-col items-center gap-4 py-6">
            <p className="text-sm text-surface-on-variant text-center">Curious how the Command Center runs your sales ops?</p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              Let's Talk - Book a Demo
            </a>
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
    <section id="product" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-8 overflow-hidden" aria-labelledby="product-heading">
      <h2 id="product-heading" className="sr-only">Our Solutions</h2>
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
