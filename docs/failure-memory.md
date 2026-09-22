# Failure Memory — Horrible

> **Mục đích:** File này là bằng chứng pháp y ghi lại từng lần tác giả reject văn bản, kèm cơ chế lỗi và văn bản thay thế được chấp nhận. Nó không phải checklist. Nó là ký ức thất bại cụ thể của dự án này.
>
> **Không preload file này trước generative writing.** Failure Memory là bằng chứng chẩn đoán hậu-draft/hậu-feedback. Chỉ mở entry liên quan khi candidate thực tế xuất hiện một cơ chế nghi ngờ tái phạm, hoặc khi tác giả/reviewer gọi tên failure đó. Không dùng toàn bộ lịch sử lỗi làm negative style bible.

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

## FM-006: Dị tượng bị xào lại / Cưỡng ép dùng reference (Recycled Tropes)

- **Chapter / Candidate:** Phiên CH-06 (2026-09-20)
- **Văn bản bị reject:** Agent bê nguyên các dị tượng "tiếng gọi chân cầu thang", "vải che gương bị trễ góc" (những ví dụ tham khảo trong D-002) vào CH-06 dù tác giả đã cấm xào lại chi tiết cũ.
- **Lời tác giả:** *"Tao vừa bảo cấm mày xào lại các chi tiết kinh dị cũ cơ mà sao vẫn dùng cái Đỉnh điểm (D-002 câu 17-19) là sao?"*
- **Cơ chế lỗi:** `RECYCLED_DI_TUONG` — Coi các reference hoặc ví dụ trong directive là "đơn đặt hàng bắt buộc phải có" ở chương tiếp theo, hoặc tái sử dụng dị tượng đã xuất hiện trong bản thảo canonized, thay vì **tự suy luận (reasoning) ra dị tượng mới** dựa trên bối cảnh và tâm lý hiện tại của nhân vật.
- **Cách khắc phục (đã supersede bởi D-006):** Thiết kế manifestation mới từ ecology và current source/reveal boundary. Không dùng D-002, archive, workflow test hay rejected manifestation như ngân hàng ý tưởng, template hoặc blacklist. Registry hiện hành chỉ được kiểm sau ideation.
- **Anti-pattern signature:** `[sử dụng lại một chi tiết kinh dị/dị tượng y hệt như đã xuất hiện ở chương trước, hoặc bê nguyên xi một ví dụ trong directive vào mà không có reasoning hữu cơ với bối cảnh]`

---

## FM-007: Tự ý thực thi phương án thiết kế khi chưa được duyệt

- **Chapter / Candidate:** Phiên CH-06 (2026-09-20)
- **Văn bản bị reject:** Agent nhận ra lỗi chọn POV Thủy gây leakage, bèn đưa ra 2 phương án (Khanh hoặc Lan Anh), nhưng lại tự động chọn luôn phương án 1 và ghi đè file khi tác giả chưa hề lên tiếng.
- **Lời tác giả:** *"địt cụ mày! tao đã chọn phương án nào đâu"*
- **Cơ chế lỗi:** `PREMATURE_DESIGN_EXECUTION` — Agent phát hiện lỗi thiết kế cấu trúc (cần tác giả duyệt) nhưng lại tự cho mình quyền "execution-level autonomous", tự chọn phương án và đi tiếp thay vì dừng lại ở trạng thái AWAITING_AUTHOR.
- **Cách khắc phục:** Trình bày bộ câu hỏi `design-discussion.md`, đánh dấu `AWAITING_AUTHOR` và DỪNG LẠI (dừng sinh file packet) cho đến khi tác giả confirm.
- **Anti-pattern signature:** `[sinh ra preflight packet / viết đè file khi có một thay đổi cấu trúc quan trọng (POV, Phase, Reveal order) mà tác giả chưa confirm phương án]`

---

## FM-008: Áp dụng sai dòng thời gian nhận thức của nhân vật (Anachronistic Stance)

- **Chapter / Candidate:** Phiên CH-06 (2026-09-20)
- **Văn bản bị reject:** Cụ Cổn cho người đi xem số, mời thầy cúng, tin rằng Cường chết trùng tang ngay trong đêm canh xác.
- **Lời tác giả:** *"Vẫn ngu! ban đầu chính ông Cổn là người trì chiết, luôn chửi mắng con cháu thần hồn nát thần tính... Chỉ khi chính ông Cổn về sau bị hồn ma Cường doạ chết khiếp mới tin"*
- **Cơ chế lỗi:** `ANACHRONISTIC_STANCE` — Đọc hồ sơ nhân vật thấy thông tin "sẽ tin vào ma quỷ", bèn áp dụng ngay vào chương hiện tại, bỏ qua thực tế là ở điểm thời gian này nhân vật đang nằm trong giai đoạn "phủ nhận cực đoan".
- **Cách khắc phục:** Xác minh trạng thái nhận thức (cognitive stance) tại ĐÚNG thời điểm của chương. Đừng lấy kết quả của arc để áp vào điểm đầu của arc.
- **Anti-pattern signature:** `[nhân vật hành động hoặc có niềm tin thuộc về giai đoạn sau của character arc, mâu thuẫn với nhận thức hiện tại của họ trong dòng thời gian]`

---

## FM-009: Constraint/spec bị biến thành thoại (Spec-to-Dialogue Leakage)

- **Chapter / Candidate:** CH-01-v6 / CH-01-v6-C1 (và nguyên nhân workflow được audit sau C2)
- **Lời tác giả:** *"Thoại dở quá, thiếu tự nhiên"*.
- **Cơ chế lỗi:** `SPEC_TO_DIALOGUE_LEAKAGE` / `CONSTRAINT_AMPLIFICATION` — cùng một outcome/knowledge/reveal requirement bị lặp qua writing brief, scene ecology, character context và QA; Writer bắt đầu đối xử các field như nghĩa vụ phải được nhân vật nói ra. Kết quả là thoại hỏi–đáp sạch sẽ theo lượt, nhân vật trở thành information courier, quan hệ và tình huống sống bị lép trước checklist.
- **Dấu hiệu:** nhiều nhân vật hỏi đúng thứ packet cần expose; câu trả lời hoàn chỉnh hơn nhu cầu giao tiếp thực tế; knowledge boundary biến thành visible reaction/line; giọng nhiều người giống nhau vì cùng phục vụ một spec.
- **Cách khắc phục:** sửa packet/compiler trước: mỗi constraint chỉ sống ở đúng generative layer; brief khóa outcome/reveal/end-state, ecology chỉ cấp affordance, character-context chỉ cấp relationship/knowledge. Writer sở hữu dialogue/micro-order. QA không được yêu cầu thêm lời giải thích để "chứng minh" compliance. Khi sửa prose, phục hồi practical situation, relationship shorthand, interruption, omission và speaker-specific pressure; không chữa bằng filler/slang/tics.
- **Anti-pattern signature:** `[nhân vật hỏi–đáp chủ yếu để tuần tự verbalize các field của packet/canon thay vì vì nhu cầu sống trong cảnh]`

---

## FM-010: Văn kể co thành screenplay prose (Screenplay-Prose Compression)

- **Chapter / Candidate:** CH-01-v6-C3
- **Lời tác giả:** *"Các câu văn khác cũng cụt ngủn, thiếu tự nhiên kinh khủng. Chưa giống với kiểu kể chuyện mà chỉ hoạt động cho chuẩn spec thôi."*
- **Cơ chế lỗi:** `SCREENPLAY_PROSE_COMPRESSION` — prose mặc định thành chuỗi hành động/câu thoại ngắn, micro-paragraph, action beat sau mỗi lượt nói, ít connective narration, ít summary/interiority/context dù POV cho phép. Văn vận hành như blocking để đi qua outcome hơn là người kể đang dẫn một câu chuyện.
- **Dấu hiệu:** một hành động = một câu/đoạn; nhiều đoạn chỉ có 1–2 câu ngắn; dialogue ping-pong xen "nhìn/cúi/quay/đặt"; câu dài hiếm dù ý nghĩ hoặc hành động liên tục; scene/summary gần như không chuyển; storyteller presence bị triệt tiêu.
- **Cách khắc phục:** không đặt minimum sentence length. Thay vào đó phục hồi narrative continuity: cho câu/đoạn giữ trọn một chuyển động ý nghĩ hoặc tình huống, dùng summary/context/interiority khi hữu ích, để hành động nền chạy xuyên hội thoại, cho turn-holding dài hơn khi social purpose cần. Không nhầm restraint/clarity/tension với brevity.
- **Anti-pattern signature:** `[prose lặp cơ chế action → câu thoại ngắn → action beat → câu thoại ngắn, paragraph micro-cut, thiếu connective narration dù không có lý do nghệ thuật cụ thể]`

---

## FM-011: Nhân vật trôi thành điều tra viên (Investigator Drift)

- **Chapter / Candidate:** CH-01-v6 / B3 shop-opening scene trial
- **Lời tác giả:** *"triển khai về cái chết ông Cường đọc có vẻ như bà Lan hay những người khác đang vô tình biến mình thành điều tra viên"*
- **Cơ chế lỗi:** `INVESTIGATOR_DRIFT` — nhân vật không có vai trò điều tra bỗng hỏi lịch trình, nguồn gốc, danh tính, provenance hoặc chủ động xác minh theo logic mystery hơn là logic đời sống.
- **Test:** bỏ payoff mystery phía sau; nếu người đó không còn lý do đủ mạnh để hỏi/làm việc ấy ngay lúc này, hành vi đang phục vụ tác giả.
- **Cách khắc phục:** thay engine bằng motive thực: công việc, trách nhiệm, tiện đường, tiền bạc, gia đình, ngại phiền, tang gia, thói quen hoặc tò mò đúng tỷ lệ. Reader có thể suy luận mà nhân vật không cần truy.
- **Anti-pattern signature:** `[non-investigator chủ động hỏi/tra/xác minh chuỗi thông tin hữu ích cho mystery nhưng thiếu motive độc lập đủ mạnh]`

---

## FM-012: Cảnh vận hành như dây chuyền phơi manh mối (Clue Exposure Engine)

- **Chapter / Candidate:** CH-01-v6 / C1–C3 và B3 scene trial
- **Cơ chế lỗi:** `CLUE_EXPOSURE_ENGINE` — mỗi interaction hợp lý riêng lẻ nhưng toàn scene nối nhau để lần lượt đưa đúng death detail → date → object → purchaser name → knowledge split cho reader. Nhân vật thành carriers của evidence.
- **Dấu hiệu:** scene có thể paraphrase thành "clue A xuất hiện, nhân vật hỏi để có B, B dẫn tới C"; bỏ một clue thì interaction kế tiếp mất lý do tồn tại.
- **Cách khắc phục:** clue phải rơi ra từ một process có lý do riêng; không cần mọi clue được character gọi tên/so sánh. Giữ clue architecture ở Preflight/QA, không đưa checklist vào Writer context.
- **Anti-pattern signature:** `[chuỗi scene được tổ chức chủ yếu theo thứ tự phơi evidence thay vì theo nhân quả sống của người và công việc]`

---

## FM-013: Ecology giả beat sheet (Soft Beat-Sheet Ecology)

- **Chapter / Candidate:** CH-01-v6-B3 packet → B3 shop-opening trial
- **Cơ chế lỗi:** `SOFT_BEAT_SHEET_ECOLOGY` — scene ecology gọi các micro-event là "optional affordances" nhưng mô tả quá cụ thể (ví dụ một task làm lộ thẻ tên, gossip kéo dài rồi bị sửa, bystander overhear), khiến Writer thực thi chúng như beats.
- **Cách khắc phục:** ecology chỉ mô tả process/pressure/material flow: customer traffic, order handling, gossip mutation, household logistics, time/money/space pressure. Không nói process nào phải expose clue nào hay ai phải làm gì.
- **Anti-pattern signature:** `[Writer prose tái hiện gần nguyên các optional micro-events cụ thể từ scene ecology]`

---

*Cập nhật lần cuối: 2026-09-22. Chỉ dùng Failure Memory targeted post-draft/hậu-feedback; không preload trước generation.*
