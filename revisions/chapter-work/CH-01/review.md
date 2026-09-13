# Báo Cáo Thẩm Định Bản Thảo: Chương 01 — Đơn hàng đoạt mệnh
## Giao Thức Đánh Giá Phản Biện Đối Kháng (Adversarial Red-Team Review Report)

> **Tài liệu căn cứ**: `docs/playbooks/horrible-craft-review.md`, `author/creative-constitution.md`, `author/style-bible.md`, `author/decisions.md`.
> **Nguyên tắc cốt tử**: Đọc toàn văn bản thảo từ L1 đến EOF. Không dùng tóm tắt thay thế. Tìm lỗi đối kháng, không khen ngợi hình thức.

---

## 1. Thông Tin Tổng Quan (Metadata & Scope)

- **Chương / File khảo sát**: `revisions/chapter-work/CH-01/revised.md`
- **Nhân vật POV**: Nguyễn Minh Khanh (27 tuổi, kỹ sư phần mềm)
- **Mốc thời gian**: Sáng ngày mười bốn tháng Giêng năm Bính Ngọ
- **Bối cảnh / Địa điểm**: Tiệm vàng mã gia đình Khanh, ngã tư chợ huyện
- **Dung lượng từ**: ~2.500 từ
- **Tình trạng văn bản**: `NON-CANON DRAFT` (Bản revised)
- **Chế độ thẩm định**: `INDEPENDENT AUDIT`

---

## 2. Bảng Độ Phủ Đọc Toàn Văn (Full-Read Coverage)

> Bắt buộc phủ từ L1 đến EOF, mỗi dải tối đa 120 dòng kèm ít nhất một nhận xét quan sát cụ thể trên trang văn bản.

- `L1-L86`: Khởi đầu rất tốt, thiết lập được không gian nồm ẩm đặc trưng và nghề làm mã. Hội thoại của bà đi chợ tự nhiên. Lan Anh xuất hiện hoảng loạn, phản xạ thể xác (gót chân co quắp, nấc nghẹn thay vì kể lể máu me) đã được chỉnh sửa rất đạt, loại bỏ hoàn toàn b-movie gore.
- `L87-L174`: Tiết lộ về đơn hàng đài cassette diễn ra dồn dập. Nét chữ bút bi tím in hằn tạo cảm giác rờn rợn. Thông tin được khóa chặt, không có rò rỉ (leak) lore quá sớm, giữ được trọn vẹn giới hạn của Chương 1.
- `L175-EOF`: Cảnh cái đài giấy "khô cong" giữa không gian nồm ẩm tạo ra retro-active dread rất mạnh. Sự hoảng sợ của Lan Anh chân thực. Kết chương đưa Khanh về logic duy lý (check camera Dahua) tạo hook cực tốt sang chương 2, thể hiện rõ xung đột nhận thức.

---

## 3. Thẩm Định Độc Lập 5 Cổng Thẩm Mỹ (Horrible 5-Gate Audit)

### Gate A: Information-Order Lock, Opening Reveal Lock & POV Discipline
- **Limited 3rd POV qua Khanh**: Bị phá vỡ nghiêm trọng ở cuối chương (L214-L218). Narrator đã mượn đầu Khanh để đặt 3 câu hỏi tu từ ("Ai là...", "Tại sao...", "Và tại sao...") nhằm mục đích tóm tắt bí ẩn (spoon-feeding) cho độc giả. Đây là lỗi Author Intrusion kinh điển.
- **Information-Order Lock**: Không có lời giải thích duy lý bừa bãi.
- **Opening Reveal Lock (D-051)**: Tuân thủ tuyệt đối.
- **Trạng thái**: **FAIL**

### Gate B: Cultural Reality Gate & Folk Grounding
- **Tính xác thực văn hóa Bắc Bộ**: Rất chuẩn xác (mùi giấy bản bổi, phẩm điều, cật tre tươi, cuốn sổ ghi nợ bìa xanh, đài giấy bồi). Tục khâm liệm vải xô trắng, tiền âm bôi phẩm khổ lớn hoàn toàn đúng thực tế.
- **Đối chiếu nghiên cứu**: Không có tình tiết bịa đặt bách khoa toàn thư. Đồ làm cho người đang sống bị coi là đồ "đoạt mạng" là một tín ngưỡng dân gian hợp lý.
- **Tách bạch tầng thực tế**: Lời đồn ngã cầu thang (đúng), cuốn sổ ghi nợ (đúng) và cái đài khô cong (sự bất thường) được tách biệt rõ ràng.
- **Trạng thái**: **PASS**

### Gate C: Horror-Promise, Psychological Trapping & Retroactive Dread
- **Không khí ngột ngạt (Dread)**: Cảm giác ngột ngạt tăng dần nhưng bị phá hỏng một phần ở cuối chương bởi cách hành văn sáo rỗng ("sắc lạnh như một lưỡi dao găm").
- **Triệt tiêu jumpscare rẻ tiền**: Hoàn toàn dựa trên sự phi lý rùng rợn của thời gian đặt hàng và cái chết.
- **Xung đột nhận thức**: Ý tưởng dùng camera đối trọng với tâm linh rất tốt, nhưng cách thực thi ("phản xạ nghề nghiệp lóe lên") lại bằng việc dán nhãn thô thiển.
- **Trạng thái**: **FAIL**

### Gate D: Voice, Dialogue Cadence & Physicality
- **Khẩu ngữ Bắc Bộ tự nhiên**: Đối thoại rất mộc mạc ("Gớm, sáng mùng mười tôi còn thấy...", "Nhật với chả nhẽo", "Mày tự nhìn đi!").
- **Physicality (Thể xác hóa cảm xúc)**: Bị vi phạm nặng ở L220: *"Một phản xạ nghề nghiệp chợt lóe lên trong não bộ Khanh."* Đây là lỗi Tell tồi tệ, hoàn toàn vứt bỏ nguyên tắc Show/Physicality.
- **Xưng hô chuẩn mực**: Chuẩn xác.
- **Trạng thái**: **FAIL**

### Gate E: Substantiality, Pacing & Word Count
- **Dung lượng**: Phù hợp, độ giãn chữ vừa phải, đọc không bị vấp.
- **Nhịp kể (Pacing)**: Khoảng lặng sinh hoạt ban đầu rất quan trọng để đẩy nhịp đập nhanh ở nửa sau.
- **Dư ba kết chương**: Kết bằng tiếng đèn LED camera Dahua nhấp nháy tạo sự lôi cuốn mạnh mẽ về mặt điều tra.
- **Trạng thái**: **PASS**

---

## 4. Bằng Chứng Trích Xuất Nguyên Văn (Mandatory Spans)

1. **Span 1 — Khẩu khí / Hội thoại đời thường miền Bắc**
   - **Vị trí**: `L27-L29`
   - **Trích đoạn**: *"Gớm, sáng mùng mười tôi còn thấy cưỡi con Dream lùn ra ngã tư ăn bát bún riêu cua với lão Thắng, mồm oang oang chửi đổng thằng thầu cát cơ mà? Trông lực lưỡng thế mà đi nhanh thế?"*
   - **Phân tích**: Rất đời thường, nhịp điệu của những bà nội trợ buôn chuyện ở ngã tư chợ, tạo nền tảng hiện thực xuất sắc.

2. **Span 2 — Chi tiết nghề mã / Không gian nồm ẩm Bắc Bộ**
   - **Vị trí**: `L7-L9`
   - **Trích đoạn**: *"...mùi giấy bản bổi xốp ráp, mùi phẩm nhuộm điều đỏ chói trên các cọc tiền địa phủ, và cái ngai ngái của cật tre tươi vót dở xếp gầm phản."*
   - **Phân tích**: Đánh mạnh vào khứu giác, đặc thù nghề nghiệp được bóc tách bằng chi tiết cụ thể chứ không chung chung.

3. **Span 3 — Phản xạ thể xác trước nỗi sợ (Physicality of Dread)**
   - **Vị trí**: `L49-L51`
   - **Trích đoạn**: *"Đôi mắt chị mở trừng trừng, vằn lên những tia máu sọc quanh con ngươi, mí mắt sưng mọng như người vừa khóc cạn nước mắt. Hai bàn tay Lan Anh run bắn lên bần bật, bấu chặt lấy mép quầy gỗ lim đến mức mười đầu ngón tay trắng bệch, các khớp xương gồ lên nhọn hoắt."*
   - **Phân tích**: Miêu tả chính xác dấu hiệu thể xác hóa của một chấn thương tâm lý, không dùng nhãn dán "Lan Anh rất kinh hãi".

4. **Span 4 — Dị tượng kỳ quái / Dư ba kết chương**
   - **Vị trí**: `L188-L191`
   - **Trích đoạn**: *"Giữa căn nhà đang nồm ẩm nhơm nhớp, nơi chân tường và mặt sàn đều rịn ra những giọt nước đùng đục, thì khoang kệ gỗ nơi đặt chiếc đài giấy lại khô cong."*
   - **Phân tích**: Dị tượng kỳ quái nhưng tinh tế, không cần ma quỷ xuất hiện. Sự mâu thuẫn vật lý này mang lại hiệu ứng kinh dị tâm lý mạnh.

---

## 5. Bảng Chi Tiết Vấn Đề Cần Xử Lý (Findings & Action Items)

| ID | Severity | Vị trí | Context | Vấn đề phát hiện | Dẫn chứng | Can thiệp nhỏ nhất đề xuất (Editor) |
|---|---|---|---|---|---|---|
| F-01 | CRITICAL | L214-L218 | NARRATOR | Narrator mượn suy nghĩ nhân vật để tóm tắt bí ẩn (Spoon-feeding / Author Intrusion). Người đang sốc không lập luận tròn trịa 3 câu hỏi tu từ như vậy. | *"Ai là Vũ Thị Thoa? Tại sao người đó lại biết ông Cường sẽ ngã... Và tại sao... người đó lại chọn tiệm vàng mã..."* | Xóa bỏ hoàn toàn 3 câu hỏi này. Sửa thành hành động Khanh nhìn chằm chằm vào cái tên "Vũ Thị Thoa" đang nhòe đi, rồi sực nhớ ra điều gì đó. |
| F-02 | MAJOR | L220 | NARRATOR | Dán nhãn hành vi (Tell) tồi tệ, phá vỡ hoàn toàn nguyên tắc Show. Văn phong sáo rỗng. | *"Một phản xạ nghề nghiệp chợt lóe lên trong não bộ Khanh."* | Xóa bỏ câu này. Diễn tả vật lý: Khanh ngẩng phắt lên, mắt lướt vội qua xà ngang cửa. |
| F-03 | MAJOR | L212 | NARRATOR | Hình ảnh so sánh sến súa, cliché, phá hỏng không khí chân thực. | *"...mép giấy vẽ phác thảo mười ba bậc thang sắc lạnh như một lưỡi dao găm."* | Bỏ cụm "sắc lạnh như một lưỡi dao găm". Chỉ tả cái nét vẽ run rẩy hoặc hằn sâu. |
| F-04 | OPTIONAL | L208 | DIALOGUE | Lời thoại lúc hoảng sợ của bà Lan hơi tròn trịa | *"Từ ngày ông nội mày mất đến giờ, cái tiệm này chưa bao giờ dính phải chuyện quái gở như thế này..."* | Cắt vụn hơn để thể hiện sự bàng hoàng: *"Đời ông nội mày truyền lại đến giờ... chưa bao giờ bị cái cữ này..."* |
| F-05 | MINOR | L190 | NARRATOR | Cụm từ hơi mang sắc thái văn tả của narrator thay vì góc nhìn Khanh | *"...âm thầm lan tỏa ra từ chiếc đài giấy vô tri."* | Đổi "từ chiếc đài giấy vô tri" thành "từ cái đài xám xịt đó" để bám sát POV Khanh hơn. |

---

## 6. Phán Quyết Cuối Cùng (Final Verdict)

- **SEMANTIC_REVIEW**: `REVISE_REQUIRED`
- **AUTHOR_ACCEPTANCE**: `PENDING` (Chờ Tác giả xem xét và ra quyết định)
