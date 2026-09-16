---
description: Lập preflight định vị một chương cho Horrible (neo giác quan, khóa thứ tự thông tin và chuỗi nhân quả).
---

# /hr-preflight

1. Xác định số chương (ví dụ `CH-01`, `chapter-01`) từ yêu cầu hoặc ngữ cảnh phiên làm việc; chỉ hỏi nếu chưa rõ mục tiêu.
2. BẮT BUỘC dùng công cụ `list_dir` và `view_file` để đọc trực tiếp toàn bộ các tệp `.md` trong thư mục `author/directives/`.
3. Đọc `.agents/skills/hr-source-preflight/SKILL.md` và thực thi đầy đủ quy trình trong skill. Chú ý áp dụng Strict Lore Firewall.
4. Xuất kết quả nháp vào `revisions/chapter-work/CH-XX/preflight.md` theo mẫu `templates/chapter-preflight.md`, bắt buộc điền mục **5. Open Questions**.
5. Dừng lại, báo cáo Tác giả và chờ Tác giả trả lời Open Questions.
6. Sau khi nhận phản hồi, cập nhật preflight và đổi trạng thái thành `PREFLIGHT READY` & `AUTHOR GATE: PENDING`. Tuyệt đối không tự ý chuyển sang bước viết văn xuôi.
