# Mandatory Writing & Review Workflow: The 4-Stage Independent Pipeline

**CRITICAL RULE**: Mọi tác vụ liên quan đến chuẩn bị (preflight), viết nháp (drafting), thẩm định (reviewing), và biên tập chỉnh sửa (revising) cho dự án **Horrible** đều BẮT BUỘC phải tuân thủ nghiêm ngặt quy trình 4 giai đoạn độc lập dưới đây. 

Quy trình này triệt tiêu hoàn toàn hội chứng "vừa đá bóng vừa thổi còi" (agent tự viết rồi tự khen/tự sửa trong một lượt) và phân tách rạch ròi trách nhiệm giữa **Writer**, **Reviewer**, và **Editor**.

---

## GIAI ĐOẠN 1: PREFLIGHT — ĐỊNH VỊ CẢNH & KHÓA THÔNG TIN (`/hr-preflight`)

Trước khi viết bất kỳ chữ nào, phải thực hiện lệnh `/hr-preflight <chapter>` để khóa chặt các thông số tại `revisions/chapter-work/CH-XX/preflight.md`:

1. **Sensory Anchors (Neo Giác Quan)**: Xác định rõ 5 giác quan hiện diện trong cảnh (lạnh ẩm nồm, mùi bột hồ dán chua, bụi giấy mã, ánh đèn tuýp huỳnh quang chập chờn, tiếng ngã tư chợ).
2. **Physicality of Emotion (Thể xác hóa Cảm xúc)**: Cảm xúc sợ hãi, bàng hoàng, nghi ngờ phải được SHOW bằng hành động/phản xạ sinh lý cụ thể (khớp tay trắng bệch, mồ hôi chua, vấp ngón chân, nghẹn họng).
3. **Information Lock & Opening Reveal Lock (Khóa Thứ Tự Thông Tin)**: 
   - Xác định ranh giới những gì nhân vật ĐƯỢC BIẾT tại thời điểm cảnh diễn ra.
   - Tuân thủ tuyệt đối [D-051](file:///d:/Documents/Others/Composer/horrible/author/decisions.md#L427-L445): Ví dụ với Chương 1, sự hoảng loạn của Lan Anh chỉ giới hạn ở việc Cường sáng mùng 10 còn sống khỏe mạnh đi xe máy mà có đơn đặt đồ chết mang tên ông; trong nhà không ai tên Thoa. Cấm tuyệt đối nhắc vụ đuối nước 1996, đài Tiệp mất tích, bùa cọc tre.
4. **Author Gate**: Kết thúc preflight ở trạng thái `PREFLIGHT READY — AUTHOR GATE: PENDING`. Chỉ khi Tác giả duyệt đề cương mới được chuyển sang Giai đoạn 2.

---

## GIAI ĐOẠN 2: DRAFTING — CHẤP BÚT BẢN THẢO THUẦN TÚY (`/hr-write`)

Khi Preflight đã được duyệt, kích hoạt `/hr-write <chapter>`:

1. **Góc nhìn Limited 3rd POV độc nhất qua Khanh**: Cấm Head-hopping, cấm Narrator toàn tri hay giảng giải đạo lý.
2. **Khẩu ngữ Bắc Bộ đời thường**: Lời thoại tự nhiên, vụn vỡ, ngập ngừng, lảng tránh đúng chất thôn quê. Cấm thoại kịch tuồng, cấm dùng thoại để nhồi nhét lore.
3. **Độc lập tác nghiệp**:
   - Xuất văn bản vào `revisions/chapter-work/CH-XX/draft.md` gắn nhãn `NON-CANON DRAFT`.
   - Cuối tệp liệt kê `Open Issues & Claim Delta` nếu có chi tiết mới nảy sinh.
   - **CẤM TỰ THẨM ĐỊNH**: Writer không tự chấm điểm, không tự nhận xét bản viết của mình, không tự phong canon.

---

## GIAI ĐOẠN 3: INDEPENDENT AUDIT & SURGICAL REVISION

### 3A. Thẩm định Đối kháng Độc lập (`/hr-review`)
- Reviewer hoạt động với tư duy **Adversarial Red-Team Editor**: giả định bản thảo luôn có lỗi tiềm ẩn cho đến khi có bằng chứng ngược lại.
- Bắt buộc đọc toàn văn L1 đến EOF (ghi nhận Full-Read Coverage).
- Thẩm định độc lập qua **5 Cổng Thẩm Mỹ Horrible**:
  - *Gate A*: Information Order, Opening Reveal Lock & POV Discipline
  - *Gate B*: Cultural Reality Gate & Folk Grounding (đối chiếu `research/verified/`)
  - *Gate C*: Horror Promise, Psychological Trapping & Retroactive Dread
  - *Gate D*: Voice, Dialogue Cadence & Physicality
  - *Gate E*: Substantiality, Pacing & Word Count (2.500 – 3.500 từ)
- Trích xuất tối thiểu 4 Spans nguyên văn kèm dòng cụ thể `Lxx-Lyy`.
- Xuất báo cáo vào `revisions/chapter-work/CH-XX/review.md`. Tuyệt đối không tự sửa văn bản.

### 3B. Phẫu thuật Biên tập Độc lập (`/hr-revise`)
- Editor / Reviser tiếp nhận `draft.md` và `review.md`.
- Áp dụng nguyên tắc **Smallest Effective Intervention (Can thiệp nhỏ nhất có hiệu quả)**:
  - Cắt bỏ câu narrator thuyết giảng, băm nhỏ câu thoại dài dòng, chèn phản xạ cơ thể vào chỗ dán nhãn cảm xúc.
  - **CẤM VIẾT LẠI CẢ CHƯƠNG** cho lỗi cục bộ một vài phân đoạn.
  - Không tự ý thay đổi plot outcome hoặc bịa thêm lore mới.
- Xuất bản thảo sửa đổi vào `revisions/chapter-work/CH-XX/revised.md` kèm bảng đối soát trạng thái giải quyết từng Finding.

---

## GIAI ĐOẠN 4: AUTHOR GATE & CANONIZATION

1. Tác giả đọc `revised.md` và bảng nghiệm thu để đưa ra quyết định cuối cùng:
   - Yêu cầu chỉnh sửa thêm (nếu cần).
   - Phê duyệt (`APPROVED`).
2. Sau khi Tác giả phê duyệt, bản thảo chính thức được sao chép vào `chapters/chapter-XX.md` và cập nhật `continuity/state.md`.
