# Cải tổ workflow — 2026-09-17

## Phạm vi và kết quả
Áp dụng chỉ thị “vậy cải tổ toàn diện workflow đi” theo audit cùng ngày. Đã thay workflow hoạt động; không đổi D-002, không canonize, không ghi đè bản thảo cũ, không commit. Worktree có sẵn nhiều thay đổi ngoài đợt này, được giữ nguyên.

Skill-creator được dùng để giảm chỉ thị trùng lặp: skills/prompts định tuyến về rules và playbook thay vì tái lập nhiều bộ tiêu chí. Các kỹ thuật văn chương là lựa chọn; canon và quyết định tác giả vẫn là ràng buộc.

## Đối chiếu audit
| Finding | Sửa ở đâu / thay đổi |
|---|---|
| W01 | character-context template, context rule, gói v3: khôi phục quan hệ mẹ–con, tuổi, vai xã hội, quyền đọc nguồn chọn lọc |
| W02 | brief/preflight: động cơ tình huống tách khỏi khóa tri thức; không ép bí mật |
| W03 | bỏ quota 5–8 facts; kiểm độ đủ context |
| W04 | drafting rule: thái độ nhất thời, hợp tác, lựa chọn và hậu quả cục bộ được phép |
| W05 | writer/revision: bắt buộc tự đọc sửa, không tự cấp independent PASS |
| W06 | literary-quality.md: chuẩn đọc đa phương diện và ví dụ chẩn đoán; không chấm bằng số câu/từ |
| W07 | review đọc mù rồi đối chiếu; safety cùng chịu trách nhiệm dữ kiện quan hệ/xưng hô |
| W08 | khai báo exposure thật; đổi prompt/model không thành fresh |
| W09 | sửa cả cách thể hiện cảnh trong thiết kế đã duyệt; đổi outcome/canon mới hỏi |
| W10 | style-bible section 32 và craft cues của Toàn bỏ cấm từ/tật bắt buộc |
| W11 | context/quality authority: generic craft skills chỉ là công cụ, không quota fragments/subtext/body beat |
| W12 | session-state/continuity cập nhật v2 đã tồn tại, v3 là cảnh thử; bảo vệ file trước ghi |
| W13 | candidate/review/acceptance cùng path + SHA-256; sửa prose làm PASS cũ hết hiệu lực |
| W14 | có cảnh thử và self-edit; review độc lập còn pending, không lấy checker chứng nhận văn hay |
| W15 | snapshot 60 file working-tree trước sửa, kiểm hash, manifest và nhãn historical |

## Quy trình sử dụng
Preflight nội bộ + brief tình huống + context nhân vật → draft và self-edit → literary đọc mù rồi đối chiếu → safety → revision trong ranh giới → review bản hiện tại → tác giả nhận đúng candidate → canonization.
Cảnh thử chỉ dùng khi có vấn đề cần kiểm chứng, không thêm một cửa bắt buộc cho mọi chương.

CH-01-v3 hiện chỉ có cảnh sáng 14. Chưa viết lại toàn bộ ba cảnh, chưa review độc lập, chưa duyệt prose. Độc giả mới cần đọc scene-trial.md trước khi đọc packet hoặc calibration-notes.md.

## Kiểm tra
- Five hr-source skill quick_validate.py: PASS.
- npm run tooling:check: PASS.
- npm run story:check: validate/links/continuity PASS, 0 errors / 0 warnings.
- git diff --check: PASS; Git có cảnh báo LF→CRLF, không phải lỗi whitespace.
- Một lần kiểm phụ cưỡng ép core.autocrlf=false thất bại vì coi CRLF có sẵn ở file ngoài đợt sửa là trailing whitespace; không đổi cấu hình hay normalize file của tác giả. Chạy lại theo cấu hình repo mặc định: PASS.
- Snapshot: 60 file, manifest lưu SHA-256; CH-01-v2 draft không thay.
- Tìm mẫu lỗi quota/brief-only: lệnh rg đầu dùng wildcard Windows không hợp lệ; đã chạy lại với thư mục thật.
- Chưa có independent literary/safety verdict; chưa benchmark mức chất lượng toàn tác phẩm Nguyễn Ngọc Ngạn. Nguồn nghiên cứu và giới hạn nằm ở audit trước, không nghiên cứu web mới trong lượt triển khai.
- Các kiểm soát hash/approval hiện là quy trình cho agent, chưa phải chương trình tự chặn promotion. Không gọi đây là automated enforcement.

## Rủi ro và bước tiếp
Workflow tốt hơn chỉ mở điều kiện; writer vẫn có thể viết gượng, reviewer vẫn có thể khen theo checklist. Cần first-read độc lập của cảnh thử, chỉ ra bằng chứng và tác động đọc, rồi safety trước toàn chương. Không tăng checklist khi chưa biết lỗi nằm ở đầu vào, năng lực viết hay tiêu chí review.
Đề xuất Sol / medium cho review cảnh: quy mô nhỏ và context rõ, nhưng cần phán đoán văn học và quan hệ; không có lý do dùng Astra/high.

## File hoạt động thay đổi trong đợt
- .agents/rules/02-context.md
- .agents/rules/03-planning.md
- .agents/rules/04-drafting.md
- .agents/rules/05-review.md
- .agents/rules/writing-workflow.md
- templates/writing-brief.md
- templates/character-context.md
- templates/chapter-preflight.md
- templates/chapter-brief.md
- docs/playbooks/literary-quality.md
- .agents/skills/hr-source-preflight/SKILL.md
- .agents/skills/hr-source-writer/SKILL.md
- .agents/skills/hr-source-review/SKILL.md
- .agents/skills/hr-source-safety/SKILL.md
- .agents/skills/hr-source-revision/SKILL.md
- docs/playbooks/horrible-craft-review.md
- templates/candidate.md
- templates/literary-review-report.md
- templates/safety-review-report.md
- templates/revision-audit.md
- docs/QUALITY_GATES.md
- .agents/workflows/hr-preflight.md
- .agents/workflows/hr-write.md
- .agents/workflows/hr-review.md
- .agents/workflows/hr-safety.md
- .agents/workflows/hr-revise.md
- .agents/workflows/hr-canonize.md
- prompts/roles/planner.md
- prompts/roles/writer.md
- prompts/roles/reviewer.md
- prompts/roles/editor.md
- prompts/roles/safety-reviewer.md
- prompts/session/plan-next-chapter.md
- prompts/session/review-current-chapter.md
- prompts/session/canonize-approved.md
- prompts/README.md
- AGENTS.md
- GEMINI.md
- README.md
- author/directives/README.md
- author/style-bible.md
- characters/vu-van-toan.md
- continuity/state.md
- author/session-state.md

## File bổ sung
- revisions/chapter-work/CH-01-v3/: preflight, writing-brief, character-context, scene-trial, candidate, calibration-notes.
- revisions/chapter-work/CH-01-v2/WORKSPACE-STATUS.md: nhãn bảo tồn, không sửa prose.
- revisions/workflow-archive/20260917-214409-before-character-workflow/: 60 bản sao, MANIFEST.sha256, ARCHIVE-NOTICE.md.
- Báo cáo này.

Resulting commit: None — không được yêu cầu commit.
