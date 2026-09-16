---
name: hr-source-review
description: Thẩm định phản biện đối kháng (Adversarial Red-Team Review) toàn văn bản thảo chương của Horrible theo 5 Cổng Thẩm Mỹ.
---

# hr-source-review

Mọi đường dẫn bên dưới tính từ repository root `anhdaijka/horrible`.
Bắt buộc đọc `docs/playbooks/horrible-craft-review.md` và `prompts/roles/reviewer.md` trước khi thực hiện.

## Các bước thực hiện:

1. **Xác lập tư thế Phản biện Đối kháng (Adversarial Red-Team Mindset)**:
   - Rũ bỏ hoàn toàn góc nhìn của người viết. Giả định bản thảo **LUÔN CÓ LỖI TIỀM ẨN** cho đến khi tìm đủ bằng chứng chứng minh điều ngược lại.
   - Không tin vào lời giải thích hay tự nhận định của Writer. Đánh giá dựa trên văn bản thực tế.

2. **Đọc Toàn Văn & Nạp Chỉ Thị Tác Giả (Mandatory Directives Check)**:
   - **BẮT BUỘC ĐỌC TOÀN BỘ CÁC FILE TRONG `author/directives/`** (DIR-01 → DIR-06): Dùng các tiêu chuẩn này làm thước đo kiểm toán đối kháng.
   - Đọc bản thảo mục tiêu (`revisions/chapter-work/CH-XX/draft.md`) tuần tự từ dòng đầu đến dòng cuối.
   - Ghi lại bảng Full-Read Coverage theo từng dải tối đa 120 dòng kèm nhận xét cụ thể. Nếu chưa đọc hết, báo ngay `INCOMPLETE`.

3. **Kiểm toán qua 5 Cổng Thẩm Mỹ Horrible**:

   ### Gate A — Information Order, POV Lock, Epistemic Asymmetry & Anti-Detective (DIR-03, DIR-05)
   - *Kiểm soát Điểm nhìn & Cấm có mặt gượng ép:* Rà soát xem cảnh có bị ép Khanh vào hiện trường riêng tư của nghi phạm hay không. Gắn cờ `CRITICAL` nếu vi phạm **Anti-Omnipresent Protagonist Guard** — những cảnh này BẮT BUỘC dùng Cinematic Off-POV. Trong cảnh Off-POV, bắt lỗi độc thoại nội tâm hoặc confession dump.
   - *Bắt lỗi Hội chứng Thám tử & Tập trung hóa Manh mối:* Gắn cờ `CRITICAL` nếu Khanh/Narrator tự xâu chuỗi kết luận vụ án. Khanh chỉ được phép tiếp nhận 1–2 mảnh ghép rời rạc; việc lắp ghép thuộc về độc giả.
   - *Tường lửa Lore & Rò rỉ toàn tri:* Gắn cờ `CRITICAL` nếu narrator lộ án mạng Thoa, danh tính hung thủ, hoặc bất kỳ tình tiết bị khóa thông tin sớm.
   - *Rotating POV compliance:* Kiểm tra chương có quá nhiều cảnh Khanh anchor liên tiếp mà đáng lẽ phải là Off-POV/Rotating không. Gắn cờ `MAJOR` nếu Khanh bị kéo gượng vào cảnh riêng tư.

   ### Gate B — Cultural Reality, Folk Grounding & Environmental Dread (DIR-06, §28.3 Style Bible)
   **Đây là gate bị underweight nhất trong các lần review cũ. Áp dụng tường minh.**

   Kiểm tra và gắn cờ tất cả các mục sau:
   - [ ] **Animal Prescience:** Cảnh siêu nhiên hoặc build-up áp bức không gian có ít nhất một tín hiệu động vật không (chó gầm, mèo nhìn góc trống, chim im bặt)? Nếu không → gắn cờ `MAJOR: DIR-06 animal prescience absent`.
   - [ ] **Acoustic Dread:** Côn trùng có ngưng bặt đột ngột trước dị tượng không? Âm thanh nền có biến dạng hoặc lạc nhịp không? Nếu không → gắn cờ `MAJOR: DIR-06 acoustic dread absent`.
   - [ ] **Sợ hãi của con vật:** Nếu động vật xuất hiện, chúng có **thể hiện sợ hãi** thay vì trở thành mối đe dọa/quái vật không? Nếu theatrical (mèo nhảy ra thét ré) → gắn cờ `MAJOR`.
   - [ ] **Cultural accuracy:** Kiểm tra tính chuẩn xác của đồ mã, nghi lễ, đối chiếu `research/verified/`. Gắn cờ `CRITICAL` nếu bịa đặt phong tục được trình bày như sự thật.

   ### Gate C — Horror Promise, Retroactive Dread & Cognitive Conflict (DIR-01, DIR-06)
   - Dị tượng có tập trung vào hồn ma Cường không (DIR-01)?
   - Có thể hiện được xung đột nhận thức giữa kẻ thấy ma và người dùng logic gạt đi không?
   - **Âm thanh màn đêm và sự ngưng bặt côn trùng có được dùng để build-up trước dị tượng không, hay bị bỏ quên hoàn toàn?** Gắn cờ `MAJOR` nếu cảnh kinh dị xuất hiện mà không có bất kỳ environmental build-up nào.
   - Gắn cờ `MAJOR` nếu 100% nhân vật hùa vào tin ma quỷ (mất lực căng tâm lý).

   ### Gate D — Voice, Cadence, Physicality & Anti-Purple Prose (§32 Style Bible, DIR-05)
   - Khẩu ngữ tự nhiên Bắc Bộ; triệt tiêu thoại kịch tuồng.
   - Thể xác hóa cảm xúc (Show), cấm dán nhãn (Tell).
   - Gắn cờ `MAJOR` nếu nhân vật hoảng loạn lại miêu tả rành mạch máu me (B-movie gore).
   - **Gắn cờ `MAJOR` nếu phát hiện §32.3 violations:** Khanh độc thoại xâu chuỗi bằng chứng pháp y; so sánh gượng ép (hoa gạo như máu, tiếng gió như cuống họng bị bóp); các từ kịch tính sáo rỗng AI (bàng hoàng, chết sững, cắn chặt môi rỉ máu, Đó là..., Đó chính là...).

   ### Gate E — Word Count & Pacing Substantiality
   - Độ dài chuẩn 2.500–3.500 từ; nhịp chậm rãi, dư ba kết chương.

4. **Trích xuất Bằng chứng Nguyên văn (Mandatory 5 Spans)**:
   Trích xuất tối thiểu **5 Spans nguyên văn** kèm số dòng `Lxx-Lyy`:
   - **Span 1:** Khẩu khí / Đối thoại đời thường miền Bắc — ví dụ thể hiện ngập ngừng, lảng tránh, vụn vỡ.
   - **Span 2:** Chi tiết nghề mã / Không gian nồm ẩm Bắc Bộ — vật liệu, mùi, bề mặt.
   - **Span 3:** Phản xạ thể xác trước nỗi sợ (Physicality of Dread) — không dán nhãn.
   - **Span 4:** Dị tượng kỳ quái / Dư ba kết chương — câu hay nhất hoặc câu đáng lo ngại nhất.
   - **Span 5:** Áp bức môi trường & Linh tính động vật (Environmental & Animal Dread) — **BẮT BUỘC trích dẫn hoặc gắn cờ `ABSENT` nếu không tìm thấy.**

5. **Lập Bảng Chi Tiết Findings & Xuất Báo Cáo**:
   - Ghi nhận từng lỗi theo format: Severity (`CRITICAL / MAJOR / MINOR / OPTIONAL`), Location (`Lxx-Lyy`), Context, Problem, Evidence, Why it matters, Smallest effective intervention.
   - Lưu báo cáo vào `revisions/chapter-work/CH-XX/review.md` theo mẫu `templates/review-report.md`.
   - Kết luận:
     - `SEMANTIC_REVIEW: PASS | REVISE_REQUIRED | INCOMPLETE`
     - `AUTHOR_ACCEPTANCE: PENDING`
   - **TUYỆT ĐỐI KHÔNG TỰ Ý SỬA BẢN THẢO HOẶC CANON**. Bàn giao báo cáo cho Editor / Reviser và Tác giả.
