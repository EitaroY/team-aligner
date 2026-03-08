// ---- Outcomes ----

export interface Outcome {
  id: string;
  label: string;
  value: string;
  previousValue: string;
  trend: "up" | "down" | "stable";
  trendDelta: string; // e.g. "+12%" or "-$50K"
  unit: string; // e.g. "ARR", "users", "%"
  icon: "revenue" | "users" | "retention" | "nps" | "conversion";
}

// ---- Product Pulse ----

export interface FeatureOutcomeContribution {
  outcomeId: string;
  contribution: number; // 0-100, how much this feature contributes
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  usageRate: number; // 0-100
  weeklyActiveUsers: number;
  trend: "up" | "down" | "stable";
  trendDelta: number; // percentage change
  category: string;
  outcomeContributions: FeatureOutcomeContribution[];
}

// ---- Action Recommendations ----

export type CostSize = "XS" | "S" | "M" | "L" | "XL";

export type ActionCategory =
  | "feature"
  | "improvement"
  | "infrastructure"
  | "hiring"
  | "process";

export interface EvidenceItem {
  id: string;
  source: string;
  summary: string;
  count?: number;
  url?: string;
}

export interface TeamRequirement {
  role: string;
  available: boolean;
  note?: string; // e.g. "Need to hire" or "Shared with Platform team"
}

export interface ActionRecommendation {
  id: string;
  title: string;
  description: string;
  category: ActionCategory;
  impactScore: number; // 0-10
  costSize: CostSize;
  confidence: number; // 0-100
  customerRequests: number;
  usageGapPercent: number;
  estimateWeeks: number;
  teamRequirements: TeamRequirement[];
  evidence: EvidenceItem[];
  linkedOutcomeIds: string[];
}

// ---- Next Up Board ----

export interface Ticket {
  id: string;
  title: string;
  estimateWeeks: number;
  category: ActionCategory;
  labels: string[];
  linkedActionId: string;
}

// ---- Reports ----

export type AudienceType =
  | "ceo"
  | "engineering"
  | "product"
  | "business"
  | "hr"
  | "custom";

export interface Report {
  id: string;
  generatedAt: string;
  tickets: Ticket[];
  audiences: Record<AudienceType, string>;
}

// ---- Repository ----

export interface Repository {
  id: string;
  name: string;
  fullName: string;
  url: string;
}
