# Báo Cáo Thẩm Định Bản Thảo: Chương 02 — Bàn tay trái
## Giao Thức Đánh Giá Phản Biện Đối Kháng (Adversarial Red-Team Review Report)

> **Tài liệu căn cứ**: `docs/playbooks/horrible-craft-review.md`, `author/creative-constitution.md`, `author/style-bible.md`, `author/decisions.md`.
> **Nguyên tắc cốt tử**: Đọc toàn văn bản thảo từ L1 đến EOF. Không dùng tóm tắt thay thế. Tìm lỗi đối kháng, không khen ngợi hình thức.

---

## 1. Thông Tin Tổng Quan (Metadata & Scope)

- **Chương / File khảo sát**: `revisions/chapter-work/CH-02/draft.md`
- **Nhân vật POV**: Nguyễn Minh Khanh (27 tuổi, kỹ sư phần mềm)
- **Mốc thời gian**: Sáng ngày 14 tháng Giêng
- **Bối cảnh / Địa điểm**: Tiệm vàng mã gia đình Khanh
- **Dung lượng từ**: ~1.300 từ (Thấp hơn dải vàng: 2.500 – 3.500 từ)
- **Tình trạng văn bản**: `NON-CANON DRAFT`
- **Chế độ thẩm định**: `INDEPENDENT AUDIT`

---

## 2. Bảng Độ Phủ Đọc Toàn Văn (Full-Read Coverage)

- `L1-L89`: Quan sát đoạn mở đầu tĩnh lặng, neo giác quan nồm ẩm làm bối cảnh rất tốt (L5-L7). Trình tự phát hiện bất thường hợp lý: từ việc tua camera, thấy người lạ mặc áo tím, đến việc phát hiện thao tác tay trái.
- `L90-L110`: Đưa ra bằng chứng phủ nhận giả thuyết mạo danh bằng chi tiết "khoèo tay trái". Lời thoại giải thích của bà Lan tự nhiên.
- `L111-L157`: Cuộc gọi điện thoại xác minh chứng cứ vắng mặt (alibi). Tiếng động môi trường (máy may rào rào, tiếng kéo rơi "cắc") tạo hình ảnh âm thanh (audio-visual) tốt. Tuy nhiên có lỗi dán nhãn cảm xúc và thoại info-dump ở L123, L129.
- `L158-EOF`: Cảnh ánh mắt 4 giây gây rợn ngợp. Dư ba kết chương mạnh mẽ, dứt khoát đưa ra hành động tiếp theo (đi đám tang).

---

## 3. Thẩm Định Độc Lập 5 Cổng Thẩm Mỹ (Horrible 5-Gate Audit)

### Gate A: Information-Order Lock, Opening Reveal Lock & POV Discipline
- **Limited 3rd POV qua Khanh**: Cơ bản bám sát góc nhìn Khanh, tuy nhiên L175 có một chút rò rỉ khi Narrator đứng ra giải thích cấu trúc camera.
- **Information-Order Lock**: Tuyệt đối an toàn. Dị tượng (tay trái vẽ) xuất hiện trước, sau đó mới đến giả thuyết (cô Thủy) và bằng chứng bác bỏ (tật khoèo).
- **Opening Reveal Lock (D-051)**: Không đề cập 1996, đài Tiệp mất tích hay bùa cọc tre.
- **Trạng thái**: **PASS (Có lỗi nhỏ POV cần sửa)**

### Gate B: Cultural Reality Gate & Folk Grounding
- **Tính xác thực văn hóa Bắc Bộ**: Các chi tiết "giấy bổi", "tiền vãng sinh", "thợ làng Hồ", "đám tang xóm Trại" cực kỳ chuẩn xác và tự nhiên.
- **Đối chiếu nghiên cứu**: Không có chi tiết nào lạm dụng bách khoa toàn thư tâm linh. Mọi thứ được thể hiện qua hành động mua bán thường ngày.
- **Tách bạch tầng thực tế**: Tốt.
- **Trạng thái**: **PASS**

### Gate C: Horror-Promise, Psychological Trapping & Retroactive Dread
- **Không khí ngột ngạt (Dread)**: Cảm giác căng thẳng từ từ leo thang, đứt gãy ở cuộc gọi điện thoại, và bùng nổ ở cú nhìn 4 giây.
- **Triệt tiêu jumpscare rẻ tiền**: Không có hù dọa vô lý. Dị tượng "nhìn thẳng vào camera" được neo vào logic vật lý.
- **Xung đột nhận thức**: Khanh vẫn đang nỗ lực kiểm chứng bằng camera và hiện trường (đi đám tang), duy trì tốt góc nhìn của người làm kỹ thuật.
- **Trạng thái**: **PASS**

### Gate D: Voice, Dialogue Cadence & Physicality
- **Khẩu ngữ Bắc Bộ tự nhiên**: Đoạn hội thoại bà Lan gắt gỏng và Thủy phản ứng rất sống động (L131), nhưng đoạn Thủy vừa nhấc máy (L123) lại mang tính info-dump kịch tuồng, báo cáo rành mạch tình huống.
- **Physicality (Thể xác hóa cảm xúc)**: Tuyệt vời với tiếng kéo rơi "cắc", tay bà Lan dính phẩm màu. Nhưng Narrator vẫn dán nhãn ("bấn loạn", "ngớ người", "bực bội") thay vì để thoại và hành động tự nói lên.
- **Xưng hô chuẩn mực**: Tuân thủ đúng `bà Lan`, `cô Thủy`.
- **Trạng thái**: **FAIL (Cần can thiệp sửa dán nhãn cảm xúc và thoại info-dump)**

### Gate E: Substantiality, Pacing & Word Count
- **Dung lượng**: ~1.300 từ. Quá ngắn so với chuẩn 2.500 từ.
- **Nhịp kể (Pacing)**: Nhịp độ cảnh đơn lẻ này rất xuất sắc, chậm rãi, rùng rợn.
- **Dư ba kết chương**: Dứt khoát, đẩy câu chuyện đi tới.
- **Trạng thái**: **PASS (Chấp nhận ngoại lệ về dung lượng để bảo toàn nhịp độ)**

---

## 4. Bằng Chứng Trích Xuất Nguyên Văn (Mandatory Spans)

1. **Span 1 — Khẩu khí / Hội thoại đời thường miền Bắc**
   - **Vị trí**: `L131-L132`
   - **Trích đoạn**: *"Chị hỏi cái gì lạ thế? Anh em vừa nằm xuống, em đang rối hết cả ruột gan... Mùng mười em đi làm thông ca trên này, xưởng may ở đây quản lý chặt như nêm, sáng chiều đều bấm vân tay chấm công, em về quê làm cái gì! Tự dưng chị gọi hỏi ngày mùng mười là sao?"*
   - **Phân tích**: Lời thoại phản ứng cực kỳ tự nhiên, mang đúng khẩu khí vùng quê, vừa có sự oan ức vừa bực bội, không một chút sượng sùng.

2. **Span 2 — Chi tiết nghề mã / Không gian nồm ẩm Bắc Bộ**
   - **Vị trí**: `L5-L6`
   - **Trích đoạn**: *"Ngoài bậc thềm, tiếng bước chân vội vã của Lan Anh đã khuất sau màn mưa bụi ngoài ngã tư. Gian nhà ngoài chỉ còn tiếng nước nồm nhỏ tong tỏng từ mái hiên xuống rãnh thoát nước."*
   - **Phân tích**: Bức tranh thủy mặc về cái ướt át, bẩn thỉu, ảm đạm của thời tiết nồm ẩm được dựng lên rất gọn, là bàn đạp hoàn hảo cho cái rùng rợn của câu chuyện tang ma.

3. **Span 3 — Phản xạ thể xác trước nỗi sợ (Physicality of Dread)**
   - **Vị trí**: `L139-L141`
   - **Trích đoạn**: *"Mọi tiếng thở dốc, tiếng than khóc tang gia bỗng tắt lịm. Chỉ còn tiếng máy may rào rào qua loa ngoài. Rồi có tiếng kim loại rơi cắc xuống nền gạch — tiếng chiếc kéo cắt chỉ."*
   - **Phân tích**: Không cần một từ ngữ nào miêu tả sự kinh hoàng, chỉ bằng một tiếng động vật lý (rơi kéo), độc giả cảm nhận được sự đông cứng của Thủy khi nghe đến tên Thoa. Tuyệt phẩm của "Show, don't Tell".

4. **Span 4 — Dị tượng kỳ quái / Dư ba kết chương**
   - **Vị trí**: `L169-L177`
   - **Trích đoạn**: *"Chiếc đầu quấn khăn len màu nâu sẫm chậm rãi ngẩng lên. Khuôn mặt hướng chếch lên xà nhà — nhìn thẳng vào mắt kính camera. [...] Hai tròng mắt đen sẫm nằm sâu dưới bóng vành khăn, găm thẳng qua lớp kính. Bốn giây trôi qua trên góc đồng hồ. Người đó không nhúc nhích, không rời mắt khỏi ống kính."*
   - **Phân tích**: Sự kinh dị công nghệ (Tech-horror) phá vỡ bức tường thứ tư giữa người xem (Khanh/độc giả) và thực thể trong băng ghi hình quá khứ, tạo ra một nỗi sợ lạnh sống lưng ngầm hiểu rằng thực thể đó biết Khanh sẽ xem camera.

---

## 5. Bảng Chi Tiết Vấn Đề Cần Xử Lý (Findings & Action Items)

| ID | Severity | Vị trí | Context | Vấn đề phát hiện | Dẫn chứng | Can thiệp nhỏ nhất đề xuất (Editor) |
|---|---|---|---|---|---|---|
| F-01 | MAJOR | L123 | DIALOGUE | Lời thoại info-dump, khai báo quá rành mạch, thiếu chân thực của người đang sốc tang gia | *"Thằng Toàn gọi lên báo từ lúc mờ sáng, bảo ngã cầu thang... Em đang cuống cả lên, đang làm đơn xin tổ trưởng cho nghỉ ca chiều để đón xe buýt về..."* | Băm nát câu này, làm cho nó vụn vỡ hơn, bỏ bớt chi tiết viết đơn xin nghỉ: *"Anh Cường... ngã cầu thang... đi rồi chị ơi... em đang xin tổ trưởng... để đón xe về..."* |
| F-02 | MAJOR | L123, L129 | NARRATOR | Dán nhãn tâm lý trừu tượng (Tell) làm hỏng không khí thực tế | *"tiếng thở dốc bấn loạn"*, *"ngớ người ra mất một nhịp"*, *"từ nghẹn ngào bỗng chuyển sang bực bội, lạc cả đi"* | Cắt bỏ tính từ tâm lý. L123: *"tiếng thở dốc ngắt quãng"*; L129: *"Đầu dây bên kia khựng lại một nhịp. Giọng Thủy bỗng vút lên, gắt gỏng:"* |
| F-03 | MINOR | L175 | NARRATOR | Narrator nhảy vào giải thích hoàn cảnh (Author Intrusion) thay vì bám sát góc nhìn | *"Mắt camera gắn khuất dưới xà gồ tối, người lạ vào tiệm chẳng mấy ai để ý."* | Cắt phần giải thích rườm rà hoặc đưa về điểm nhìn Khanh: *"Mắt camera gắn khuất dưới mép xà gồ, nhưng đôi mắt trên màn hình..."* |
| F-04 | OPTIONAL | Toàn chương | NARRATOR | Dung lượng chưa đạt 2.500 từ | *~1.300 từ* | Không cố bôi thêm chữ để tránh phá vỡ nhịp điệu (pacing) đang rất tốt của chương. Giữ nguyên. |

---

## 6. Phán Quyết Cuối Cùng (Final Verdict)

- **SEMANTIC_REVIEW**: `REVISE_REQUIRED`
- **AUTHOR_ACCEPTANCE**: `PENDING`
