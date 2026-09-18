# Case Zero — Báo cáo thực thi phê duyệt 2026-09-17

## Phạm vi và thẩm quyền

Chỉ thị: “OK, chốt theo toàn bộ đề xuất.” Quyết định bền vững: [D-001 hậu reset](../../author/decisions.md). Đây là đồng bộ thiết kế, không phải duyệt preflight, viết chương hay canon hóa manuscript. Không phục hồi prose từ lịch sử Git.

Nguồn đọc tiếp: [arc](../../plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md), [ma trận manh mối](../../plot/case-zero-clue-and-epistemic-matrix.md), [giới hạn nghiên cứu](../../research/verified/case-zero-mechanics-audit-v1.md). Báo cáo này chỉ ghi thực thi và kiểm tra; không là nguồn canon thứ hai.

## Đối chiếu nhóm cải thiện

| Nhóm | Kết quả thực thi |
|---|---|
| Điện thoại | Ghi âm cục bộ; thu trong lần khám đầu; bỏ chuỗi Zalo/Wi-Fi/38 giây. |
| Thủy tìm máy | Có nguồn biết trực tiếp; về sau tin báo, trước hạn chế tiếp cận. Thời gian di chuyển/ứng cứu là gate cần kiểm chứng, không giả đã giải quyết bằng văn bản. |
| Thương tổn và âm thanh | Bỏ góc 180°; tách sự thật tác giả, quan sát và kết luận chuyên môn. |
| Báo chết và tang | Có chuỗi phát hiện–báo trợ giúp–xử lý; chuẩn bị tang không đồng nghĩa đã bàn giao/khâm liệm. |
| Cassette | Bản thu ngắn, phục hồi từng phần; không ghi lệnh giấu xác đêm đó; không phụ thuộc băng để giải toàn bộ án. |
| Mô hình bí ẩn | Độc giả đi trước Khanh ở hành vi người sống, chưa biết toàn bộ sự thật Thoa. |
| Đơn hàng/radio | Trọng tâm tên bị xóa và ký ức cá nhân; không bịa quy tắc nghề/nghi lễ. |
| Nhận dạng | Bỏ nữ trộm đóng thế; nét gia đình không là bản sao mặt hoặc kết luận từ CCTV. |
| Kích hoạt | Tác động vật lý bờ đầm và vòng lặp áp bức; không có hạn bùa đúng 30 năm. |
| Áo/cúc | Vật chứng đi qua việc dọn dẹp, có nguồn giữ/chuyển; ký hiệu chỉ nhận diện nhóm người mặc. |
| Ngoại phạm | Nhiều nguồn độc lập và hành trình; không tuyệt đối hóa một dấu chấm công. |
| Ông nội/Bình | Giới hạn rõ phần biết và trách nhiệm, không toàn tri hoặc có sẵn tọa độ xác. |
| Thứ tự reveal | P1–P6 và G6a/G6b/G6c; không khóa số chương hoặc phục hồi phân cảnh bị reset. |
| Kết arc | Ending-state sheet tách yêu cầu đã duyệt và phương án cụ thể chưa chọn. |
| Suy luận | Mẫu âm tính không giải oan tuyệt đối; loại hai người không chứng minh ma; âm thanh không thay pháp y. |

## Đồng bộ hồ sơ

- `author/`: quyết định, session-state, directive liên quan, constitution, boundaries, style-bible.
- `plot/`, `continuity/state.md`: timeline, arc và ma trận 15 manh mối; registry manuscript vẫn trống.
- `characters/`: hồ sơ Thoa, Thủy, Cường, Cổn, Toàn, Lan Anh, Bình, Long, Thắng và index.
- `.agents/`, `templates/`, playbook: workflow/review dùng phase và giới hạn chứng cứ hiện hành, bỏ cổng chương cũ.
- `research/verified/`: sửa ghi chú hậu reset và thêm audit ghi rõ phần chưa xác minh; không tuyên bố mọi cơ chế đã được nghiên cứu xong.
- `story.md`, `GEMINI.md`: định tuyến hiện hành. Bỏ BOM đầu `story.md` để parser đọc được.
- Chuyển ma trận từ `plot/arcs/` lên `plot/`: CLI coi mọi tài liệu trong `arcs/` là một arc, nên tài liệu phụ trợ không nên nằm ở đó. Các tham chiếu hiện hành đã được cập nhật.
- Lượt bảo trì registry sau phê duyệt: thêm sáu entity địa điểm đã được các hồ sơ gọi tên; chuẩn hóa `votive-shop-cho-ben` của Lan Anh thành `family-votive-shop`; bổ sung các backlink quan hệ và character-location còn thiếu. Các entity chỉ neo bối cảnh hiện có, không thêm tình tiết, nghi lễ hay kết cục mới.
- `AGENTS.md` có thay đổi của người dùng từ trước (1 dòng thêm, 34 dòng xóa); không sửa trong đợt này.

## Kiểm tra và giới hạn

| Lệnh/kiểm tra | Kết quả |
|---|---|
| `npm run bootstrap` | PASS; dùng cấu hình/pin đã có, không đổi dependency hoặc dùng `--clean`. |
| `npm run tooling:check` | PASS. |
| `npm run story -- validate .` | PASS: 0 errors, 0 warnings. |
| `npm run story -- continuity .` | PASS: 0 errors, 0 warnings. |
| `npm run story:check` | PASS: validate, links và continuity đều 0 errors, 0 warnings. |
| `git -c core.safecrlf=false diff --check` | PASS. |
| Đối chiếu lỗi links với HEAD `5552e3a` trước bảo trì | 40 lỗi baseline → 39 sau tái cấu trúc, 0 lỗi mới. Lượt bảo trì registry sau đó đưa links về 0 lỗi. |
| Liên kết Markdown tương đối trong tài liệu thay đổi | 35 liên kết, gồm báo cáo này: không có đích thiếu. Kiểm tra này không thay validator registry. |

Phương pháp baseline: xuất snapshot HEAD sang thư mục tạm, chỉ bỏ BOM `story.md` và chuyển ma trận ra ngoài `arcs/` để parser đi tới bước links. Không sửa nhân vật/địa điểm trong snapshot. Các lỗi còn lại sau tái cấu trúc đều đã có ở baseline: tham chiếu location thiếu hoặc thiếu liên kết ngược nhân vật/địa điểm. Lượt bảo trì chỉ thêm entity cho các tên đã được các profile dùng và các backlink xác nhận ngược từ chính profile kia; không tạo canon chỉ để làm xanh checker.

Kiểm tra cấu trúc không chứng nhận tính hợp lý pháp y, thủ tục, khả năng lưu file hay sống sót của băng, cũng không đánh giá chất lượng prose chưa tồn tại. Các gate nghiên cứu trong session-state vẫn mở. Không chạy build sách hoặc test prose vì chưa có chương; không thay đổi mã thực thi.

## Bàn giao

Đợt đồng bộ thiết kế và bảo trì registry đã thực hiện; chưa có commit mới. Tiếp theo là lập preflight CH-01/P1 và trình tác giả. Không diễn giải phê duyệt thiết kế thành quyền tự viết chương hoặc chọn các kết cục còn bỏ ngỏ.
