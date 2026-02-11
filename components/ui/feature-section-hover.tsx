import React from "react";
import { cn } from "@/lib/utils";

export interface SkillFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  features: SkillFeature[];
  accentColor?: string;
  hoverGradient?: string;
  className?: string;
  sectionTitle?: string;
}

interface FeatureCardProps {
  key?: React.Key;
  feature: SkillFeature;
  index: number;
  accentColor?: string;
  hoverGradient?: string;
}

function FeatureCard({
  feature,
  index,
  accentColor = "bg-emerald-500",
  hoverGradient = "from-emerald-100 dark:from-emerald-900/30",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-6 relative group/feature border-surface-container-high",
        (index === 0 || index === 3) && "lg:border-l border-surface-container-high",
        index < 3 && "lg:border-b border-surface-container-high"
      )}
    >
      {/* Hover gradient - top row fades up, bottom row fades down */}
      {index < 3 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200",
            "absolute inset-0 h-full w-full pointer-events-none",
            "bg-gradient-to-t to-transparent",
            hoverGradient
          )}
        />
      )}
      {index >= 3 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200",
            "absolute inset-0 h-full w-full pointer-events-none",
            "bg-gradient-to-b to-transparent",
            hoverGradient
          )}
        />
      )}

      {/* Icon */}
      <div className="mb-3 relative z-10 px-6 text-surface-on-variant">
        {feature.icon}
      </div>

      {/* Title with accent bar */}
      <div className="text-base font-semibold mb-1.5 relative z-10 px-6">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-5 w-1 rounded-tr-full rounded-br-full",
            "bg-surface-container-high group-hover/feature:h-6 transition-all duration-200 origin-center",
            `group-hover/feature:${accentColor}`,
            accentColor.replace("bg-", "group-hover/feature:bg-")
          )}
        />
        <span className="group-hover/feature:translate-x-1.5 transition duration-200 inline-block text-surface-on">
          {feature.title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-surface-on-variant max-w-xs relative z-10 px-6 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

export function FeatureSectionWithHover({
  features,
  accentColor = "bg-emerald-500",
  hoverGradient = "from-emerald-100 dark:from-emerald-900/30",
  className,
  sectionTitle,
}: FeatureSectionProps) {
  return (
    <div className={cn("w-full", className)}>
      {sectionTitle && (
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-surface-on-variant bg-surface-container px-2 py-1 rounded">
            {sectionTitle}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={index}
            accentColor={accentColor}
            hoverGradient={hoverGradient}
          />
        ))}
      </div>
    </div>
  );
}
