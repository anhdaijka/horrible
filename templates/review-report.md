# Báo Cáo Thẩm Định Bản Thảo: Chương [XX] — [Tên Chương]
## Giao Thức Đánh Giá Phản Biện Đối Kháng (Adversarial Red-Team Review Report)

> **Tài liệu căn cứ**: `docs/playbooks/horrible-craft-review.md`, `author/creative-constitution.md`, `author/style-bible.md`, `author/decisions.md`.
> **Nguyên tắc cốt tử**: Đọc toàn văn bản thảo từ L1 đến EOF. Không dùng tóm tắt thay thế. Tìm lỗi đối kháng, không khen ngợi hình thức.

---

## 1. Thông Tin Tổng Quan (Metadata & Scope)

- **Chương / File khảo sát**: `revisions/chapter-work/CH-[XX]/draft.md` (hoặc `chapters/chapter-[XX].md`)
- **Nhân vật POV**: Nguyễn Minh Khanh (27 tuổi, kỹ sư phần mềm)
- **Mốc thời gian**: [Ví dụ: Sáng ngày 14 tháng Giêng] (Khớp với `author/decisions.md`)
- **Bối cảnh / Địa điểm**: [Ví dụ: Tiệm vàng mã gia đình Khanh, ngã tư chợ huyện]
- **Dung lượng từ**: [Số lượng từ] từ (Dải vàng: 2.500 – 3.500 từ)
- **Tình trạng văn bản**: `NON-CANON DRAFT`
- **Chế độ thẩm định**: `INDEPENDENT AUDIT` (hoặc `SAME-CONTEXT AUDIT`)

---

## 2. Bảng Độ Phủ Đọc Toàn Văn (Full-Read Coverage)

> Bắt buộc phủ từ L1 đến EOF, mỗi dải tối đa 120 dòng kèm ít nhất một nhận xét quan sát cụ thể trên trang văn bản.

- `L1-L[AA]`: [Quan sát cụ thể về mở đầu, giọng kể, giác quan khởi phát hoặc lỗi xuất hiện tại dải dòng này]
- `L[AA+1]-L[BB]`: [Quan sát cụ thể]
- `L[BB+1]-L[CC]`: [Quan sát cụ thể]
- `L[CC+1]-EOF`: [Quan sát cụ thể về đoạn kết, dư ba rùng rợn, hook sang chương sau]

---

## 3. Thẩm Định Độc Lập 5 Cổng Thẩm Mỹ (Horrible 5-Gate Audit)

### Gate A: Information-Order Lock, Opening Reveal Lock & POV Discipline
- **Limited 3rd POV qua Khanh**: [Có câu nào narrator nói thay, giảng bài toàn tri, hoặc miêu tả suy nghĩ nội tâm người khác không?]
- **Information-Order Lock**: [Có tiết lộ lore hoặc đưa ra lời giải thích duy lý trước khi nhân vật quan sát thấy dị tượng không?]
- **Opening Reveal Lock (D-051)**: [Có để lộ vụ án đuối nước 1996, chiếc đài Tiệp mất tích, hay bùa cọc tre quá sớm không?]
- **Trạng thái**: **[PASS / FAIL]**

### Gate B: Cultural Reality Gate & Folk Grounding
- **Tính xác thực văn hóa Bắc Bộ**: [Chi tiết đồ mã, tục tang ma, khâm liệm, giỗ chạp, xưng hô có khớp phong tục đồng bằng Bắc Bộ không?]
- **Đối chiếu nghiên cứu**: [Có chi tiết nào bịa đặt bách khoa toàn thư tâm linh trái với `research/verified/` không?]
- **Tách bạch tầng thực tế**: [Đã phân biệt rõ giữa "lời đồn nhân vật" và "sự thật khách quan" chưa?]
- **Trạng thái**: **[PASS / FAIL]**

### Gate C: Horror-Promise, Psychological Trapping & Retroactive Dread
- **Không khí ngột ngạt (Dread)**: [Cảnh có truyền tải được sự rùng rợn ngấm ngầm, áp lực tâm lý của nghiệp báo/ô uế không?]
- **Triệt tiêu jumpscare rẻ tiền**: [Dị tượng có gắn chặt với logic hai tầng (vừa có thể là hành vi con người mờ ám, vừa có dấu vết siêu nhiên không thể chối cãi) không?]
- **Xung đột nhận thức**: [Có làm nổi bật sự giằng co giữa tư duy IT của Khanh và sự mê tín thôn quê không?]
- **Trạng thái**: **[PASS / FAIL]**

### Gate D: Voice, Dialogue Cadence & Physicality
- **Khẩu ngữ Bắc Bộ tự nhiên**: [Thoại có vụn vỡ, ngập ngừng, lảng tránh đúng chất thôn quê không? Có bị kịch tuồng, diễn thuyết không?]
- **Physicality (Thể xác hóa cảm xúc)**: [Cảm xúc có được SHOW qua phản xạ sinh lý/vật lý (mồ hôi, khớp ngón tay, va quẹt) thay vì dán nhãn trừu tượng ("sợ hãi", "chột dạ") không?]
- **Xưng hô chuẩn mực**: [Narration dùng `mẹ anh / bà Lan`, `ông Hùng / bố anh`, người lớn tuổi dùng `ông/bà + tên`, peer dùng tên?]
- **Trạng thái**: **[PASS / FAIL]**

### Gate E: Substantiality, Pacing & Word Count
- **Dung lượng**: [Số từ thực tế so với dải 2.500 – 3.500 từ]
- **Nhịp kể (Pacing)**: [Có khoảng thở sinh hoạt, chi tiết đời sống nồm ẩm làm nền cho dị tượng không?]
- **Dư ba kết chương**: [Đoạn kết có để lại một câu hỏi nhức nhối hoặc hình ảnh rợn ngợp không?]
- **Trạng thái**: **[PASS / FAIL]**

---

## 4. Bằng Chứng Trích Xuất Nguyên Văn (Mandatory Spans)

> Tối thiểu 4 spans trích nguyên văn kèm dòng cụ thể từ bản thảo:

1. **Span 1 — Khẩu khí / Hội thoại đời thường miền Bắc**
   - **Vị trí**: `L[XX]-L[YY]`
   - **Trích đoạn**: *"[Dán nguyên văn câu thoại/phản xạ]"*
   - **Phân tích**: [Đánh giá tính tự nhiên, đời thường, hay sượng sùng]

2. **Span 2 — Chi tiết nghề mã / Không gian nồm ẩm Bắc Bộ**
   - **Vị trí**: `L[XX]-L[YY]`
   - **Trích đoạn**: *"[Dán nguyên văn]"*
   - **Phân tích**: [Đánh giá độ chân thực của bối cảnh sống]

3. **Span 3 — Phản xạ thể xác trước nỗi sợ (Physicality of Dread)**
   - **Vị trí**: `L[XX]-L[YY]`
   - **Trích đoạn**: *"[Dán nguyên văn]"*
   - **Phân tích**: [Đánh giá xem có bị dán nhãn cảm xúc lười biếng hay không]

4. **Span 4 — Dị tượng kỳ quái / Dư ba kết chương**
   - **Vị trí**: `L[XX]-L[YY]`
   - **Trích đoạn**: *"[Dán nguyên văn]"*
   - **Phân tích**: [Đánh giá hiệu quả kinh dị hai tầng logic]

---

## 5. Bảng Chi Tiết Vấn Đề Cần Xử Lý (Findings & Action Items)

| ID | Severity | Vị trí | Context | Vấn đề phát hiện | Dẫn chứng | Can thiệp nhỏ nhất đề xuất (Editor) |
|---|---|---|---|---|---|---|
| F-01 | CRITICAL | L[XX] | NARRATOR | [Rò rỉ góc nhìn / leak lore sớm] | *"[Trích dẫn]"* | [Cắt bỏ câu giảng bài, chuyển thành hành động quan sát của Khanh] |
| F-02 | MAJOR | L[YY] | DIALOGUE | [Thoại kịch tuồng / lore-dump] | *"[Trích dẫn]"* | [Băm nhỏ câu thoại, thêm ngập ngừng hoặc phản xạ lảng tránh] |
| F-03 | MAJOR | L[ZZ] | NARRATOR | [Dán nhãn tâm lý trừu tượng] | *"[Trích dẫn]"* | [Thay "anh hoảng hốt" bằng phản xạ giật lùi, khớp tay siết chặt bậu cửa] |
| F-04 | MINOR | L[KK] | NARRATOR | [Xưng hô chưa chuẩn] | *"[Trích dẫn]"* | [Đổi thành `bà Lan / mẹ anh` thay vì dùng tên trống không] |

---

## 6. Phán Quyết Cuối Cùng (Final Verdict)

- **SEMANTIC_REVIEW**: `[PASS / REVISE_REQUIRED / INCOMPLETE]`
- **AUTHOR_ACCEPTANCE**: `PENDING` (Chờ Tác giả xem xét và ra quyết định)
