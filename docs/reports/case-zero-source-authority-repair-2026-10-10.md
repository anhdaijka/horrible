# Case Zero — sửa lỗi ưu tiên nguồn, 2026-10-10

## Lỗi đã xác định

Lần push checkpoint `8b632de` / `8916425` đã nhầm thứ tự Git với thứ tự quyết định tác giả. Remote có 342 commit trên nền checkout cũ, nhưng nguồn mới nhất trong nhánh đó là D-024 ngày 29/09. Quyết định thay plot ngày 07/10 trong phiên này mới hơn; gói 53 đường dẫn đã được author duyệt sync bị giữ trong stash thay vì tích hợp. Kết quả: AGENTS/workflow nói treo cổ–Thắng–không pháp y, còn arc/timeline/characters và router Chat mode lại nói plot cũ.

Hai lịch sử dùng trùng mã D-008 ở ngày 25/09 và 07/10. Phải phân biệt bằng ngày; số D-024 không tự ưu tiên hơn D-008 ngày 07/10. Không phải author hủy canon mới.

## Sửa trong phạm vi đã duyệt

- Khôi phục đúng các nguồn canonical của gói đồng bộ 07/10 từ stash được bảo toàn, không áp dụng cả stash hoặc đưa thay đổi không liên quan vào repo.
- Giữ toàn bộ log tháng 9, thêm receipt 07/10 và chỉ rõ supersession theo ngày. Không xóa/ghi đè prose từng được author chấp nhận.
- Thêm `author/case-zero-current.md` với source key CZ-20261007; session-state, AGENTS và context/planning trỏ tới nguồn này.
- Đánh dấu các plot packets tháng 9 và scene registry là source-dependent historical. Giữ compatible D-017/D-023: cụ Cổn, thầy/con, quyền lực chậm/care thật, giọng thoại theo quan hệ.
- Theo chỉ thị author sau đó: dừng sửa handoff Chat mode; tiếp tục chuẩn bị/viết CH-01 ngay trong phiên này. Các handoff cũ không là active context. Trial A–Z và hai chương prose giữ nguyên, vẫn paused.
- Khôi phục local Story Skills CLI từ chính stash; việc `stash --all` trước đó cũng đã cất đi tool được cài, nên báo thiếu CLI không phải do nguồn remote tự làm mất cài đặt.

## Kiểm tra và giới hạn

- `npm run workflow:check`: PASS trong phạm vi route/install/reset của script.
- `npm run story:check`: CLI đã được khôi phục nhưng validate dừng với lỗi implementation `sceneNumberFromFile is not defined`. Không sửa tool upstream trong tác vụ sửa canon này; không tuyên bố story validation PASS.
- Soát các nguồn hiện hành theo receipt 07/10 và chuỗi beat CH-01; checks cơ học không chứng nhận ngữ nghĩa/prose.
- Handoff Chat mode và mọi candidate/manuscript prose trước đợt này không được sửa. Stash gốc vẫn được giữ, không pop/drop.

## Công việc tiếp theo đã được author giao

CH-01 mới: ở tiệm, bà Lan/Khanh và laptop → chuyện ma qua trao đổi tự nhiên đủ dài → Khanh thấy tin treo cổ trên mạng → hỏi, mẹ/khách ngơ ngác → người xóm Trại kể cái chết Cường, cái xác và phản ứng gia đình. Viết trong workspace mới, giữ authority CZ-20261007; không canonize tự động.
