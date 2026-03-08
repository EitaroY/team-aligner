# TeamAligner UI Mock

## Entry
- `/Users/eitaroxbonx/projects/team-aligner/prototypes/ui-mocks/index.html`

## What this mock does
Single-screen priority workbench for alignment decisions:
- Connect GitHub and user monitoring data sources (mocked connection flow)
- Show product/feature usage snapshot
- Rank next features using composite scoring
  - customer impact
  - user expectation
  - strategic fit
  - dev cost (inverse)
- Show `Now` and `Future` priority lists
- Provide sortable ticket cards
- Generate roadmap report from ticket order + effort
  - Executive
  - Engineering
  - Business
  - optional custom prompt

## Files
- `index.html`: screen layout
- `workbench.css`: minimal visual style
- `workbench.js`: dummy data, scoring, sorting, report generation

## Note
This is a static mock. External integrations are simulated for UI/IA validation.
