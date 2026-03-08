"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { OutcomeBar } from "@/components/OutcomeBar";
import { ProductPulse } from "@/components/ProductPulse";
import { outcomes } from "@/data/mock";

const ActionRecommendations = dynamic(
  () =>
    import("@/components/ActionRecommendations").then(
      (mod) => mod.ActionRecommendations
    ),
  { ssr: false }
);

export default function Home() {
  const router = useRouter();
  const [selectedOutcomeId, setSelectedOutcomeId] = useState<string | null>(
    null
  );
  const [isGenerating, setIsGenerating] = useState(false);

  function handleGenerateReport() {
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      router.push("/report/report-2026-03-08");
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-8 space-y-10">
        <OutcomeBar
          outcomes={outcomes}
          selectedId={selectedOutcomeId}
          onSelect={setSelectedOutcomeId}
        />
        <ProductPulse selectedOutcomeId={selectedOutcomeId} />
        <ActionRecommendations
          onGenerateReport={handleGenerateReport}
          isGenerating={isGenerating}
        />
      </main>

      {/* Full-screen generating overlay */}
      {isGenerating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <svg
              className="h-10 w-10 animate-spin text-foreground/60"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <p className="text-sm font-medium text-foreground/70">
              Generating...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
