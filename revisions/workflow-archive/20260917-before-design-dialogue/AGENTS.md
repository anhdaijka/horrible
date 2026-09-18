# Novel OS — Agent Contract

This repository is a long-form fiction project. `anhdaijka/horrible@main` is the only active development workspace for **Horrible**.

## Startup and authority

1. Read `author/session-state.md` first and follow its current next action unless the author gives a newer instruction.
2. The author's newest direct instruction outranks repository documents. Current repository source outranks chat memory, generated summaries, and historical artifacts.
3. Load context by role according to `.agents/rules/02-context.md`. Minimum sufficient context is mandatory; indiscriminate context loading is not safety.
4. Do not silently canonize, retcon, resurrect rejected material, or turn development material into manuscript authority.

## Historical opening-reset guard

The old `Tiếng chợ` / `Người đặt` prototypes, the later rejected Chapter 1–2 implementation, and the replacement Chapters 1–6 removed on 2026-09-16 are historical only. Do not recover or quote them as a prose model unless the author explicitly asks.

No chapter is currently canonized. `chapters/` contains only the empty registry. Generated root bibles and consolidation files are convenience artifacts and never outrank current `author/`, `continuity/`, `plot/`, `characters/`, `research/verified/`, or direct author instruction.

## Creative–safety separation

The active process protects literary life and story truth through separate roles:

- Preflight reads the required authority sources and creates an internal safety card plus a short writer-facing brief.
- Writer reads `writing-brief.md` and spoiler-safe `character-context.md`, with targeted source excerpts when context is missing. Preserve relationships, address and ordinary life; avoid loading full future solutions.
- Literary reviewer records a blind first reading, then uses the writer packet to diagnose intent versus execution without erasing first impressions.
- Safety reviewer checks canon, chronology, knowledge, reveal order, durable state, cultural/professional facts, and rejected-material contamination.
- Writer and reviser self-edit before handoff. Reviser uses both reviews and character context; prose stays separate from audit records. Reviews and acceptance bind to the exact candidate path and SHA-256.
- Canonization requires fresh literary PASS, safety PASS, and explicit author acceptance for the same candidate.

See `.agents/rules/writing-workflow.md`, `docs/playbooks/horrible-craft-review.md` and `docs/playbooks/literary-quality.md`. Craft suggestions in style guides, character profiles or generic skills are optional techniques; source facts and current author choices remain authoritative. Do not turn concision, fragments, hidden agendas or physical reactions into universal requirements.

## Creative freedom boundary

Inside an approved brief, the writer owns wording, rhythm, scene micro-order, dialogue tactics, silence, gesture, incidental action, sensory selection, image, and small non-durable detail. No mandatory word count, clue count, sensory inventory, body-reaction quota, clipped-dialogue pattern, or universal ambiguity requirement applies.

The writer may not silently change:

- plot outcome or chapter purpose;
- established knowledge or reveal order;
- chronology or location;
- relationship trajectory;
- durable character/object state;
- supernatural rule;
- real cultural or professional fact.

The writer may choose temporary attitudes, errors, cooperation and local consequences consistent with the people. Narration may summarize, supply context and enter the approved viewpoint. For missing established facts, consult targeted sources; ask the author only for a new material design choice.

## Horror promise

An opening or major arc scene should give the horror reader a disturbing experience, question, image, supernatural promise, or consequence. Ordinary life should build attachment or credibility, not consume pages by default. Important reveal-bearing clues need enough weight and fair-play setup for reread value, but atmosphere, character detail, and direct haunting may exist without becoming detective clues.

Realism is the floor, not the ceiling. Ambiguity is optional. Fictional ghosts may be real. Avoid cheap theatrical jumpscares, narrator explanations that leak later reveals, and mandatory mundane explanations.

## Cultural reality gate

Concrete claims about Vietnamese ritual, religion, funerals, ancestor practice, vàng mã/hàng mã trade, named folklore, taboos, ritual specialists, or legal/site rules require `research/verified/` support. If not verified, research it, omit it, mark it family-specific/fictional-local, or attribute it as character belief or hearsay.

Keep these layers separate:

`research fact → testimony/belief → observed event → author-canon supernatural truth`

The safety reviewer enforces this gate. The writer receives only the verified hard boundary needed for the scene.

## Information and social reality

Characters may reason only from information plausibly available at that moment unless an approved storyteller frame gives the reader more. Distinguish objective chronology from narrative presentation order.

For a recurring character's first manuscript appearance, preflight must verify durable physical and social-address anchors if they matter. The writing brief should project only what the scene needs. Do not convert every emotion into trembling, sweat, breath, heartbeat, or another stacked physiological reaction.

## Chapter workflow

- `/hr-preflight <chapter>` (`hr-source-preflight`) → `preflight.md` + `writing-brief.md` + `character-context.md`
- `/hr-write <chapter>` (`hr-source-writer`) → self-edited prose `draft.md` + separate `candidate.md`
- `/hr-review <chapter>` (`hr-source-review`) → blind `literary-review.md`
- `/hr-safety <chapter>` (`hr-source-safety`) → `safety-review.md`
- `/hr-revise <chapter>` (`hr-source-revision`) → prose-only `revised.md` + `revision-audit.md`
- `/hr-canonize <chapter>` → promotion after both reviews and author acceptance

Use a new suffixed workspace for a restarted chapter. Preserve old workspaces as historical artifacts; do not overwrite them.

## Review, revision, and canonization authority

Literary review may recommend a substantial rewrite when the scene engine is false or inert. Safety repairs should use the smallest change that restores hard truth. Ask explicit author approval before changing plot/chapter purpose, canon/timeline, relationship trajectory, supernatural rules or durable knowledge/state. Rebuilding scene execution at any scale within those approved boundaries is allowed when drafting/revision is requested.

After accepted prose creates durable state, prepare the canon diff, apply only approved state, update continuity/registries, and run continuity/link validation.

## Git and validation

`main` is the active source of truth. Preserve unrelated working-tree changes. Semantic commit prefixes are preferred: `plan:`, `draft:`, `revise:`, `canon:`, `research:`, `style:`, `workflow:`.

Do not claim success if relevant validation failed or was not run.

## Task reporting format

Every compatible repository-task response must end with:

```text
**Changed files:**
- `<path>` — <what changed>

**Resulting commit:** `<prefix: short description>`

**Next-step recommendation:** `<concrete next task> → <model> / <effort>` — <why this is the lowest sufficient routing>.
```

If no next action is authorized, use `None`.

### Cost-first routing

Choose for the actual next task, not the task just completed. Use the lowest model and effort that preserve authority, canon, information order, and literary quality.

| Next task | Lowest sufficient default | Raise only when |
|---|---|---|
| Link/schema/index/format check, typo, short report | **Luna / low** | Multi-file conflict or canon judgment → Terra |
| Registry/continuity sync, approved preflight, structured workflow change | **Terra / low–medium** | Conflicting sources or narrative consequence analysis → Sol |
| Chapter draft from approved brief, independent literary review, multi-lock revision | **Sol / medium** | Opening/reveal has unresolved evidence or cultural gates → Sol/high or Astra/high |
| Multi-arc design, major canon conflict, irreversible reveal architecture | **Sol / high** | Long-range coordination across many sources without a stable spec → Astra/high–xhigh |

Do not recommend `max` or `ultra` unless the author explicitly asks or the next task changes many consequential authority locks at once. A valid reason names the concrete risk; “higher quality” is not a reason.
