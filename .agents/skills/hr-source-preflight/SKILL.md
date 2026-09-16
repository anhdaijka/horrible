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
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (đặc biệt `DIR-01`, `DIR-03`, `DIR-05`, `DIR-06`): Mọi thiết lập trong preflight phải tuân thủ tuyệt đối các chỉ thị này: thủ pháp tâm lý, kinh dị khẩu truyền/off-POV, vai trò độc giả là thám tử, và áp bức môi trường.
   - **BẮT BUỘC ĐỐI CHIẾU `plot/arcs/case-zero-clue-and-epistemic-matrix.md`**: Kiểm tra chương hiện tại phân phối những manh mối nào, ai được biết, ai bị khóa, đảm bảo manh mối được xé nhỏ phân tán và độc giả là người tự kết nối.
   - Đọc `AGENTS.md`, `author/session-state.md`, `author/decisions.md` (đặc biệt D-050, D-051, D-054, D-055), và `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md`.
   - Đọc hồ sơ nhân vật liên quan trong `characters/` và các tài liệu văn hóa kiểm chứng trong `research/verified/`.

2. **Thiết lập 3 Trụ Cột Định Vị (Tri-Pillar Anchoring)**:
   - **POV Allocation & Epistemic Asymmetry (Phân bổ Điểm nhìn & Bất đối xứng Tri nhận - DIR-03, DIR-05)**:
     - Phân định rõ cấu trúc từng cảnh: Cảnh nào là **Cinematic Off-POV (Fly-on-the-wall)**, cảnh nào là **Main POV (Khanh)**.
     - **Anti-Omnipresent Protagonist Guard**: Tuyệt đối CẤM ép Khanh nấp sau bụi cây rình rập hoặc vô tình đi ngang qua các cuộc đối đầu, tống tiền, ẩu đả riêng tư của nghi phạm. Các cảnh mâu thuẫn kín của gia đình họ Vũ hoặc chủ nợ BẮT BUỘC dùng Cinematic Off-POV.
     - **Bảng phân chia Tri nhận**: Xác định cụ thể:
       - *Độc giả chứng kiến điều gì* (thấy hành vi đáng ngờ, vết thương, sự sợ hãi ở cảnh Off-POV).
       - *Khanh biết điều gì* (chỉ tiếp nhận 1-2 mảnh vụn đời thường qua sinh hoạt, bạn bè, vật thể nhặt được).
       - *Kỷ luật phân tán manh mối*: Khanh không được nắm toàn bộ chứng cứ, không xâu chuỗi kết luận vụ án trong chương. Độc giả chính là thám tử tự ghép nối các mảnh rời rạc.
   - **Sensory Anchors (Neo Giác Quan & Môi Trường)**: Xác định rõ 5 giác quan trong cảnh. **Bắt buộc** lồng ghép chất liệu Folk Horror từ `DIR-06` nếu bối cảnh cho phép (sự ngưng bặt của côn trùng, chó sủa ma, âm thanh biến dạng, sự nồm ẩm) để tạo áp lực không gian trước khi dị tượng xảy ra.
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
