# Session State — Horrible

> Handoff for the next session. Not Story Skills canon.

## Start here

Repository: `anhdaijka/horrible`  
Branch: `main`

Current phase: **Opening reset — Chapters 1–2 rejected by author and removed for a clean rewrite.**

Read first:
1. this file;
2. `AGENTS.md`;
3. `author/creative-constitution.md`;
4. `author/boundaries.md`;
5. `author/style-bible.md`;
6. `author/decisions.md`;
7. `continuity/state.md`;
8. `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md`;
9. relevant `characters/` and `research/verified/` files.

Do **not** load deleted/rejected Chapter 1–2 prose, briefs, or scene plans from Git history unless the author explicitly asks.

## Author rejection — 2026-09-11

The author rejected the current ChatGPT-written implementations of both Chapter 1 and Chapter 2.

Deleted:
- `chapters/chapter-01.md`
- `chapters/chapter-02.md`
- `revisions/plans/chapter-01-brief.md`
- `revisions/plans/chapter-02-brief.md`
- all `scenes/chapter-01-scene-*.md`
- all `scenes/chapter-02-scene-*.md`

Registries and continuity were reset accordingly.

## Active manuscript state

- Chapter 1 and 2 manuscripts are approved and canonized.
- No active Chapter 3 manuscript.
- No active scene plans for Chapter 3.
- `continuity/state.md` uses `current-chapter: 2`.

## Authority after reset

The rejection applies to the **draft execution**: prose, dialogue, micro-beats, scene plans, exact clue staging, reaction choreography, and draft-derived knowledge state.

It does not by itself erase higher-level author-approved Case Zero canon. Continue to use the normal hierarchy:
1. newest direct author instruction;
2. `author/decisions.md` / current approved canon;
3. continuity/character/mystery registries;
4. verified research;
5. approved arc/outline;
6. new replacement draft.

If an old Chapter 1–2 detail is found only in deleted draft material, treat it as **NOT ESTABLISHED**.
If it is independently present in a higher-priority source, treat it according to that source rather than because it appeared in the deleted draft.

## Clean-rewrite guard

The next writer (including Gemini or any other agent) must write Chapter 2 from a clean slate.

Do not:
- reconstruct deleted prose from Git history;
- reuse the rejected scene sequence by default;
- quote rejected dialogue as a model;
- treat rejected chapter-exit knowledge as canon;
- preserve a draft detail merely because it was previously written.

Do:
- read current Case Zero canon and author decisions directly;
- separate objective chronology from narrative presentation order;
- protect POV and information-order locks;
- research real cultural/procedural claims before asserting them;
- ask the author when a new creative/canon decision is required.

## Workflow upgrade — 2026-09-11

Đã thiết lập hệ thống workflow 4 giai đoạn độc lập tham chiếu từ `du-long-giac-2`:
- Workflows: `/hr-preflight`, `/hr-write`, `/hr-review`, `/hr-revise` trong `.agents/workflows/`
- Skills: `hr-source-preflight`, `hr-source-writer`, `hr-source-review`, `hr-source-revision` trong `.agents/skills/`
- Playbook: `docs/playbooks/horrible-craft-review.md` (chuẩn hóa 5 Cổng Thẩm Mỹ Horrible và giao thức thẩm định đối kháng Adversarial Red-Team)
- Khu vực đệm: `revisions/chapter-work/CH-XX/` (chứa `preflight.md`, `draft.md`, `review.md`, `revised.md`)

## Next action

1. Chương 2 đã được phê duyệt và canonized thành công.
2. Bước tiếp theo: Kích hoạt `/hr-preflight CH-03` để lập đề cương phân cảnh cho Chương 3, đảm bảo đọc kỹ `author/decisions.md` và `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md` trước khi làm.
