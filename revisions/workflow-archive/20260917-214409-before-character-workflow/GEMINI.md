# Gemini / Antigravity Entry Point

Treat `AGENTS.md` as the repository-level operating contract and `.agents/rules/` as the detailed rules. Read `author/session-state.md` immediately afterward.

## Current state

No chapter is canonized after the 2026-09-16 reset. Rejected prose must not be recovered or used as a model unless the author explicitly requests historical comparison.

The old `revisions/chapter-work/CH-01/` workspace is preserved but superseded. The active restart is `CH-01-v2`.

## Context is role-specific

- Preflight and safety roles read the relevant directives, decisions, continuity, plot, character, matrix, and verified research sources.
- Writer reads only the approved `writing-brief.md` plus immediate accepted preceding prose when the brief requires it.
- Literary reviewer reads candidate prose blind before any specification.
- Reviser reads the candidate and both independent reviews; authority sources are opened only for cited safety conflicts.

Do not preload all directives or the style bible into Writer or Literary Reviewer context. This firewall preserves creativity while the later safety pass preserves hard truth.

## Active chapter workflow

1. `/hr-preflight` → internal `preflight.md` + short `writing-brief.md`
2. `/hr-write` → prose-only `draft.md`
3. `/hr-review` → blind `literary-review.md`
4. `/hr-safety` → `safety-review.md`
5. `/hr-revise` → prose-only `revised.md` + separate `revision-audit.md`
6. fresh dual review after meaningful changes
7. `/hr-canonize` after literary PASS, safety PASS, and explicit author acceptance

Never use chat memory, generated indexes, deprecated decision IDs, or rejected Git history as a substitute for current repository truth. At the end of a meaningful session, refresh `author/session-state.md` only when status or next action actually changes.
