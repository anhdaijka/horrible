# Audit toàn chuỗi workflow Horrible — 2026-09-18

## Kết luận và phạm vi

**Có lỗi hệ thống trong workflow, đồng thời có lỗi thực thi của agent.** Không thể quy toàn bộ cho writer, và cũng không thể nói thiếu quy định là nguyên nhân duy nhất: nhiều yêu cầu đúng đã tồn tại nhưng agent vẫn tuyên bố hoàn tất khi chưa chứng minh được chúng trên bản thảo.

Mô hình thất bại chính: **chốt hiệu ứng mong muốn → đóng gói các fact → viết nhân vật đưa độc giả đến hiệu ứng ấy → tự xác nhận đã kiểm tra**. Bước còn yếu là thử xem những con người ấy, với tri thức và quan hệ đã có, có thật sự tạo ra chuỗi sự việc đó không. Sự đúng của từng fact không bảo đảm sự đúng của hành vi nối chúng.

Đây là audit, không phải triển khai cải tổ. Không sửa packet, prose, canon, skills, router hoặc proposal nhận đơn mùng 10. `Targeted causal-hinge workflow repair` bằng Terra **chưa được duyệt**. Chỉ thị mới của tác giả yêu cầu hoàn tất audit trước, nên không tiếp tục next action cũ trong session-state.

Đối tượng: hợp đồng gốc; quy tắc context/planning/drafting/review/continuity; năm skills `hr-source-*`; sáu workflow chương; playbook, quality gates, templates; prompts vai trò và session; nguồn nhân vật/directive liên quan; lịch sử review và workspaces CH-01; script validation/lifecycle/bootstrap. Các skills craft tổng quát được kiểm ở những nhánh giao cắt trực tiếp với tác nghiệp Horrible, không phải audit mọi tài liệu tham khảo của tất cả skills cài đặt.

Không phục hồi bản thảo bị loại để làm mẫu văn. Review cũ được dùng làm bằng chứng về lỗi đã từng được phát hiện. Không chạy một lượt viết hoặc review độc lập mới; audit này đã biết ý kiến tác giả và không đủ điều kiện cấp literary PASS. Không thực hiện nghiên cứu web mới hoặc tuyên bố đạt chất lượng toàn bộ tác phẩm Nguyễn Ngọc Ngạn.

### Cách đọc phát hiện

- **P1:** có thể làm hỏng logic, đánh giá hoặc ranh giới thẩm quyền; cần xử lý trước khi tiếp tục chuỗi liên quan.
- **P2:** làm tăng tái diễn, drift hoặc chi phí; xử lý trong đợt sửa thích hợp.
- **Đã thấy:** có dấu vết cụ thể trong repo hiện tại/lịch sử kết quả.
- **Rủi ro:** suy ra từ đường tác nghiệp hoặc thiếu hợp đồng; chưa có bằng chứng nó đã xảy ra.
- Đề xuất dưới đây chưa phải quyết định đã được tác giả duyệt.

## 1. Bản đồ vòng đời và mức chứng cứ

| Công đoạn | Kết quả audit | Giới hạn kết luận |
|---|---|---|
| Startup / authority | Nhiều bề mặt trạng thái và ưu tiên không đồng nhất | Thấy mâu thuẫn tài liệu; chưa thấy canon bị ghi sai vì nó |
| Design dialogue / author gate | Đã hỏi về cấu trúc, nhưng tự đóng phần nhân quả chưa giải quyết | Thấy trực tiếp ở v4 |
| Preflight | Đủ fact không đồng nghĩa đủ nguyên nhân; hậu quả viết trước khi cơ sở được kiểm | Thấy trực tiếp ở v4 |
| Writer packet | Quan hệ đã tốt hơn; projection chưa bảo đảm kín spoiler hoặc đủ lịch sử nhận biết | Một phần xảy ra, một phần là đường rủi ro |
| Draft / self-edit | Có cải thiện sinh hoạt và độ dài thoại; vẫn có hành vi phục vụ plot và self-certification | Thấy trên candidate v4 |
| Literary review | Mục tiêu đọc mù đúng; đường vào có thể đưa rationale cho reviewer trước prose | Lỗi hợp đồng đầu vào; v4 chưa có independent PASS |
| Safety review | Có check tri thức/fact; chưa làm rõ kiểm suy luận và phản ứng kéo theo | Khoảng hở; safety v4 còn pending |
| Revision / regression | Có bảo toàn candidate; thiếu kết thúc vòng học lỗi giữa các lần restart | Thấy lỗi cũ tái diễn; revision mới chưa đủ lịch sử để đánh giá hiệu quả |
| Canonization / state sync | Gate chữ khá chặt; freshness và liên kết diff còn thiếu | Rủi ro; hiện 0 chương canonized |
| Export / bootstrap / auxiliary skills | Có đường tác nghiệp chưa thích nghi với hợp đồng Horrible | Rủi ro đọc từ mã/chỉ thị; không chạy thao tác ghi/xóa |
| Validation / evaluation | Kiểm tra cấu trúc tốt trong phạm vi của nó; chưa chứng minh hành vi agent | Đã chạy checks; lifecycle chỉ kiểm tĩnh và fixture |

## 2. Những cải thiện trước đây thực sự có ích

Không nên làm lại toàn bộ như thể chưa có tiến bộ:

1. Writer đã có `character-context.md`, không chỉ brief cô đặc; quan hệ mẹ–con được đưa rõ vào v4.
2. Root contract đã bỏ quota thoại gãy, giác quan, clue và hidden agenda. Không còn cơ sở để coi thoại ngắn là tiêu chuẩn mặc định.
3. Timeline sự kiện đã được tách khỏi thứ tự kể. D-004 là quyết định thực sự của tác giả, không nên mở lại chỉ vì audit phát hiện thiếu cơ sở nhận đơn.
4. Creative review và safety đã tách vai trò. Same-context/provisional không được tự cấp independent PASS.
5. Candidate có đường dẫn/hash; draft, trial và canon không còn bị đồng nhất trong hợp đồng chính.
6. Chưa có canonization sai: candidate v4 đang chờ xử lý và safety pending. Đây là giới hạn quan trọng khi đánh giá hậu quả.

Vấn đề là cơ chế vận hành các cải thiện ấy chưa đủ: thêm một nguyên tắc đúng không tự tạo năng lực kiểm chứng nguyên tắc.

## 3. Các phát hiện

### A01 — P1 / Đã thấy: “đã chốt thiết kế” bị mở rộng thành “đã giải quyết đủ cơ sở để viết”

**Bằng chứng:** `CH-01-v4/design-resolution.md` phê duyệt phân bổ chương và kết luận không còn câu hỏi chặn; `preflight.md:6–7,45` ghi RESOLVED/none blocking. Trong khi đó, chưa có causal account đủ cho bà Lan nhận đơn của người sống mà sáng 14 mới thấy lạ. `author/session-state.md:26–27` sau đó xác nhận lỗ hổng này.

**Cơ chế:** sự đồng ý về thứ tự kể không chứng minh sự hợp lý của tình huống được kể. Agent đã tự suy rộng phạm vi “sẵn sàng”, không phải tác giả đã duyệt mọi tiền đề chưa được trình ra.

**Đề xuất:** tách ngắn gọn quyết định tác giả đã chốt khỏi đánh giá đủ cơ sở của planner. Chỉ gắn READY khi các tiền đề quyết định hành vi đã có căn cứ hoặc được đánh dấu câu hỏi thiết kế. Không hỏi lại các lựa chọn trình bày đã duyệt.

### A02 — P1 / Đã thấy: kiểm fact và knowledge chưa kiểm hệ quả nhận thức

**Bằng chứng:** `draft.md:117` bà Lan đã hỏi xóm để xác định người nhận; `:187` lại nói chỉ bây giờ mới lạ. `character-context.md:18–22` mô tả ai biết gì trong cảnh, nhưng không giải quyết người đó đã biết gì khi đơn đến và sự hiểu biết ấy đòi hỏi phản ứng nào. Playbook đã nhắc practical/character causality ở dòng 11: đây là yêu cầu có sẵn nhưng thực thi không đạt.

**Cơ chế:** một nhân vật có thể không biết thêm fact sai nào mà vẫn hành xử phi lý: thấy A, biết B, nhưng không nối A với B chỉ vì plot cần giữ bí ẩn.

**Đề xuất:** với điểm xoay có hậu quả, thử chuỗi: nhận thấy gì → hiểu/hiểu nhầm ra sao → điều gì khiến cách hiểu ấy hợp lý → làm gì → hậu quả gì. Không biến thành bảng cho mọi lượt thoại. Safety và literary cùng kiểm điểm giao nhau này, không để rơi giữa hai vai trò.

### A03 — P1 / Đã thấy: trì hoãn kiểm nguyên nhân vì nguyên nhân nằm ở chương kể sau

**Bằng chứng:** `preflight.md:22,45` để CH-02 nhận preflight riêng; `session-state.md:28` đặt CH-02 sau khi CH-01 có candidate. Nhưng CH-01 đã kể lại các cam kết và cách nhận đơn mùng 10.

**Cơ chế:** nhầm thứ tự trình bày với thứ tự phải hiểu quan hệ nhân quả. Viết hậu quả trước là lựa chọn nghệ thuật; chưa hiểu nguyên nhân trước khi viết hậu quả là thiếu chuẩn bị.

**Đề xuất:** chỉ kiểm trước phần CH-02 mà CH-01 phụ thuộc: nhận ra ai, tại sao nhận đơn, đã hỏi/được trả lời gì, cam kết lấy hàng nào. Không cần viết trước toàn bộ CH-02 hoặc khóa mọi beat.

### A04 — P1 / Đã thấy: bảo vệ reveal đang có thể triệt tiêu câu hỏi đời thường

**Bằng chứng:** `preflight.md:22` hạn chế mang encounter CH-02 sang lời kể; `draft.md:135–139,175–187` bà Lan xác nhận nhớ mặt nhưng gạt câu hỏi mô tả, dù câu hỏi có động cơ hợp lý sau tin chết.

**Đánh giá:** người bán không nhớ rõ mặt là khả dĩ; bực vì bị hỏi cũng khả dĩ. Ở đây cả cách né lẫn lời giải thích cần được chứng minh bằng tình huống cụ thể, không thể mặc nhiên hợp lý chỉ vì giúp giấu người đặt. Không khẳng định mọi từ chối mô tả đều sai.

**Đề xuất:** thử câu hỏi phản biện: nếu không cần giấu twist, người này có hành xử như vậy không? Nếu không, sửa cách phân phối thông tin hoặc hoàn cảnh, thay vì làm nhân vật kém tò mò. Có thể giấu lời giải mà vẫn cho nhân vật hỏi đúng.

### A05 — P1 / Đã thấy: provenance văn hóa không đủ chứng minh “nghịch lý” của cảnh

**Bằng chứng:** `preflight.md:12` gọi đơn có trước cái chết là “intelligible impossibility”; `:40` dẫn research về custom paper objects, radio và lấy hàng sau. Các điều đó hỗ trợ tính khả dĩ của món hàng/giao dịch, không tự chứng minh đặt trước cái chết là bất khả hoặc tự chứng minh bà Lan có lý do không hỏi.

**Đề xuất:** phân biệt điều văn hóa có thể xảy ra, điều nhân vật thấy bất thường và điều thực sự bất khả trong thế giới truyện. Sức rợn nên đến từ tổ hợp chi tiết và ý nghĩa cá nhân có cơ sở; không cần dựng một lệnh cấm văn hóa giả hoặc bắt mọi chi tiết kinh dị thành bằng chứng.

### A06 — P1 / Đã thấy: proposal sửa lỗi đang được đưa ra trước khi phản biện đủ

**Bằng chứng:** `development/horrible/opening-order-recognition-design.md:10` đề nghị Thoa nói Cường biết/nhờ đặt và bà nhận việc đã trả tiền. Lời “Cường biết” có thể giải quyết quyền đặt hàng, nhưng chưa tự giải quyết tại sao người sống muốn một radio mã cho mình và tại sao bà Lan thấy đủ thỏa đáng. Payment là một lựa chọn trạng thái thêm vào proposal, không nên đi vào prose như fact đã được duyệt. `:22` yêu cầu tác giả phải cung cấp lý do khác nếu không đồng ý.

**Đề xuất:** trước khi xin duyệt, kiểm hệ quả của phương án ở cả ngày 10 và 14; trình vài cách thật sự khả thi cùng phần còn yếu. Agent chịu trách nhiệm phát triển phương án, tác giả chọn định hướng. Chưa thể coi proposal hiện tại là sửa đúng chỉ vì trả lời được một câu hỏi đầu tiên.

### A07 — P1 / Rủi ro có đường dẫn cụ thể: firewall spoiler là nhãn, chưa kín ở trích nguồn

**Bằng chứng:** `character-context.md:27–28` cho đọc “Chosen trajectory” của Lan Anh và “Family and moral pressure” của Toàn. `characters/lan-anh.md:71–75` chứa hành vi che giấu, từ chối làm chứng và đổ vỡ sau đó; `characters/vu-van-toan.md:64–68` chứa escalation của cuộc gọi về sau.

**Cơ chế:** “đọc nhưng đừng viết ra” không tương đương không biết spoiler. Nó có thể làm người viết tránh tự nhiên hoặc cài báo trước quá rõ. Chưa có chứng cứ rằng chính các trích đoạn này gây lỗi bà Lan.

**Đề xuất:** packet trích đúng đoạn an toàn cần dùng, không chỉ dẫn section còn chứa phần bị cấm. Giữ quyền lookup khi thiếu fact nhưng chỉ lấy câu trả lời cần thiết, không nạp toàn bộ hồ sơ.

### A08 — P1 / Đã thấy và cần phân loại: micro-action có thể tạo nghĩa vụ truyện bền

**Bằng chứng:** `draft.md:125,135` thêm ngày bắt đầu làm, lời hẹn và lời người đặt về đến lấy trực tiếp; `:143–169` tạo cam kết giữ radio, hỏi người đặt và báo sang nhà. Đây không chỉ là nhịp câu hoặc cử chỉ. Không kết luận toàn bộ đều trái canon: một số có thể có nguồn thiết kế khác hoặc nằm trong quyền xử lý cảnh. Nhưng packet/candidate chưa phân loại rõ phần nào cần mang theo sang CH-02 và các cảnh sau.

**Đề xuất:** sau khi viết, chỉ trích những thay đổi thật sự có hậu quả liên chương vào ghi chú delta ngoài prose. Phân biệt trang trí tạm thời với một lời hứa, thông tin quá khứ hoặc custody phải được trả giá về sau. Không bắt xin phép từng hành động nhỏ.

### A09 — P1 / Đã thấy: self-edit đang được ghi như kết quả, không đủ bằng chứng về hiệu quả

**Bằng chứng:** `candidate.md:8` tuyên bố đã đọc lại quan hệ, chức năng thoại, knowledge và physical continuity. Cùng candidate vẫn chứa A02 và phản ứng coda chưa phân biệt rõ ở A11.

**Kết luận đúng mức:** không thể biết agent có thật sự đọc lại hay không; có thể đã đọc mà không phát hiện. Điều chứng minh được là nhãn “completed” không đủ bảo đảm kết quả.

**Đề xuất:** không thêm checklist dài. Với lỗi trọng yếu đang sửa, yêu cầu chỉ ra chỗ trên trang cho thấy cơ chế cũ đã thay đổi và thử một phản ví dụ. Self-edit vẫn không thay independent review; không bắt writer viết luận giải biện hộ cho toàn bộ chương.

### A10 — P1 / Đã thấy: chưa có vòng chống tái diễn giữa các thế hệ bản thảo

**Bằng chứng:** `CH-01/review.md:141–158` đã ghi F-01 về dồn giả thuyết duy lý và F-02 về Lan Anh không được chứng minh đã nghe gì. V4 `draft.md:129` lại gom nhiều khả năng giải thích, và `:231–247` lại để mức chứng kiến chưa rõ. Quy tắc bảo vệ khỏi văn cũ đúng, nhưng không có cơ chế gọn chuyển bài học về cơ chế lỗi sang candidate mới.

**Đề xuất:** giữ sổ lỗi tái diễn rất ngắn theo triệu chứng và phép thử, không mang prose cũ hoặc phương án sửa cũ làm mẫu. Một restart không tự xóa finding chưa được kiểm lại. Việc nhiều giả thuyết có làm xẹp cảnh hay không vẫn cần phán đoán văn học, không biến “chỉ được một giả thuyết” thành quota mới.

### A11 — P1 / Đã thấy khoảng hở, không kết luận hộ tri giác: ý đồ chứng kiến khác điều trang văn chứng minh

**Bằng chứng:** `preflight.md:17,24` cần Lan Anh nhận biết đủ để sự kiện không chỉ là ý nghĩ riêng Toàn. Trong `draft.md:231–247`, cô giữ túi và im lặng sau lời đáp của chồng. Có thể cô nghe giọng gọi; cũng có thể cô chỉ phản ứng với Toàn. Văn bản chưa phân biệt chắc hai khả năng.

**Đề xuất:** reviewer phải nêu cách đọc đối nghịch hợp lý và xem nó có phá yêu cầu thiết kế không. Nếu partial witness là hard boundary, cần dấu hiệu đủ phân biệt; không bắt phải nói một câu xác nhận lộ liễu hoặc dùng phản ứng sinh lý. Nếu muốn giữ mơ hồ về người nghe, đó là thay đổi thiết kế cần nhận diện.

### A12 — P1 / Rủi ro cấu trúc: đường vào literary review làm nhiễm lần đọc mù

**Bằng chứng:** `.agents/skills/hr-source-review/SKILL.md:8` và playbook dòng 39 bắt đọc `candidate.md` trước prose. Candidate v4 dòng 8–9 chứa lý giải self-edit và verdict/finding trước; startup bắt đọc session-state, nơi dòng 26–27 nêu diagnosis và repair. Template vẫn dùng heading “First reading — before writer packet” cho cả COMPROMISED.

**Cơ chế:** không thể bảo đảm trải nghiệm độc lập nếu đầu vào đã giải thích nên khen/chê điều gì. Fresh task cũng có thể bị nhiễm từ chính router, không chỉ từ lịch sử chat.

**Đề xuất:** đầu vào reviewer lần đầu chỉ có locator, scope và identity, không diagnosis/rationale. Tách metadata định vị khỏi diễn giải; startup theo vai trò phải tương thích. Reviewer đã bị lộ context ghi nhận thẳng provisional, không mô phỏng một lần đọc mù chưa từng có. Chưa có independent PASS sai ở v4; đây là lỗ hổng đường tạo PASS tương lai.

### A13 — P2 / Rủi ro: revision thiếu nhánh rõ khi feedback đến trước đủ hai review

**Bằng chứng:** skill revision dòng 8 yêu cầu cả hai review; v4 mới có phản hồi tác giả/provisional và safety pending. Playbook cho phép sửa theo bằng chứng nhưng chưa mô tả rõ nhánh này.

**Đề xuất:** cho phép revision chẩn đoán theo phản hồi tác giả khi được yêu cầu, ghi rõ review nào chưa có; không giả tạo review để đủ bộ. Chỉ promotion mới bắt buộc đủ các điều kiện hiện hành. Hiện chưa có bằng chứng agent đã bịa review hoặc bị khóa ở nhánh này.

### A14 — P2 / Đã thấy thiếu kết thúc thử nghiệm: scene trial chưa gắn với quyết định mở rộng

**Bằng chứng:** `.agents/rules/writing-workflow.md:11` có trial cho lỗi tái diễn; v3 giữ trial, v4 chuyển sang full chapter theo thiết kế mới nhưng chưa có bằng chứng độc lập rằng trial đã khắc phục lớp lỗi mục tiêu.

**Đề xuất:** nếu đã chọn trial để kiểm một giả thuyết sửa lỗi, kết luận nó chứng minh được gì trước khi scale. Duyệt thứ tự chương không tự là duyệt chất lượng trial. Không bắt mọi chương phải qua trial, và không dùng trial cũ đã đổi thiết kế để bảo đảm draft mới.

### A15 — P1 / Rủi ro: hash prose chưa đủ biểu đạt review còn hiệu lực

**Bằng chứng:** workflow canonize dòng 7 và playbook dòng 56–58 gắn review/acceptance với bytes candidate. Chưa có quy tắc tương đương khi đổi nguồn thiết kế hoặc packet có ảnh hưởng mà prose không đổi. `templates/canon-diff.md` có các nhóm state và accept all nhưng thiếu định danh candidate/nguồn đánh giá đi kèm.

**Đề xuất:** review ghi cơ sở thiết kế quan trọng; khi cơ sở đó đổi, đánh dấu phần review liên quan cần kiểm lại dù hash prose giữ nguyên. Diff phải gắn rõ candidate và phạm vi tác giả duyệt. Không cần hash mọi tài liệu hoặc tái kiểm toàn repo; chỉ dependency ảnh hưởng kết luận. Chưa xảy ra canonization sai vì hiện chưa có chương được nhận.

### A16 — P2 / Đã thấy: nhiều router trạng thái có thể đưa agent đi khác hướng

**Bằng chứng:** `author/session-state.md:20,26` ghi v4 có candidate và DESIGN_REPAIR_AWAITING_AUTHOR. `continuity/state.md`, phần Current handoff, vẫn ghi v4 approved packet và “no prose exists there yet”. `preflight.md:45,50` vẫn none blocking/candidate none.

**Đề xuất:** chọn một router hiện hành; packet lịch sử giữ nguyên nội dung lúc lập nhưng được đánh dấu không còn dùng để khởi động bước tiếp theo. Không cần viết lại lịch sử thành như thể ban đầu đã biết lỗi. Giao bước update handoff kiểm các bản sao trạng thái chủ yếu, không chỉ một file.

### A17 — P2 / Rủi ro: chỉ thị kỹ thuật cũ còn đường quay lại dù root đã hạ thành tùy chọn

**Bằng chứng:** `author/style-bible.md:124–132` còn imperative về chuyển cảnh/hoài niệm/SOLID; tới dòng 630–632 mới nhắc quyền supersede. Generic dialogue skill dòng 19,60,130,451 khuyên đa chức năng, verbal tic và hidden agenda cho mọi cuộc thoại. Root contract nói kỹ thuật là optional. `.agents/rules/01-canon.md:5–11` và directive README còn diễn đạt cấp thẩm quyền không hoàn toàn đồng nhất với nhau.

**Đề xuất:** làm rõ đường áp dụng một lần ở router; không coi mọi câu cũ trong nguồn là luật. Chỉ chuyển khuyến nghị craft vào tình huống có vấn đề phù hợp. Không có bằng chứng đủ để quy lỗi thoại v4 cho một skill cụ thể; đây là nguồn áp lực/routing tiềm năng. Không nên xóa bừa các kỹ thuật vốn hữu ích khi dùng đúng.

### A18 — P1 / Rủi ro ngoài happy path: một số entrypoint vẫn mang lifecycle khác

**Bằng chứng:** generic `chapter-writing/SKILL.md:68–98` ghi outline trong file prose, lưu vào `chapters/`, rồi cập nhật timeline/continuity sau draft. Trái với non-canon workspace và gate của Horrible nếu chạy nguyên văn. `prompts/session/export-manuscript.md:10` bảo sửa canonical Markdown khi proofing phát hiện content error, chưa phân biệt typo với đổi nội dung cần duyệt.

**Đề xuất:** generic skills chỉ cung cấp craft trong dự án này, mọi state mutation đi qua hợp đồng Horrible. Export báo lỗi nội dung và xin đúng phạm vi nếu chưa có quyền sửa; không canonize ngầm từ tác vụ dựng file. Root hiện đã có quyền ưu tiên nên đây không phải giấy phép hợp lệ để vượt gate, nhưng đường dẫn phụ vẫn cần thích nghi rõ.

### A19 — P1 / Rủi ro xác định từ mã: bootstrap clean xóa cả skills riêng của dự án

**Bằng chứng:** `scripts/bootstrap.mjs:42–46` xóa mọi entry dưới `.agents/skills` trừ `.gitkeep`; dòng 51–65 cài lại upstream. Nhánh này không bảo vệ hoặc tái tạo nhóm custom `hr-source-*`. `copyDir:28–31` còn thay toàn bộ thư mục đích cho skill upstream.

**Đề xuất:** phân biệt upstream-managed và project-owned; bảo toàn skills riêng, thử trong fixture cô lập. Không vá trực tiếp upstream làm nơi duy nhất chứa quy tắc dự án vì lần cài sau có thể ghi đè. **Audit không chạy bootstrap hoặc bất cứ lệnh xóa nào.** Đây không phải nguyên nhân đã chứng minh của lỗi bà Lan, nhưng là lỗ hổng bảo toàn cải tổ.

### A20 — P1 / Đã thấy: bộ kiểm tra hiện tại chưa đo năng lực mới mà các đợt cải tổ tuyên bố hướng tới

**Bằng chứng:** `scripts/story-check.mjs` chạy validate/links/continuity; story loader dòng 609 đọc chương từ `chapters/`, không phải candidate v4. `scripts/tooling-check.mjs` parse config và kiểm syntax. `scripts/lifecycle-test.mjs:120–134` chép golden review/diff có sẵn và tìm các chuỗi APPROVED/Verdict/ACCEPT ALL. `evals/README.md` dẫn `phase3-antigravity.md`, nhưng file này không có ở đường dẫn đó lúc kiểm.

**Kết luận:** checks đang PASS đúng phạm vi; không phải chúng nói dối. Nhưng không được dùng PASS ấy để chứng minh agent biết phát hiện thiếu nhân quả, viết tự nhiên hay review độc lập. Lifecycle fixture không tương đương chạy agent trên tình huống mới.

**Đề xuất:** thêm bộ ca nhỏ có tình huống hợp lệ lẫn tình huống lỗi, chạy qua đúng entrypoint và chấm kết quả quan sát được. Giữ đánh giá văn học độc lập với schema; không thay bằng đếm từ/thoại hoặc tổng điểm tưởng như khách quan.

## 4. Vì sao sửa đi sửa lại vẫn gượng?

Ba cơ chế có thể cùng tồn tại:

1. **Tối ưu đầu ra nhìn thấy được:** có đủ tên, ngày, món đồ, phản ứng, coda. Agent dễ làm đủ hơn là kiểm người trong cảnh có động cơ thực sự đi qua từng thông tin đó.
2. **Khắc phục triệu chứng thay vì chức năng:** thoại ngắn được thay bằng thoại dài hơn; thiếu agency được thay bằng nhiều từ chối; thiếu kinh dị được thay bằng thêm hiện tượng. Nhưng một người từ chối cung cấp thông tin chỉ để giữ twist vẫn không có agency thuyết phục.
3. **Tự xác nhận trong cùng khung nhìn:** planner đặt mục tiêu, writer đọc mục tiêu, reviewer đọc lý giải writer hoặc router rồi đối chiếu xem mục tiêu đã được nhắc tới chưa. Người đọc thật không có những lời giải thích ấy.

V4 không còn toàn bộ là lời thoại cụt như ví dụ cũ: có sinh hoạt, quan hệ và câu dài. Vì vậy “bắt tăng độ dài thoại” là chẩn đoán sai. Lỗi còn lại nổi bật hơn là **tính tất yếu giả của cuộc trò chuyện**: hỏi đúng ô thông tin, né đúng chỗ reveal, dừng đúng nơi thiết kế cần, bất kể động lực con người.

Không có thí nghiệm kiểm soát để kết luận đổi model sẽ tự giải quyết. Một model mạnh hơn vẫn có thể hợp lý hóa brief sai. Terra phù hợp triển khai thay đổi cấu trúc đã được duyệt; kiểm định chất lượng văn học không nên suy từ việc Terra hoàn thành chỉnh file.

## 5. Bộ phép thử tối thiểu đề xuất trước khi tuyên bố workflow đã sửa

| Ca | Điều phải quan sát được |
|---|---|
| Bà Lan biết đúng người sống, nhận đơn mã có tên | Planner nhận ra cần lý do và phản ứng; không tự gắn READY vì tác giả duyệt thứ tự chương |
| Người bán thực sự không biết người nhận | Không ép cùng một câu hỏi tác giả hoặc cùng cách sửa của ca trên |
| Chương hiện tại là hậu quả, flashback kể sau | Kiểm dependency nguyên nhân trước, nhưng không ép đổi về thứ tự thời gian |
| Nhân vật hỏi câu hợp lý làm khó việc giấu twist | Giải quyết hoàn cảnh/cách kể; không mặc nhiên làm nhân vật né hoặc quên |
| Dấu hiệu nghe thấy có thể chỉ là nhìn người khác đáp | Reviewer nêu được hai cách đọc và ảnh hưởng đến knowledge sau này |
| Draft mới lặp lớp lỗi từng review | Finding cũ được kiểm lại theo cơ chế, không copy prose cũ và không tự đóng do restart |
| Candidate metadata có self-praise hoặc diagnosis | Blind reviewer không nhận phần ấy trước first-read; nếu đã nhận, ghi COMPROMISED |
| Prose không đổi, author lock liên quan đổi | Review bị đánh dấu cần kiểm lại phần ảnh hưởng, không giữ PASS chỉ vì hash khớp |
| Feedback tác giả tới trước safety review | Có thể chẩn đoán/sửa khi được yêu cầu; không tự tạo safety PASS hoặc promote |
| Một câu thoại ngắn tự nhiên; một câu dài tự nhiên | Cả hai có thể được giữ; không chấm bằng độ dài, fragment, tic hay hidden agenda |
| Chi tiết nhỏ tạo cam kết giữ/giao vật hoặc hẹn gặp | Ghi nhận nghĩa vụ liên cảnh, không lẫn với trang trí |
| Gọi generic write/export/bootstrap clean | Không cập nhật canon ngoài gate và không mất custom skills; kiểm trong fixture cô lập |

Ca lỗi chỉ hữu ích khi kèm ca hợp lệ đối chứng. Nếu agent học cách hỏi tác giả trong mọi tình huống, hoặc cấm mọi chi tiết mới, đó là một thất bại mới chứ không phải sửa thành công.

## 6. Các gói sửa đề xuất — chưa thực hiện

### Gói A: phần thiết yếu trước khi viết tiếp v4

- Phân biệt author approval với readiness của planner.
- Kiểm điểm xoay nhận thức/hành động và dependency CH-01/CH-02.
- Phân loại delta có hệ quả liên chương; đưa bài học tái diễn vào kiểm lại.
- Sửa đường đọc mù để review sau sửa có giá trị.
- Đồng bộ router hiện hành, không xóa lịch sử packet.

Đây mới là phạm vi đủ để tác vụ có tên `Targeted causal-hinge workflow repair` không chỉ thêm một mục “kiểm logic” rồi để các đường thất bại còn nguyên. Việc sửa **cơ chế workflow** và lựa chọn **lời giải cụ thể cho đơn mùng 10** là hai quyết định khác nhau. Duyệt gói workflow không tự duyệt lời giải Thoa nói Cường nhờ đặt.

### Gói B: trước khi nhận prose vào canon

- Freshness theo nguồn quyết định có ảnh hưởng; liên kết candidate–review–diff–acceptance.
- Nhánh revision khi chưa đủ review và phép thử các gate âm tính.
- Đánh giá thực nghiệm nhỏ thay vì dùng test golden làm bằng chứng năng lực.

### Gói C: gia cố vận hành và đường vào phụ

- Adapter/routing rõ cho generic skills; export không tự sửa nội dung ngoài quyền.
- Bootstrap bảo toàn project-owned skills.
- Giảm ambiguity của authority/craft và sửa tài liệu eval dẫn tới file không tồn tại.

Không nên triển khai tất cả thành một “đại workflow” nhiều biểu mẫu hơn. Mỗi thay đổi phải đóng một đường thất bại nêu trên; nếu chỉ thêm lời nhắc trùng lặp thì không đạt.

## 7. Kiểm tra đã thực hiện và giới hạn bàn giao

- `npm run tooling:check`: PASS.
- `npm run story:check`: validate, links, continuity đều 0 errors / 0 warnings.
- `Get-FileHash revisions/chapter-work/CH-01-v4/draft.md -Algorithm SHA256`: khớp candidate `A45B5266C867B138A34FC1706EE20D77355F4033935D507C59FD25D755D33864`.
- `Test-Path evals/phase3-antigravity.md`: False.
- Đọc mã lifecycle/bootstrap, không chạy bootstrap, không chạy agent eval hoặc promotion. Không dùng lifecycle fixture làm kiểm chứng văn học.
- Working tree đã có nhiều thay đổi và file mới từ trước; audit không ghi đè hoặc dọn chúng.
- Chỉ tạo báo cáo này. Không commit, không sửa workflow/prose/canon, không đổi trạng thái để ngụ ý đã duyệt.

**Trạng thái cuối:** audit hoàn tất trong phạm vi nêu trên; chờ tác giả xem xét kết luận/phạm vi sửa. Chưa có quyền bắt đầu `Targeted causal-hinge workflow repair` hoặc viết lại chương.
