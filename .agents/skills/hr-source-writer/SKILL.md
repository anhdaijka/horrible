---
name: hr-source-writer
description: Chấp bút bản thảo văn xuôi (draft) cho Horrible theo preflight đã được Tác giả duyệt.
---

# hr-source-writer

Mọi đường dẫn bên dưới tính từ repository root `anhdaijka/horrible`.
Bắt buộc đọc `docs/playbooks/horrible-craft-review.md` và `author/style-bible.md` trước khi viết.

## Các bước thực hiện:

1. **Xác nhận Cổng Phê Duyệt (Gate Verification)**:
   - Kiểm tra `revisions/chapter-work/CH-XX/preflight.md`.
   - Xác nhận preflight đã được Tác giả phê duyệt trong phiên. Nếu chưa có phê duyệt, dừng lại và thông báo `AUTHOR GATE: PENDING`. Không tự ý gỡ freeze.

2. **Tải Ngữ Cảnh Tối Thiểu & Chỉ thị Sáng tạo (Mandatory Context & Directives)**:
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (đặc biệt `DIR-01-psychological-tension.md`): Tuân thủ triệt để không khí kinh dị truyền miệng ma Cường (Nguyễn Ngọc Ngạn style), thủ pháp cô lập người thấy ma vs người dùng logic gạt đi (Thắng, ông Cổn), và tuyệt đối không rò rỉ án mạng Thoa.
   - Đọc `preflight.md` của chương hiện tại đã được Tác giả duyệt.
   - Đọc `author/style-bible.md` và `author/creative-constitution.md`.
   - Đọc hồ sơ nhân vật xuất hiện trong cảnh (chú ý `Physical presence`, `Body-language baseline`, và xưng hô chuẩn).
   - Tuyệt đối KHÔNG đọc hay phục hồi các bản thảo cũ đã bị Tác giả reject (Clean-Rewrite Guard).

3. **Chấp bút Văn xuôi (Drafting Discipline)**:
   - Viết dưới góc nhìn **Limited 3rd POV độc nhất qua Khanh**. Cấm tuyệt đối Head-hopping (không tả suy nghĩ nội tâm người khác).
   - **Pure Show-Don't-Tell**: Khử sạch các nhãn cảm xúc trừu tượng ("sợ hãi", "chột dạ", "bàng hoàng"); thay bằng phản xạ thể xác (gót chân vấp chân ghế, khớp tay trắng bệch, mồ hôi chua, nuốt khan).
   - **Anti-B-Movie Gore & Trauma Realism**: Khi viết nhân vật đối diện với cái chết hoặc sự kiện kinh hoàng, phải dùng cơ chế bóp nghẹt ngôn ngữ (nói lắp, bỏ lửng, nấc nghẹn). KHÔNG ĐƯỢC để nhân vật tả rành mạch chi tiết máu me/rùng rợn. Giữ chi tiết kinh dị cho góc nhìn trực tiếp của POV.
   - **Khẩu ngữ Bắc Bộ đời thường**: Lời thoại người thôn quê phải tự nhiên, vụn vỡ, ngập ngừng, lảng tránh. Cấm thoại kịch tuồng, cấm thoại thuyết trình bách khoa toàn thư tâm linh.
   - **Tuân thủ triệt để Information Lock**: Không để nhân vật hoặc narrator nói hớ bất kỳ tình tiết tương lai nào đã bị khóa.

4. **Bàn giao kết quả**:
   - Lưu toàn văn vào `revisions/chapter-work/CH-XX/draft.md`.
   - Đầu tệp gắn nhãn: `> NON-CANON DRAFT — Horrible Chapter [XX]`.
   - Cuối tệp liệt kê danh sách chi tiết mở / câu hỏi phát sinh (nếu có): `## Open Issues & Claim Delta`.
   - Kết thúc lượt bàn giao. **TUYỆT ĐỐI KHÔNG TỰ ĐÁNH GIÁ, KHÔNG TỰ CHẤM ĐIỂM, KHÔNG TỰ SỬA FILE TRONG `chapters/`**. Chờ lệnh gọi Reviewer độc lập.
