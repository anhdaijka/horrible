# Novel OS — Agent Contract

This repository is a long-form fiction project. Follow this contract before any creative task.

## Startup

`anhdaijka/horrible@main` is the only active development workspace for **Horrible**.

At the start of every new session:

1. Read `author/session-state.md` first.
2. Follow its `Next action` unless the author gives a newer instruction.
3. For planning/drafting/revision, read:
   - `author/creative-constitution.md`
   - `author/boundaries.md`
   - `author/style-bible.md`
4. Read `story.md` and only the specific canon/development/research files needed.
5. Do **not** reload Discovery 01–15 by default.

Use minimum sufficient context.

## Authority

- The author is final authority on canon and creative direction.
- Repository files beat chat memory, latent memory and assumptions.
- Do not silently canonize, retcon or resurrect rejected material.

## Opening reset — hard guard

The previous active Chapter 1 `Tiếng chợ` and Chapter 2 `Người đặt` prototypes were **author-rejected and removed from active manuscript**.

Do not:

- quote them as a prose model;
- reuse their scene sequence by default;
- recover dialogue from Git history unless the author explicitly asks;
- treat their on-page state as canon;
- rebuild the old `normal for 1–2 chapters before horror` architecture.

Their only continuing value is the postmortem lesson recorded in `revisions/reviews/opening-prototype-postmortem.md`.

The new opening must be designed from a blank page under the revised horror-first constitution.

## Horror-promise gate

Before approving an opening chapter or major arc scene, ask:

1. What does the horror reader get here?
2. What disturbing question, image, supernatural promise or consequence pulls them forward?
3. Is ordinary life increasing credibility/attachment, or merely consuming pages?
4. Did narrator exposition leak a later reveal?
5. Are we accidentally treating ambiguity or mundane explanation as mandatory sophistication?

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

## Prose social-address + physicality gate

Before a recurring character's first real manuscript appearance:

1. check their character file for `Narrative reference`, `Physical presence` and `Body-language baseline`;
2. if durable physical anchors are missing, establish them before improvising contradictory bodies across chapters;
3. integrate only a few physical details into action;
4. use natural Vietnamese kinship or `ông/bà + tên` for older adults in narration;
5. use deviation from baseline as one evidence channel for fear/uncanny wrongness.

Internal YAML and planning shorthand may keep bare canonical names.

## Information-order gate

Characters may reason only from information plausibly available at that moment unless a deliberate storyteller frame gives the reader more.

Foreshadowing should create questions.

Do not leak future logic by:

- explaining a mundane hypothesis before the anomaly exists;
- asking the exact future-reveal question too early;
- reassuring the reader that a detail is harmless;
- explaining why a character is not afraid after the action already shows it.

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

## Review / revision boundary

For local prose/mechanical issues that preserve approved structure/canon, revise directly when requested.

Ask explicit author approval only for material changes to:

- plot/chapter purpose;
- canon/timeline;
- relationship trajectory;
- supernatural/world rule;
- durable character knowledge/state;
- major scene architecture/substantial rewrite.

The author has explicitly approved the current full opening reset, so changes required to remove the rejected Chapter 1–2 prototypes and rebuild opening-level rules do not need another gate.

## Canonization

After an approved manuscript creates durable state:

1. prepare canon diff;
2. apply approved state only;
3. update continuity/registries;
4. run Story Skills validation/links/continuity checks.

Development material is not canon merely because it exists.

## Git

`main` is the active source of truth.

Semantic commit prefixes are preferred: `plan:`, `draft:`, `revise:`, `canon:`, `research:`, `style:`.

## Skills

Use Story Skills for structured story-state operations and deterministic maintenance. Use craft skills for diagnosis. Avoid duplicate persistence systems.
