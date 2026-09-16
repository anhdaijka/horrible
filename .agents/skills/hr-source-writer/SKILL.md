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
   - **Kỷ luật Điểm nhìn (POV Discipline - DIR-03 & DIR-05)**:
     - *Phân cảnh có Khanh*: Viết dưới góc nhìn **Limited 3rd POV qua Khanh**. Cấm tuyệt đối Head-hopping (không tả suy nghĩ nội tâm người khác).
     - *Phân cảnh Cinematic Off-POV (Fly-on-the-wall)*: Khi preflight quy định cảnh không có Khanh (như cảnh mâu thuẫn riêng giữa Toàn - Sang hay nội bộ nhà họ Vũ), người kể hoạt động như một **máy quay khách quan**: chỉ ghi nhận hành động, lời nói, âm thanh, khoảng lặng. **CẤM ĐỘC THOẠI NỘI TÂM**, cấm confession dump (tự kể tội/giải thích âm mưu).
     - **Anti-Omnipresent Protagonist**: TUYỆT ĐỐI CẤM kéo Khanh vào nấp sau bụi cây rình rập hoặc vô tình đi ngang qua để chứng kiến các cuộc ẩu đả/tống tiền kín.
   - **Pure Show-Don't-Tell**: Khử sạch các nhãn cảm xúc trừu tượng ("sợ hãi", "chột dạ", "bàng hoàng"); thay bằng phản xạ thể xác (gót chân vấp chân ghế, khớp tay trắng bệch, mồ hôi chua, nuốt khan).
   - **Anti-B-Movie Gore & Trauma Realism**: Khi viết nhân vật đối diện với cái chết hoặc sự kiện kinh hoàng, phải dùng cơ chế bóp nghẹt ngôn ngữ (nói lắp, bỏ lửng, nấc nghẹn). KHÔNG ĐƯỢC để nhân vật tả rành mạch chi tiết máu me/rùng rợn. Giữ chi tiết kinh dị cho góc nhìn trực tiếp của POV.
   - **Tuyệt đối cấm Sáo rỗng & Gậy chống AI (Section 32 Style Bible)**: CẤM TUYỆT ĐỐI cụm "cắn chặt môi đến rỉ máu / rớm máu" (thay bằng cơ hàm bạnh ra, nghiến răng, nuốt khan, bấu chặt mép chiếu/bàn); CẤM mô thức ngắt nhịp gậy chống lười biếng "Đó là...", "Đó chính là...", "Đấy là..." (hòa quyện nhân vật vào hành động); CẤM các từ làm yếu câu ("dường như", "bất giác", "không khỏi").
   - **Khẩu ngữ Bắc Bộ đời thường**: Lời thoại người thôn quê phải tự nhiên, vụn vỡ, ngập ngừng, lảng tránh. Cấm thoại kịch tuồng, cấm thoại thuyết trình bách khoa toàn thư tâm linh.
   - **Tuân thủ triệt để Information Lock**: Không để nhân vật hoặc narrator nói hớ bất kỳ tình tiết tương lai nào đã bị khóa.
   - **Anti-Detective Overreach & Scattered Clues (Độc giả là Thám tử - DIR-05)**: 
     - Khanh là một kỹ sư IT đời thường, không phải điều tra viên hay thám tử. Anh chỉ tiếp nhận các **manh mối phân tán, rời rạc** trong sinh hoạt hàng ngày (một câu nói bâng quơ bên quán nước, một vật thể lạ nhặt được).
     - **Tuyệt đối cấm** Khanh hoặc Narrator tự xâu chuỗi toàn bộ chứng cứ thành kết luận vụ án ngay trong chương. **Quy tắc: Show the clue, hide the conclusion.** Hãy để các mảnh ghép nằm rải rác để độc giả tự lắp ráp. Khanh chỉ ghi nhận và giữ đó, suy đoán chỉ dành cho các hồi sau khi có biến cố lớn hoặc đối chất công an.
   - **Thanh lọc Văn chương (Anti-Purple Prose & Research Leakage)**: Cấm tiệt các so sánh gượng ép, ví von sáo rỗng (như tàu lá chuối héo, máu đông, mắt rắn). Cấm mượn kiến thức research (pháp y, tâm lý học, tâm linh) để làm ẩn dụ sai bối cảnh (như ví tiếng gió với tiếng bóp cổ). Viết miêu tả thuần túy, chân thực, lạnh lẽo.
   - **Folk Horror Execution (Áp bức Môi trường & Động vật)**: Áp dụng triệt để `DIR-06`. Sử dụng sự ngưng bặt của côn trùng, sự bất an của chó mèo/chim chóc, và âm thanh biến dạng của màn đêm để build-up sự ngột ngạt trước khi Intrusion xảy ra. Không để quái vật hóa động vật, chỉ dùng chúng làm "ăng-ten" tâm linh.

4. **Bàn giao kết quả**:
   - Lưu toàn văn vào `revisions/chapter-work/CH-XX/draft.md`.
   - Đầu tệp gắn nhãn: `> NON-CANON DRAFT — Horrible Chapter [XX]`.
   - Cuối tệp liệt kê danh sách chi tiết mở / câu hỏi phát sinh (nếu có): `## Open Issues & Claim Delta`.
   - Kết thúc lượt bàn giao. **TUYỆT ĐỐI KHÔNG TỰ ĐÁNH GIÁ, KHÔNG TỰ CHẤM ĐIỂM, KHÔNG TỰ SỬA FILE TRONG `chapters/`**. Chờ lệnh gọi Reviewer độc lập.
