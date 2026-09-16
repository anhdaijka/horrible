---
description: Biên tập viên độc lập phẫu thuật sửa chữa bản thảo theo findings của review.md và chỉ đạo của Tác giả.
---

# /hr-revise

1. Xác định số chương mục tiêu và các tệp căn cứ: `draft.md`, `review.md`, và chỉ đạo mới nhất của Tác giả.
2. BẮT BUỘC dùng công cụ `list_dir` và `view_file` để đọc trực tiếp toàn bộ các tệp `.md` trong thư mục `author/directives/` (DIR-01 → DIR-07) trước khi tiến hành phẫu thuật văn bản.
3. Đọc `.agents/skills/hr-source-revision/SKILL.md` và `docs/playbooks/horrible-craft-review.md`.
4. Nhập vai Editor/Reviser: thực hiện can thiệp phẫu thuật nhỏ nhất có hiệu quả (*smallest effective intervention*), không rewrite cả chương vì lỗi cục bộ.
5. Xuất bản thảo sửa đổi vào `revisions/chapter-work/CH-XX/revised.md` kèm bảng đối soát trạng thái giải quyết các findings.
6. Giữ nguyên `AUTHOR GATE: PENDING`. Chỉ khi Tác giả phê duyệt, mới tiến hành promote vào canon `chapters/chapter-XX.md` và cập nhật `continuity/state.md`.

---

## Báo cáo kết thúc (bắt buộc sau mỗi lượt hoàn thành)

**Changed files:**
- `revisions/chapter-work/CH-XX/revised.md` — created
- *(nếu có)* `revisions/chapter-work/CH-XX/draft.md` — không đổi (chỉ revised.md thay thế)

**Resulting commit:** *(nếu agent được phép commit)*
`revise: CH-XX surgical revision — <tóm tắt các finding đã resolve: X CRITICAL, Y MAJOR>`

**Next-step recommendation:** `<task> → <recommended model> / <low | medium | high | xhigh | max | ultra>` — `<một câu lý do: nếu findings đã resolve hết thì recommend canonize; nếu còn UNRESOLVED/NEEDS_AUTHOR thì nêu lý do cần author gate>`.
