"use client";

import { useState } from "react";
import type { ActionRecommendation } from "@/types";
import { EvidencePanel } from "./EvidencePanel";

const categoryLabel: Record<string, string> = {
  feature: "Feature",
  improvement: "Improvement",
  infrastructure: "Infra",
  hiring: "Hiring",
  process: "Process",
};

const categoryStyle: Record<string, string> = {
  feature: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  improvement: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  infrastructure: "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-300",
  hiring: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  process: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
};

export function ActionItem({
  action,
  mode,
  index,
  onToggle,
  dragHandleProps,
}: {
  action: ActionRecommendation;
  mode: "inbox" | "todo";
  index?: number;
  onToggle: () => void;
  dragHandleProps?: React.HTMLAttributes<HTMLElement>;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasUnavailable = action.teamRequirements.some((r) => !r.available);

  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="p-3 space-y-2">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {mode === "todo" && dragHandleProps && (
              <span
                className="flex-shrink-0 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
                {...dragHandleProps}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </span>
            )}
            {mode === "todo" && (
              <span className="flex-shrink-0 text-xs font-mono text-muted-foreground">
                #{(index ?? 0) + 1}
              </span>
            )}
            <h3 className="text-sm font-medium truncate">{action.title}</h3>
            <span
              className={`flex-shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${
                categoryStyle[action.category] ?? "bg-secondary text-muted-foreground"
              }`}
            >
              {categoryLabel[action.category] ?? action.category}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="flex-shrink-0 rounded border border-border w-6 h-6 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            title={mode === "inbox" ? "Add to Todo" : "Remove from Todo"}
          >
            {mode === "inbox" ? "+" : "−"}
          </button>
        </div>

        {/* Metrics row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Impact</span>
            <span className="font-semibold tabular-nums">
              {action.impactScore.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Cost</span>
            <span className="font-semibold tabular-nums">
              {action.costSize}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Confidence</span>
            <span className="font-semibold tabular-nums">
              {action.confidence}%
            </span>
          </div>
          {action.customerRequests > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Requests</span>
              <span className="font-semibold tabular-nums">
                {action.customerRequests}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Est.</span>
            <span className="font-semibold tabular-nums">
              {action.estimateWeeks}w
            </span>
          </div>
          {hasUnavailable && (
            <span className="text-[10px] text-red-500/80 dark:text-red-400/80">
              Hiring needed
            </span>
          )}
        </div>

        {/* Click to expand */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          <svg
            className={`h-3 w-3 transition-transform ${expanded ? "rotate-90" : ""}`}
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
          {expanded ? "Hide details" : "View details"}
        </button>
      </div>

      {/* Expanded section */}
      {expanded && (
        <div className="border-t border-border">
          <div className="px-3 py-3 space-y-3">
            <p className="text-xs text-muted-foreground">
              {action.description}
            </p>

            {/* Team requirements */}
            {action.teamRequirements.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                  Team
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {action.teamRequirements.map((req, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                          req.available
                            ? "bg-emerald-400/60 dark:bg-emerald-500/50"
                            : "bg-red-400/80 dark:bg-red-400/60"
                        }`}
                      />
                      <span className="text-foreground/80">{req.role}</span>
                      {req.note && (
                        <span className="text-muted-foreground text-[10px]">
                          ({req.note})
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Linked outcomes */}
            {action.linkedOutcomeIds.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                  Linked Outcomes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {action.linkedOutcomeIds.map((id) => (
                    <span
                      key={id}
                      className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {id.replace("out-", "")}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <EvidencePanel evidence={action.evidence} />
        </div>
      )}
    </div>
  );
}
