# Workflow packages A–C implementation — 2026-09-18

## Result

All three packages approved in `workflow-end-to-end-audit-2026-09-18.md` were implemented. This changes process, templates, routing and deterministic safeguards; it does not approve a story-level explanation for the mùng 10 order, revise CH-01-v4 prose or canonize a chapter.

The pre-change operating contract is preserved under `revisions/workflow-archive/20260918-before-end-to-end-repair/` with a SHA-256 manifest.

## Package A — causal readiness and clean review intake

- Author approval and planner readiness are separate. A decision receipt covers only choices actually presented.
- Preflight now tests only consequence-bearing hinges: perception → available inference → choice → consequence, including causes narrated in a later chapter.
- Source-resolvable, execution and author-decision gaps remain distinct. A failed recommendation must be replaced with pressure-tested options rather than offloaded to the author.
- Relevant recurring failures travel as mechanism-level tests, not rejected prose or mandatory old repairs.
- Writer self-edit checks named hinges and classifies cross-scene deltas separately from local texture.
- `candidate.md` is locator-only. Self-edit, deltas, review state and next action live outside blind intake in `writer-handoff.md` and session-state.
- A fresh literary reviewer reads locator + complete prose before session-state, handoff, packet, prior findings or rationale. Contaminated context cannot simulate a blind phase or issue independent PASS.
- CH-01-v4 was migrated to the locator/handoff split, given regression checks and marked STALE_CAUSAL_BASIS without changing its prose.

## Package B — freshness, revision paths and behavioral evaluation

- Candidate/reviews/diff now carry an opaque consequential authority-basis ID plus named basis. Change it only when an affecting dependency changes.
- Affected changes to author decisions or source dependencies require scoped recheck even if prose hash is unchanged; unrelated source edits do not force global review.
- Revision may proceed on explicit author feedback while a review lane is missing, but must record that absence and remains ineligible for promotion.
- Canonization ties exact candidate bytes, basis, both current reviews, canon diff and author acceptance.
- `evals/horrible-workflow-regressions.md` adds twelve paired failure/valid cases, including causal implication, reveal-protective behavior, partial witness, dialogue form, contamination, source freshness, delta classification and mutation boundaries.
- Lifecycle output now says explicitly that it is a deterministic golden-fixture pass and does not exercise agent behavior or certify literary quality.

## Package C — auxiliary paths and operational preservation

- Root routing explicitly prevents generic writing/revision skills from writing directly into Horrible canon or bypassing gates.
- Export may directly fix only an explicitly authorized typo/format correction; substantive discoveries route back through review/approval.
- `bootstrap --clean` now preserves project-owned `hr-source-*` skills and rejects upstream collisions with that namespace.
- `scripts/workflow-contract-test.mjs` tests the bootstrap-clean policy in an isolated temp directory and verifies critical workflow wiring.
- Tooling CI now runs the workflow contract test after a real clean bootstrap on Windows and Linux and watches project rule/skill/workflow paths.
- README, getting-started, supply-chain, lifecycle, session and workflow docs now state the same boundaries and limits.
- Directive/style authority language now makes newer explicit author decisions dominant and older technique prescriptions optional unless specifically locked.
- Session-state and continuity handoff now agree that v4 prose exists, retains its hash, has a stale packet and no literary/safety PASS or author acceptance.
- The old recognition proposal is retained as an unapproved alternative and no longer presented as the default repair.

## Validation

- `npm run tooling:check` — PASS.
- `npm run workflow:check` — PASS; isolated bootstrap policy and contract wiring. Output explicitly reports `literaryQualityCertified: false`.
- `npm run story:check` — PASS; validate/links/continuity all 0 errors and 0 warnings.
- `npm run lifecycle:test` — PASS as `deterministic-fixture-pass`; output explicitly reports `agentBehaviorExercised: false` and `literaryQualityCertified: false`.
- Five `hr-source-*` skills through skill-creator `quick_validate.py` — PASS.
- `git diff --check` — PASS; line-ending warnings only.
- CH-01-v4 draft SHA-256 remains `A45B5266C867B138A34FC1706EE20D77355F4033935D507C59FD25D755D33864`.
- Archive `SNAPSHOT.md` SHA-256: `9F3538387F4CE5A5279284A16ECBC9076F53C3D4246F32252B045DB769BD0BB9`.

## Validation limits and remaining gate

The paired manual/model evaluation has been authored but not run against independent agents in this task. Deterministic PASS proves wiring, preservation and structured integrity only. It does not prove future prose quality.

The next story operation remains a bounded renewed design dialogue for the CH-01↔CH-02 order-recognition dependency. D-004 presentation order remains approved. The prior “Cường asked her to order” proposal remains unapproved and insufficient as a sole option. No prose revision should begin until that story-level hinge is resolved.
