# Design-dialogue workflow correction — 2026-09-17

## Cause
Prior workflow checked inherited approval and fact sufficiency but did not require evaluating the reader experience before projecting it into a packet. It conflated a safe chronology with an effective and current chapter order. The session router explicitly discouraged reopening the three-scene design.

## Implemented
Design-dialogue gate in shared playbook and preflight entrypoints. Distinguish source lookup, autonomous execution, already-decided choices and author-design choices. Show editorial options/tradeoffs/recommendation; wait on consequential unresolved questions. No mandatory question quota or repetitive approval ceremony.
Drafting checks stale/pending packet status. Shared playbook extends the boundary to revision, contextual review and safety without compromising blind first reading.
D-003 records the author's explicit CH-01 morning14 / CH-02 mùng10 flashback direction, not approval of the remaining recommendations. Arc, timeline, matrix and continuity updated accordingly.
CH-01-v3 preflight/brief superseded for drafting; candidate next step updated. Scene bytes unchanged. Active state is AWAITING_AUTHOR in opening-design-dialogue-v2.md, with three focused questions and recommendations.
Snapshot preserves 17 affected working-tree files; manifest verified.

## Changed active files
- .agents/rules/03-planning.md
- .agents/skills/hr-source-preflight/SKILL.md
- .agents/workflows/hr-preflight.md
- .agents/rules/writing-workflow.md
- .agents/rules/04-drafting.md
- templates/chapter-preflight.md
- AGENTS.md
- docs/playbooks/horrible-craft-review.md
- author/decisions.md
- plot/timeline.md
- plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md
- plot/case-zero-clue-and-epistemic-matrix.md
- continuity/state.md
- author/session-state.md
- revisions/chapter-work/CH-01-v3/preflight.md
- revisions/chapter-work/CH-01-v3/writing-brief.md
- revisions/chapter-work/CH-01-v3/candidate.md
- templates/design-discussion.md
- development/horrible/opening-design-dialogue-v2.md
- This report; historical snapshot and manifest.

## Checks and boundaries
- hr-source-preflight quick_validate: PASS.
- npm run tooling:check: PASS.
- npm run story:check: validation/links/continuity PASS, zero errors/warnings.
- git diff --check: PASS.
- 17 snapshot manifest entries verified.
- scene-trial.md SHA-256 unchanged: A598EDFB6F117B1E2AFCAB6544DE8D1CAE3E9DCEED3C3FC68E9ECA478C3C3864.
- Initial snapshot JSON output exceeded tool output limit; copies and equality checks had completed. Reread source files separately and regenerated manifest from the snapshot, then verified it.
- Live bounded application: no replacement preflight/prose produced; three story questions remain pending. This is not independent behavioral benchmarking of every agent stage.
- No web research required for this repo-specific workflow correction. No new cultural claims.
- No commit. No canonized manuscript. Questions and recommendations are not approvals.

## Remaining action
Await author choices. Then update the design and reveal allocation, prepare a fresh packet. Do not resume from obsolete v3 order. Skill-creator favored one shared decision boundary with small role entrypoint changes over another rigid craft checklist.
