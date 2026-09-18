# Creative–Safety Workflow Redesign — 2026-09-17

## Decision

The author approved replacing the project-wide chapter workflow immediately and preserving the old CH-01 workspace.

## Problem addressed

The former pipeline exposed Writer and Reviewer to the same dense directives, preflight matrix, technique gates, mandatory spans, word-count bands, and “smallest intervention” bias. That encouraged prose which visibly fulfilled specifications while weakening natural dialogue, character desire, subtext, surprise, and scene life.

## Active design

1. Preflight performs authority-heavy work and produces an internal safety card plus a short writer brief.
2. Writer receives only the brief and writes prose without audit appendices.
3. Literary review is blind and page-first.
4. Safety review separately checks canon, chronology, knowledge, reveal, durable state, and factual claims.
5. Revision may be substantial for systemic literary failure; safety repairs remain narrowly bounded.
6. Manuscript prose and audit records stay in separate files.
7. Canonization requires literary PASS, safety PASS, and author acceptance for the same candidate.

## Migration

- `revisions/chapter-work/CH-01/` is preserved and marked superseded.
- `revisions/chapter-work/CH-01-v2/` is the active restart workspace.
- The new workflow adds `/hr-safety` and `hr-source-safety`.
- Combined `review.md` is retired for new work in favor of `literary-review.md` and `safety-review.md`.

## Deliberate removals

- mandatory full-context loading for Writer;
- mandatory style-bible/directive loading for literary review;
- fixed word-count band;
- mandatory four quoted spans;
- sensory, physicality, clue, animal, ambiguity, or clipped-dialogue quotas;
- `Open Issues & Claim Delta` inside prose;
- revision audit embedded in `revised.md`;
- universal smallest-diff rule for literary repair.

Hard canon, cultural-fact, author-approval, fresh-review, and validation gates remain active.
