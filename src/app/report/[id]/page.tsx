"use client";

import { mockReport, roadmapData } from "@/data/mock";
import { ReportView } from "@/components/ReportView";

export default function ReportPage() {
  return <ReportView report={mockReport} roadmap={roadmapData} />;
}
