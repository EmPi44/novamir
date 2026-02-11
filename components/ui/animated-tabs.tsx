"use client";

import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
  layoutId?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "tab1",
    label: "Tab 1",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Tab 1"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-sm border-none"
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold mb-0 text-surface-on mt-0 !m-0">
            Tab 1
          </h2>
          <p className="text-sm text-surface-on-variant mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Tab 2"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-sm border-none"
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold mb-0 text-surface-on mt-0 !m-0">
            Tab 2
          </h2>
          <p className="text-sm text-surface-on-variant mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tab3",
    label: "Tab 3",
    content: (
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1522428938647-2baa7c899f2f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Tab 3"
          className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-sm border-none"
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold mb-0 text-surface-on mt-0 !m-0">
            Tab 3
          </h2>
          <p className="text-sm text-surface-on-variant mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    ),
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
  layoutId,
}: AnimatedTabsProps) => {
  const autoId = useId();
  const resolvedLayoutId = layoutId || `active-tab-${autoId}`;
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id
  );

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full max-w-lg flex flex-col gap-y-1", className)}>
      <div className="flex gap-2 flex-wrap bg-surface-container p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium rounded-lg text-surface-on-variant outline-none transition-colors"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId={resolvedLayoutId}
                className="absolute inset-0 bg-white shadow-sm !rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-3 sm:p-4 bg-surface-container text-surface-on rounded-xl border border-gray-100 min-h-[120px] h-full">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            aria-hidden={activeTab !== tab.id}
            style={{ display: activeTab === tab.id ? 'block' : 'none' }}
          >
            {activeTab === tab.id ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            ) : (
              tab.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { AnimatedTabs };
export type { Tab, AnimatedTabsProps };
