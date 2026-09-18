# Audit workflow văn học — CH-01-v2 và chuẩn tham chiếu Nguyễn Ngọc Ngạn

Ngày: 2026-09-17. Phạm vi: audit thiết kế và lần vận hành hiện hữu; không sửa workflow, canon hoặc manuscript trong lượt này. Đây không phải blind literary review: người audit đã biết brief và lịch sử viết. Không cấp literary PASS.

## 1. Kết luận

Lần cải tổ trước giảm lượng checklist nhưng đồng thời cắt mất dữ liệu giúp nhân vật sống. Workflow truyền rất kỹ việc gì phải xảy ra, truyền quá ít những người làm việc đó là ai, có quan hệ gì và đang chịu sức ép gì. Sau đó nó dùng các động từ chung như muốn, né tránh, kiểm soát để thay cho tâm lý cụ thể. Bản thảo vẫn dễ thành chuỗi xác nhận dữ kiện.

Không thể quy toàn bộ thất bại cho workflow: Writer vẫn phải chịu trách nhiệm về lựa chọn câu chữ, hành vi thiếu thuyết phục và lỗi vật lý ngay trên trang. Tuy nhiên, workflow hiện tại không phát hiện đầu vào thiếu quan hệ, chưa có bước tự biên tập của Writer được mô tả rõ, và không có bằng chứng đã thử nghiệm chất lượng trước khi tuyên bố cải tổ thành công.

Việc rút ngắn prompt không tự tạo ra văn chương tốt. Chỉ đổi model hoặc nâng effort cũng chưa có căn cứ là giải pháp; không có thử nghiệm đối chứng trong repo để kết luận như vậy.

## 2. Phương pháp và giới hạn chứng cứ

Đọc toàn bộ draft v2, brief, preflight, năm hr-source skills, sáu workflow, rules 02–05 và writing-workflow, role prompts chính, templates, playbook và quality gates. Đối chiếu hồ sơ bà Lan, Khanh, Lan Anh, Toàn; đọc các phần liên quan trong style bible; dùng báo cáo audit trước như lịch sử chẩn đoán, không lấy prose v1 làm mẫu. Không phục hồi Git history.

Skill dialogue dùng để định vị lỗi thoại; story-analysis dùng cho agency, bối cảnh, nhịp và cảm xúc. Các prescription trong skills cũng là đối tượng phản biện, không là chân lý. Prose-style được kiểm tra như một nguồn hướng dẫn có nguy cơ gây lệch, không dùng để bắt đầu sửa câu khi vấn đề cảnh chưa được giải quyết.

Đếm các đoạn bắt đầu bằng dấu gạch thoại trong draft: 95 đoạn; 48 đoạn có tối đa 5 đơn vị phân cách bằng khoảng trắng; 76 đoạn có tối đa 10; trung vị 5. Cách đếm có thể gồm lời dẫn xen trong cùng đoạn và không tương đương đếm từ tiếng Việt bằng bộ tách từ. Nó không đo personality, agency hoặc chất lượng, và không được biến thành quota chiều dài.

Nguồn internet đã đọc gồm trích đoạn văn bản của hai tác phẩm và metadata audiobook. Chưa nghe audio, chưa đối chiếu toàn bộ ấn bản gốc, chưa khảo sát toàn bộ tác phẩm. Không tuyên bố đã xác lập khách quan “chất lượng tối thiểu bằng Nguyễn Ngọc Ngạn trên mọi phương diện”. Có thể đặt mục tiêu ấy cho dự án và chuyển thành tiêu chí biên tập có chứng cứ.

## 3. Bắt lỗi ngay trên bản thảo

Các dòng dưới đây thuộc `revisions/chapter-work/CH-01-v2/draft.md` tại thời điểm audit.

### D01 — Đoạn hỏi đáp biến thành biểu mẫu

L43–59 lần lượt nhập người đặt, người nhận, ngày lấy và xác nhận gấp. Đây là giao dịch có thể xảy ra ngoài đời, nên từng câu ngắn không sai. Nhưng dành một dòng cho mỗi ô mà không để thời hạn làm thay đổi cách thương lượng khiến đoạn văn gần như chỉ nhập dữ liệu.

Câu “Gấp đấy” không dẫn đến đổi điều kiện, cân nhắc nhận việc, yêu cầu làm rõ hoặc lựa chọn nào; câu “Tôi biết” đóng lại áp lực vừa nêu. Không nhất thiết phải thêm mặc cả, tiền cọc hay nghi lễ. Writer cần chọn điều gì thực sự đáng dựng thành lời; thủ tục còn lại có thể kể tóm.

### D02 — Mất quan hệ mẹ–con: lỗi nặng hơn nhịp ngắn

L187, L273–287: Khanh gọi bà Lan là “bà”; bà gọi anh là “cậu”, tự xưng “tôi”. Không có dấu hiệu cho thấy đây là cách trêu chọc hoặc sự xa cách có chủ đích. Độc giả được dẫn tới hiểu họ như hai người ngoài.

`characters/tran-thi-lan.md` xác định bà là mẹ Khanh; hồ sơ Khanh cũng ghi mẹ, cùng sắc thái thân mật trong gia đình. Brief v2 không truyền quan hệ này. Một lỗi vừa canon vừa văn học chứng minh việc tách hai lượt review không thể có nghĩa cắt đứt thông tin giữa chúng.

L81, L173, L207, L211 cũng chuyển “em” sang “tôi” khi Lan Anh nói với người lớn. Đổi xưng hô có thể có ý nghĩa, nhưng đoạn này chưa tạo bước ngoặt quan hệ đủ rõ. Không áp một cặp đại từ duy nhất cho toàn miền Bắc; phải biết ai nói với ai.

### D03 — Gắt gỏng đang làm nhiệm vụ giữ bí mật

L165–175: một câu hỏi bình thường về khách đặt hàng bị đáp bằng “hỏi cung”. L245–253: nhờ giữ khách chờ bị đẩy thành chuyện “khóa cửa”. L277–287: bà vừa nói chưa quên mặt, rồi phản ứng khó chịu trước câu xác nhận của Khanh.

Bà Lan có thể nóng nảy, giữ uy tín nghề hoặc mệt vì bị nghi ghi sai. Nhưng bản thảo chưa phát triển các nguyên nhân ấy tương xứng với mức đối đầu. Mỗi lần truy vấn tiến gần một mảnh thông tin, bà lại chặn. Tác dụng giữ plot rõ hơn tính người. Thêm một câu gắt không tự tạo personality.

### D04 — Khanh hỏi nhiều nhưng ít quyết định

L179–225 và L273–289: hành vi chủ yếu là xác minh thời điểm, nguồn, hình mẫu, nhận diện. Dịch chiếc đài vào trong là việc nhỏ hợp lý nhưng chưa làm thay đổi hướng xử lý cuộc trò chuyện. Anh chưa phải trả giá cho một lựa chọn giữa giúp việc nhà, giữ mặt mũi mẹ, tôn trọng tang gia và muốn biết thêm.

Agency là lựa chọn làm thay đổi điều tiếp theo, kể cả chọn im hoặc nhường; không phải số câu hỏi, số động tác hay mức chủ động điều tra. Hướng sửa cần dựng xung đột có thật trong quan hệ, không phong Khanh thành thám tử.

### D05 — Đời sống cụ thể bị đẩy ra ngoài cảnh

L81, L95–97 và L259: “ít thứ”, “những thứ”, “thứ nào” thay cho nhu cầu thật của Lan Anh. Người đọc biết ngày đơn rất kỹ nhưng ít biết việc cô đang cố hoàn thành. Thao tác bán hàng bị kể lướt, còn xác minh clue được diễn đầy đủ.

Không cần bịa một danh mục hàng mã hay quy tắc tang lễ. Có thể chọn một chi tiết đã được kiểm chứng hoặc một nhu cầu sinh hoạt thông thường. Đời sống phải gây trở ngại, tạo quan hệ hoặc cho thấy ưu tiên; âm thanh xe, giấy, chợ chỉ làm nền thì chưa đủ.

### D06 — Khách bí ẩn bị giảm thành người từ chối giải thích

L9, L23–39, L61: khách ít phản hồi xã giao, nói như đã chắc một điều, được narrator xác nhận “trả lời ngắn”. Đây có thể là dụng ý, nhưng cả bà Lan và các nhân vật khác cũng thường nói cùng nhịp ngắn nên mất tương phản. Bí mật danh tính không bắt buộc bí mật mọi cảm giác, thói quen giao tiếp hoặc phản ứng với người khác.

Chi tiết khách tự kéo hai tay bà Lan vào gần nhau ở L21 có thể xảy ra, nhưng cần cân nhắc khoảng cách xã hội giữa hai người mới gặp. Nó hiện phục vụ việc trưng tay trái rất rõ. Có thể gieo dấu tay trong thao tác của chính khách mà không biến cơ thể người bán thành dụng cụ đo.

### D07 — Coda có một ý tốt nhưng nhận diện âm thanh còn yếu

L317–319, tiếng gọi và câu “Vâng” ngắn có chức năng thật: phản xạ đi trước nhận thức. Đây là điều cần giữ khi sửa, không kéo dài cho đủ nhịp.

Tuy nhiên, bản thảo chưa cho người đọc một căn cứ cảm nhận đủ rõ để nhận đây là giọng Cường. Sau một tiếng gọi được dự kiến là giọng cha, Toàn hỏi vợ “Em gọi à?” mà chưa có nhịp tâm lý làm rõ đó là sự bám víu vào giải thích thường. Lan Anh trả lời “Em đứng đây” cũng không tự phủ định việc cô vừa gọi. Kinh dị dễ thành một sơ đồ phản ứng mà độc giả phải đọc brief mới hiểu đủ.

### D08 — Lỗi liên tục vật lý và dấu chân người viết

L315: sợi dây đã tuột ra; L347: một đầu vẫn mắc đúng chỗ cũ. Có thể hiểu chỉ một phần dây tuột, nhưng văn bản chưa nói rõ, nên câu cuối có thể vô tình tạo dị tượng ngoài thiết kế hoặc lỗi blocking. L271: bản vẽ đã được kẹp vào trang; L291–299 sổ còn mở không nhất thiết mâu thuẫn, nhưng việc chép lại ba trường dữ liệu đóng cảnh tăng cảm giác recap hồ sơ.

Các động tác lau kính, gạt tóc, chuyển vật không bị cấm. Cần hỏi chúng thay đổi tương tác thế nào. Thay câu ngắn bằng câu dài rồi giữ nguyên toàn bộ chuỗi này sẽ không giải quyết bệnh.

## 4. Nguyên nhân và lỗ hổng theo toàn bộ workflow

| ID / mức | Vị trí và bằng chứng | Hệ quả | Hướng sửa |
|---|---|---|---|
| W01 / cao, đã thấy | Rules 02 L11–17; brief L13–30: chỉ brief, thiếu quan hệ; hồ sơ có quan hệ | Writer thiếu tuổi, thân sơ, vai gia đình và lịch sử chung | Gói context tối thiểu theo độ đủ: quan hệ/xưng hô, tư thế xã hội, người đang muốn gì ở ai; nguồn chọn lọc không chứa spoiler |
| W02 / cao, đã thấy | Brief L27–30: “không kết luận khi chưa đủ căn cứ”, “không chắc hơn điều biết” | Nghĩa vụ tác giả bị gọi nhầm là điều nhân vật không dám nói | Tách giới hạn tri thức khỏi tâm lý; mục unsaid được phép không có, chỉ dùng khi có động cơ xã hội thật |
| W03 / cao, đã thấy | Template và preflight ép 5–8 hard facts; brief gom nhiều lệnh vào mục 8 | Có quota mới và bề ngoài gọn nhưng mật độ chỉ thị vẫn lớn | Không đếm số gạch như tiêu chí đầy đủ; ưu tiên ràng buộc cần thiết, không bỏ quan hệ để đạt tám mục |
| W04 / cao, thiết kế | Writer chỉ được biến đổi non-durable; không định nghĩa temporary preference khác quan hệ bền thế nào | Agent dễ ngại tự chọn thái độ, sai lầm nhỏ hoặc hành động có hậu quả cục bộ | Định nghĩa quyền tự quyết trong cảnh; thay đổi canon/rule/trajectory mới hỏi, phản ứng nhất thời hợp nền nhân vật được viết |
| W05 / cao, vận hành | Writer skill L20 cấm self-review trong file; lượt viết trước tuyên bố không tự review và chỉ kiểm header | Cấm tự cấp PASS bị hiểu thành không tự biên tập | Cho Writer đọc lại và sửa bản đầu trước bàn giao; không tự cấp chứng nhận độc lập |
| W06 / cao, chưa kiểm chứng | Literary skill có mục chất lượng nhưng PASS là “publishable at current standard” chưa có chuẩn so sánh cụ thể | Review dễ khen đủ mục hoặc gọi thêm gesture là sửa xong | Một chuẩn đọc có minh họa về thất bại/thành công, đánh giá chuỗi nhân quả và quan hệ chứ không đếm từ |
| W07 / cao, tiềm năng | Literary reviewer cấm kiểm canon; safety reviewer cấm voice/dialogue | Đại từ và kiến thức cá nhân ảnh hưởng cả hai, có thể bị đẩy qua lại | Đọc mù trước; sau đó đối chiếu context nhân vật để chẩn đoán chỗ không khớp. Safety báo lỗi quan hệ, editor sửa toàn tương tác |
| W08 / vừa, đã thấy | Brief “complete writing surface”; skill nói đã biết source thì coi là background | Một prompt mới trong cùng task không xóa lịch sử; lượt Writer thực tế mang context cải tổ | Ghi đúng mức độc lập; fresh task thực sự cho người review. Không giả định đổi model là sạch context |
| W09 / cao, tiềm năng | AGENTS L82 đòi duyệt major scene architecture; revision skill L13 cho rewrite scene | Quyền sửa cảnh và quyền đổi cốt truyện không phân biệt | Rewrite cách thể hiện được phép trong outcome đã duyệt; chỉ thay quyết định thiết kế trọng yếu mới xin tác giả |
| W10 / vừa, đã thấy | style-bible L630–658 vẫn cấm từ/cụm tuyệt đối, gợi ý body reactions; hồ sơ Toàn L52–62 gắn constant tic và stammer | Preflight hoặc reviewer có thể đưa checklist cũ trở lại; character card cũng chưa luôn đáng tin về craft | Chuẩn hóa authority: fact/quan hệ là dữ kiện; gợi ý biểu hiện là lựa chọn; không diễn mọi cảnh theo một tật |
| W11 / vừa, tiềm năng | dialogue skill D2 gợi ý fragments; D4 hidden agenda mọi cuộc; prose-style ưu tiên concise; story-analysis từng detail double duty | Dễ thay thoại cụt bằng vụn vặt, thay lịch sự bằng gắt, thay đời sống bằng chức năng | Dùng skills như câu hỏi chẩn đoán, không lệnh sinh prose; không bắt mọi câu có subtext hay mọi trao đổi đổi quyền |
| W12 / vừa, đã thấy | session-state còn “chưa có active v2 draft”, next action vẫn write | Router không phản ánh draft đã có, dễ ghi đè hoặc làm lại sai bước | Handoff ghi trạng thái non-canon và candidate hiện tại; thao tác ghi phải kiểm file có sẵn |
| W13 / vừa, tiềm năng | Review templates chỉ ghi candidate path, không revision identity; re-review chỉ khi “meaningful” | PASS của bản cũ có thể bị dùng cho bản mới cùng tên | Ghi phiên bản/checkpoint cụ thể; đổi candidate thì verdict cũ hết hiệu lực, recheck theo mức ảnh hưởng |
| W14 / vừa, vận hành | Báo cáo trước nói tất cả checker pass nhưng chưa có thử nghiệm chất lượng prose | Kiểm kỹ thuật bị hiểu nhầm thành cải thiện đã thành công | Tách hoàn tất cài đặt khỏi chứng cứ cải thiện; đánh giá một cảnh khó trước khi áp cho cả chương |
| W15 / vừa, lưu trữ | Lượt sửa trước giữ CH-01 v1 nhưng không tạo snapshot workflow working-tree trước thay | “Lưu bản cũ” chưa chứng minh bao gồm đúng workflow chưa commit | Trước đợt tiếp theo chụp bộ file workflow hiện hành và manifest; không gọi git HEAD là bản trước sửa nếu worktree đã dirty |

W01–W05 là ưu tiên xử lý trước. W06–W09 quyết định có phát hiện được tái phát hay không. W10–W15 là nguy cơ lặp lại hoặc mất dấu phiên bản. Không có bằng chứng review v2 đã chạy, nên không kết luận nó đã bỏ lọt bản này; hiện chỉ thấy thiết kế có khoảng trống.

## 5. Research Nguyễn Ngọc Ngạn: học điều gì từ nguồn thật

### R1 — Đêm trong căn nhà hoang

[Bản văn công khai, trang 2–5](https://tailieu.vn/doc/dem-trong-can-nha-hoang-1420790.html). Bản đăng lại có lỗi OCR; không là ấn bản phê bình.

Lộc nói với mẹ khác với hàng xóm; câu trả lời vừa bộc lộ bất đồng vừa giữ quan hệ. Khi gặp hàng xóm, chuyện thuê nhà gắn với tò mò, giá thuê và việc người ta lảng tránh. Dự định mở phòng mạch khiến căn nhà có sức hấp dẫn thực tế. Người kể cũng giới thiệu tính cách và tóm lược đời sống trực tiếp. Theo cách đọc của tôi, hiệu quả đến từ động cơ xã hội, sự xen kẽ kể–cảnh và đổi chiến thuật; không thể quy thành công thức “câu dài mới hay” hoặc “không được tell”.

### R2 — Bãi đất hoang sau nhà

[Tuyển tập đăng lại, trang PDF 2–12](https://dilib.vn/img/pdf/13086-tuyen-tap-truyen-ma-va-truyen-ngan-nguyen-ngoc-ngan-thuviensach.vn.pdf). Đã đọc phần này; không tuyên bố đọc hết tuyển tập 763 trang. Văn bản có lỗi chính tả/OCR.

Vân muốn giúp người quen nhưng vướng giờ làm; người lái xích lô sợ trách nhiệm. Sang Canada, việc đi làm của Vân chịu áp lực ở nhờ và phương tiện đi lại. Theo cách đọc của tôi, mỗi người có lợi ích làm câu chuyện rẽ hướng. Sự quấy nhiễu xâm vào công việc, chỗ ở và khả năng nhờ giúp, vì thế có giá đời sống. Đây là cơ sở tham chiếu về agency và hậu quả, không phải chứng cứ rằng mọi thủ tục, quan niệm hay định kiến trong truyện đều đúng thực tế.

### R3 — Phân biệt văn bản, giọng đọc và chuyển thể

[Audiobook 51 trên kênh Nguyễn Ngọc Ngạn](https://www.youtube.com/watch?v=bJuug7ou0RQ) được kết quả tìm kiếm ghi giọng đọc Nguyễn Ngọc Ngạn và Hồng Đào, phát hành dưới giấy phép Thúy Nga. [Bản phim trên kênh Thúy Nga](https://www.youtube.com/watch?v=roFy1X7Yvrc) ghi người viết kịch bản chuyển thể và đạo diễn riêng. Đây là chứng cứ xuất xứ/định dạng. Tôi chưa nghe hoặc xem để phân tích diễn xuất, nhạc nền, ngắt nhịp hay âm sắc. Không đánh đồng một trang prose với hiệu quả tổng hợp của audiobook.

Không lấy văn của tác giả làm nguồn fact văn hóa cho Horrible, không nhập bối cảnh/xưng hô Nam Bộ vào miền Bắc một cách máy móc, không sao chép giọng đặc trưng. Học kỹ thuật tạo quan hệ, động cơ và hậu quả. Không coi mọi lựa chọn của một tác giả là chuẩn tuyệt đối; chỗ kể thẳng, dọa trực tiếp hoặc giải thích nhiều cần xét tác dụng cụ thể.

## 6. Chuẩn chất lượng đề xuất trên các phương diện

Đây là mục tiêu biên tập của Horrible lấy cảm hứng từ việc đọc tham chiếu; không phải bảng điểm đã xác minh cho toàn bộ sáng tác Nguyễn Ngọc Ngạn. Không cộng điểm để một mặt mạnh bù cho một lỗi nền tảng. Chương mở đầu chỉ cần đặt nền cho arc/chủ đề; không bị buộc hoàn tất biến đổi nhân vật hay trả twist.

| Phương diện | Mức tối thiểu có thể kiểm bằng đọc | Dấu hiệu cần sửa |
|---|---|---|
| Con người | Người đọc nhận ra quan hệ, ưu tiên và mâu thuẫn của người quan trọng | Đổi tên nhân vật mà tương tác không đổi |
| Agency | Có lựa chọn khiến diễn biến khác đi; việc hợp tác, chịu đựng, lùi bước cũng có lý do | Tất cả chỉ làm việc outline yêu cầu |
| Thoại | Câu nói thích hợp với người nghe, quan hệ và tình huống; nhịp dài ngắn có nguyên nhân | Hỏi–đáp tuần tự, ai cũng cụt hoặc ai cũng diễn thuyết |
| Tiếng Việt/xưng hô | Vai gia đình và thân sơ nghe được; đổi đại từ có động lực | Mẹ–con nghe như khách; chuyển đại từ tùy tiện |
| Nội tâm | Đủ hiểu điều làm nhân vật khó chọn, không cần giải nghĩa mọi phản xạ | Chỉ nhìn mắt/tay hoặc biết mọi điều bằng narrator |
| Giọng kể | Người kể có cách lựa chọn và định giá đời sống; biết lúc dựng cảnh, lúc kể tóm | Camera ghi động tác, hoặc bình luận hộ sau mọi câu |
| Bối cảnh | Công việc, sinh hoạt, tiền bạc hoặc quan hệ thực tế ảnh hưởng cách hành động | Thêm âm thanh và đồ vật nhưng ai làm gì cũng được |
| Nhân quả | Hành vi có lý do, vật thể/không gian theo dõi được, không cần brief giải cứu | Vô cớ gắt, vô cớ im, vật tự đổi trạng thái |
| Nhịp | Chi tiết quan trọng được dành chỗ; thủ tục có thể tóm; cảm xúc có thời gian phát triển | Dàn hàng clue, cắt mọi câu thành nhát hoặc kéo dài để đủ số |
| Kinh dị | Có điều cụ thể đáng sợ và tác động vào đời sống; chất siêu nhiên hợp thiết kế | Người đọc chỉ thấy “có tín hiệu lạ” rồi hết cảnh |
| Bí ẩn | Che đáp án mà vẫn cho người đọc hiểu vấn đề và động cơ hiện tại | Nhân vật lảng tránh mọi điều để bảo vệ twist |
| Cảm xúc/chủ đề | Quan hệ và lựa chọn mang sức nặng; theme nảy ra từ hậu quả | Tuyên bố thương/sợ/tội nhưng không có quan hệ để mất |
| Ngôn ngữ/hình ảnh | Chi tiết chính xác, có sức gợi; câu trực tiếp và câu dài đều được dùng | Công thức body beat, sáo ngữ hoặc sự trống rỗng được gọi là tiết chế |
| Công bằng/xác thực | Phân biệt quan niệm nhân vật với sự thật; không áp nghi lễ hoặc định kiến làm chân lý | Giọng kể dùng văn hóa hay chuyên môn nghe có vẻ đúng để lấp chỗ trống |
| Dư âm/kết cấu dài | Hình ảnh hoặc lựa chọn còn tác động sau đoạn kết; các chương tích lũy thay đổi | Kết chỉ nhắc lại dữ kiện hoặc thả một mồi không có hệ quả |

## 7. Phương án sửa workflow cụ thể — chưa áp dụng

### A. Giữ cấu trúc hai lượt review, sửa đầu vào

Writer nhận brief tình huống và bản trích nhân vật không spoiler. Bản trích gồm những dữ kiện thật sự cần: tuổi/vai, quan hệ/xưng hô, ưu tiên đời sống, cách cư xử với từng người. Không lấy toàn bộ hồ sơ vì nó có thể chứa lời giải và kỹ thuật máy móc. Cho mở bổ sung nguồn đúng chỗ thiếu. Bỏ con số tối đa tám như điều kiện PASS.

Riêng CH-01, tối thiểu phải truyền được bà Lan là mẹ Khanh, Khanh có trách nhiệm trong tiệm, Lan Anh là vợ Toàn và con dâu Cường, quan hệ quen biết với tiệm. Muốn dùng loại hàng cụ thể thì brief trích fact đã kiểm chứng; không để Writer chỉ có lựa chọn giữa bịa nghi lễ và viết “mấy thứ”.

### B. Thay “wants/unsaid” giả bằng tình thế thật

Mỗi cảnh chỉ cần đủ hiểu ai cần gì ở ai, điều gì khiến việc đó khó, người ấy có thể chọn những cách nào và phải trả cái giá nào. Không bắt mọi người có bí mật hoặc muốn thắng cuộc thoại. Nhân vật được nói thẳng, tử tế, ngây ngô, dài dòng hoặc im lặng nếu hợp người và hợp lúc.

Ví dụ định hướng, chưa là canon mới: bà Lan phải xử lý một yêu cầu khó trong công việc; Khanh phải cân nhắc hỏi tiếp có làm mẹ mất mặt trước khách không; Lan Anh vừa cần xong việc vừa không muốn mang thêm một điều đáng sợ về nhà. Chọn đường nào phải dựa vào canon và ý đồ tác giả, không tự phong mọi hướng này thành hard fact.

### C. Trả quyền kể và quyền tự biên tập cho Writer

Cho phép đoạn kể về đời sống/quan hệ, suy nghĩ cục bộ, kể tóm thủ tục, một lượt nói dài hoặc nhiều câu ngắn tùy tác dụng. Không dùng “show”, “concise”, “subtext”, “agency” làm quota.

Writer viết xong phải đọc lại như người không có brief: quan hệ có nghe đúng không; đang xảy ra việc gì; có đoạn chỉ nhập dữ kiện không; ai tự chọn điều tiếp theo; động tác cuối có mâu thuẫn trước đó không. Đây là thao tác biên tập trong lượt viết, không tạo báo cáo PASS, không thêm gate xin phép.

### D. Hiệu chuẩn bằng cảnh khó trước khi viết lại cả chương

Dùng cảnh sáng 14 vì có ba người, quan hệ mẹ–con, tang gia và mâu thuẫn thông tin. Làm một phương án có đủ thân sơ và agency để tác giả đọc; chỉ thử phương án khác nếu cách thứ nhất chưa giải quyết được lỗi. Không cần bắt agent sinh hàng loạt biến thể hoặc mở thêm nhiều reviewer.

So với v2 theo hiệu quả: có nghe ra mẹ–con; Lan Anh có nhu cầu cụ thể; bà Lan có lý do hợp lý khi khó chịu; Khanh có lựa chọn ngoài hỏi; bất an có xuất phát từ sự kiện. Độ dài thoại chỉ là kết quả. Bản mẫu phải là sáng tác riêng của Horrible, không bài bắt chước tác giả tham chiếu.

### E. Review hai lượt nhưng có chỗ giao nhau

Literary reviewer độc lập đọc mù để ghi trải nghiệm đầu tiên, sau đó được xem gói nhân vật/brief chọn lọc để xác định thiếu sót là cố ý hay lỗi. Giữ nguyên ghi nhận đọc mù, không dùng ý đồ để xóa lỗi trên trang. Safety reviewer ghi mâu thuẫn quan hệ/tri thức; reviser xem hậu quả văn học của việc sửa đó.

Không chỉ đổi “bà” thành “mẹ” rồi coi D02 đã xong. Sửa quan hệ phải làm thay đổi cách xin giúp, từ chối, chọc nhau, giữ mặt mũi và phân công việc. Review xem lại trao đổi đã sống chưa.

### F. Đồng bộ authority và handoff

Sửa đồng bộ AGENTS, rules, skills, prompts, templates, playbook và các mệnh lệnh craft xung đột trong style bible/hồ sơ. Phân biệt fact bền, ý đồ đã duyệt, và lời khuyên kỹ thuật. Ghi version candidate và trạng thái review; cập nhật router sau draft. Chụp snapshot working-tree của bộ workflow trước khi sửa, không chỉ giữ prose cũ.

Các file ưu tiên: `.agents/rules/02-context.md`, `.agents/rules/03-planning.md`, `.agents/skills/hr-source-preflight/SKILL.md`, `.agents/skills/hr-source-writer/SKILL.md`, `templates/writing-brief.md`, `templates/chapter-preflight.md`; sau đó review/revision và các nguồn craft xung đột. Không sửa lại canon chỉ để hợp văn.

## 8. Nghiệm thu cải tổ tiếp theo

- Preflight đã chứa đúng quan hệ và tình thế, không chỉ ngày/tên/vật.
- Writer có quyền tự biên tập và đủ context, không phải nạp toàn repo.
- Cảnh thử đọc được khi không biết brief, giữ hard facts và không còn đối thoại điền ô kéo dài.
- Thoại ngắn có tác dụng vẫn được giữ; không thêm từ đệm, tật nói hay một câu gắt để đánh dấu personality.
- Review chỉ ra lựa chọn và hệ quả bằng đoạn văn cụ thể; không có PASS dựa trên số từ hay số gesture.
- Quyền rewrite và quyền đổi canon phân biệt rõ; review bám đúng candidate.
- Snapshot workflow và prose cũ có thể truy hồi; router đúng hiện trạng.

Audit chỉ tạo báo cáo này. Không có skill/workflow/canon/draft nào bị sửa. Không chạy lại bộ test ứng dụng vì không đổi hành vi phần mềm; số đo thoại và dẫn chiếu file được kiểm trực tiếp. Chưa có thử nghiệm prose sau các đề xuất, vì vậy chưa khẳng định chúng đã nâng chất lượng đầu ra.
