---
name: hr-source-review
description: Thẩm định phản biện đối kháng (Adversarial Red-Team Review) toàn văn bản thảo chương của Horrible theo 5 Cổng Thẩm Mỹ.
---

# hr-source-review

Mọi đường dẫn bên dưới tính từ repository root `anhdaijka/horrible`.
Bắt buộc đọc `docs/playbooks/horrible-craft-review.md` và `prompts/roles/reviewer.md` trước khi thực hiện.

## Các bước thực hiện:

1. **Xác lập tư thế Phản biện Đối kháng (Adversarial Red-Team Mindset)**:
   - Rũ bỏ hoàn toàn góc nhìn của người viết. Giả định bản thảo **LUÔN CÓ LỖI TIỀM ẨN** (head-hopping ngầm, narrator giảng bài, leak lore sớm, dán nhãn cảm xúc, thoại kịch tuồng, phong tục sai lệch) cho đến khi tìm đủ bằng chứng chứng minh điều ngược lại.
   - Không tin vào lời giải thích hay tự nhận định của Writer. Đánh giá dựa trên văn bản thực tế.

2. **Đọc Toàn Văn & Nạp Chỉ Thị Tác Giả (Mandatory Directives Check)**:
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (đặc biệt `DIR-01-psychological-tension.md`): Dùng các tiêu chuẩn này làm thước đo kiểm toán đối kháng.
   - Đọc bản thảo mục tiêu (`revisions/chapter-work/CH-XX/draft.md`) tuần tự từ dòng đầu đến dòng cuối.
   - Ghi lại bảng Full-Read Coverage theo từng dải tối đa 120 dòng kèm nhận xét cụ thể. Nếu chưa đọc hết, báo ngay `INCOMPLETE`.

3. **Kiểm toán qua 5 Cổng Thẩm Mỹ Horrible**:
   - **Gate A (Information Order & POV Lock)**: Khanh Limited 3rd POV. Rà soát rò rỉ toàn tri. TUYỆT ĐỐI CẤM Author Intrusion (Narrator giảng bài, tóm tắt tiểu sử, hay tự chốt suy luận hộ nhân vật). Gắn cờ `CRITICAL` nếu vi phạm `DIR-01` (để lộ manh mối án mạng Thoa sớm, hoặc phá vỡ cấu trúc bí mật).
   - **Gate B (Cultural Reality & Folk Grounding)**: Kiểm tra tính chuẩn xác của đồ mã, nghi lễ, đối chiếu `research/verified/`. Bắt lỗi bịa đặt bừa bãi phong tục thật.
   - **Gate C (Horror Promise, Retroactive Dread & Cognitive Conflict)**: Cảm giác ngột ngạt (dread), hai tầng logic. Bắt buộc kiểm tra theo `DIR-01`: Dị tượng có tập trung vào hồn ma Cường không? Có thể hiện được sự xung đột nhận thức giữa kẻ thấy ma và người dùng logic gạt đi (Thắng/ông Cổn) không? Gắn cờ `MAJOR` nếu để 100% nhân vật hùa vào tin ma quỷ làm mất lực căng tâm lý.
   - **Gate D (Voice, Dialogue Cadence & Physicality)**: Khẩu ngữ tự nhiên, triệt tiêu thoại kịch tuồng. Gắn cờ `MAJOR` nếu nhân vật hoảng loạn lại miêu tả rành mạch máu me (B-movie gore) thay vì bị "khóa ngôn ngữ". Bắt buộc thể xác hóa cảm xúc (Show), cấm dán nhãn (Tell). **Bắt buộc gắn cờ `MAJOR` nếu xuất hiện sáo rỗng AI (Section 32 Style Bible: "cắn chặt môi đến rỉ máu", gậy chống lười biếng "Đó là...", "Đó chính là...", "Đấy là...")**.
   - **Gate E (Word Count & Pacing Substantiality)**: Độ dài chuẩn 2.500 – 3.500 từ; nhịp chậm rãi, dư ba kết chương.

4. **Trích xuất Bằng chứng Nguyên văn (Mandatory Spans)**:
   - Trích xuất tối thiểu 4 Spans nguyên văn kèm số dòng `Lxx-Lyy` để chứng minh nhận định:
     - Span 1: Khẩu khí / Đối thoại đời thường miền Bắc.
     - Span 2: Chi tiết nghề mã / Không gian nồm ẩm Bắc Bộ.
     - Span 3: Phản xạ thể xác trước nỗi sợ (Physicality of Dread).
     - Span 4: Dị tượng kỳ quái / Dư ba kết chương.

5. **Lập Bảng Chi Tiết Findings & Xuất Báo Cáo**:
   - Ghi nhận từng lỗi theo format: Severity (`CRITICAL / MAJOR / MINOR / OPTIONAL`), Location (`Lxx-Lyy`), Context (`NARRATOR / DIALOGUE`), Problem, Evidence, Why it matters, Smallest effective intervention.
   - Lưu báo cáo vào `revisions/chapter-work/CH-XX/review.md` theo mẫu `templates/review-report.md`.
   - Kết luận:
     - `SEMANTIC_REVIEW: PASS | REVISE_REQUIRED | INCOMPLETE`
     - `AUTHOR_ACCEPTANCE: PENDING`
   - **TUYỆT ĐỐI KHÔNG TỰ Ý SỬA BẢN THẢO HOẶC CANON**. Bàn giao báo cáo cho Editor / Reviser và Tác giả.
