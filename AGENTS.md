# Novel OS — Agent Contract

This repository is a long-form fiction project. Follow this contract before any creative task.

## Horrible branch startup

When working on branch `main`, this branch is the active development workspace for the novel **Horrible**.

At the start of every new session:

1. Read `author/session-state.md` first.
2. Follow its `Next action` unless the author gives a newer instruction.
3. For planning/drafting/revision, also read only the relevant parts of:
   - `author/creative-constitution.md`
   - `author/boundaries.md`
   - `author/style-bible.md`
4. Read `development/horrible/README.md` only when broader project context is needed.
5. Open individual Discovery/case files only when the current task depends on them.

Do **not** reload Discovery 01–15 by default. Use minimum sufficient context.

If `author/session-state.md` says an explicit AUTHOR APPROVAL gate is pending, do not bypass it. Ask for that approval only when the next requested action actually requires it.

At the end of a meaningful session, update `author/session-state.md` if project status, accepted decisions, or the next action changed. Keep it short; detailed reasoning belongs in the relevant development/canon file, not in session state.

## Authority

- The author is the final authority on canon and creative direction.
- You may propose, draft, analyze, review, and recommend.
- Never silently canonize, retcon, delete established canon, or resurrect rejected ideas.

## Source of truth

- Repository story files beat chat memory, latent memory, summaries, and assumptions.
- Story Skills canonical paths are authoritative for structured story state after initialization.
- `author/` contains author-level constraints and decisions.
- `development/horrible/` contains accepted pre-canon development material for this branch.
- `research/` is evidence, **not canon**, until the author promotes a fact into canonical story files.
- `rejected/` is excluded from normal inspiration and must not be reused unless explicitly requested.

## Before planning or drafting

1. Read the relevant author constraints.
2. Read `story.md` and only the story-state files relevant to the task when Story Skills has been initialized.
3. Run deterministic checks when a story has been initialized and the runtime permits it.
4. Use minimum sufficient context; do not load the full manuscript or full discovery archive by default.
5. If required canon is missing, flag the gap instead of inventing a durable fact.

## Cultural reality gate — Horrible

The novel uses real Vietnamese religious, spiritual, funeral, ancestor, folk-cultural and votive-paper contexts. **Plausible-sounding invention is not acceptable as cultural fact.**

Before writing a concrete claim about any of the following, check `research/verified/` first:

- vàng mã / hàng mã / đồ mã products, terminology, ordering, production or trade;
- funerals, memorials, 49/100-day observances, giỗ, mourning or burial/cremation/cải táng;
- ancestor altars and household ritual practice;
- Buddhism, Đạo Mẫu / Thờ Mẫu, hầu đồng or practitioner roles;
- đình / đền / chùa / phủ / miếu etiquette and function;
- thầy cúng, thầy bói, ritual specialists or spirit-medium terminology;
- kiêng kị, trùng tang, grave/death taboos or other claimed folk rules;
- named folklore presented as an old/regional tradition rather than a character's story;
- legal/site rules around ritual burning or festival practice.

If the needed detail is not verified, do one of four things:

1. research it before drafting the claim;
2. omit the unnecessary detail;
3. make it explicitly a **family-specific or fictional-local practice** without presenting it as general Vietnamese reality; or
4. frame it as **character testimony/belief/hearsay**, not narrator-certified fact.

Keep these layers separate:

`research fact → community/oral testimony → character belief → observed event → author-canon supernatural truth`

Do not promote a lower layer upward merely because it makes the scene easier to write.

For the current gap map, read `research/verified/cultural-reality-audit.md`. For shop scenes, also read `research/verified/votive-paper-commerce-v1.md`.

## Drafting boundary

The writer may invent wording, gesture, micro-action, sensory realization, and dialogue execution inside an approved scene plan.

The writer may not silently change plot outcomes, established knowledge, world rules, timeline, relationship trajectory, or durable object/character state.

## Review / revision boundary

Review before any substantial rewrite. Record the issue, location, problem, why it matters and the smallest useful intervention.

For **small line-level or mechanical revisions that preserve an already approved scene/chapter plan and established canon**, apply them directly when the author has asked to fix, revise, continue, polish or otherwise proceed. Do not create an extra approval gate just to remove a redundant line, fix metadata, tighten prose, correct a backlink, or repair an accidental implication.

Ask for explicit author approval before applying a revision only when it would materially change one or more of:

- plot outcome or chapter purpose;
- canon fact or timeline;
- relationship trajectory;
- world/supernatural rule;
- character knowledge/state with future consequences;
- major scene structure or a substantial rewrite beyond the approved plan.

Do not regenerate a whole chapter to fix a local issue unless the author requests it or the local issue cannot be repaired safely in place.

## Canonization

After an approved manuscript/revision creates durable on-page state, prepare a canon diff. Apply only author-approved state changes, then run validation/links/continuity checks again where available.

Development material does not become Story Skills canon merely because it exists in `development/horrible/`.

## Git

Do not create commits unless asked or unless the current task explicitly includes the accepted lifecycle commit. Prefer semantic commit prefixes: `plan:`, `draft:`, `revise:`, `canon:`, `research:`, `style:`.

## Skills

Use Story Skills for story-state operations and deterministic maintenance after initialization. Use selected craft skills for diagnosis/craft. Avoid duplicate persistence systems when Story Skills already owns continuity state.
