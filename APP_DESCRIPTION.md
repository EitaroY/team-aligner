# TeamAligner - Product Decision & Alignment Platform

## Overview

TeamAligner is a powerful TypeScript-based platform that helps product teams make better decisions and stay aligned. It transforms scattered signals from various sources into clear, evidence-backed decisions and actionable next steps. Think of it as your team's decision-making command center that ensures everyone is facing the same direction.

## What TeamAligner Does

TeamAligner acts as a unified decision layer that:
- **Connects disparate data sources** - Integrates with GitHub, analytics tools, CRM systems, support tickets, and more
- **Synthesizes evidence** - Groups related signals into coherent decision evidence
- **Generates recommendations** - Provides prioritized actions based on data-driven insights
- **Creates execution artifacts** - Produces ready-to-use PRDs, experiment briefs, and task drafts
- **Maintains alignment** - Keeps cross-functional teams synchronized around shared goals

## Getting Started with TeamAligner

### Step 1: Access the Priority Workbench

Open the TeamAligner Priority Workbench by navigating to the main application interface. This is your central hub for managing priorities and making data-driven decisions.

### Step 2: Connect Your Data Sources

1. **Connect GitHub Repository**
   - Click the "Connect" button next to GitHub Repository
   - This will import your issues, pull requests, changelog, and velocity metrics
   - Status will change from "Not connected" to "Connected" when successful

2. **Connect User Monitoring**
   - Click the "Connect" button next to User Monitoring
   - This integrates analytics data, support logs, and session events
   - Status will update to show successful connection

### Step 3: Load Your Data Snapshot

Click the **"Load latest snapshot"** button to:
- Refresh all data from connected sources
- Update priority recommendations
- Recalculate ticket rankings
- Generate new insights based on current data

### Step 4: Review Your Product Snapshot

The Product Snapshot panel shows you:
- **Key Metrics**: Active users, feature adoption rates, delivery velocity
- **Feature Utilization Table**: 
  - Current usage percentages for each feature
  - Month-over-month changes
  - Customer expectation levels
  - Helps identify underutilized features or areas needing attention

### Step 5: Understand Priority Recommendations

The Priority Engine panel displays:
- **Now (0-2 months)**: Immediate priorities that should be addressed first
- **Future (3-6 months)**: Strategic initiatives for medium-term planning

Each item shows a calculated score based on:
- Customer value
- User expectation
- Strategic fit
- Delivery speed (inverse of cost)

### Step 6: Manage Feature Tickets

In the Next Feature Tickets panel:
- **View current ticket order** based on priority scores
- **Manually reorder tickets** using up/down controls if needed
- **Apply automatic sorting**:
  - Click "Reset to Now score order" to prioritize immediate needs
  - Click "Sort by Future score" for strategic planning view

### Step 7: Generate Reports

The Roadmap Report Output panel allows you to:

1. **Select your audience**:
   - Executive: High-level strategic view
   - Engineering: Technical implementation focus
   - Business: Revenue and customer impact emphasis

2. **Add custom instructions** (optional):
   - Use the prompt field to add specific requirements
   - Example: "Emphasize competitive positioning and Q3 revenue impact"

3. **Click "Output"** to generate:
   - Audience-tailored roadmap report
   - Evidence-backed recommendations
   - Clear next steps and rationale

## Key Features and How to Use Them

### Goal and Outcome Modeling
- View company mission, vision, and strategic themes
- Track OKRs and North Star metrics
- Monitor product outcomes and initiative progress
- See owner accountability assignments

### Evidence Synthesis
The platform automatically:
- Clusters related customer issues
- Links KPI changes to release history
- Connects support trends to adoption friction
- Maps sales objections to product gaps

### Decision Workspace
Access comprehensive decision support:
- Review synthesized evidence
- Compare multiple options
- View system recommendations with explanations
- Generate draft actions for implementation

### Alignment Workflows
Use TeamAligner for:
- Weekly product reviews
- Quarterly planning sessions
- Launch readiness assessments
- Post-incident prioritization
- Metric-driven roadmap updates

## Best Practices

1. **Regular Data Updates**: Load snapshots weekly or before important decisions
2. **Cross-functional Input**: Ensure all teams contribute their signals
3. **Manual Override When Needed**: Use manual reordering when you have context the system doesn't
4. **Audience-Specific Reports**: Always tailor reports to your stakeholder's needs
5. **Track Decision History**: Review past decisions to improve future ones

## Tips for Effective Use

- **Start with connections**: Always connect all available data sources for comprehensive insights
- **Review metrics first**: Understand current performance before diving into priorities
- **Use custom prompts**: Add specific context to generate more relevant reports
- **Iterate on priorities**: Don't hesitate to reorder based on new information
- **Export for meetings**: Generate reports before stakeholder meetings for data-backed discussions

## Common Workflows

### Weekly Priority Review
1. Load latest snapshot
2. Review metric changes in Product Snapshot
3. Check Now priorities for immediate action items
4. Generate engineering-focused report for sprint planning

### Quarterly Planning
1. Connect all data sources
2. Load comprehensive snapshot
3. Review Future priorities (3-6 months)
4. Manually adjust ticket order based on strategic goals
5. Generate executive report with custom prompt for board presentation

### Customer Issue Response
1. Load latest snapshot with fresh support data
2. Review Feature Utilization for problem areas
3. Identify related tickets in priority queue
4. Reorder to address critical customer pain points
5. Generate business report showing response plan

## Support and Feedback

TeamAligner continuously evolves based on user needs. The platform learns from your decisions and improves recommendations over time. Use the evidence-backed insights to make confident decisions while maintaining the flexibility to override when your expertise indicates a different path.

Remember: TeamAligner is your decision support system, not a replacement for human judgment. It provides the evidence and recommendations, but you make the final call based on your deep understanding of your product and customers.