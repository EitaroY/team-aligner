"use client";

import { features, outcomes } from "@/data/mock";
import { FeatureCard } from "./FeatureCard";

export function ProductPulse({
  selectedOutcomeId,
}: {
  selectedOutcomeId: string | null;
}) {
  // Sort features by contribution to selected outcome, or by usage rate
  const sorted = [...features].sort((a, b) => {
    if (selectedOutcomeId) {
      const aContrib =
        a.outcomeContributions.find((c) => c.outcomeId === selectedOutcomeId)
          ?.contribution ?? 0;
      const bContrib =
        b.outcomeContributions.find((c) => c.outcomeId === selectedOutcomeId)
          ?.contribution ?? 0;
      return bContrib - aContrib;
    }
    return b.usageRate - a.usageRate;
  });

  const selectedOutcome = selectedOutcomeId
    ? outcomes.find((o) => o.id === selectedOutcomeId)
    : null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <h2 className="text-base font-medium">Product Pulse</h2>
        <span className="text-xs text-muted-foreground">
          {features.length} features tracked
        </span>
        {selectedOutcome && (
          <span className="rounded bg-foreground/10 px-2 py-0.5 text-[10px] font-medium text-foreground">
            Sorted by {selectedOutcome.label} contribution
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {sorted.map((feature) => {
          const contribution = selectedOutcomeId
            ? feature.outcomeContributions.find(
                (c) => c.outcomeId === selectedOutcomeId
              )?.contribution ?? 0
            : null;

          return (
            <FeatureCard
              key={feature.id}
              feature={feature}
              highlightContribution={contribution}
              outcomeName={selectedOutcome?.label ?? null}
            />
          );
        })}
      </div>
    </section>
  );
}
