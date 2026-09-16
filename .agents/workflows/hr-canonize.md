---
description: Tự động hóa thủ tục phê duyệt Canonize, cập nhật continuity, đồng bộ Ma trận Manh mối và bàn giao phiên cho chương tiếp theo.
---

# /hr-canonize <chapter>

Workflow này được kích hoạt **duy nhất** sau khi Tác giả phát lệnh phê duyệt bản thảo sửa đổi (`AUTHOR ACCEPTANCE: APPROVED`) cho chương mục tiêu (ví dụ `CH-07`).

## Các bước tự động hóa khép kín:

1. **Kiểm tra Điều kiện Tiên quyết (Pre-condition Check)**:
   - Đảm bảo `revisions/chapter-work/CH-XX/revised.md` tồn tại và đã có xác nhận phê duyệt của Tác giả.
   - Nếu chưa có phê duyệt rõ ràng trong phiên, DỪNG LẠI và thông báo `AUTHOR APPROVAL REQUIRED`.

2. **Chuyển giao Văn bản Chính thức (Manuscript Promotion)**:
   - Sao chép toàn văn `revisions/chapter-work/CH-XX/revised.md` sang `chapters/chapter-XX.md`.
   - Cập nhật danh sách mục lục `chapters/_index.md`.

3. **Cập nhật Trạng thái Tiếp diễn (Continuity State Sync — `continuity/state.md`)**:
   - Cập nhật `current-chapter: XX`.
   - Thêm phần tóm tắt diễn biến Canon của Chương XX vào mục `Active Canon State`:
     - *Dấu mốc thời gian & Không gian*.
     - *Biến động nhân vật (character-state)*: Quan hệ, vết thương, thay đổi tâm lý.
     - *Biến động vật thể (object-state)*: Vị trí cúc áo, điện thoại, bùa, tiền vàng mã.
     - *Biến động tri nhận (knowledge-state)*: Ai vừa biết thêm điều gì, ai vẫn bị giấu.

4. **Đồng bộ Ma Trận Manh Mối & Tri Thức (`plot/arcs/case-zero-clue-and-epistemic-matrix.md`)**:
   - Rà soát các manh mối (C-01 đến C-10) xem trong chương vừa canonize:
     - Manh mối nào vừa xuất hiện hoặc chuyển trạng thái?
     - Độc giả đã thấy gì? Khanh đã nhặt được/chứng kiến mảnh vỡ nào?
     - Cập nhật trực tiếp vào cột ghi chú của Ma trận để bảo tồn bức tranh phân tán manh mối.

5. **Đồng bộ Bàn giao Phiên (`author/session-state.md`)**:
   - Ghi nhận Chương XX đã chính thức Canonized.
   - Cập nhật mục `Current next action`: Tự động chỉ định bước tiếp theo là khởi động `/hr-preflight CH-(XX+1)`.

6. **Báo cáo Hoàn tất**:
   - Xuất thông báo tóm tắt Canonization Diff cho Tác giả, xác nhận toàn bộ continuity và ma trận đã được khóa an toàn.
---

## Báo cáo kết thúc (bắt buộc sau mỗi lượt hoàn thành)

**Changed files:**
- `chapters/chapter-XX.md` — created (canonical prose)
- `chapters/_index.md` — updated (chapter registry)
- `continuity/state.md` — updated (character/object/knowledge state + current-chapter)
- `plot/arcs/case-zero-clue-and-epistemic-matrix.md` — updated (clue status sync)
- `author/session-state.md` — updated (next action → /hr-preflight CH-XX+1)

**Resulting commit:**
`canon: CH-XX — <tên chương hoặc mô tả ngắn sự kiện canon chính>`

**Next-step recommendation:** `<Astra | Sol | Terra | Luna> / <low | medium | high | xhigh | max | ultra>` — `<một câu lý do: thường là recommend preflight cho chương tiếp theo với intensity phù hợp độ phức tạp của chương đó>`.