# Novel OS — Agent Contract

This repository is a long-form fiction project. Follow this contract before any creative task.

## Startup

`anhdaijka/horrible@main` is the only active development workspace for **Horrible**.

At the start of every new session:

1. Read `author/session-state.md` first.
2. Follow its `Current next action` unless the author gives a newer instruction.
3. For planning/drafting/revision, read:
   - `author/directives/` (all files; author directives have highest repository creative/aesthetic authority, below newer direct author instruction);
   - `author/creative-constitution.md`;
   - `author/boundaries.md`;
   - `author/style-bible.md`.
4. Read `author/decisions.md`, `continuity/state.md`, `story.md`, and only the specific canon/development/research files needed.
5. Do **not** reload Discovery 01–15 by default.

Use minimum sufficient context.

## Authority

- The author's newest direct instruction is final authority on canon and creative direction.
- Author directives in `author/directives/` are binding repository mandates unless superseded by a newer direct author instruction.
- Repository source files beat chat memory, latent memory and generated summaries.
- Do not silently canonize, retcon or resurrect rejected material.

## Historical opening-reset guard

Two earlier generations of opening material were author-rejected:

1. the old prototypes `Tiếng chợ` / `Người đặt`;
2. a later ChatGPT-written Chapter 1–2 implementation that was rejected and deleted during the opening reset.

Those rejected versions remain non-authoritative even if recoverable from Git history.

**Current state:** replacement Chapters 1–5 have since been author-approved and canonized. The active files in `chapters/chapter-01.md` through `chapter-05.md` are current manuscript authority when prose is relevant.

Do not:
- recover rejected prose/dialogue from Git history unless the author explicitly asks;
- quote rejected versions as a prose model;
- resurrect rejected scene sequences, clue staging or knowledge state merely because they once existed;
- confuse the historical reset with the current approved opening.

Generated root files such as `HORRIBLE_CANON_BIBLE.md`, `HORRIBLE_REVIEW_CONTEXT.md` and `CONSOLIDATION_REPORT.md` are convenience/index artifacts only. They may contain stale snapshots and never outrank `author/`, `continuity/`, `plot/`, `characters/`, `research/verified/`, active approved chapters, or current author instruction.

## Horror-promise gate

Before approving an opening chapter or major arc scene, ask:

1. What does the horror reader get here?
2. What disturbing question, image, supernatural promise or consequence pulls them forward?
3. Is ordinary life increasing credibility/attachment, or merely consuming pages?
4. Did narrator exposition leak a later reveal?
5. Are we accidentally treating ambiguity or mundane explanation as mandatory sophistication?
6. Is the scene free of cheap theatrical jumpscares, and do **important reveal-bearing clues** carry enough emotional/horror weight and fair-play setup for reread value?

Do **not** require every anomaly, sensory detail or supernatural manifestation to double as a detective clue. Atmosphere, character detail and direct haunting may exist for their own narrative function.

**Realism is the floor, not the ceiling. Ambiguity is optional. Fictional ghosts may be real.**

Do not suppress a strong supernatural scene merely because real-world evidence for ghosts does not exist. Research gates apply to **real cultural claims**, not to whether fictional supernatural events may happen.

## Cultural reality gate

The novel uses real Vietnamese religious, spiritual, funeral, ancestor, folk-cultural and votive-paper contexts. Plausible-sounding invention is not acceptable as cultural fact.

Before writing a concrete claim about:

- vàng mã / hàng mã products, trade, terminology or production;
- funerals, memorials, giỗ, 49/100-day observances, burial/cremation/cải táng;
- ancestor altars and household practice;
- Buddhism, Đạo Mẫu / Thờ Mẫu, hầu đồng or practitioner roles;
- đình / đền / chùa / phủ / miếu;
- thầy cúng, thầy bói and ritual specialists;
- taboos, trùng tang, grave/death beliefs;
- named folklore presented as regional tradition;
- legal/site rules around ritual burning;

check `research/verified/` first.

If the detail is not verified:

1. research it;
2. omit it;
3. mark it clearly as family-specific / fictional-local practice; or
4. frame it as character belief/hearsay rather than narrator-certified fact.

Keep these layers separate:

`research fact → testimony/belief → observed event → author-canon supernatural truth`

The final layer is fictional and may be genuinely supernatural.

## Psychological / retroactive-dread gate

For scenes where taboo guilt, contamination anxiety or retroactive dread is actually part of the approved design, check whether the ordinary action becomes more disturbing after later information and whether Khanh's reasoning conflicts naturally with inherited/local anxiety.

This is a **tool, not a quota**. Do not force a karmic tripwire, taboo transgression, bodily panic checklist or rational-vs-folk debate into every uncanny scene.

## Prose social-address + physicality gate

Before a recurring character's first real manuscript appearance:

1. check their character file for `Narrative reference`, `Physical presence` and `Body-language baseline`;
2. if durable physical anchors are missing, establish them before improvising contradictory bodies across chapters;
3. integrate only a few physical details into action;
4. use natural Vietnamese kinship or `ông/bà + tên` for older adults in narration;
5. use deviation from baseline as **one possible** evidence channel for fear/uncanny wrongness.

Do not convert every emotion into trembling, heartbeat, sweat, breath or other stacked physiological reactions.

Internal YAML and planning shorthand may keep bare canonical names.

## Information-order gate

Characters may reason only from information plausibly available at that moment unless a deliberate storyteller frame gives the reader more.

Foreshadowing should create questions.

Do not leak future logic by:

- explaining a mundane hypothesis before the anomaly exists;
- asking the exact future-reveal question too early;
- reassuring the reader that a detail is harmless;
- explaining why a character is not afraid after the action already shows it.

Always distinguish **objective chronology** from **narrative presentation order**. CCTV playback, recordings, flashbacks and testimony can show older events in later chapters without creating a timeline conflict.

## Drafting boundary

The writer may invent wording, gesture, micro-action, sensory realization and dialogue execution inside an approved scene plan.

The writer may not silently change:

- plot outcome;
- established knowledge;
- timeline;
- relationship trajectory;
- durable character/object state;
- supernatural rule;
- real cultural fact.

If a new material canon choice is required, ask the author before making it.

## Review / revision boundary

For local prose/mechanical issues that preserve approved structure/canon, revise directly when requested.

Ask explicit author approval only for material changes to:

- plot/chapter purpose;
- canon/timeline;
- relationship trajectory;
- supernatural/world rule;
- durable character knowledge/state;
- major scene architecture/substantial rewrite.

A rejected draft never becomes authority merely because it existed in Git history.

## Canonization

After an approved manuscript creates durable state:

1. prepare canon diff;
2. apply approved state only;
3. update continuity/registries;
4. run continuity/link validation.

Development material is not canon merely because it exists.

## Git

`main` is the active source of truth.

Semantic commit prefixes are preferred: `plan:`, `draft:`, `revise:`, `canon:`, `research:`, `style:`.

## Skills and Workflows

Chapter operations use `.agents/workflows/hr-*.md` and the four `hr-source-*` skills:
- `/hr-preflight <chapter>` (`hr-source-preflight`): chuẩn bị preflight, neo giác quan, khóa thứ tự thông tin trước khi viết;
- `/hr-write <chapter>` (`hr-source-writer`): chấp bút bản thảo non-canon vào `revisions/chapter-work/CH-XX/draft.md`;
- `/hr-review <chapter>` (`hr-source-review`): thẩm định đối kháng độc lập theo các cổng craft của Horrible, xuất `review.md`;
- `/hr-revise <chapter>` (`hr-source-revision`): biên tập phẫu thuật can thiệp nhỏ nhất có hiệu quả, xuất `revised.md`.

Xem `docs/playbooks/horrible-craft-review.md` để nắm quy trình thẩm định và định tuyến thẩm quyền.

Use structured story-state tools for deterministic maintenance and craft tools for diagnosis. Avoid duplicate persistence systems.
