# Creativity Firewall + generative/QA separation

Date: 2026-09-18  
Scope: workflow only; no prose or canon promotion

## Outcome

The active Horrible workflow now protects drafting from two different sources of flattening: implicit collision with upstream craft skills and premature exposure to verification material. Upstream skills remain available when explicitly invoked, but ordinary Horrible chapter requests route through the project roles alone. Writer generation and QA-informed self-edit are separate context phases.

## Implemented controls

### 1. Runtime creativity firewall

- `scripts/lib/skill-install-policy.mjs` classifies project-owned `hr-source-*` roles and applies `allow_implicit_invocation: false` to installed upstream skills.
- `scripts/bootstrap.mjs` reapplies the policy after every upstream installation and protects the project-owned namespace during clean/install.
- `scripts/apply-creativity-firewall.mjs` plus `npm run skills:firewall` repairs an existing installation without reinstalling.
- The isolated workflow contract test verifies both sides: an upstream fixture becomes explicit-only and a project role remains untouched.

### 2. Context firewall

- Preflight now produces four distinct artifacts: internal `preflight.md`, generative `writing-brief.md` + `character-context.md`, and post-generation `qa-card.md`.
- The generative pass receives situation, relationships, shared history, practical pressures and current knowledge without regression history, safety checks, old solutions, body-language menus or sample dialogue.
- Only after a complete draft exists may Writer open the QA card and its named hard-source excerpts for self-edit.
- `candidate.md` remains locator-only; phase evidence and deltas remain in `writer-handoff.md`.

### 3. Narrower QA and revision authority

- Safety now flags impossible knowledge, incompatible later action/state or dropped material obligations. Silence, delayed processing and ordinary nonreaction are permitted.
- Literary review classifies `BLOCKER`, `MATERIAL_DEFECT` and `OPTIONAL_EXPERIMENT`, names protected strengths and cannot fail a candidate on optional preferences alone.
- Revision repairs selected material problems while preserving strengths instead of averaging every suggestion into the prose.

### 4. Craft-source deactivation

- The style bible is a reference-only library and is no longer default drafting context.
- POV percentages, transition formulas, fixed anchor counts, universal physiological reactions and blanket scene-pressure rules were removed from active guidance.
- Character files may retain descriptive reservoirs, but packet construction may project only facts, relationships and scene-relevant lived context—not catchphrases or performance recipes.

## Preservation

The prior workflow source is preserved at `revisions/workflow-archive/20260918-before-creativity-firewall/`. The snapshot contains 60 captured source files plus its later archive notice. It is historical evidence, not current authority.

CH-01-v4 prose was not changed. Its SHA-256 remains `A45B5266C867B138A34FC1706EE20D77355F4033935D507C59FD25D755D33864`.

## Validation

Passed:

- `npm run skills:firewall` — 16 upstream skills explicit-only; five `hr-source-*` roles preserved.
- `npm run tooling:check`.
- `npm run workflow:check` — deterministic contract and isolated install/clean behavior.
- `npm run story:check` — schema, links and continuity: 0 errors, 0 warnings.
- `npm run lifecycle:test` — deterministic three-chapter fixture passed; it explicitly does not certify agent behavior or literary quality.
- `quick_validate.py` for all five `hr-source-*` skills.
- `git diff --check` after whitespace repair.
- Independent Sol/high forward test recorded at `evals/runs/2026-09-18-creativity-firewall-forward-test.md`.

## Remaining boundary

The firewall removes known instruction pressure; it cannot manufacture taste or guarantee a living chapter. The first real proof is a fresh CH-01-v5 packet followed by a new draft—not a repair of v4—and blind literary/safety review against exact bytes. That next packet should preserve the approved opening order and the author's family-trade reality while leaving scene execution to Writer.
