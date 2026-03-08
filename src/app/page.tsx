"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { OutcomeBar } from "@/components/OutcomeBar";
import { ProductPulse } from "@/components/ProductPulse";
import { outcomes } from "@/data/mock";
import type { Ticket } from "@/types";

const ActionRecommendations = dynamic(
  () =>
    import("@/components/ActionRecommendations").then(
      (mod) => mod.ActionRecommendations
    ),
  { ssr: false }
);

const NextUpBoard = dynamic(
  () => import("@/components/NextUpBoard").then((mod) => mod.NextUpBoard),
  { ssr: false }
);

export default function Home() {
  const router = useRouter();
  const [selectedOutcomeId, setSelectedOutcomeId] = useState<string | null>(
    null
  );

  function handleOutput(_tickets: Ticket[]) {
    router.push("/report/report-2026-03-08");
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
        <ActionRecommendations />
        <NextUpBoard onOutputClick={handleOutput} />
      </main>
    </div>
  );
}
