---
description: Thẩm định phản biện đối kháng (Adversarial Red-Team Review) toàn văn bản thảo chương của Horrible theo 5 Cổng Thẩm Mỹ.
---

# /hr-review

1. Xác định số chương mục tiêu và đường dẫn bản thảo cần review (mặc định: `revisions/chapter-work/CH-XX/draft.md` hoặc `chapters/chapter-XX.md`).
2. BẮT BUỘC dùng công cụ `list_dir` và `view_file` để đọc trực tiếp toàn bộ các tệp `.md` trong thư mục `author/directives/` trước khi tiến hành thẩm định.
3. Đọc `.agents/skills/hr-source-review/SKILL.md` và `docs/playbooks/horrible-craft-review.md`.
4. Nhập vai Reviewer đối kháng: đọc toàn văn L1-EOF, kiểm toán hai chiều theo 5 Cổng Thẩm Mỹ, trích dẫn tối thiểu 4 Spans nguyên văn có số dòng cụ thể.
5. Xuất báo cáo thẩm định vào `revisions/chapter-work/CH-XX/review.md` theo mẫu `templates/review-report.md`.
6. Đưa ra phán quyết `SEMANTIC_REVIEW: PASS | REVISE_REQUIRED | INCOMPLETE` và giữ `AUTHOR_ACCEPTANCE: PENDING`. Tuyệt đối không tự ý sửa bản thảo.
