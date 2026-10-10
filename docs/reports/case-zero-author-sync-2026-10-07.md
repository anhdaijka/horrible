# Case Zero — đồng bộ quyết định tác giả, 2026-10-07

## Phạm vi và căn cứ

Tác giả đã xác nhận đồng bộ repo sau giai đoạn audit chỉ đọc. [D-008](../../author/decisions.md) ghi quyết định hiện hành và phạm vi thay thế nguồn cũ. Đây là cập nhật thiết kế truyện và workflow; không viết chương, duyệt prose, canonize, commit hoặc push.

Working tree đã có thay đổi trước thao tác này. Danh sách bên dưới chỉ là các đường dẫn được đợt đồng bộ chạm tới, không phải toàn bộ thay đổi so với HEAD. Các phần không liên quan được giữ nguyên. Snapshot nguồn trước sửa nằm trong thư mục tạm được Git bỏ qua, không trở thành nguồn sáng tác.

## Kết quả

- Cường bị Thắng giết rồi dựng hiện trường treo cổ trong nhà. Người sống tin tự sát; nghi án mạng hình thành sau qua trải nghiệm bị ám, quan hệ, ký ức và việc đời thường. Công an, khám nghiệm, DNA và camera không còn là trục khám phá hoặc điều kiện mở truyện.
- Thoa là tầng bi kịch gia đình năm 1996, có hậu quả riêng và có thể khiến độc giả hiểu nhầm nguyên nhân cái chết Cường. Đơn hàng cho người sống và Thoa giết Cường không còn bắt buộc. Hồn Cường tiếp tục tồn tại, nguy hiểm và có giới hạn nhận biết xuyên suốt.
- Thắng xuất hiện như người bạn đồng hành có tình bạn và nỗi sợ thật. Khủng hoảng công việc, khoản ứng và cuộc hẹn khách của Cường nâng đỡ reveal muộn; không nhập động cơ Thoa vào vụ giết. Bổ sung hồ sơ vợ Thắng và người cùng làm mang tên tạm Sơn, với nhu cầu và phạm vi biết riêng.
- Người kể có thể kết hợp điểm nhìn gần, kể rộng, tóm lược, hồi tưởng và chuyển điểm nhìn rõ ràng. Bỏ tỷ lệ POV và luật camera-only ngoài Khanh. Dữ kiện quan sát vẫn thật; diễn giải của POV có thể đánh lạc hướng. Không nội tâm giả vô tội hoặc giấu đáp án đang được trực tiếp nghĩ tới.
- Workflow hiện hành: preflight nhẹ men theo main plot → author đưa chuỗi beat → agent phát triển trong ý đồ ấy → packet, viết và review khi được yêu cầu. Không agent tự thay chuỗi sự kiện chính; không hỏi lại quyết định đã duyệt.

## Trạng thái và giới hạn

[Session-state](../../author/session-state.md) đặt bước tiếp theo là preflight nhẹ rồi **AWAITING_AUTHOR_BEATS**. Chưa khóa giờ/phòng/hành trình, số tiền/công trình/khách, tên chính thức của nhân vật hỗ trợ, manifestation và hậu quả cuối. Chỉ hỏi một lựa chọn mới khi beat cần nó; các phần này không mở lại gate pháp y.

Vẫn **0 chương canonized, 0 từ manuscript**. CH-01-v6/C3/B10/M04/M04-R1 được giữ nguyên nhưng thuộc cơ sở thiết kế trước D-008; trạng thái READY cũ không cấp quyền viết cho nền mới. Không phục dựng các bản đã xóa. Nghiên cứu cũ liên quan được gắn phạm vi lịch sử/điều kiện, không tự mang vào plot hiện hành.

## Kiểm tra

- `npm run story:check`: PASS — validate, links và continuity đều 0 lỗi, 0 cảnh báo.
- `npm run workflow:check`: PASS trong phạm vi route/install/reset hiện có.
- `git diff --check`: PASS; Git có cảnh báo chuyển LF/CRLF thông thường.
- Kiểm tra SHA-256 so với snapshot trước sửa: không thay đổi ngoài danh sách sở hữu; 475 file hiện hữu dưới revisions/evals/chapters giữ nguyên.

Các kiểm tra trên không chứng nhận chất lượng văn chương, mức bất ngờ của reveal hoặc khả năng agent tuân thủ trong một lần viết thực tế. Đợt này không tạo prose hay review văn học mới.

## Đường dẫn thay đổi trong đợt này

Danh sách được đối chiếu với snapshot riêng của đợt đồng bộ; bao gồm chính báo cáo này.

- `.agents/rules/02-context.md`
- `.agents/rules/03-planning.md`
- `.agents/rules/04-drafting.md`
- `.agents/rules/writing-workflow.md`
- `.agents/skills/hr-source-preflight/SKILL.md`
- `.agents/workflows/hr-preflight.md`
- `AGENTS.md`
- `README.md`
- `author/boundaries.md`
- `author/creative-constitution.md`
- `author/decisions.md`
- `author/directives/DIR-01-psychological-tension.md`
- `author/directives/DIR-02-thoa-1996-manslaughter-canon.md`
- `author/directives/DIR-03-cinematic-off-pov-and-oral-horror.md`
- `author/directives/DIR-04-case-zero-forensic-mechanics-and-evidence-trap.md`
- `author/directives/DIR-05-character-roles-and-mystery-mechanics.md`
- `author/directives/DIR-07-horror-mystery-craft-architecture.md`
- `author/directives/README.md`
- `author/session-state.md`
- `author/style-bible.md`
- `characters/_index.md`
- `characters/dang-van-binh.md`
- `characters/dang-viet-long.md`
- `characters/lan-anh.md`
- `characters/le-van-thang.md`
- `characters/nguyen-minh-khanh.md`
- `characters/son-nguoi-lam-cung-thang.md`
- `characters/tran-thi-lan.md`
- `characters/vo-le-van-thang.md`
- `characters/vu-con.md`
- `characters/vu-thi-thoa.md`
- `characters/vu-thi-thuy.md`
- `characters/vu-van-cuong.md`
- `characters/vu-van-toan.md`
- `continuity/state.md`
- `docs/AUTHOR_UX.md`
- `docs/WORKFLOW.md`
- `plot/_index.md`
- `plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md`
- `plot/case-zero-clue-and-epistemic-matrix.md`
- `plot/timeline.md`
- `prompts/roles/planner.md`
- `research/verified/case-zero-mechanics-audit-v1.md`
- `research/verified/case-zero-order-cultural-audit-v1.md`
- `story.md`
- `templates/writing-brief.md`
- `worldbuilding/_index.md`
- `worldbuilding/artifacts/binh-ty-nien-tap-ky.md`
- `worldbuilding/artifacts/custom-paper-cassette-radio.md`
- `worldbuilding/artifacts/votive-shop-ledger.md`
- `worldbuilding/locations/cuong-household-funeral.md`
- `worldbuilding/locations/tru-so-cong-an-xa.md`
- `docs/reports/case-zero-author-sync-2026-10-07.md`
