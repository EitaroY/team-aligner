"use client";

import { useState } from "react";
import type { Feature } from "@/types";

function trendIcon(trend: Feature["trend"], delta: number) {
  if (trend === "up")
    return <span className="text-emerald-500/70 text-xs">+{delta}%</span>;
  if (trend === "down")
    return <span className="text-red-500/70 text-xs">{delta}%</span>;
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
  const [expanded, setExpanded] = useState(false);
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

      {/* Usage bar — monochrome */}
      <div className="mt-3 h-1.5 w-full rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-foreground/25 transition-all"
          style={{ width: `${feature.usageRate}%` }}
        />
      </div>

      {/* Contribution indicator when outcome is selected */}
      {highlightContribution !== null &&
        highlightContribution > 0 &&
        outcomeName && (
          <div className="mt-2 flex items-center gap-1.5">
            <div className="h-1 flex-1 rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-foreground/40 transition-all"
                style={{ width: `${highlightContribution}%` }}
              />
            </div>
            <span className="text-[10px] font-medium tabular-nums text-muted-foreground">
              {highlightContribution}%
            </span>
          </div>
        )}

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>{feature.weeklyActiveUsers.toLocaleString()} WAU</span>
        {trendIcon(feature.trend, feature.trendDelta)}
      </div>

      {/* Click to expand */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
      >
        <svg
          className={`h-2.5 w-2.5 transition-transform ${expanded ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
        {expanded ? "Hide" : "Details"}
      </button>

      {/* Expanded description */}
      {expanded && (
        <p className="mt-1.5 text-xs text-muted-foreground">
          {feature.description}
        </p>
      )}
    </div>
  );
}
