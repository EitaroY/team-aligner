# TeamAligner Folder Structure

## Goal
UI mock phase (HTML/CSS/JS) and production TypeScript code should coexist in one repository without confusion.

## Proposed Structure

```text
team-aligner/
  apps/
    web/                    # Future product frontend (TypeScript)
    api/                    # Future backend/API (TypeScript)
  packages/
    ui/                     # Shared UI components/tokens
    domain/                 # Core decision/alignment domain logic
    types/                  # Shared TypeScript types/contracts
    config/                 # Shared tsconfig/eslint/prettier etc.
  prototypes/
    ui-mocks/               # Current HTML/CSS/JS mock playground
      index.html            # Pattern comparison entry
      styles.css            # Shared visual language
      mock-data.js          # Dummy data + simple interactions
      patterns/
        pattern-01-timeline.html
        pattern-02-decision-room.html
        pattern-03-option-lab.html
        pattern-04-execution-bridge.html
        pattern-05-alignment-radar.html
  docs/
    folder-structure.md
```

## Why this works
- Keep `prototypes/ui-mocks` disposable and iteration-friendly.
- Keep `apps` and `packages` clean for maintainable product TypeScript implementation.
- Preserve shared language early: cards, taxonomy, and terminology can later move from `prototypes` into `packages/ui` and `packages/domain`.
