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
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (DIR-01 → DIR-06): Mọi thiết lập trong preflight phải tuân thủ tuyệt đối các chỉ thị này.
   - **BẮT BUỘC ĐỐI CHIẾU `plot/arcs/case-zero-clue-and-epistemic-matrix.md`**: Kiểm tra chương hiện tại phân phối những manh mối nào, ai được biết, ai bị khóa.
   - Đọc `author/session-state.md`, `author/style-bible.md §3` (POV Architecture), và `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md`.
   - Đọc hồ sơ nhân vật liên quan trong `characters/` và các tài liệu văn hóa kiểm chứng trong `research/verified/`.

2. **Thiết lập 4 Trụ Cột Định Vị**:

   ### Trụ A — POV Allocation & Epistemic Asymmetry (DIR-03, DIR-05)
   Phân định rõ từng cảnh theo bảng sau — BẮT BUỘC điền tường minh vào preflight:

   | Cảnh # | POV type | Nhân vật | Độc giả thấy gì | Khanh biết gì | Khóa thông tin |
   |---|---|---|---|---|---|
   | 1 | Khanh anchor / Off-POV / Rotating | ... | ... | ... | ... |

   **Anti-Omnipresent Protagonist Guard:** Tuyệt đối CẤM ép Khanh nấp sau bụi cây rình rập hoặc vô tình đi ngang qua các cuộc đối đầu, tống tiền, ẩu đả riêng tư của nghi phạm. Cảnh kín của gia đình Vũ BẮT BUỘC dùng Cinematic Off-POV.

   **Kỷ luật phân tán manh mối:** Khanh chỉ nhặt 1–2 mảnh rời rạc trong sinh hoạt đời thường. Độc giả là người tự ghép nối.

   ### Trụ B — Sensory Anchors & Folk Horror Execution (DIR-06 — §28.3 Style Bible)
   **Đây là trụ bị bỏ qua nhiều nhất trong các draft cũ. BẮT BUỘC xử lý tường minh.**

   Với mỗi cảnh có yếu tố siêu nhiên hoặc áp bức không gian, xác định:
   - **Âm thanh nền trước dị tượng:** Côn trùng (dế, ễnh ương) có đang kêu không? Nếu có → chúng ngưng bặt đột ngột như thế nào, vào thời điểm nào? Nếu không → vì sao sự im lặng sẵn có đó đáng sợ?
   - **Hành vi động vật:** Chó/mèo trong cảnh làm gì? Có nhìn vào góc trống không? Có gầm gừ định hướng? Có im lặng bất thường không? *(Cấm: mèo nhảy ra thét ré — theatrical scare)*
   - **Âm thanh biến dạng:** Âm thanh quen thuộc (gió, mưa, tiếng người) có bị bóp méo hoặc lạc nhịp không?
   - **5 giác quan đầy đủ:** Thị / Thính / Khứu / Xúc / Vị — ghi nhận ít nhất 3 giác quan trong bối cảnh vật lý của cảnh.

   ### Trụ C — Information & Psychological Logic Lock
   - Phân định ranh giới nghiêm ngặt những gì nhân vật ĐƯỢC PHÉP biết và TUYỆT ĐỐI CẤM biết/lộ ra tại điểm thời gian này.
   - **Strict Lore Firewall:** Tuyệt đối KHÔNG đưa danh tính thật của hung thủ, âm mưu tổng thể hay bất kỳ manh mối tương lai vào file preflight. Chỉ cung cấp đúng phần nổi của tảng băng POV nhìn thấy.
   - Nếu nhân vật đang hoảng loạn/sang chấn: CẤM để nhân vật kể rành mạch chi tiết dị tượng.

   ### Trụ D — Causal Chain (Chuỗi Nhân Quả)
   Lập chuỗi diễn tiến mạch lạc:
   `Bởi vì (Because) → Do đó (Therefore) → Nhưng (But) → Hậu quả / Ending Hook`

3. **Tự kiểm tra DIR-compliance trước khi xuất preflight:**

   Trả lời BẮT BUỘC các câu hỏi sau (ghi vào phần Open Questions nếu chưa giải quyết được):

   - [ ] **DIR-05 / Anti-Omnipresent:** Cảnh riêng tư nào của nghi phạm trong chương này có Khanh không? Nếu có → đổi sang Off-POV.
   - [ ] **DIR-06 / Animal Prescience:** Dị tượng hoặc áp bức không gian trong chương này đã có ít nhất một loại tín hiệu động vật / âm thanh chưa? Nếu chưa → đề xuất điểm chèn.
   - [ ] **DIR-06 / Acoustic Dread:** Côn trùng im bặt hoặc âm thanh biến dạng đã được thiết kế vào cảnh build-up chưa?
   - [ ] **DIR-05 / Epistemic Asymmetry:** Độc giả có thấy nhiều hơn Khanh trong ít nhất một cảnh không? Nếu không → thêm Off-POV hoặc điều chỉnh clue distribution.
   - [ ] **Rotating POV balance:** Chương có ít nhất một cảnh Rotating POV (Thủy/Toàn/Lan Anh/Cổn) hoặc Off-POV không, hay 100% là Khanh anchor? (100% Khanh anchor là vi phạm DIR-05 nếu cảnh đòi hỏi otherwise.)

4. **Interactive Consultation (Tham vấn Tác giả / Open Questions)**:
   - Lưu kết quả nháp vào `revisions/chapter-work/CH-XX/preflight.md` theo mẫu `templates/chapter-preflight.md`.
   - Bắt buộc điền mục **5. Open Questions**: Đặt 2–4 câu hỏi để xin ý kiến Tác giả (nguy cơ lộ manh mối? điểm chèn animal dread hợp lý nhất? POV nào cho cảnh X?). Dừng lại và chờ phản hồi.
   - Sau khi Tác giả trả lời, cập nhật lại file preflight. Kết thúc bằng: `PREFLIGHT READY` và `AUTHOR GATE: PENDING`. Không tự ý chuyển giao cho Writer.
