"use client";

import type { RoadmapData } from "@/types/roadmap";

// Colorful styles for report — muted but distinct per category
const CATEGORY_STYLES: Record<string, { bar: string; text: string }> = {
  feature: {
    bar: "bg-blue-200/80 border-blue-300 dark:bg-blue-800/50 dark:border-blue-700",
    text: "text-blue-800 dark:text-blue-200",
  },
  improvement: {
    bar: "bg-amber-200/80 border-amber-300 dark:bg-amber-800/50 dark:border-amber-700",
    text: "text-amber-800 dark:text-amber-200",
  },
  infrastructure: {
    bar: "bg-slate-200/80 border-slate-300 dark:bg-slate-700/50 dark:border-slate-600",
    text: "text-slate-700 dark:text-slate-200",
  },
  hiring: {
    bar: "bg-violet-200/80 border-violet-300 border-dashed dark:bg-violet-800/50 dark:border-violet-600",
    text: "text-violet-800 dark:text-violet-200",
  },
  process: {
    bar: "bg-teal-200/80 border-teal-300 dark:bg-teal-800/50 dark:border-teal-700",
    text: "text-teal-800 dark:text-teal-200",
  },
};

const LEGEND_STYLES: Record<string, string> = {
  feature: "bg-blue-200/80 border-blue-300 dark:bg-blue-800/50 dark:border-blue-700",
  improvement: "bg-amber-200/80 border-amber-300 dark:bg-amber-800/50 dark:border-amber-700",
  infrastructure: "bg-slate-200/80 border-slate-300 dark:bg-slate-700/50 dark:border-slate-600",
  hiring: "bg-violet-200/80 border-violet-300 border-dashed dark:bg-violet-800/50 dark:border-violet-600",
  process: "bg-teal-200/80 border-teal-300 dark:bg-teal-800/50 dark:border-teal-700",
};

export function RoadmapTimeline({ data }: { data: RoadmapData }) {
  const totalWeeks = data.totalWeeks;
  const quarters = data.quarters;

  // Sort items by startWeek for logical reading order
  const sortedItems = [...data.timelineItems].sort(
    (a, b) => a.startWeek - b.startWeek || a.team.localeCompare(b.team)
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Quarter headers */}
        <div className="flex border-b border-border">
          <div className="w-28 flex-shrink-0" />
          <div className="flex-1 flex">
            {quarters.map((q) => (
              <div
                key={q.quarter}
                className="flex-1 text-center py-2 border-l border-border/50 first:border-l-0"
              >
                <span className="text-[11px] font-semibold text-foreground">
                  {q.quarter}
                </span>
                <span className="ml-1.5 text-[10px] text-emerald-600/80 dark:text-emerald-400/80 font-medium">
                  {q.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline rows */}
        {sortedItems.map((item) => {
          const left = (item.startWeek / totalWeeks) * 100;
          const width = (item.durationWeeks / totalWeeks) * 100;
          const styles =
            CATEGORY_STYLES[item.category] || CATEGORY_STYLES.feature;

          return (
            <div
              key={item.id}
              className="flex border-b border-border/30"
            >
              {/* Team label */}
              <div className="w-28 flex-shrink-0 py-2 pr-3 text-right flex items-center justify-end">
                <span className="text-[11px] text-muted-foreground font-medium truncate">
                  {item.team}
                </span>
              </div>

              {/* Bar area */}
              <div className="flex-1 relative" style={{ height: "32px" }}>
                {/* Quarter grid lines */}
                {quarters.map((_, qi) =>
                  qi > 0 ? (
                    <div
                      key={qi}
                      className="absolute top-0 h-full border-l border-border/20"
                      style={{
                        left: `${(qi / quarters.length) * 100}%`,
                      }}
                    />
                  ) : null
                )}

                {/* Timeline bar */}
                <div
                  className={`absolute top-1.5 h-6 rounded-md border ${styles.bar} flex items-center px-2.5 overflow-hidden`}
                  style={{
                    left: `${left}%`,
                    width: `${Math.max(width, 2.5)}%`,
                  }}
                  title={`${item.title} — ${item.durationWeeks}w`}
                >
                  <span
                    className={`text-[10px] font-medium truncate whitespace-nowrap ${styles.text}`}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-3 text-[10px] text-muted-foreground">
          {[
            { key: "feature", label: "Feature" },
            { key: "improvement", label: "Improvement" },
            { key: "infrastructure", label: "Infrastructure" },
            { key: "hiring", label: "Hiring" },
            { key: "process", label: "Process" },
          ].map(({ key, label }) => (
            <span key={key} className="flex items-center gap-1.5">
              <span
                className={`inline-block w-4 h-2.5 rounded border ${LEGEND_STYLES[key]}`}
              />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
