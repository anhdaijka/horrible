# Review Rule: Adversarial Red-Team Review Protocol

Review before rewriting. Mọi quy trình thẩm định cho **Horrible** bắt buộc tuân thủ `docs/playbooks/horrible-craft-review.md`.

## 1. Adversarial Red-Team Review Protocol (Giao thức Phản biện Đối kháng)

1. **Triệt tiêu Thiên kiến Tự khen (Anti-Sycophancy)**:
   - Reviewer BẮT BUỘC rũ bỏ góc nhìn của người viết để nhập vai **Biên tập viên Đối kháng Khắc nghiệt**.
   - Giả định bản thảo **LUÔN CÓ LỖI TIỀM ẨN** (head-hopping ngầm, narrator giảng bài, dán nhãn cảm xúc, rò rỉ lore sớm, thoại kịch tuồng, phong tục sai lệch) cho đến khi tìm đủ bằng chứng chứng minh điều ngược lại.
   - CẤM TUYỆT ĐỐI phán quyết "PASS" chung chung không có dẫn chứng số dòng.
2. **Độ phủ Đọc toàn văn (Full-Read Coverage)**:
   - Đọc toàn văn từ dòng đầu đến dòng cuối (`L1-EOF`).
   - Báo cáo độ phủ đọc chia thành từng dải tối đa 120 dòng kèm ít nhất một nhận xét quan sát cụ thể trên trang văn bản.
3. **Kỷ luật Cưỡng chế Bằng chứng (Mandatory Span-Level Evidence)**:
   - Mọi báo cáo thẩm định BẮT BUỘC phải trích dẫn tối thiểu 4 spans nguyên bản kèm số dòng cụ thể:
     - *Span 1*: Khẩu khí / Đối thoại đời thường miền Bắc.
     - *Span 2*: Chi tiết nghề mã / Không gian nồm ẩm Bắc Bộ.
     - *Span 3*: Phản xạ thể xác trước nỗi sợ (Physicality of Dread).
     - *Span 4*: Dị tượng kỳ quái / Dư ba kết chương.

---

## 2. 5 Cổng Thẩm Mỹ Bắt Buộc (SOLID 5-Gate Review Runner)

- **Gate A: Information Order, Opening Reveal Lock & POV Discipline**: Khanh Limited 3rd POV độc nhất, 0 head-hopping, 0 narrator giảng bài, Opening Reveal Lock nghiêm ngặt theo D-051.
- **Gate B: Cultural Reality Gate & Folk Grounding**: Đồ mã, tục tang ma, khâm liệm, giỗ chạp chuẩn xác theo `research/verified/`, không bịa đặt bừa bãi phong tục thật.
- **Gate C: Horror-Promise, Psychological Trapping & Retroactive Dread**: Visceral dread, ngột ngạt, triệt tiêu jumpscare rẻ tiền, logic hai tầng (điều tra duy lý song hành cùng dị tượng siêu nhiên thật).
- **Gate D: Voice, Dialogue Cadence & Physicality**: Khẩu ngữ Bắc Bộ tự nhiên vụn vỡ lảng tránh, cấm thoại kịch tuồng / lore-dump, phản xạ sinh lý/vật lý thay cho nhãn cảm xúc trừu tượng.
- **Gate E: Substantiality, Pacing & Word Count**: Dải vàng 2.500 – 3.500 từ; nhịp kể chậm rãi, dư ba kết chương.

---

## 3. Quy Chuẩn Đề Xuất & Báo Cáo

Mọi vấn đề phát hiện phải ghi rõ:
- `ID`: `[F-XX]`
- `Severity`: `CRITICAL / MAJOR / MINOR / OPTIONAL`
- `Location`: dòng cụ thể trong bản thảo (`Lxx-Lyy`)
- `Context`: `NARRATOR` (Lời dẫn) hoặc `DIALOGUE` (Lời thoại)
- `Problem`: bản chất vi phạm
- `Why it matters`: tác động đến cốt truyện, góc nhìn hoặc độ rợn
- `Evidence`: trích đoạn nguyên văn
- `Recommended intervention`: can thiệp nhỏ nhất đề xuất cho Editor

Sử dụng biểu mẫu chuẩn tại `templates/review-report.md`.
Kết luận bằng:
- `SEMANTIC_REVIEW: PASS | REVISE_REQUIRED | INCOMPLETE`
- `AUTHOR_ACCEPTANCE: PENDING`
