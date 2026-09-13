---
name: hr-source-preflight
description: Thiết lập preflight định vị một chương cho Horrible trước khi viết (neo giác quan, khóa rò rỉ thông tin và chuỗi nhân quả).
---

# hr-source-preflight

Mọi đường dẫn bên dưới tính từ repository root `anhdaijka/horrible`.
Bắt buộc đọc `docs/playbooks/horrible-craft-review.md` trước khi thực hiện.

## Các bước thực hiện:

1. **Xác định chương mục tiêu & Nguồn thẩm quyền (Mandatory Reading)**:
   - Xác định số chương (ví dụ `CH-01`).
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (đặc biệt `DIR-01-psychological-tension.md`): Đây là các chỉ thị sáng tạo tối cao của Tác giả về nhịp độ kinh dị, thủ pháp tâm lý, và cách dàn dựng dị tượng. Mọi thiết lập trong preflight phải tuân thủ tuyệt đối các file này.
   - Đọc `AGENTS.md`, `author/session-state.md`, `author/decisions.md` (đặc biệt D-050, D-051, D-054, D-055), và `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md`.
   - Đọc hồ sơ nhân vật liên quan trong `characters/` và các tài liệu văn hóa kiểm chứng trong `research/verified/`.

2. **Thiết lập 3 Trụ Cột Định Vị (Tri-Pillar Anchoring)**:
   - **Sensory Anchors (Neo Giác Quan)**: Xác định rõ 5 giác quan trong cảnh (hơi lạnh nồm ẩm, mùi bột hồ dán chua nhẹ, bụi giấy mã lạo xạo, ánh đèn tuýp huỳnh quang chập chờn, tiếng còi xe ngoài ngã tư chợ).
   - **Physicality of Emotion (Thể xác hóa Cảm xúc)**: Cảm xúc sợ hãi, bàng hoàng, nghi ngờ của POV và các nhân vật phụ phải được quy đổi thành phản xạ thể chất/sinh lý cụ thể.
   - **Information & Psychological Logic Lock (Khóa Thông Tin và Logic Tâm Lý)**: Phân định ranh giới nghiêm ngặt những gì nhân vật ĐƯỢC PHÉP biết và TUYỆT ĐỐI CẤM biết/lộ ra.
   - **Strict Lore Firewall (Tường lửa chống rò rỉ Lore)**: Tuyệt đối KHÔNG đưa danh tính thật của hung thủ, âm mưu tổng thể (Master Canon) hay bất kỳ manh mối nào ở tương lai vào file preflight. Nếu file preflight chứa spoiler, Agent Writer sẽ bị "Lore-dumping syndrome" và ném hết manh mối vào chương hiện tại làm hỏng bí ẩn. Chỉ cung cấp đúng phần nổi của tảng băng mà POV nhìn thấy.
   - **Psychological Logic Guard**: Nếu nhân vật đang bị hoảng loạn/sang chấn, CẤM để nhân vật kể rành mạch chi tiết dị tượng (chống spoiler/B-movie gore). Rào trước các lỗi phá vỡ logic nghề nghiệp và sinh tồn.

3. **Xây dựng Chuỗi Nhân Quả (Causal Chain)**:
   - Lập chuỗi diễn tiến mạch lạc: `Bởi vì (Because) -> Do đó (Therefore) -> Nhưng (But) -> Hậu quả/Ending Hook`.

4. **Interactive Consultation (Tham vấn Tác giả / Open Questions)**:
   - Lưu kết quả nháp vào `revisions/chapter-work/CH-XX/preflight.md` theo mẫu `templates/chapter-preflight.md`.
   - Bắt buộc điền mục **5. Open Questions**: Đặt 2-3 câu hỏi để xin ý kiến Tác giả (ví dụ: nguy cơ lộ manh mối này có cao không? nên che giấu thông tin này bằng cách nào?). Dừng lại và chờ phản hồi.
   - Sau khi Tác giả trả lời, cập nhật lại file preflight. Kết thúc bằng: `PREFLIGHT READY` và `AUTHOR GATE: PENDING`. Không tự ý chuyển giao cho Writer.
