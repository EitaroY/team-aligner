export interface QuarterMetrics {
  quarter: string;
  revenue: string;
  revenueValue: number;
  nsm: number;
  nsmLabel: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  startWeek: number; // week offset from start
  durationWeeks: number;
  category: "feature" | "improvement" | "infrastructure" | "hiring" | "process";
  team: string;
}

export interface RoadmapData {
  quarters: QuarterMetrics[];
  timelineItems: TimelineItem[];
  totalWeeks: number;
}
