---
name: hr-source-revision
description: Biên tập viên độc lập phẫu thuật sửa chữa bản thảo theo findings của review.md và chỉ đạo của Tác giả.
---

# hr-source-revision

Mọi đường dẫn bên dưới tính từ repository root `anhdaijka/horrible`.
Bắt buộc đọc `docs/playbooks/horrible-craft-review.md` và `prompts/roles/editor.md` trước khi thực hiện.

## Các bước thực hiện:

1. **Tiếp nhận Hồ sơ Thẩm định & Chỉ thị Tác giả**:
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (đặc biệt `DIR-01-psychological-tension.md`): Bảo đảm mọi thao tác phẫu thuật sửa chữa đều giữ vững tinh thần chỉ đạo của Tác giả.
   - Đọc bản thảo hiện tại: `revisions/chapter-work/CH-XX/draft.md`.
   - Đọc báo cáo thẩm định: `revisions/chapter-work/CH-XX/review.md`.
   - Đọc chỉ đạo hoặc phản hồi bổ sung của Tác giả (nếu có).

2. **Kỷ luật Can thiệp Nhỏ nhất Có hiệu quả (Smallest Effective Intervention)**:
   - Đóng vai trò bác sĩ phẫu thuật văn học: chỉ mổ đúng khối u đã được chỉ ra trong findings.
   - **CẤM VIẾT LẠI CẢ CHƯƠNG** cho lỗi một vài đoạn.
   - Nếu lỗi là narrator giảng bài: cắt bỏ câu giảng bài, chuyển thành hành động quan sát cụ thể của Khanh.
   - Nếu lỗi là thoại kịch tuồng / lore-dump: băm nhỏ câu thoại dài, thêm ngập ngừng, lặp từ, hơi thở hoặc phản xạ lảng tránh đúng chất thôn quê.
   - Nếu phát hiện lỗi "Gore/Info-dump lúc hoảng loạn": phẫu thuật cắt bỏ toàn bộ miêu tả thị giác rùng rợn, thay bằng phản xạ cơ thể (ôm mặt, nấc nghẹn, khóa cổ họng).
   - Nếu lỗi là dán nhãn cảm xúc ("sợ hãi", "chột dạ"): thay bằng phản xạ sinh lý/vật lý trực tiếp.
   - Nếu phát hiện sáo rỗng AI ("cắn môi rỉ máu", gậy chống "đó là...", từ làm yếu "dường như") hoặc so sánh gượng ép/research leakage: phẫu thuật cắt bỏ triệt để, giữ lại miêu tả thuần túy tả thực chân lạnh.
   - Nếu phát hiện lỗi Overreach (nhân vật đóng vai thám tử, tự xâu chuỗi/tóm tắt bằng chứng): Phẫu thuật cắt bỏ toàn bộ đoạn văn liệt kê bằng chứng, thay bằng cảm giác bất an hoặc sự im lặng. Biến các câu thoại "hỏi cung" thành câu hỏi buột miệng.
   - Nếu phát hiện lỗi Spoil/Leakage (phơi bày quá rõ diễn biến hoặc thủ phạm): Cắt tỉa lại để manh mối chỉ xuất hiện thoáng qua (glimpse), trả lại sự mơ hồ cho độc giả tự ráp nối.
   - Tuyệt đối không tự ý thay đổi cốt truyện, diễn biến chính, hay tự bịa thêm lore mới.

3. **Lập Bản Thảo Sửa Đổi & Bảng Nghiệm Thu**:
   - Xuất toàn văn bản sửa đổi vào `revisions/chapter-work/CH-XX/revised.md`.
   - Cuối tệp lập bảng **Revision Audit Table**, liệt kê từng Finding ID từ `review.md` và ghi rõ:
     - `Trạng thái`: `RESOLVED` (kèm dòng mới) hoặc `UNRESOLVED / NEEDS_AUTHOR`.
     - `Biện pháp đã can thiệp`: Mô tả ngắn gọn thay đổi đã làm.

4. **Bàn giao kết quả**:
   - Giao `revised.md` và bảng nghiệm thu cho Tác giả.
   - Giữ nguyên `AUTHOR GATE: PENDING`. Không tự động copy vào `chapters/chapter-XX.md` hoặc cập nhật `continuity/` khi Tác giả chưa phê duyệt.
