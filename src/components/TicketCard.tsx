"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Ticket } from "@/types";

const categoryLabel: Record<string, string> = {
  feature: "Feature",
  improvement: "Improvement",
  infrastructure: "Infra",
  hiring: "Hiring",
  process: "Process",
};

const categoryColor: Record<string, string> = {
  feature: "text-blue-600/80 dark:text-blue-400/80",
  improvement: "text-amber-600/80 dark:text-amber-400/80",
  infrastructure: "text-slate-500 dark:text-slate-400",
  hiring: "text-violet-600/80 dark:text-violet-400/80",
  process: "text-teal-600/80 dark:text-teal-400/80",
};

export function TicketCard({
  ticket,
  index,
}: {
  ticket: Ticket;
  index: number;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ticket.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex-shrink-0 w-52 rounded-lg border border-border bg-card p-3 space-y-2 cursor-grab active:cursor-grabbing transition-shadow ${
        isDragging ? "opacity-50 shadow-lg ring-1 ring-foreground/20" : ""
      }`}
    >
      {/* Order indicator */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground">
          #{index + 1}
        </span>
        <span className={`text-[10px] font-medium ${categoryColor[ticket.category] ?? "text-muted-foreground"}`}>
          {categoryLabel[ticket.category] ?? ticket.category}
        </span>
      </div>

      {/* Title */}
      <p className="text-sm font-medium leading-snug">{ticket.title}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground tabular-nums">
          {ticket.estimateWeeks}w
        </span>
        <div className="flex gap-1">
          {ticket.labels.map((label) => (
            <span
              key={label}
              className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
