# Failure Memory — Horrible

> **Mục đích:** File này là bằng chứng pháp y ghi lại từng lần tác giả reject văn bản, kèm cơ chế lỗi và văn bản thay thế được chấp nhận. Nó không phải checklist. Nó là ký ức thất bại cụ thể của dự án này.
>
> **Đọc file này TRƯỚC KHI viết hay chỉnh sửa bất kỳ đoạn văn nào.** Mục tiêu: nhận diện anti-pattern signature và tránh tái tạo chúng.

---

## FM-001: Narrator giải thích tại sao đồ vật khó thấy / đáng sợ

- **Chapter / Candidate:** CH-02 / CH-02-C7 (và các candidate trước)
- **Văn bản bị reject:**
  > Chiếc camera an ninh nhỏ bằng bao diêm nằm lọt thỏm trong góc tối, do chính tay anh bắt vít từ năm ngoái. Không đèn báo tín hiệu, không một vệt sáng nhỏ. Đứng từ dưới sàn nhìn lên, nếu không phải người tự tay lắp đặt thì không ai có thể nhận ra ở đó có một chiếc mắt thần.
- **Lời tác giả:** *"lại bắt đầu kể lể, tự suy luận. tell nhưng đéo show tí nào"*
- **Cơ chế lỗi:** `NARRATOR_LECTURING` — Narrator nhảy ra giải thích tại sao đồ vật đáng sợ / khó thấy / quan trọng, thay vì để vật thể tự hiện diện qua hình ảnh vật lý thuần khiết. Người đọc bị bảo phải cảm thấy gì, thay vì tự mình cảm thấy.
- **Văn bản được chấp nhận:**
  > Phía trên bậu cửa, giữa búi dây thép treo vàng mã và lớp mạng nhện đóng bụi giấy bồi, chiếc mắt thần camera chìm lỉm trong khoảng tối dưới mái tôn, không một đốm sáng.
- **Anti-pattern signature:** `[narrator giải thích lý do tại sao X khó nhìn / đáng sợ / quan trọng, thay vì chỉ miêu tả X trong bối cảnh vật lý]`

---

## FM-002: Narrator tóm tắt lại hành động đã được show sống động ở thân bài

- **Chapter / Candidate:** CH-02 / CH-02-C7
- **Văn bản bị reject:**
  > Trong đoạn băng vừa chạy qua, từng cử chỉ của người đàn bà ấy hiện về rành rọt: bàn tay trái cầm bút vẽ phác chiếc đài vào góc sổ, bàn tay trái rút tiền, mở nếp gấp, miết phẳng trên mặt gỗ; còn cánh tay phải suốt từ đầu đến cuối luôn áp sát bên sườn, buông thõng bất động như một khúc gỗ chết.
- **Lời tác giả:** (cùng phản hồi với FM-001 — đoạn này bị reject vì là recap toàn bộ cảnh đã diễn ra sống động 2 trang trước)
- **Cơ chế lỗi:** `NARRATOR_RECAP` — Sau khi cảnh kết thúc, narrator hoặc nhân vật "nhớ lại" / "nhìn thấy trên băng" bằng cách liệt kê lại chuỗi hành động đã được miêu tả trực tiếp ở thân bài. Độc giả bị đọc lại những gì họ vừa đọc.
- **Văn bản được chấp nhận:** Đoạn này bị cắt hoàn toàn. Khoảng lặng là câu trả lời đúng.
- **Anti-pattern signature:** `[sau khi cảnh X kết thúc, narrator/nhân vật liệt kê lại chuỗi hành động trong cảnh X — dù dưới dạng "nhớ lại", "nhìn băng", "hiện về"]`

---

## FM-003: Biệt ngữ kỹ thuật / khoa học / nhiếp ảnh len vào văn kinh dị dân gian

- **Chapter / Candidate:** CH-02 / CH-02-C2 đến CH-02-C5
- **Văn bản bị reject (dẫn chứng):**
  - *"cảm biến quang học"*
  - *"màn hình kỹ thuật số"*
  - *"góc quay mắt cá 45 độ"*
  - *"tiếng động cơ học"*
  - *"tương phản gắt gao"*
  - *"điểm ảnh vỡ hạt"* (trường hợp biên — chấp nhận trong ngữ cảnh mô tả gương mặt, nhưng cần thận trọng)
- **Lời tác giả:** *"cảm biến quang học? văn mày vẫn ngu thế"*
- **Cơ chế lỗi:** `AI_JARGON` — Biệt ngữ khoa học / công nghệ / kỹ thuật hiện đại xâm nhập vào văn xuôi kinh dị dân gian Bắc Bộ, phá vỡ không khí và gây cảm giác văn dịch máy.
- **Văn bản được chấp nhận:**
  - *"màn hình cảm ứng"* (chấp nhận thay "màn hình kỹ thuật số")
  - *"góc nhìn từ trên cao chúc xuống"* (chấp nhận thay "góc quay mắt cá 45 độ")
  - *"chiếc mắt thần camera"* (chấp nhận — ngôn ngữ dân gian)
- **Anti-pattern signature:** `[từ ngữ thuộc từ điển kỹ thuật hiện đại xuất hiện trong câu văn miêu tả hoặc trần thuật của POV nhân vật nông thôn Bắc Bộ]`

---

## FM-004: Narrator tiết lộ thông tin của các chương sau (Spoil)

- **Chapter / Candidate:** CH-02 / CH-02-C2 đến CH-02-C4
- **Văn bản bị reject (dẫn chứng):**
  - Mọi đề cập đến Thủy, xưởng may Yên Phong, tuổi tác ~50, bức di ảnh thập niên 90, "mang đậm khung xương đặc trưng của dòng họ Vũ xóm Trại"
- **Lời tác giả:** *"sao cứ kể hết cho độc giả thế?"* / *"gương mặt tuổi đôi mươi... làm sao người ta lại nghi cô Thủy hơn 50 tuổi được"*
- **Cơ chế lỗi:** `NARRATOR_SPOIL` — Narrator cung cấp cho độc giả thông tin / kết luận / liên hệ mà chỉ các chương sau mới phải tiết lộ thông qua hành trình khám phá của nhân vật và độc giả-thám tử.
- **Văn bản được chấp nhận:** Dữ liệu quang học thuần khiết, khách quan: *"gò má cao, sống mũi thẳng và đôi mắt một mí dài hẹp nằm lọt thỏm dưới bóng nón. Một gương mặt phẳng lì, trắng bợt, không một nếp nhăn, không một nét cơ lay động."* — Độc giả tự xâu chuỗi khi gặp nhân vật ở các chương sau.
- **Anti-pattern signature:** `[narrator đặt tên / mô tả / liên hệ đến nhân vật hoặc thông tin chưa xuất hiện trong bản thảo đã canonize; hoặc narrator kết luận hộ điều mà độc giả cần tự suy diễn]`

---

## FM-005: Hành động "tự nhiên hóa" clue bằng thao tác lộ liễu không có căn cứ thực tế

- **Chapter / Candidate:** CH-02 / phác thảo ban đầu trước CH-02-C3
- **Văn bản bị reject (dẫn chứng):**
  - Thoa múa tay giữa không khí, vẫy ngón tay, kẹp bút nhưng không có lý do vật lý để làm vậy trong giao dịch thực tế
- **Lời tác giả:** *"làm sao người ta biết được cô ta thuận tay trái? và chú ý đến nó được? mày không reasoning sao cho hợp lý được hơn à?"*
- **Cơ chế lỗi:** `UNMOTIVATED_REVEAL` — Hành động / clue được dàn dựng nhân tạo mà không có nguyên cớ thực tế trong giao dịch / tương tác đang diễn ra. Độc giả cảm thấy tác giả đang cố tình trưng bày manh mối.
- **Văn bản được chấp nhận:** Bà Lan đẩy sổ và bút bi sang, yêu cầu khách tự vẽ phác mặt đài và vạch AM vào góc sổ — từ đó bàn tay trái tự bộc lộ một cách hữu cơ, và bà Lan tự nhiên hỏi *"Ơ, cô thuận tay chiêu à?"*
- **Anti-pattern signature:** `[nhân vật thực hiện hành động X không có lý do thực tế trong bối cảnh, chỉ để bộc lộ clue Y cho người đọc hoặc nhân vật khác chứng kiến]`

---

*Cập nhật lần cuối: 2026-09-20. Bổ sung mục mới sau mỗi lần tác giả reject văn bản trong phiên chỉnh sửa.*
