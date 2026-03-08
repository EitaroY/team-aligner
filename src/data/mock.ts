import type {
  Feature,
  Outcome,
  ActionRecommendation,
  Ticket,
  Report,
  Repository,
} from "@/types";
import type { RoadmapData } from "@/types/roadmap";

// ---- Outcomes ----

export const outcomes: Outcome[] = [
  {
    id: "out-revenue",
    label: "Revenue",
    value: "$2.4M",
    previousValue: "$2.1M",
    trend: "up",
    trendDelta: "+14%",
    unit: "ARR",
    icon: "revenue",
  },
  {
    id: "out-mau",
    label: "MAU",
    value: "18,200",
    previousValue: "16,800",
    trend: "up",
    trendDelta: "+8.3%",
    unit: "users",
    icon: "users",
  },
  {
    id: "out-retention",
    label: "Retention",
    value: "87%",
    previousValue: "84%",
    trend: "up",
    trendDelta: "+3pp",
    unit: "D30",
    icon: "retention",
  },
  {
    id: "out-nps",
    label: "NPS",
    value: "42",
    previousValue: "38",
    trend: "up",
    trendDelta: "+4",
    unit: "score",
    icon: "nps",
  },
  {
    id: "out-activation",
    label: "Activation",
    value: "62%",
    previousValue: "67%",
    trend: "down",
    trendDelta: "-5pp",
    unit: "rate",
    icon: "conversion",
  },
];

// ---- Repositories ----

export const repositories: Repository[] = [
  {
    id: "repo-1",
    name: "team-aligner",
    fullName: "acme/team-aligner",
    url: "https://github.com/acme/team-aligner",
  },
  {
    id: "repo-2",
    name: "acme-web",
    fullName: "acme/acme-web",
    url: "https://github.com/acme/acme-web",
  },
];

// ---- Features (Product Pulse) ----

export const features: Feature[] = [
  {
    id: "feat-1",
    name: "Authentication",
    description: "Login, signup, SSO, and session management",
    usageRate: 94,
    weeklyActiveUsers: 12_400,
    trend: "stable",
    trendDelta: 0.3,
    category: "Core",
    outcomeContributions: [
      { outcomeId: "out-mau", contribution: 85 },
      { outcomeId: "out-activation", contribution: 70 },
      { outcomeId: "out-retention", contribution: 40 },
    ],
  },
  {
    id: "feat-2",
    name: "Search",
    description: "Full-text search across projects and documents",
    usageRate: 78,
    weeklyActiveUsers: 10_300,
    trend: "up",
    trendDelta: 4.2,
    category: "Core",
    outcomeContributions: [
      { outcomeId: "out-retention", contribution: 72 },
      { outcomeId: "out-nps", contribution: 55 },
      { outcomeId: "out-mau", contribution: 30 },
    ],
  },
  {
    id: "feat-3",
    name: "Dashboard",
    description: "Overview metrics and team activity feed",
    usageRate: 71,
    weeklyActiveUsers: 9_400,
    trend: "down",
    trendDelta: -2.1,
    category: "Analytics",
    outcomeContributions: [
      { outcomeId: "out-retention", contribution: 60 },
      { outcomeId: "out-nps", contribution: 45 },
    ],
  },
  {
    id: "feat-4",
    name: "Export",
    description: "CSV, PDF, and API export of reports",
    usageRate: 45,
    weeklyActiveUsers: 5_900,
    trend: "up",
    trendDelta: 8.7,
    category: "Utility",
    outcomeContributions: [
      { outcomeId: "out-revenue", contribution: 65 },
      { outcomeId: "out-nps", contribution: 35 },
    ],
  },
  {
    id: "feat-5",
    name: "Notifications",
    description: "In-app, email, and Slack notifications",
    usageRate: 38,
    weeklyActiveUsers: 5_000,
    trend: "down",
    trendDelta: -5.3,
    category: "Engagement",
    outcomeContributions: [
      { outcomeId: "out-retention", contribution: 50 },
      { outcomeId: "out-activation", contribution: 35 },
    ],
  },
  {
    id: "feat-6",
    name: "Integrations",
    description: "Third-party integrations (Jira, Slack, GitHub)",
    usageRate: 32,
    weeklyActiveUsers: 4_200,
    trend: "up",
    trendDelta: 12.1,
    category: "Platform",
    outcomeContributions: [
      { outcomeId: "out-revenue", contribution: 55 },
      { outcomeId: "out-retention", contribution: 68 },
    ],
  },
  {
    id: "feat-7",
    name: "Team Permissions",
    description: "Role-based access control and team management",
    usageRate: 27,
    weeklyActiveUsers: 3_600,
    trend: "stable",
    trendDelta: 0.8,
    category: "Admin",
    outcomeContributions: [
      { outcomeId: "out-revenue", contribution: 45 },
      { outcomeId: "out-activation", contribution: 25 },
    ],
  },
  {
    id: "feat-8",
    name: "Comments",
    description: "Inline comments and threaded discussions",
    usageRate: 19,
    weeklyActiveUsers: 2_500,
    trend: "down",
    trendDelta: -3.4,
    category: "Collaboration",
    outcomeContributions: [
      { outcomeId: "out-nps", contribution: 40 },
      { outcomeId: "out-retention", contribution: 30 },
    ],
  },
];

// ---- Action Recommendations ----

export const actionRecommendations: ActionRecommendation[] = [
  {
    id: "act-1",
    title: "Advanced Search Filters",
    description:
      "Add faceted search with filters by date, author, status, and labels",
    category: "feature",
    impactScore: 8.5,
    costSize: "M",
    confidence: 92,
    customerRequests: 34,
    usageGapPercent: 47,
    estimateWeeks: 3,
    teamRequirements: [
      { role: "Frontend Engineer", available: true },
      { role: "Backend Engineer", available: true },
      { role: "Designer", available: true, note: "Shared with Platform team" },
    ],
    evidence: [
      {
        id: "ev-1",
        source: "GitHub Issues",
        summary: "12 open issues requesting search filters",
        count: 12,
      },
      {
        id: "ev-2",
        source: "Support Tickets",
        summary: "22 tickets about search being too broad",
        count: 22,
      },
      {
        id: "ev-3",
        source: "Analytics",
        summary: "Search abandonment rate is 34% — users refine 3+ times",
      },
      {
        id: "ev-4",
        source: "Competitor Analysis",
        summary: "Top 3 competitors all ship faceted search",
      },
    ],
    linkedOutcomeIds: ["out-retention", "out-nps", "out-mau"],
  },
  {
    id: "act-2",
    title: "CSV Export Enhancement",
    description: "Custom column selection, scheduled exports, and bulk export",
    category: "improvement",
    impactScore: 7.2,
    costSize: "S",
    confidence: 87,
    customerRequests: 28,
    usageGapPercent: 35,
    estimateWeeks: 2,
    teamRequirements: [
      { role: "Backend Engineer", available: true },
      { role: "DevOps Engineer", available: true, note: "For cron/queue setup" },
    ],
    evidence: [
      {
        id: "ev-5",
        source: "Sales Notes",
        summary: "3 enterprise deals blocked by export limitations",
        count: 3,
      },
      {
        id: "ev-6",
        source: "Support Tickets",
        summary: "Users requesting custom column export weekly",
        count: 15,
      },
      {
        id: "ev-7",
        source: "Analytics",
        summary: "Export usage grew 8.7% MoM — fastest growing feature",
      },
    ],
    linkedOutcomeIds: ["out-revenue", "out-nps"],
  },
  {
    id: "act-3",
    title: "Slack Integration v2",
    description:
      "Bi-directional sync: create tasks from Slack, get updates in channels",
    category: "feature",
    impactScore: 6.8,
    costSize: "M",
    confidence: 79,
    customerRequests: 19,
    usageGapPercent: 28,
    estimateWeeks: 3,
    teamRequirements: [
      { role: "Backend Engineer", available: true },
      { role: "Frontend Engineer", available: true },
      {
        role: "QA Engineer",
        available: false,
        note: "Need to hire or contract",
      },
    ],
    evidence: [
      {
        id: "ev-8",
        source: "GitHub Issues",
        summary: "Integration usage growing 12% MoM",
        count: 8,
      },
      {
        id: "ev-9",
        source: "Customer Interviews",
        summary: "4 of 6 enterprise customers requested Slack-first workflow",
        count: 4,
      },
    ],
    linkedOutcomeIds: ["out-revenue", "out-retention"],
  },
  {
    id: "act-4",
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and co-editing",
    category: "feature",
    impactScore: 9.1,
    costSize: "XL",
    confidence: 65,
    customerRequests: 41,
    usageGapPercent: 55,
    estimateWeeks: 10,
    teamRequirements: [
      { role: "Senior Frontend Engineer", available: false, note: "Need to hire" },
      { role: "Backend Engineer", available: true },
      { role: "Infrastructure Engineer", available: true },
      { role: "Designer", available: true },
    ],
    evidence: [
      {
        id: "ev-10",
        source: "Customer Interviews",
        summary:
          "Top requested feature in Q4 survey. 67% of teams use Google Docs alongside",
        count: 41,
      },
      {
        id: "ev-11",
        source: "Competitor Analysis",
        summary: "2 competitors launched real-time features in the last quarter",
      },
    ],
    linkedOutcomeIds: ["out-retention", "out-nps", "out-mau"],
  },
  {
    id: "act-5",
    title: "AI-Powered Summaries",
    description: "Auto-generate project summaries, meeting notes, and updates",
    category: "feature",
    impactScore: 8.3,
    costSize: "L",
    confidence: 71,
    customerRequests: 23,
    usageGapPercent: 40,
    estimateWeeks: 6,
    teamRequirements: [
      { role: "ML Engineer", available: false, note: "Need to hire" },
      { role: "Backend Engineer", available: true },
      { role: "Frontend Engineer", available: true },
    ],
    evidence: [
      {
        id: "ev-12",
        source: "Market Research",
        summary: "AI summarization is top-3 requested capability in B2B SaaS",
      },
      {
        id: "ev-13",
        source: "Analytics",
        summary:
          "Users spend avg 12 min/day on manual status updates — automatable",
      },
    ],
    linkedOutcomeIds: ["out-retention", "out-nps", "out-activation"],
  },
  {
    id: "act-6",
    title: "Custom Dashboards",
    description: "Drag-and-drop dashboard builder with custom widgets",
    category: "improvement",
    impactScore: 7.0,
    costSize: "L",
    confidence: 68,
    customerRequests: 16,
    usageGapPercent: 30,
    estimateWeeks: 5,
    teamRequirements: [
      { role: "Frontend Engineer", available: true },
      { role: "Designer", available: true },
      { role: "Backend Engineer", available: true },
    ],
    evidence: [
      {
        id: "ev-14",
        source: "Support Tickets",
        summary: "Dashboard is one-size-fits-all — power users need customization",
        count: 16,
      },
      {
        id: "ev-15",
        source: "Analytics",
        summary:
          "Dashboard usage declining 2.1% MoM — users switching to external BI tools",
      },
    ],
    linkedOutcomeIds: ["out-retention", "out-nps"],
  },
  {
    id: "act-7",
    title: "Hire Senior Frontend Engineer",
    description:
      "Recruit a senior frontend engineer to lead real-time collaboration and dashboard initiatives",
    category: "hiring",
    impactScore: 8.0,
    costSize: "L",
    confidence: 90,
    customerRequests: 0,
    usageGapPercent: 0,
    estimateWeeks: 8,
    teamRequirements: [
      { role: "Engineering Manager", available: true },
      { role: "Recruiter", available: true },
      { role: "HR Business Partner", available: true },
    ],
    evidence: [
      {
        id: "ev-16",
        source: "Team Capacity",
        summary:
          "Frontend team at 100% utilization — no capacity for collaboration feature",
      },
      {
        id: "ev-17",
        source: "Hiring Pipeline",
        summary: "3 candidates in pipeline, 1 at final stage",
        count: 3,
      },
    ],
    linkedOutcomeIds: ["out-retention", "out-mau"],
  },
  {
    id: "act-8",
    title: "Establish Weekly Product Review",
    description:
      "Create a structured weekly cadence to review metrics, triage customer feedback, and align priorities across eng/product/design",
    category: "process",
    impactScore: 6.5,
    costSize: "XS",
    confidence: 85,
    customerRequests: 0,
    usageGapPercent: 0,
    estimateWeeks: 1,
    teamRequirements: [
      { role: "Product Manager", available: true },
      { role: "Engineering Manager", available: true },
      { role: "Design Lead", available: true },
    ],
    evidence: [
      {
        id: "ev-18",
        source: "Retrospective",
        summary:
          "Last 2 retros flagged misalignment between eng priorities and customer demand",
      },
      {
        id: "ev-19",
        source: "Team Survey",
        summary: "62% of engineers say they lack visibility into product decisions",
      },
    ],
    linkedOutcomeIds: ["out-nps", "out-activation"],
  },
  {
    id: "act-9",
    title: "Database Read-Replica Setup",
    description:
      "Deploy read replicas for analytics queries to reduce primary DB load and improve dashboard performance",
    category: "infrastructure",
    impactScore: 6.0,
    costSize: "M",
    confidence: 88,
    customerRequests: 5,
    usageGapPercent: 15,
    estimateWeeks: 3,
    teamRequirements: [
      { role: "Infrastructure Engineer", available: true },
      { role: "Backend Engineer", available: true },
    ],
    evidence: [
      {
        id: "ev-20",
        source: "Monitoring",
        summary: "Primary DB CPU averages 78% during business hours — approaching limit",
      },
      {
        id: "ev-21",
        source: "Performance",
        summary: "Dashboard p95 latency at 1.8s — above 500ms SLO",
      },
    ],
    linkedOutcomeIds: ["out-retention", "out-nps"],
  },
];

// ---- Tickets (Next Up) ----

export const tickets: Ticket[] = [
  {
    id: "tick-1",
    title: "Implement faceted search UI",
    estimateWeeks: 1,
    category: "feature",
    labels: ["frontend", "search"],
    linkedActionId: "act-1",
  },
  {
    id: "tick-2",
    title: "Build search filter API endpoints",
    estimateWeeks: 1.5,
    category: "feature",
    labels: ["backend", "search"],
    linkedActionId: "act-1",
  },
  {
    id: "tick-3",
    title: "Add custom column selection to CSV export",
    estimateWeeks: 0.5,
    category: "improvement",
    labels: ["backend", "export"],
    linkedActionId: "act-2",
  },
  {
    id: "tick-4",
    title: "Scheduled export cron job",
    estimateWeeks: 1,
    category: "improvement",
    labels: ["backend", "export"],
    linkedActionId: "act-2",
  },
  {
    id: "tick-5",
    title: "Slack bi-directional message sync",
    estimateWeeks: 1.5,
    category: "feature",
    labels: ["integration", "slack"],
    linkedActionId: "act-3",
  },
  {
    id: "tick-6",
    title: "Slack task creation from message action",
    estimateWeeks: 1,
    category: "feature",
    labels: ["integration", "slack"],
    linkedActionId: "act-3",
  },
];

// ---- Reports ----

export const mockReport: Report = {
  id: "report-2026-03-08",
  generatedAt: "2026-03-08T10:00:00Z",
  tickets: tickets,
  audiences: {
    ceo: `# Strategic Overview — CEO Brief

## Where We Stand
ARR is at **$2.4M** (+14% QoQ) with **18,200 MAU** (+8.3%). Retention improved to 87%. Activation dropped 5pp and is the primary risk to growth trajectory.

## Strategic Bets This Quarter
1. **Search & Export improvements** — addresses 62 customer requests and unblocks $180K in enterprise pipeline. Low risk, high ROI. Shipping within 3 weeks.
2. **Slack Integration v2** — enterprise buyers expect Slack-first. Integration users retain at 2.3x the rate of non-integration users.
3. **Hiring a Senior Frontend Engineer** — required to unlock real-time collaboration, which is our highest-demand feature (41 requests). Pipeline has 3 candidates.

## Key Risks
- **Activation declining** (-5pp). Onboarding flow needs attention — recommending a process review.
- **Engineering capacity** is at 100% utilization. Without the frontend hire, collaboration and dashboards slip to Q4.
- **AI Summaries** deferred until ML engineer is hired. Competitive pressure increasing.

## Ask
Approve headcount for Senior Frontend Engineer and ML Engineer to stay on track for Q3/Q4 product goals.
`,

    engineering: `# Technical Roadmap — Engineering Spec

## Immediate (Weeks 1-3): Search & Export

### 1. Faceted Search (~3 weeks)
**Frontend (1 week)**
- Filter sidebar component with facets: date range, author, status, labels
- Debounced filter state with URL param sync
- Stack: React, shadcn/ui Select + DatePicker

**Backend (1.5 weeks)**
- Elasticsearch query builder with facet aggregations
- New \`/api/search\` endpoint with filter params
- Index migration for facet fields
- Perf target: p95 < 200ms for filtered queries

**QA + Buffer (0.5 weeks)**

### 2. CSV Export Enhancement (~2 weeks)
**Custom Columns (0.5 weeks)**
- Column config stored in user preferences
- Dynamic CSV generation from column config
- API: \`POST /api/export\` with column array

**Scheduled Export (1 week)**
- Cron job with Bull queue
- Email delivery with presigned S3 URLs
- User-configurable schedule (daily/weekly)

## Next (Weeks 4-6): Slack v2 & Infrastructure

### 3. Slack Integration v2 (~3 weeks)
- Slack Events API subscription
- Message action: "Create Task" opens modal
- Channel sync: bi-directional status updates
- OAuth 2.0 re-auth flow for Slack workspace

### 4. Database Read-Replica Setup (~3 weeks)
- Deploy read replicas on AWS RDS
- Route analytics/dashboard queries to replicas
- Target: primary DB CPU < 50%, dashboard p95 < 500ms

## Dependencies
- Elasticsearch cluster upgrade (in progress)
- AWS SES for scheduled export emails (configured)
- Read replica provisioning requires infra team bandwidth

## Team Notes
- Frontend team at capacity — collaboration feature blocked until Sr. FE hire
- Weekly product review starting to improve eng/product alignment
`,

    product: `# Product Impact Report

## User-Facing Impact This Quarter

### Search Filters (shipping in 3 weeks)
- **Problem**: 34% search abandonment rate. Users refine queries 3+ times before giving up or leaving.
- **Solution**: Faceted filters (date, author, status, labels) reduce friction to find relevant content.
- **Expected impact**: Search completion rate from 66% to 85%+. Directly improves retention and NPS.
- **User segment**: Power users (78% of WAU touch search daily).

### Export Enhancement (shipping in 2 weeks)
- **Problem**: Enterprise users cannot customize CSV columns or schedule recurring exports.
- **Solution**: Column picker + scheduled export with email delivery.
- **Expected impact**: Unblocks 3 enterprise deals. Export is our fastest-growing feature (+8.7% MoM).

### Slack Integration v2 (shipping in 5 weeks)
- **Problem**: Users context-switch between Slack and our app 12+ times/day.
- **Solution**: Create tasks from Slack messages, get status updates in channels.
- **Expected impact**: Reduces context-switching, improves activation for Slack-heavy teams.

## Activation Risk
Activation dropped 5pp to 62%. Recommended actions:
- Audit onboarding funnel for drop-off points
- Establish weekly product review to triage feedback faster
- Investigate notification fatigue (notification usage down 5.3%)

## Deferred Features
- **Real-time Collaboration**: Highest demand (41 requests) but blocked by frontend hiring.
- **AI Summaries**: Waiting on ML engineer hire. Users spend 12 min/day on manual updates.
- **Custom Dashboards**: Dashboard usage declining — users moving to external BI tools.
`,

    business: `# Business & Revenue Report

## Revenue Position
- **Current ARR**: $2.4M (+14% QoQ)
- **Pipeline at risk**: $180K in enterprise deals blocked by export limitations
- **Target**: $3.1M ARR by end of Q3

## Revenue-Impacting Initiatives

### CSV Export Enhancement — $180K ARR unlock
- 3 enterprise deals directly blocked by missing custom column export
- Small engineering cost (2 weeks), highest ROI item on the backlog
- Export usage growing 8.7% MoM — signals strong enterprise demand

### Slack Integration v2 — Enterprise positioning
- Integration users retain at 2.3x rate of non-integration users
- 4 of 6 enterprise prospects requested Slack-first workflows in discovery calls
- Positions us ahead of Competitor B (no Slack support)

### Advanced Search — Retention defense
- Search is used by 78% of WAU — core to daily experience
- All 3 top competitors have faceted search; we are behind
- Projected: +47% search completion rate reduces churn risk

## Market Position
- Competitors launched real-time collaboration features last quarter
- AI summarization is top-3 requested capability in B2B SaaS market
- Both require hiring (Sr. Frontend, ML Engineer) to address

## Hiring Impact on Revenue
- Without Sr. Frontend hire: collaboration feature slips to Q4, risking $200K+ in competitive losses
- Without ML Engineer: AI features slip to 2027, ceding ground to well-funded competitors

## Forecast
| Quarter | Projected ARR | Key Driver |
|---|---|---|
| Q2 2026 | $2.4M | Search + Export ship |
| Q3 2026 | $3.1M | Enterprise deals close + Slack v2 |
| Q4 2026 | $4.2M | Collaboration + Dashboards |
| Q1 2027 | $5.5M | AI features + expansion |
`,

    hr: `# Team & Hiring Report

## Current Team Status
- **Engineering utilization**: 100% — no spare capacity for new initiatives
- **Frontend team**: At capacity. Blocking real-time collaboration (highest customer demand feature)
- **ML/AI**: No dedicated headcount. AI Summaries feature cannot start without hire.

## Open Positions

### 1. Senior Frontend Engineer (Critical)
- **Why**: Required to lead real-time collaboration feature (41 customer requests, 9.1 impact score)
- **Impact of delay**: Collaboration feature slips from Q3 to Q4. Competitive risk increases.
- **Pipeline status**: 3 candidates in pipeline, 1 at final interview stage
- **Timeline**: Target 8 weeks to fill
- **Budget**: Engineering headcount already approved

### 2. ML Engineer (High Priority)
- **Why**: Required for AI-Powered Summaries feature (23 customer requests, 8.3 impact score)
- **Impact of delay**: AI features slip to 2027. Market is moving fast — competitors already shipping.
- **Pipeline status**: Sourcing phase. Consider ML-focused job boards and university partnerships.
- **Timeline**: Target 10-12 weeks to fill

### 3. QA Engineer (Medium Priority)
- **Why**: Slack Integration v2 needs dedicated QA. Currently no QA coverage for integrations.
- **Alternative**: Contract QA for 3-month engagement to cover Slack v2 launch
- **Timeline**: Target 6 weeks (or 2 weeks for contractor)

## Team Health Signals
- **Retrospectives**: Last 2 retros flagged misalignment between eng priorities and customer demand
- **Team survey**: 62% of engineers say they lack visibility into product decisions
- **Action**: Establishing weekly product review cadence to address alignment issues

## Recommendations
1. Expedite Senior Frontend Engineer offer — candidate at final stage
2. Open ML Engineer requisition immediately
3. Evaluate contract QA for Slack v2 to avoid blocking on full-time hire
4. Monitor team satisfaction after weekly product review is established
`,

    custom: `# Custom Report

Enter a prompt to generate a tailored report for your specific audience.

For example:
- "Summarize for the board with focus on competitive positioning"
- "Write a technical ADR for the search infrastructure changes"
- "Create a customer-facing changelog draft"
- "Prepare a hiring justification memo for finance"

*This feature will be powered by AI in a future release.*
`,
  },
};

// ---- Roadmap ----

export const roadmapData: RoadmapData = {
  quarters: [
    {
      quarter: "Q2 2026",
      revenue: "$2.4M ARR",
      revenueValue: 2400000,
      nsm: 13200,
      nsmLabel: "WAU",
    },
    {
      quarter: "Q3 2026",
      revenue: "$3.1M ARR",
      revenueValue: 3100000,
      nsm: 18000,
      nsmLabel: "WAU",
    },
    {
      quarter: "Q4 2026",
      revenue: "$4.2M ARR",
      revenueValue: 4200000,
      nsm: 24000,
      nsmLabel: "WAU",
    },
    {
      quarter: "Q1 2027",
      revenue: "$5.5M ARR",
      revenueValue: 5500000,
      nsm: 32000,
      nsmLabel: "WAU",
    },
  ],
  totalWeeks: 40,
  timelineItems: [
    {
      id: "tl-1",
      title: "Advanced Search Filters",
      startWeek: 0,
      durationWeeks: 3,
      category: "feature",
      team: "Search",
    },
    {
      id: "tl-2",
      title: "CSV Export Enhancement",
      startWeek: 1,
      durationWeeks: 2,
      category: "improvement",
      team: "Platform",
    },
    {
      id: "tl-3",
      title: "Weekly Product Review Cadence",
      startWeek: 2,
      durationWeeks: 1,
      category: "process",
      team: "Leadership",
    },
    {
      id: "tl-4",
      title: "Slack Integration v2",
      startWeek: 4,
      durationWeeks: 3,
      category: "feature",
      team: "Integrations",
    },
    {
      id: "tl-5",
      title: "Database Read-Replica Setup",
      startWeek: 5,
      durationWeeks: 3,
      category: "infrastructure",
      team: "Infrastructure",
    },
    {
      id: "tl-6",
      title: "Hire Senior Frontend Engineer",
      startWeek: 2,
      durationWeeks: 8,
      category: "hiring",
      team: "Engineering",
    },
    {
      id: "tl-7",
      title: "Real-time Collaboration",
      startWeek: 14,
      durationWeeks: 10,
      category: "feature",
      team: "Frontend",
    },
    {
      id: "tl-8",
      title: "Custom Dashboards",
      startWeek: 20,
      durationWeeks: 5,
      category: "improvement",
      team: "Frontend",
    },
    {
      id: "tl-9",
      title: "AI-Powered Summaries",
      startWeek: 26,
      durationWeeks: 6,
      category: "feature",
      team: "ML/Backend",
    },
    {
      id: "tl-10",
      title: "Workflow Automation",
      startWeek: 32,
      durationWeeks: 6,
      category: "feature",
      team: "Platform",
    },
  ],
};
