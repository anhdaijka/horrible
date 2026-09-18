# Discovery-Led Preflight + Scene Ecology implementation

Date: 2026-09-18  
Scope: workflow, roles, templates and evaluations; no prose or canon promotion

## Outcome

Horrible chapter preparation now begins by discovering a living ghost-horror scene rather than immediately translating an approved outcome into plot beats. Truth/canon verification remains fail-safe, but it follows divergent creative exploration instead of defining the entire creative field.

The workflow explicitly preserves the project's genre identity: contemporary Vietnamese ghost/spiritual horror with mystery architecture in which the reader may assemble stronger hypotheses than any single character. Khanh remains a cognitive bridge, not the sole detective.

## New preparation architecture

1. `discovery-slate.md` is internal divergent work. It separates fixed truth from execution space, identifies life already moving, explores materially different scene engines and selects for lived motion, horror pressure and reader-detective opportunity.
2. `preflight.md` verifies the selected engine for both truth readiness and creative readiness. It rejects a packet whose every supplied element exists only to carry main plot.
3. `writing-brief.md`, `scene-ecology.md` and `character-context.md` form generative context. Rejected engines, long exclusions, QA and regression material remain outside.
4. `qa-card.md` opens only after a complete draft and checks hard truth, horror/mystery promise and demonstrated plot-dominance risk without imposing side-story or clue quotas.

## Scene ecology boundary

Scene ecology is an affordance field, not a beat sheet. It may supply independent wants, ordinary work, household activity, social traffic, material processes, temporary encounters, horror intrusion and clue surfaces. Writer may select, combine, transform or omit them.

Inventions are classified by consequence:

- transient interaction, local inconvenience and chapter-local life: Writer freedom;
- cross-scene promise, established backstory, custody/state change, future meeting or durable knowledge: candidate delta;
- material change outside approved purpose/outcome, reveal architecture, relationship trajectory or supernatural truth: author decision.

This removes the prior incentive to avoid life merely because it was not already canonized.

## Horror and reader-as-detective

- Preparation asks for a specific ghostly, dreadful, spiritual or contaminating experience, not merely a name/date discrepancy.
- The main plot should intrude upon or recontextualize an ordinary world that already has causes and pressures of its own.
- Fair evidence may be distributed across viewpoints, testimony, objects, records, routines and omissions.
- The packet states what remains observable, not the correct deduction or mandatory staging.
- Atmosphere, affection and incidental life may remain non-clues. A concentrated scene is allowed when concentration strengthens the horror.

## Preservation

The immediately preceding post-Creativity-Firewall workflow is preserved at `revisions/workflow-archive/20260918-before-discovery-led-preflight/`: 34 captured source files plus its archive notice.

No Case Zero prose or canon was changed. CH-01-v4 retains SHA-256 `A45B5266C867B138A34FC1706EE20D77355F4033935D507C59FD25D755D33864`.

## Validation

Passed:

- `npm run skills:firewall` — 16 upstream skills explicit-only; five project roles preserved.
- `npm run tooling:check`.
- `npm run workflow:check`.
- `npm run story:check` — validation, links and continuity: 0 errors, 0 warnings.
- `npm run lifecycle:test` — deterministic lifecycle fixture passed; it does not exercise agent behavior or certify prose.
- `quick_validate.py` for all five `hr-source-*` skills.
- `git diff --check` — no whitespace errors; only Windows line-ending notices.
- Independent Sol/high forward test: `evals/runs/2026-09-18-discovery-led-preflight-forward-test.md`.

## Next proof boundary

The workflow is ready for a real discovery-led CH-01↔CH-02 preflight. That operation must create a fresh CH-01-v5 packet and may not reuse CH-01-v4 prose as a model. The useful test is whether the selected morning-14 engine gives the shop, family and neighborhood lives of their own while the order and household call still land as memorable horror and fair mystery.
