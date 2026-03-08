# TeamAligner

Alignment decision workspace for product teams — track outcomes, prioritize actions with AI-powered recommendations, and generate stakeholder-ready roadmap reports.

## Features

- **Product Pulse** — Feature usage grid with outcome contribution analysis
- **Action Recommendations** — Inbox → Todo workflow with drag-to-reorder, impact/cost/confidence scoring, and evidence links
- **Roadmap Reports** — Auto-generated reports tailored per audience (CEO, Engineering, Product, Business, HR, Custom)
- **Outcome Tracking** — Filter everything by business outcomes (Revenue, MAU, Retention, NPS, Activation)
- **Roadmap Timeline** — GitHub Projects-style horizontal bar visualization across quarters

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router) + React 19
- TypeScript 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [dnd-kit](https://dndkit.com/) (drag & drop)
- [shadcn/ui](https://ui.shadcn.com/) components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Main page (Outcomes → Pulse → Actions)
│   └── report/[id]/page.tsx    # Shareable report page
├── components/
│   ├── Header.tsx              # App header with repo selector
│   ├── OutcomeBar.tsx          # Outcome filter chips
│   ├── ProductPulse.tsx        # Feature usage grid
│   ├── FeatureCard.tsx         # Individual feature card
│   ├── ActionRecommendations.tsx # Inbox/Todo with drag-to-reorder
│   ├── ActionItem.tsx          # Single action recommendation card
│   ├── EvidencePanel.tsx       # Evidence sources display
│   ├── ReportView.tsx          # Multi-audience report viewer
│   └── RoadmapTimeline.tsx     # Quarter-based timeline chart
├── data/
│   └── mock.ts                 # Demo data (replace with API later)
└── types/
    ├── index.ts                # Core type definitions
    └── roadmap.ts              # Roadmap/timeline types
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT
