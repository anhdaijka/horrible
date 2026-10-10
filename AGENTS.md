# Horrible — Agent Contract

`anhdaijka/horrible@main` is the active workspace for this long-form fiction project.

## Startup and authority

1. Read `author/session-state.md` first. Exception: a fresh literary reviewer with an exact workspace reads locator-only `candidate.md` and the full prose before state or diagnosis.
2. The author's newest direct instruction outranks repository documents. Current source outranks memory, summaries and historical artifacts.
3. Use `.agents/rules/02-context.md` for role-specific context. Generated bibles are navigation aids; authority remains in current `author/`, `continuity/`, `plot/`, `characters/` and `research/verified/`.
4. Do not silently canonize, retcon or convert development material into manuscript authority. Case Zero currently follows D-008 (2026-10-07) and the active arc: apparent suicide, human murder, independent Thoa tragedy, ongoing Cường haunting, late Thắng reveal. No police/forensic discovery engine or mandatory ghost order; older dependent packets are stale for this design.

## Historical opening-reset guard

The old Tiếng chợ / Người đặt prototypes, rejected Chapter 1–2 implementation, replacement Chapters 1–6 removed on 2026-09-16, and CH-01 workspaces removed on 2026-09-18 are historical only. Do not recover, reconstruct or use removed attempts as a prose model from Git, chats, reports or archives without explicit author instruction. No chapter is currently canonized; session-state tracks subsequent changes.

## Creative freedom and truth

Operational requests for concise, brief or structured responses govern communication, not manuscript rhythm, dialogue length or narrative density.

Inside approved design, Writer owns wording, rhythm, local action, scene micro-order, dialogue, silence, summary, interiority in approved viewpoint and non-durable detail. Consult targeted sources for missing established facts. Ask only for an unresolved material choice changing purpose/outcome, chronology/location, knowledge/reveal order, relationship trajectory, durable state or supernatural rules. Approval already given remains valid within its scope.

Concrete cultural, ritual, religious, professional and legal claims require relevant verified research. Otherwise research, omit or frame them accurately as family-specific fiction, character belief or hearsay. Keep research fact, testimony, observed event and author-canon supernatural truth distinct.

## Roles and workflow

The composition contract has one home: `.agents/rules/04-drafting.md`. Skills and workflows route to it; do not duplicate its instructions in packets.

| Task | Route | Owning instruction |
|---|---|---|
| Discover and prepare | /hr-preflight | .agents/rules/03-planning.md |
| Write and self-edit | /hr-write | .agents/rules/04-drafting.md |
| Independent literary review | /hr-review | .agents/rules/05-review.md |
| Verify story/factual safety | /hr-safety | .agents/skills/hr-source-safety/SKILL.md |
| Revise | /hr-revise | .agents/skills/hr-source-revision/SKILL.md |
| Accept and promote | /hr-canonize | .agents/workflows/hr-canonize.md |

Natural-language requests use the same roles; slash commands are optional conveniences. Planning first gives a lightweight source/plot check, then develops the author-supplied beat sequence into enough human and material substance to inhabit. If the sequence is absent, record AWAITING_AUTHOR_BEATS; do not select a replacement scene route. Author intent and consequential beat order are binding, while Writer keeps local composition freedom. No mandatory questionnaire, technique, subplot count or plot-density target.

Writer completes generation before QA-informed self-edit. Candidate identity stays separate from rationale. Literary review records an actual fresh reading before context; safety checks consequential contradictions and real-world claims. Techniques are optional; literary findings need evidence of reader-facing harm. See `docs/playbooks/literary-quality.md`.

Canonization requires complete-chapter scope, fresh independent literary PASS, safety PASS, explicit acceptance of the same candidate and approved durable-state diff. Reviews bind to exact bytes and consequential authority basis; changed bytes require renewed review, changed dependencies require affected-scope recheck. Self-edit is not independent review.

Preserve workspaces and candidates; use new suffixes on restart. After acceptance, apply approved state, update continuity and `plot/di-tuong-registry.md`, and run relevant validation. Check new manifestations for reuse against that registry and current canonized prose.

Upstream generic writing skills remain explicit-only. If named by the author, they are bounded aids; they cannot write directly to `chapters/`, canonize or impose universal craft rules.

## Tooling and Git

Use checks for concrete changes: story validation for accepted state; `npm run workflow:check` for route/install/reset integrity after tooling changes. No per-turn workflow audit or literary phrase gate. Structural checks cannot certify story meaning or prose quality.

Preserve unrelated changes. Prefer semantic prefixes: plan:, draft:, revise:, canon:, research:, style:, workflow:. Do not auto-commit every operation. Snapshot actual working-tree instructions before broad redesign; archives are not active context.

## Model routing — OpenAI first

Default to currently available OpenAI models. Gemini is an optional author-selected alternative, not the main agent or a prerequisite. This allocation is provisional, not a benchmark of Vietnamese literary quality.

| Next task | Default | Raise only for a concrete need |
|---|---|---|
| Links, format, short mechanical checks | GPT-6 Luna / low | Source conflict or semantic judgment → GPT-6 Sol / medium |
| Source compilation, continuity sync, ordinary workflow work | GPT-6 Sol / medium | Many consequential dependencies → GPT-6 Astra / high |
| Draft, independent literary review, execution revision | GPT-6 Sol / medium | Opening/reveal or difficult voice/structure diagnosis → GPT-6 Astra / medium |
| Multi-arc design, major canon/reveal conflict | GPT-6 Astra / high | Higher effort only for a named unresolved coordination problem |

Verify availability on the current host. Disclose substitutions; do not invent model IDs or silently revert to Gemini. Higher reasoning helps difficult design decisions; it does not guarantee natural prose. A model change alone does not establish review independence.

Catalog checked 2026-09-23: https://developers.openai.com/api/docs/models
Refresh when changing routing, not on every chapter.

## Task reporting format

Every compatible repository-task response ends with:

**Changed files:**
- `<path>` — <what changed; or None>

**Resulting commit:** `<actual commit; or Not committed>`

**Next-step recommendation:** <concrete next task> → <model> / <effort> — <concrete reason>. Use None if no next action is authorized.
