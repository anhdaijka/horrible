# Workflow snapshot — before packages A–C

Captured from the working tree on 2026-09-18 before the approved end-to-end workflow repair. This is historical material, not active instruction. It preserves the active Horrible rules, role skills and command workflows that the repair replaces. Templates, prompts and scripts remain recoverable from the surrounding working-tree history and the audit report; this bundle captures the operating contract itself.

## `.agents/rules/00-authority.md`

```markdown
# Author Authority — Always On

- The human author is the final authority on canon, theme, plot direction, style, and acceptance.
- Treat every AI-created new durable fact as a proposal until explicitly approved.
- Never silently retcon, canonize, delete canon, or reinterpret an explicit author decision.
- If a requested creative action conflicts with existing canon, surface the conflict and offer options instead of silently choosing one.
- `author/decisions.md` overrides older proposals and agent memory.
```

## `.agents/rules/01-canon.md`

```markdown
# Canon — Always On

Repository canon outranks chat memory and model assumptions.

Priority:
1. explicit current author decision
2. current canonical Story Skills files
3. author constitution/style/boundaries
4. approved manuscript facts consistent with structured state
5. provisional notes
6. model/chat memory

Draft prose is not automatically canon. Research is not canon. Rejected material is not inspiration unless explicitly requested.

When required canon is absent, flag the gap. Do not invent durable facts merely to make a draft easier.
```

## `.agents/rules/02-context.md`

```markdown
# Context routing

Use sufficient context for the people and situation, not a fixed token or fact quota.

Preflight/safety read the applicable author sources, character relationships, continuity, scene design and verified research. Separate durable facts, approved design and optional craft advice.

Writer reads writing-brief.md and character-context.md, plus named spoiler-safe source excerpts and relevant accepted preceding prose. Do not preload full mystery solutions, old drafts or review rationales. A missing relationship, form of address or practical fact is a reason to request/open a narrow source, not to guess or abandon concrete life. Read only the allowed sections if a source also contains future reveals.

Literary review has two phases: first read candidate prose without its brief; record the reading experience. Then consult the character context and relevant brief to diagnose intention versus execution. Preserve the first-read findings. Prior knowledge of the brief or participation in drafting must be disclosed; a new message or model is not a fresh context.

Reviser reads the candidate, both reviews and character context; consult exact authority sources when needed. Safety review may flag voice-related facts such as kinship, address and knowledge. The editor owns their literary consequences.

Generic craft skills are diagnostic aids. Their advice about fragments, concision, hidden agendas or multifunctional detail never becomes a universal production rule. Do not recover rejected prose as a model.
```

## `.agents/rules/03-planning.md`

```markdown
# Chapter preparation

Before building a preflight, inspect current author intent and compare it with inherited design. Consult the design-dialogue section of docs/playbooks/horrible-craft-review.md. Present a concise decision brief: reader experience, consequential alternatives and tradeoffs, recommendation, open questions and approval basis. This is an editorial rationale, not a transcript of internal reasoning.

Separate objective event chronology from presentation order, chapter allocation and reader/character knowledge. A flashback can preserve the first while changing the other three. Do not treat chronology validation as permission to choose chapter order.

If consequential choices are unresolved, create design-discussion.md (template provided), mark AWAITING_AUTHOR and ask the author before generating or relocking the writer packet. Do not fill the gate with your own recommendation or infer approval from silence. Current explicit author choices need no reconfirmation; retain compatible prior approvals. When no consequential question remains, briefly explain why and proceed without a ceremonial approval round.

After the gate is resolved, create internal preflight.md, situation-focused writing-brief.md and spoiler-safe character-context.md. No fixed fact count or required secret.
Verify sources, outcomes, chronology, presentation, knowledge/reveal boundaries, durable state and factual dependencies. Preserve relationships, useful address, ordinary priorities and practical context. Separate motives from instructions to the author.
Character context selects facts and spoiler-safe source sections, not mandatory performance tics. Resolve source-answerable questions by reading; minor execution choices belong to the writer.
```

## `.agents/rules/04-drafting.md`

```markdown
# Drafting

Read the writer packet: writing-brief.md and character-context.md. Verify its design gate is current, not AWAITING_AUTHOR or superseded. A stale packet is not writing authorization. At any later material design conflict use the design-dialogue section of docs/playbooks/horrible-craft-review.md; continue independent safe work, but do not decide the affected design for the author. Write people acting within a situation.

The writer may choose momentary preferences, practical actions, mistaken assumptions, warmth, tact, irritation, concessions and local consequences consistent with established character. Cooperation, direct speech and ordinary kindness need no hidden agenda. Agency means a choice affects what follows, not that everyone interrogates or wins.

Narration may summarize routine work, supply useful relationship context, enter the approved viewpoint and vary distance. Dialogue may be long or short. Neither fragments nor decorative body reactions make it natural. Do not turn a clue record into an exchange merely to display every field.

Preserve approved outcome, durable relationships/state, chronology, knowledge and world rules. Rebuilding scene execution within those boundaries is authorized when drafting/revision is requested. A changed plot decision or relationship trajectory requires the author.

Before handoff, self-edit the whole candidate for readable relationships, believable motives, repetitive information transfer, physical continuity and the effect of the ending. Correct defects you find. Self-editing is required; independent PASS belongs to review.

Write clean prose only. Keep candidate identity and handoff outside prose. Preserve existing candidates before writing a replacement; update session-state to the actual next operation.
```

## `.agents/rules/05-review.md`

```markdown
# Review and repair

Use docs/playbooks/literary-quality.md as a reader-oriented standard, not a scorecard.

Literary review records a blind first reading, then a contextual diagnosis using the writer packet. Evaluate people, choices, dialogue, address, narration/interiority, practical life, causality, rhythm, horror, mystery, emotion and after-effect as relevant to the work's scope. No requirement that every line or scene accomplish every function.

Safety review verifies hard facts and knowledge against authority sources, including kinship and address. A fact with a literary consequence is shared between lanes: flag the contradiction in safety and repair its whole interaction in revision. Do not send it back and forth as someone else's responsibility.

A substantial scene rewrite is permitted within approved outcomes and durable boundaries. Local canon repair must still sound human. Correcting a pronoun alone does not repair a missing relationship.

Both reviews name the exact candidate path and SHA-256. Any candidate change invalidates old PASS; recheck affected scope and record a new verdict for the new identity. Independent full reading is required before acceptance; disclose contaminated context.
```

## `.agents/rules/writing-workflow.md`

```markdown
# Character-grounded chapter workflow

1. Design dialogue before preflight: distinguish event chronology from presentation and reader knowledge; surface material options and ask unresolved author questions. Stop at AWAITING_AUTHOR if needed. Only after resolution prepare preflight.md, writing-brief.md, character-context.md.
2. Writer: draft and self-edit, then record candidate identity in candidate.md and update handoff.
3. Literary review: blind first read followed by contextual diagnosis.
4. Safety review: verify facts and knowledge; share relational issues with literary revision.
5. Revision: rebuild execution at the scale needed; prose and revision-audit.md stay separate.
6. Recheck the exact revised candidate; earlier PASS cannot transfer to changed bytes.
7. Canonize only after independent literary PASS, safety PASS, explicit author acceptance and approved durable-state diff.

For a demonstrated recurring craft failure, a bounded scene trial can calibrate the repair before a whole-chapter rewrite. It is optional outside that situation, non-canon, and never a mandatory extra approval gate for ordinary chapters.

Preserve prior drafts and snapshot the actual working-tree workflow before broad redesign. A Git base does not capture uncommitted instructions. No new plot outcome is implied by a workflow change.
```

## Role skills

```markdown
hr-source-preflight: read planning and the preparation playbook; run design dialogue, stop at AWAITING_AUTHOR for material choices, then create preflight.md, writing-brief.md and character-context.md; no fact quota; update session-state.

hr-source-writer: read drafting, writing-brief and character-context; consult narrow sources; draft and self-edit; output clean prose and candidate identity; preserve prior candidates; never self-certify independent PASS.

hr-source-review: read candidate.md to identify prose and scope, read prose before packet; record first-read response; disclose compromised context; bind findings to path/hash; do not rewrite.

hr-source-safety: read candidate, prose, preflight and authorities; verify chronology, knowledge, reveal, relationships, state and real-world claims; bind to path/hash.

hr-source-revision: read candidate, character context and both reviews; repair at causal scale within approved boundaries; preserve candidate; output clean prose and audit; require new review for changed prose.
```

## Command workflows

```markdown
/hr-preflight: compare author intent with inherited design; ask material questions or produce the three-file packet; update session-state.
/hr-write: read packet and named sources; draft/self-edit; preserve prose; record candidate hash/scope; update session-state.
/hr-review: read candidate.md and prose first; then context; bind report to hash and disclose independence.
/hr-safety: verify same candidate/hash against facts, relationships and physical continuity.
/hr-revise: use both reviews and context; rebuild within approved design; write revised prose/audit and update identity/handoff.
/hr-canonize: require exact hash, complete-chapter scope, independent literary PASS, safety PASS, author acceptance and approved durable-state diff; promote prose and validate.
```
