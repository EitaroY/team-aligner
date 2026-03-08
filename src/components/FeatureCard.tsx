"use client";

import type { Feature } from "@/types";

function trendIcon(trend: Feature["trend"], delta: number) {
  if (trend === "up")
    return <span className="text-emerald-600/80 dark:text-emerald-400/80 text-xs">+{delta}%</span>;
  if (trend === "down")
    return <span className="text-red-500/80 dark:text-red-400/80 text-xs">{delta}%</span>;
  return <span className="text-muted-foreground text-xs">{delta}%</span>;
}

export function FeatureCard({
  feature,
  highlightContribution,
  outcomeName,
}: {
  feature: Feature;
  highlightContribution: number | null;
  outcomeName: string | null;
}) {
  const isDimmed =
    highlightContribution !== null && highlightContribution === 0;

  return (
    <div
      className={`rounded-lg border border-border bg-card p-3 transition-opacity ${
        isDimmed ? "opacity-40" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium truncate">{feature.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {feature.category}
          </p>
        </div>
        <div className="text-right ml-2">
          <p className="text-lg font-semibold tabular-nums">
            {feature.usageRate}%
          </p>
        </div>
      </div>

      {/* Usage bar */}
      <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-slate-300 dark:bg-slate-600 transition-all"
          style={{ width: `${feature.usageRate}%` }}
        />
      </div>

      {/* Contribution indicator when outcome is selected */}
      {highlightContribution !== null &&
        highlightContribution > 0 &&
        outcomeName && (
          <div className="mt-2 flex items-center gap-1.5">
            <div className="h-1 flex-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <div
                className="h-full rounded-full bg-indigo-300 dark:bg-indigo-500/60 transition-all"
                style={{ width: `${highlightContribution}%` }}
              />
            </div>
            <span className="text-[10px] font-medium tabular-nums text-indigo-600/80 dark:text-indigo-300/80">
              {highlightContribution}%
            </span>
          </div>
        )}

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>{feature.weeklyActiveUsers.toLocaleString()} WAU</span>
        {trendIcon(feature.trend, feature.trendDelta)}
      </div>

      {/* Description — always visible */}
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
