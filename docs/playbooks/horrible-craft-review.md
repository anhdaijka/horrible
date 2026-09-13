# Sổ Tay Thẩm Định & Biên Tập Độc Lập Cho Tiểu Thuyết Horrible
## (Horrible Craft & Evidence Review Playbook)

> **Cơ sở thẩm quyền tối cao**: `AGENTS.md`, `author/creative-constitution.md`, `author/boundaries.md`, `author/style-bible.md`, `author/decisions.md` (đặc biệt D-050, D-051), và `continuity/state.md`. Mọi đường dẫn trong văn bản này tính từ repository root `anhdaijka/horrible`.

---

## I. Nguyên Tắc Thẩm Quyền & Phân Lập Vai Trò

1. **Tác giả là thẩm quyền tối cao**: Trợ lý AI và các vai trò (Writer, Reviewer, Editor) chỉ được đề xuất, chấp bút nháp, thẩm định và sửa đổi cục bộ. Không ai được tự ý phong một bản thảo thành canon hay tự ý sửa đổi canon files (`chapters/`, `continuity/state.md`) khi chưa có lệnh rõ ràng của Tác giả.
2. **Quy tắc Tam quyền phân lập**:
   - **Người chấp bút (Writer - `/hr-write`)**: Tập trung 100% vào việc hiện thực hóa văn phong, ngũ quan, thể xác hóa cảm xúc và khẩu ngữ đời thường theo đề cương đã duyệt. Không tự đánh giá, không tự khen, không tự cấp quyền PASS.
   - **Người thẩm định độc lập (Reviewer - `/hr-review`)**: Hoạt động với tư duy **Adversarial Red-Team** (phản biện đối kháng khắc nghiệt). Đọc độc lập, kiểm tra toàn văn từ L1 đến EOF, soi chiếu qua 5 Cổng Thẩm Mỹ đặc thù của Horrible, trích dẫn số dòng và chứng cứ nguyên văn, tuyệt đối không tự ý sửa đổi văn bản.
   - **Biên tập viên độc lập (Editor / Reviser - `/hr-revise`)**: Đóng vai trò bác sĩ phẫu thuật văn học. Tiếp nhận bản nháp và báo cáo review để tiến hành các can thiệp nhỏ nhất có hiệu quả (*smallest effective intervention*). Không viết lại cả chương cho lỗi một vài đoạn; xuất bản sửa `revised.md` kèm bảng đối soát trạng thái xử lý lỗi.
3. **Kỷ luật ngữ cảnh (Context Discipline)**:
   - Ưu tiên thực hiện lượt review trong một lượt gọi mới hoặc phiên mới để rũ bỏ hoàn toàn thiên kiến lập luận của Writer.
   - Nếu chạy trong cùng phiên làm việc, Reviewer phải đánh dấu `SAME-CONTEXT AUDIT` và bắt buộc bám sát từng dòng chữ trên trang giấy, không dựa vào ý định của prompt trước đó.

---

## II. Gói Không Gian Làm Việc Theo Chương (Chapter Workspace)

Mọi hoạt động phát triển văn thảo của từng chương phải được cách ly trong thư mục làm việc đệm:
`revisions/chapter-work/CH-XX/` (với `XX` là số chương hai chữ số, ví dụ `CH-01`):

- `preflight.md`: Đề cương phân cảnh, sensory anchors, emotional physicality, và information locks đã được Tác giả duyệt.
- `draft.md`: Bản thảo văn xuôi do Writer viết ra (trạng thái `NON-CANON DRAFT`).
- `review.md`: Báo cáo thẩm định chi tiết do Reviewer lập (theo mẫu `templates/review-report.md`).
- `revised.md`: Bản thảo đã được Editor phẫu thuật sửa chữa theo các findings.

Chỉ sau khi Tác giả đọc `revised.md` và ra lệnh phê duyệt (`AUTHOR ACCEPTANCE: APPROVED`), bản thảo mới được chép vào cây thư mục chính thức: `chapters/chapter-XX.md` và cập nhật `continuity/state.md`.

---

## III. Quy Trình Thẩm Định Đối Kháng (Adversarial Red-Team Protocol)

### 1. Đọc toàn văn tuần tự (Full-Read Coverage)
- Reviewer BẮT BUỘC phải đọc bản thảo hiện tại tuần tự từ **L1 đến EOF**.
- Tuyệt đối không dùng tìm kiếm từ khóa cục bộ (`grep`) hay đọc tóm tắt để thay thế cho việc đọc toàn văn.
- Ghi nhận độ phủ đọc (Full-Read Coverage) theo từng dải dòng tối đa 120 dòng (ví dụ `L1-L85`, `L86-L195`,...), mỗi dải phải có ít nhất một nhận xét quan sát thực tế.

### 2. 5 Cổng Thẩm Mỹ Chuyên Biệt Của Horrible (SOLID 5-Gate Review Runner)

Reviewer phải mổ xẻ bản thảo độc lập qua 5 cổng sau:

#### Cổng A: Information-Order Lock, Opening Reveal Lock & POV Discipline
- **Limited 3rd POV & Anti-Author Intrusion**: Cấm ngặt Narrator đứng ra giảng bài. Toàn bộ cảnh có bị rò rỉ góc nhìn (Head-hopping) không? Có đoạn văn nào Narrator tóm tắt tiểu sử nhân vật, tự giải thích phong tục văn hóa hộ độc giả, hoặc tự chốt hạ suy luận thay vì để nhân vật hành động không? (Bắt buộc dùng rule "Show, don't Tell" cho mọi lập luận).
- **Khóa thứ tự thông tin (Information-Order Lock)**: Có giải thích giả thuyết thông thường trước khi dị tượng kỳ quái xuất hiện không? Có trấn an độc giả rằng chi tiết này vô hại không?
- **Opening Reveal Lock (Theo D-051)**:
  - Với Chương 1: Sự hoảng loạn của Lan Anh chỉ được giới hạn ở việc ông Cường sáng mùng 10 còn sống mà tiệm lại có đơn đặt đồ chết mang tên ông; trong nhà không có ai tên Thoa.
  - Tuyệt đối CẤM nhắc đến vụ án 1996, đài Tiệp Khắc, hoặc bùa cọc tre.

#### Cổng B: Cultural Reality Gate & Folk Grounding
- **Tính xác thực phong tục**: Các chi tiết về vàng mã, tục khâm liệm, tang ma, giỗ chạp, 49/100 ngày, bùa trấn thủy, bát hương, bàn thờ... có đúng với thực tế văn hóa đồng bằng Bắc Bộ không?
- **Đối chiếu nguồn nghiên cứu**: Kiểm tra đối chiếu với `research/verified/`. Nếu là chi tiết tâm linh dị biệt, phải được thể hiện là niềm tin/lời đồn của nhân vật, tuyệt đối không biến thành "sự thật văn hóa narrator chứng nhận".
- **Tách bạch 4 tầng thực tế**:
  `Thực tế nghiên cứu → Lời đồn/Nhân vật tin → Dị tượng quan sát được → Chân lý siêu nhiên tác giả thiết lập`.

#### Cổng C: Horror-Promise, Psychological Trapping & Retroactive Dread
- **Dread & ngột ngạt**: Cảnh có đem lại cảm giác ớn lạnh từ từ (slow-burn creep), áp lực ngột ngạt của sự ô uế tâm linh hay điềm báo rủi ro không?
- **Triệt tiêu Jumpscare rẻ tiền**: Có lạm dụng các thủ pháp giật gân rẻ tiền (bóng đen lướt qua vô cớ, tiếng động hú hét vô nghĩa) không? Dị tượng có dựa trên logic hai tầng (vừa có thể là hành vi con người đáng ngờ, vừa mang dấu vết siêu nhiên không thể chối cãi)?
- **Anti-Spoiler & Logical Grounding**: Bắt lỗi các hiện tượng siêu nhiên bị bóc trần quá sớm (Villain Lore-dumping, Deus Ex Machina Info-dump). Cảnh báo các vi phạm về logic nghề nghiệp (Professionalism Break: công an, bác sĩ phải duy lý ban đầu) và logic sinh tồn. Tuyệt đối không để nhân vật hoảng loạn tự khai chi tiết máu me (gore) rành mạch.
- **Va chạm nhận thức**: Cảnh có thể hiện được sự xung đột giữa tư duy kỹ sư IT duy lý của Khanh với thế giới mê tín tâm linh thôn quê không?

#### Cổng D: Voice, Dialogue Cadence & Physicality
- **Khẩu ngữ Bắc Bộ tự nhiên**: Lời thoại có tự nhiên, vụn vỡ, ngập ngừng, lảng tránh đúng chất người làng quê miền Bắc không?
- **Cấm thoại kịch tuồng & Lore-dump**: Cấm nhân vật nói năng như đọc sách giáo khoa tâm linh, cấm dùng thoại để nhồi nhét lore cho độc giả.
- **Trauma Physicality (Thể xác hóa sang chấn)**: Cảm xúc sợ hãi, bàng hoàng có được diễn tả bằng phản xạ sinh lý/vật lý cụ thể (mồ hôi chua, gót chân va vào góc bàn, khớp tay trắng bệch, cổ họng nghẹn đắng) thay vì dán nhãn trừu tượng không? NHẤN MẠNH: Nhân vật đang sốc/hoảng loạn phải bị "khóa ngôn ngữ" (nấc nghẹn, lặp từ, ngắt quãng), tuyệt đối cấm miêu tả chi tiết dị tượng rành mạch (gore) qua lời kể của họ.
- **Xưng hô chuẩn mực**: Tuân thủ `author/style-bible.md` (Khanh gọi `bà Lan / mẹ anh`, `ông Hùng / bố anh`, `chị Hạnh`, người lớn tuổi dùng `ông/bà + tên`, không gọi trống không `Lan`, `Hùng`, `Thủy` trong lời dẫn).

#### Cổng E: Substantiality, Pacing & Word Count
- **Dung lượng tiêu chuẩn**: Độ dài chương nằm trong dải vàng **2.500 – 3.500 từ** (không dưới 2.000 từ, không vượt quá 4.500 từ nếu không có lý do chia phân cảnh).
- **Pacing**: Nhịp kể có đủ khoảng lặng đời sống (đèn huỳnh quang chập chờn, bụi giấy mã, tiếng xe máy ngoài ngã tư chợ) để làm đòn bẩy cho sự dị thường không?
- **Dư ba kết chương**: Đoạn kết có để lại một câu hỏi nhức nhối hoặc hình ảnh rợn ngợp kéo độc giả sang chương sau không?

---

## IV. Cấu Trúc Báo Cáo Thẩm Định & Phân Loại Lỗi

Mọi lỗi phát hiện trong `review.md` phải được phân loại rõ ràng:

1. **Mức độ nghiêm trọng (Severity)**:
   - `CRITICAL`: Vi phạm Information-Order Lock (leak lore sớm), phá vỡ Limited POV (head-hopping, Author Intrusion/Narrator giảng bài), sai lệch cốt truyện D-050/D-051. Bắt buộc sửa.
   - `MAJOR`: Dán nhãn tâm lý lười biếng, diễn giải nội tâm rườm rà bằng lời dẫn thay vì hành động (Tell thay vì Show), thoại kịch tuồng, sai phong tục, jumpscare rẻ tiền. Phải đập bỏ các đoạn văn "Tell" dài dòng.
   - `MINOR`: Lặp từ, nhịp câu sượng, xưng hô chưa thật chuẩn xác, chi tiết giác quan còn mờ.
   - `OPTIONAL`: Đề xuất cải thiện giọng văn hoặc tăng cường độ tương phản thẩm mỹ.
2. **Cấu trúc mỗi Finding**:
   - **ID & Severity**: `[F-01] [CRITICAL / MAJOR / MINOR / OPTIONAL]`
   - **Vị trí**: Dòng cụ thể `Lxx-Lyy` trong `draft.md`
   - **Phân loại**: `NARRATOR` (Lời dẫn) hoặc `DIALOGUE` (Lời thoại)
   - **Vấn đề**: Bản chất vi phạm (ví dụ: "Narrator giải thích tâm lý thay vì tả phản xạ vật lý")
   - **Dẫn chứng**: Trích đoạn nguyên văn
   - **Tại sao nghiêm trọng**: Tác hại đến góc nhìn hoặc độ rợn của truyện
   - **Can thiệp nhỏ nhất đề xuất (Smallest Effective Intervention)**: Cách sửa cụ thể ngắn gọn
3. **Trích xuất 4 Spans nguyên văn bắt buộc**:
   - *Span 1*: Khẩu khí / Đối thoại đời thường miền Bắc (`Lx-Ly`)
   - *Span 2*: Chi tiết nghề mã / Không khí đời sống chợ búa (`Lx-Ly`)
   - *Span 3*: Phản xạ thể xác trước nỗi sợ / Giác quan nồm ẩm (`Lx-Ly`)
   - *Span 4*: Dị tượng kỳ quái / Dư ba kết chương (`Lx-Ly`)
4. **Phán quyết cuối cùng**:
   - `SEMANTIC_REVIEW: PASS | REVISE_REQUIRED | INCOMPLETE`
   - `AUTHOR_ACCEPTANCE: PENDING`

---

## V. Quy Trình Phẫu Thuật Biên Tập (Surgical Revision)

Khi bước vào vai trò Editor (`/hr-revise`):

1. **Nguyên tắc can thiệp nhỏ nhất (Smallest Effective Intervention)**:
   - Không được viết lại (rewrite) cả chương khi chỉ có một vài phân đoạn mắc lỗi.
   - Bác sĩ phẫu thuật chỉ mổ đúng khối u: cắt bỏ câu thuyết giảng của narrator, băm nhỏ câu thoại dài dòng, chèn phản xạ cơ thể vào chỗ dán nhãn cảm xúc.
2. **Bảo tồn tính toàn vẹn của cốt truyện**:
   - Tuyệt đối không tự ý thay đổi outcome của cảnh, không giải quyết các open slot mà Tác giả chưa chốt, không tự sáng tác thêm lore mới ngoài canon.
3. **Bảng nghiệm thu (Revision Audit)**:
   - Trong `revised.md` hoặc phần báo cáo bàn giao, Editor phải liệt kê danh sách toàn bộ các Findings từ `review.md` và ghi rõ trạng thái: `RESOLVED` (kèm vị trí dòng mới) hoặc `UNRESOLVED / NEEDS_AUTHOR` (nếu liên quan đến quyết định sáng tạo của Tác giả).
