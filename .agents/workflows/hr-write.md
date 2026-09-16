---
description: Chấp bút bản thảo văn xuôi (draft) cho một chương của Horrible theo preflight đã được Tác giả duyệt.
---

# /hr-write

1. Xác định số chương (ví dụ `CH-01`, `chapter-01`) từ yêu cầu hoặc ngữ cảnh.
2. Kiểm tra `revisions/chapter-work/CH-XX/preflight.md` đã có sự chấp thuận của Tác giả chưa; nếu chưa, dừng lại và thông báo cổng duyệt.
3. BẮT BUỘC dùng công cụ `list_dir` và `view_file` để đọc trực tiếp toàn bộ các tệp `.md` trong thư mục `author/directives/`.
4. Đọc `.agents/skills/hr-source-writer/SKILL.md` và thực thi vai trò Writer thuần túy.
5. Xuất kết quả vào `revisions/chapter-work/CH-XX/draft.md` (gắn nhãn `NON-CANON DRAFT`).
6. Bàn giao bản nháp kèm danh sách chi tiết mở/câu hỏi phát sinh (nếu có). Cấm tự chấm điểm, cấm tự phong canon, cấm tự ý sửa file trong `chapters/`.
