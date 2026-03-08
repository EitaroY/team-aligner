import type { EvidenceItem } from "@/types";

export function EvidencePanel({ evidence }: { evidence: EvidenceItem[] }) {
  return (
    <div className="border-t border-border bg-muted/30 px-4 py-3 space-y-2">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
        Evidence
      </p>
      {evidence.map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-2 text-xs"
        >
          <span className="flex-shrink-0 rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            {item.source}
          </span>
          <span className="text-foreground/80">{item.summary}</span>
          {item.count !== undefined && (
            <span className="flex-shrink-0 text-muted-foreground tabular-nums">
              ({item.count})
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
