# Session State — Horrible

> Handoff cho `anhdaijka/horrible@main`. Đây là router trạng thái, không thay canon trong author/plot/characters/continuity.

## Start here

Repository: `anhdaijka/horrible`  
Branch: `main`

1. Chỉ thị tác giả mới nhất.
2. Đọc `.agents/rules/02-context.md` và nạp nguồn theo đúng vai trò.
3. Preflight/safety/canonization dùng directive, quyết định, continuity, arc, matrix, hồ sơ và research liên quan.
4. Preflight phân kỳ trong `discovery-slate.md`, rồi chỉ chiếu engine đã chọn sang `scene-ecology.md`. Writer hoàn tất generative pass từ `writing-brief.md`, `scene-ecology.md`, `character-context.md`, accepted prose và trích đoạn lived-context được chỉ định; không đọc slate/engine bị loại. Sau đó mới mở `qa-card.md` để tự biên tập rồi tách locator `candidate.md` khỏi `writer-handoff.md`. Literary Reviewer được giao đúng workspace thì đọc locator + prose trước session-state/context.
5. Không phục hồi các thế hệ bản thảo bị loại hoặc các artifact CH-01 đã bị xóa theo lệnh reset ngày 2026-09-18.

Không nhầm D-001/D-002 hậu reset với log lưu trữ. Generated bibles/index không vượt nguồn hiện hành.

## Current manuscript state

**5 chương canonized (đã cập nhật revision wave CH-01 & CH-02).**
- Chương 1 (`chapters/chapter-01.md`, 3.865 từ, SHA-256: `496F114EA153A1DCB8C61E223DD32A6E5080121C927F9516CDAF77099A7000D0`, candidate `CH-01-C3` tại `revisions/chapter-work/CH-01/revised.md` SHA-256: `C06FE209882EF31D03B295EBE7DC208BAD45296BDC4B750AC53B335329B26616`, basis `CH-01-B1`).
- Chương 2 (`chapters/chapter-02.md`, 3.380 từ, SHA-256: `BE07F33A74B16805D49CB516BA0A1A78631BB7185FBE37EACC40750D75437ABE`, candidate `CH-02-C3` tại `revisions/chapter-work/CH-02/revised.md` SHA-256: `D8BB922DDF9EEA960D65BACD0F8CC02B6DEC262EA3E763FC1A101A81FD416FA0`, basis `CH-02-B3`).
- Chương 3 (`chapters/chapter-03.md`, 4.264 từ, SHA-256: `6C966093C7A4547A8BD80D6B6DE488477B0303145EF81D30A5470684678342A1`, basis `CH-03-B1`).
- Chương 4 (`chapters/chapter-04.md`, 6.172 từ, SHA-256: `379187A01215FD1B09D3AA551A5F873D4DA2CDF8EAE60CF923BF42A32AEB1E49`, basis `CH-04-B1`).
- Chương 5 (`chapters/chapter-05.md`, 5.375 từ, SHA-256: `63668BE517423319948F160555AC4B9575AFD3FC669994B780894C0F37030896`, basis `CH-05-B1`).
Tổng dung lượng bản thảo: ~23.300 từ.

## Current next action

**REVISION WAVE HOÀN TẤT (CH-01-C3 & CH-02-C3):**
1. Đã giải quyết triệt để lỗi logic thoại bà Lan về "họ Vũ" ở cả CH-01 và CH-02 (trả bà Lan về tri thức thuần túy của người bán hàng nhìn sổ đơn, không biết gia phả họ Vũ hay nội bộ xóm Trại).
2. Tinh chỉnh chuyển cảnh mượt từ tiệm mã về căn nhà hai tầng xóm Trại ở cuối CH-01; đồng bộ không gian/thời gian với đại cảnh canh xác CH-03; gia tăng độ lạnh gáy.
3. Khôi phục hoàn toàn vỏ bọc người sống của Thoa ở CH-02; áp dụng **Kiến trúc nhận thức hai tầng (Dual-Layer Perception Architecture)**: ban ngày Thoa đội nón lá cũ sụp che nửa mặt, xưng hô người lớn thôn quê (*"Tôi — Bác"*, *"Cho anh trai tôi"*), bà Lan ngỡ là người đàn bà trung niên cùng thế hệ ông Cường đi đặt đồ giải hạn; dung mạo thiếu nữ 22 tuổi năm 1996 chỉ được bóc trần cơ học qua mắt camera khi người đó ngửa mặt nhìn lên thấu kính giấu kín trên xà nhà, hoàn toàn ăn khớp với giả thuyết điều tra Thoa 52 tuổi của cán bộ Long ở P4 và CH-05.
4. Viết lại phân cảnh CCTV cuối CH-02 theo cú **One-Shot Pull-Back Reveal** liền mạch, cắt bỏ toàn bộ sáo ngữ "tell but don't show" và phản ứng sinh lý sến rện.
5. Toàn bộ file quy hoạch liên quan (`candidate.md`, `writing-brief.md`, `scene-ecology.md`, `character-context.md`, `qa-card.md`, `writer-handoff.md`, `revision-audit.md`) tại cả 2 workspace `CH-01` và `CH-02` đã được cập nhật đồng bộ, ngăn ngừa nguy cơ các agent sau refer sai nguồn.

Bước kế tiếp: Tác giả nghiệm thu kết quả revision wave CH-01/CH-02, sau đó tiến hành `/hr-preflight CH-06` (Case Zero Phase 4). Cần Gemini 3.7 Flash / low–medium hoặc Gemini 3.8 Flash / medium.

Workflow hiện có Creativity Firewall và Discovery-Led Preflight: upstream craft skills chỉ chạy khi được gọi đích danh; discovery phân kỳ tách khỏi generative context; generative context tách khỏi QA; scene ecology mở đời sống/kinh dị/manh mối mà không thành beat sheet; độc giả là trục suy luận chính, Khanh không thành điều tra viên toàn năng. Approval tách khỏi readiness, locator khỏi handoff, prose hash khỏi source freshness và structural checks khỏi literary evaluation. Không quota engine, subplot, clue, câu hỏi, thoại, hidden agenda, phản ứng cơ thể hoặc chi tiết mới.

Các khóa thay đổi chính:
- Thủy hỏi về điện thoại **đã bị thu**; không tìm lấy máy trước hạn chế hiện trường.
- **Không còn bằng chứng âm thanh 1996.** Radio giữ ký ức; lời chứng/vật chứng độc lập chịu phần chứng minh.
- Cường có tình thương thật lẫn kiểm soát; mẹ Toàn mất từ trước khi truyện mở, không án mạng phụ.
- Thủy/Lan Anh có lựa chọn nói thật mang giá; Khanh gắn trách nhiệm sổ đơn/tiệm.
- Không quota động vật, lạnh, im côn trùng, đủ giác quan, thoại gãy hoặc mọi chi tiết phải là clue.
- Cổn sống ở kết thúc đã duyệt; không tự động hối cải.

## Open design / verification gates

- Trước P6: thiết kế lần đối mặt/rút lui quan sát được của Cường, người chứng kiến, giới hạn và dấu phân biệt kết thúc với tạm yên. Không dùng thú nhận/tha thứ như phép trừ ma.
- Trước cảnh cận radio: khóa nét cá nhân để nhận ra, custody và lựa chọn giữ/gửi của Thủy. Không tự bịa luật đồ mã qua Rằm hút vong.
- Trước sử dụng như chứng cứ: định vị các lần Thủy tìm giúp đỡ, lời chứng/nguồn đối chiếu 1996. Cô không chứng kiến cú đánh.
- Trước cảnh chuyên môn: tổ chức/thẩm quyền công an 2026, khám nghiệm/bàn giao, nhận dạng hài cốt, hồ sơ cũ, giới hạn ghi âm 2026. Không cần gate phục hồi cassette hay đua giờ Thủy về trước khám nữa.
- Nghi lễ, nghề mã và folklore cụ thể vẫn theo nguồn hoặc niềm tin có chủ thể.
- Không chốt thêm cái chết, mức án, quyền đất, kết cục vĩnh viễn linh hồn, hoặc cơ chế kỹ thuật/siêu nhiên vụ công sở.

Validation và ranh giới: xem báo cáo D-002. Checker cấu trúc không chứng nhận sức ám ảnh, sự thật văn hóa hay logic pháp y. Đợt registry trước tạo **năm** location entities; không reindex tự động làm mất mô tả curated.
