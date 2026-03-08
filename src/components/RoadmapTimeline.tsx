"use client";

import type { RoadmapData } from "@/types/roadmap";

const CATEGORY_STYLES: Record<string, string> = {
  feature: "bg-foreground/12 border-foreground/20",
  improvement: "bg-foreground/8 border-foreground/15",
  infrastructure: "bg-foreground/10 border-foreground/18",
  hiring: "bg-foreground/10 border-foreground/15 border-dashed",
  process: "bg-foreground/6 border-foreground/12",
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
                className="flex-1 text-center py-1.5 border-l border-border/50 first:border-l-0"
              >
                <span className="text-[11px] font-medium text-foreground">
                  {q.quarter}
                </span>
                <span className="ml-1.5 text-[10px] text-muted-foreground">
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
          const style =
            CATEGORY_STYLES[item.category] || CATEGORY_STYLES.feature;

          return (
            <div
              key={item.id}
              className="flex border-b border-border/30"
            >
              {/* Team label */}
              <div className="w-28 flex-shrink-0 py-1.5 pr-3 text-right flex items-center justify-end">
                <span className="text-[11px] text-muted-foreground truncate">
                  {item.team}
                </span>
              </div>

              {/* Bar area */}
              <div className="flex-1 relative" style={{ height: "28px" }}>
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
                  className={`absolute top-1 h-5 rounded border ${style} flex items-center px-2 overflow-hidden`}
                  style={{
                    left: `${left}%`,
                    width: `${Math.max(width, 2)}%`,
                  }}
                  title={`${item.title} — ${item.durationWeeks}w`}
                >
                  <span className="text-[10px] font-medium text-foreground/60 truncate whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Legend */}
        <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2 rounded border bg-foreground/12 border-foreground/20" />
            Feature
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2 rounded border bg-foreground/8 border-foreground/15" />
            Improvement
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2 rounded border bg-foreground/10 border-foreground/18" />
            Infrastructure
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2 rounded border border-dashed bg-foreground/10 border-foreground/15" />
            Hiring
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-3 h-2 rounded border bg-foreground/6 border-foreground/12" />
            Process
          </span>
        </div>
      </div>
    </div>
  );
}
