# Session State — Horrible

> Handoff for the next session. Not Story Skills canon.

## Start here

Repository: `anhdaijka/horrible`  
Branch: `main`

Current phase: **Opening reset — Chapters 1–2 rejected by author and removed for a clean rewrite.**

Read first:
1. this file;
2. `AGENTS.md`;
3. `author/directives/` (bắt buộc đọc toàn bộ; chứa các chỉ thị tối cao về thẩm mỹ, nhịp điệu, không khí kinh dị);
4. `author/creative-constitution.md`;
5. `author/boundaries.md`;
6. `author/style-bible.md`;
7. `author/decisions.md`;
8. `continuity/state.md`;
9. `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md`;
10. relevant `characters/` and `research/verified/` files.

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

- Chapter 1, 2, 3, 4 và 5 manuscripts are approved and canonized.
- `chapters/chapter-05.md` is approved and canonized.
- `continuity/state.md` uses `current-chapter: 5`.

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

## Workflow upgrade — 2026-09-11 & 2026-09-13

Đã thiết lập hệ thống workflow 4 giai đoạn độc lập tham chiếu từ `du-long-giac-2` và **hệ thống Chỉ thị Sáng tạo Độc lập (`author/directives/`)**:
- Workflows: `/hr-preflight`, `/hr-write`, `/hr-review`, `/hr-revise` trong `.agents/workflows/`
- Skills: `hr-source-preflight`, `hr-source-writer`, `hr-source-review`, `hr-source-revision` trong `.agents/skills/` (Tất cả đều được gắn khóa cứng bắt buộc đọc `author/directives/`).
- Playbook: `docs/playbooks/horrible-craft-review.md` (chuẩn hóa 5 Cổng Thẩm Mỹ Horrible, Cổng C tích hợp kiểm toán đối kháng theo `DIR-01` & `DIR-02`).
- Khu vực chỉ thị tối cao: `author/directives/` chứa:
  - [DIR-01-psychological-tension.md](file:///d:/Documents/Others/Composer/horrible/author/directives/DIR-01-psychological-tension.md): Xung đột nhận thức (cô độc vs phủ nhận bằng logic), hồn ma Cường theo phong cách kinh dị Nguyễn Ngọc Ngạn, cú lừa Trùng tang.
  - [DIR-02-thoa-1996-manslaughter-canon.md](file:///d:/Documents/Others/Composer/horrible/author/directives/DIR-02-thoa-1996-manslaughter-canon.md): Canon Ngộ sát năm 1996 (Cường đánh Thoa ngã đập đầu vào đá vì cự tuyệt ép cưới đổi tiền lo đám cưới Cường; Cổn chỉ đạo giấu xác; Thủy phát hiện và gánh nợ 30 năm).
  - [DIR-03-cinematic-off-pov-and-oral-horror.md](file:///d:/Documents/Others/Composer/horrible/author/directives/DIR-03-cinematic-off-pov-and-oral-horror.md): Kỹ thuật Off-POV Điện ảnh (Fly-on-the-Wall 100% Show-not-tell) & Cơ chế Kinh dị Khẩu truyền đối chiếu dấu vết hồi tố.
  - [DIR-04-case-zero-forensic-mechanics-and-evidence-trap.md](file:///d:/Documents/Others/Composer/horrible/author/directives/DIR-04-case-zero-forensic-mechanics-and-evidence-trap.md): Cơ chế Pháp y, Bẫy Trung thành Đốt Áo Công Nhân, Timeline Đêm 13 & Chiếc Smartphone Kẹt Niêm Phong Cầu Thang.
- Quyết định canon mới:
  - **D-056**: Xóa bỏ vĩnh viễn chi tiết dìm chết cũ năm 1996.
  - **D-057**: Xóa bỏ hoàn toàn chi tiết thuốc ngủ/Diazepam; thiết lập vụ ẩu đả 22:35–22:45 đêm 13 và bẫy trung thành đốt áo công nhân rách đẫm máu có cúc xe ben của Lan Anh.
  - **D-058**: Khóa cứng timeline đêm 13, chứng cứ ngoại phạm ca đêm Yên Phong của cô Thủy và cô lập nhận thức tuyệt đối giữa Toàn và Thủy.
  - **D-059**: Chiếc smartphone của Cường kẹt trong hốc chiếu nghỉ tầng 2 sau dây niêm phong của Công an Long; động cơ sốt vó tiêu hủy vật chứng của Thủy bị hồn ma Cường chặn đứng ở bậc thứ 7; giải phóng tin nhắn Zalo 22:54 khi cắm lại Wi-Fi lúc 19:30 tối 14 (Chương 05).
- Khu vực đệm: `revisions/chapter-work/CH-XX/` (chứa `preflight.md`, `draft.md`, `review.md`, `revised.md`).

## Next action

1. Đã hoàn tất phê duyệt và chính thức canonize **Chương 05** (`Đêm áp Rằm`) vào [chapters/chapter-05.md](file:///d:/Documents/Others/Composer/horrible/chapters/chapter-05.md). Trạng thái bản thảo trong [revisions/chapter-work/CH-05/revised.md](file:///d:/Documents/Others/Composer/horrible/revisions/chapter-work/CH-05/revised.md) chuyển sang `AUTHOR GATE: APPROVED`.
2. Đã hoàn thành thẩm định đối kháng (`/hr-review CH-06`) và biên tập phẫu thuật (`/hr-revise CH-06`): bản sửa đổi [revisions/chapter-work/CH-06/revised.md](file:///d:/Documents/Others/Composer/horrible/revisions/chapter-work/CH-06/revised.md) đã xóa bỏ triệt để chi tiết thuốc ngủ theo **D-057**, tái cấu trúc Scene 1 (vết cào rách da trên cổ Toàn), Scene 4 (Lan Anh đốt chiếc áo công nhân rách đẫm máu trong lò hóa vàng, tàn tro mang cúc xe ben bay trước mũi giày Khanh) và Scene 5 (đòn khiêng nặng trĩu nghiến nát vai Toàn); trạng thái hiện tại là `AUTHOR GATE: PENDING` chờ Tác giả duyệt trước khi canonize vào `chapters/chapter-06.md`.
3. Đã đồng bộ 100% các quyết định **D-057, D-058, D-059** và chỉ thị tối cao **DIR-04** vào:
   - [author/directives/DIR-04-case-zero-forensic-mechanics-and-evidence-trap.md](file:///d:/Documents/Others/Composer/horrible/author/directives/DIR-04-case-zero-forensic-mechanics-and-evidence-trap.md) & [author/directives/README.md](file:///d:/Documents/Others/Composer/horrible/author/directives/README.md).
   - [author/decisions.md](file:///d:/Documents/Others/Composer/horrible/author/decisions.md).
   - [characters/vu-van-toan.md](file:///d:/Documents/Others/Composer/horrible/characters/vu-van-toan.md), [characters/lan-anh.md](file:///d:/Documents/Others/Composer/horrible/characters/lan-anh.md), [characters/vu-thi-thuy.md](file:///d:/Documents/Others/Composer/horrible/characters/vu-thi-thuy.md), [characters/vu-van-cuong.md](file:///d:/Documents/Others/Composer/horrible/characters/vu-van-cuong.md).
   - [plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md](file:///d:/Documents/Others/Composer/horrible/plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md).
4. Bước tiếp theo: Khi Tác giả phê duyệt Chương 06 (`AUTHOR GATE: APPROVED`), tiến hành canonize vào `chapters/chapter-06.md` và chuẩn bị preflight Chương 07 (`/hr-preflight CH-07`).
