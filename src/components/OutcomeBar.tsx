"use client";

import type { Outcome } from "@/types";

function outcomeIcon(icon: Outcome["icon"]) {
  switch (icon) {
    case "revenue":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "users":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "retention":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "nps":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "conversion":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
  }
}

function outcomeIconColor(icon: Outcome["icon"]) {
  switch (icon) {
    case "revenue":
      return "text-emerald-600/70 dark:text-emerald-400/70";
    case "users":
      return "text-blue-600/70 dark:text-blue-400/70";
    case "retention":
      return "text-indigo-600/70 dark:text-indigo-400/70";
    case "nps":
      return "text-amber-600/70 dark:text-amber-400/70";
    case "conversion":
      return "text-rose-600/70 dark:text-rose-400/70";
  }
}

function trendColor(trend: Outcome["trend"]) {
  if (trend === "up") return "text-emerald-600 dark:text-emerald-400";
  if (trend === "down") return "text-red-500 dark:text-red-400";
  return "text-muted-foreground";
}

export function OutcomeBar({
  outcomes,
  selectedId,
  onSelect,
}: {
  outcomes: Outcome[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <section className="space-y-2">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-medium">Outcomes</h2>
        {selectedId && (
          <button
            onClick={() => onSelect(null)}
            className="text-[10px] text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
        {outcomes.map((o) => {
          const isSelected = selectedId === o.id;
          const isDimmed = selectedId !== null && !isSelected;
          return (
            <button
              key={o.id}
              onClick={() => onSelect(isSelected ? null : o.id)}
              className={`rounded-lg border p-3 text-left transition-all ${
                isSelected
                  ? "border-foreground/40 bg-foreground/5 ring-1 ring-foreground/20"
                  : isDimmed
                    ? "border-border bg-card opacity-50"
                    : "border-border bg-card hover:border-foreground/20"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className={outcomeIconColor(o.icon)}>
                  {outcomeIcon(o.icon)}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">
                  {o.label}
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-lg font-semibold tabular-nums">
                  {o.value}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {o.unit}
                </span>
              </div>
              <div className="mt-0.5 flex items-center gap-1">
                <span className={`text-xs font-medium tabular-nums ${trendColor(o.trend)}`}>
                  {o.trendDelta}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  vs prev
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
