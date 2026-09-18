# Session Operations

Novel OS separates three kinds of memory:

1. **Current author authority** — newest direct instruction, `author/decisions.md` and applicable directives/boundaries.
2. **Accepted manuscript/state** — approved chapters and structured continuity consistent with author authority.
3. **Session memory** — `author/session-state.md`. Operational only; never canon.

## Start a session

Use `prompts/session/start-session.md`. The Agent should establish current state and a context manifest before creative work.

## Planning

Use `prompts/session/plan-next-chapter.md`. A material unresolved story choice ends AWAITING_AUTHOR; source-resolvable and execution questions do not. Author approval settles the choice presented, while the planner separately establishes packet readiness and causal sufficiency.

## Drafting

Use `prompts/roles/writer.md` only against a current READY packet for canonical-intended prose. Approval alone is insufficient when a dependency is stale. First complete a generative pass from `writing-brief.md`, `scene-ecology.md`, `character-context.md` and relevant accepted prose; do not load the discovery slate or rejected engines. Only then open `qa-card.md` and its named hard-source excerpts for self-edit. Exploratory prose must be labeled provisional.

## Review

Use `prompts/session/review-current-chapter.md`. A fresh literary reviewer given an exact workspace reads locator-only candidate.md and prose before session-state/context. It protects working strengths and separates material defects from optional experiments. Deterministic failures, material safety contradictions and literary judgment stay distinct but may cross-reference the same causal issue.

## Canonization

Use `prompts/session/canonize-approved.md` only after a canon diff has been shown and explicitly approved.

## End a session

Use `prompts/session/end-session.md`. Keep session-state concise and link-oriented so it does not become a second story database.
