# Minimal working system — implementation record, 2026-11-03

## Authorization and outcome

Author approved the seven-step plan with “duyệt”. Current workflow is docs/WORKFLOW.md, routed by AGENTS.md and Gemini/ChatGPT entrypoints. Author gives intent; agent proposes; author selects before writing. Gemini is preferred for prose based on author experience. No new model-quality benchmark is claimed.

Rules, skills, prompts and old templates now route to the common workflow. New work normally uses one brief plus versioned drafts. Specific review/acceptance safeguards remain, with prose-first independent reading and factual checking. Historical signature auto-failure and compulsory craft matrices were retired. Former folklore note is explicitly withdrawn from verified use.

## Preservation

Before edits, 795 tracked/nonignored working files were copied to D:/Documents/Others/Composer/horrible-before-simplification-20261103-214732/workspace.zip with SHA-256 manifest, HEAD and status. Original operational docs were also copied under revisions/workflow-archive/20261103-before-minimal/.

Final hash comparison: 304 protected source/prose/experiment files unchanged. Existing CH-01 r1/r2 and packet bytes are intact. Author decision-log bytes are an unchanged prefix plus the new process receipt. Current Case Zero facts before its working-status section are unchanged. Changes to arc, boundaries and style-bible are limited to the approved collaboration method. No chapter canonized.

## Tooling

Writing needs no bootstrap. Default bootstrap installs structural/export CLI scripts only. Optional --with-craft-skills installs explicit-only upstream authoring skills. Existing Gemini security preferences retained; stale marker hooks retired.

The pinned upstream CLI was freshly verified and matched the installed broken bundle. A tracked, SHA-256-guarded installer repairs the missing sceneNumberFromFile fallback. Pin unchanged. Regression coverage includes missing scene number and isolated Markdown/DOCX/EPUB output package/content smoke.

## Checks and actual limits

PASS: tooling:check; workflow:check (also rerun after independent-review routing fix); story-cli:test; stress:test; lifecycle:test; git diff --check.

PASS: isolated clean working snapshot has functional writing routes before bootstrap; doctor reports optional missing CLI without failure; default structural-only bootstrap works; explicit craft installation remains opt-in. This is a working-snapshot test, not proof that the remote repository includes uncommitted work. Windows tests ran locally; updated Ubuntu/Windows CI has not run remotely.

FAIL on existing story data after runtime repair: story:check reports missing chapter, missing scene, unsupported author-approved-prose status in scenes/case-zero-s01-tiem-van-phai-mo.md. Direct links check also rejects its POV display name Trần Thị Lan as a character ID. os:doctor therefore reports failed story health. Continuity exits 0 with a corresponding warning. These historical-source metadata issues remain disclosed; the redesign did not silently promote or relabel that scene.

Export smoke verifies packages/content on a synthetic fixture, not rendered layout, production publication or literary merit. No Gemini prose generation/authentication trial has run; a gemini command is installed, but exact runtime model/account availability remains to be verified before a selected writing trial.

## Literary continuation

New provisional content proposal: revisions/chapter-work/CH-01-CZ20261007-20261103-v2/brief.md, AWAITING_AUTHOR_CHOICE. No new prose was generated. Reference coverage is recorded in research/sources/2026-11-03-craft-reference-status.md; full reading/listening of both selected works remains incomplete. Improved prose quality is unverified until actual author-selected Gemini writing and reading.

## Delivery

No commit or push. Current changes, preserved local candidate and archive need an explicit Git delivery action to become available from the remote. Existing main HEAD remains db363f6.

## Modified tracked files

- .agents/rules/00-authority.md
- .agents/rules/01-canon.md
- .agents/rules/02-context.md
- .agents/rules/03-planning.md
- .agents/rules/04-drafting.md
- .agents/rules/05-review.md
- .agents/rules/06-research.md
- .agents/rules/07-continuity.md
- .agents/rules/08-git.md
- .agents/rules/writing-workflow.md
- .agents/skills/hr-source-preflight/SKILL.md
- .agents/skills/hr-source-review/SKILL.md
- .agents/skills/hr-source-revision/SKILL.md
- .agents/skills/hr-source-safety/SKILL.md
- .agents/skills/hr-source-writer/SKILL.md
- .agents/workflows/hr-canonize.md
- .agents/workflows/hr-preflight.md
- .agents/workflows/hr-review.md
- .agents/workflows/hr-revise.md
- .agents/workflows/hr-safety.md
- .agents/workflows/hr-write.md
- .gemini/hooks/workflow-guard.mjs
- .gemini/settings.json
- .github/workflows/novel-os-stress.yml
- .github/workflows/story-checks.yml
- .github/workflows/tooling-smoke.yml
- AGENTS.md
- CHATGPT_SESSION.md
- GEMINI.md
- Home.md
- README.md
- author/boundaries.md
- author/case-zero-current.md
- author/decisions.md
- author/session-state.md
- author/style-bible.md
- config/upstreams.json
- docs/ANTIGRAVITY.md
- docs/AUTHOR_UX.md
- docs/GENRE_PACKS.md
- docs/GETTING_STARTED.md
- docs/LOCAL_MODELS.md
- docs/MODEL_POLICY.md
- docs/NEW_NOVEL.md
- docs/OPTIONAL_STACK.md
- docs/QUALITY_GATES.md
- docs/SESSION_OPERATIONS.md
- docs/STACK.md
- docs/WORKFLOW.md
- docs/chatgpt-project-instructions.md
- docs/failure-memory.md
- docs/playbooks/advanced-horror-craft-lexicon.md
- docs/playbooks/horrible-craft-review.md
- docs/playbooks/literary-quality.md
- evals/README.md
- evals/horrible-workflow-regressions.md
- package.json
- plot/arcs/case-zero-don-hang-cho-nguoi-chua-chet.md
- prompts/README.md
- prompts/roles/director.md
- prompts/roles/editor.md
- prompts/roles/planner.md
- prompts/roles/researcher.md
- prompts/roles/reviewer.md
- prompts/roles/safety-reviewer.md
- prompts/roles/writer.md
- prompts/session/README.md
- prompts/session/canonize-approved.md
- prompts/session/end-session.md
- prompts/session/export-manuscript.md
- prompts/session/plan-next-chapter.md
- prompts/session/research-to-canon.md
- prompts/session/review-current-chapter.md
- prompts/session/start-session.md
- research/README.md
- research/verified/folk-horror-materials-v1.md
- scripts/bootstrap.mjs
- scripts/gemini-workflow-check.mjs
- scripts/lib/story-cli.mjs
- scripts/os-doctor.mjs
- scripts/tooling-check.mjs
- scripts/workflow-contract-test.mjs
- templates/candidate.md
- templates/canon-diff.md
- templates/chapter-brief.md
- templates/chapter-preflight.md
- templates/character-context.md
- templates/context-manifest.md
- templates/design-discussion.md
- templates/discovery-slate.md
- templates/literary-review-report.md
- templates/qa-card.md
- templates/regression-check.md
- templates/review-report.md
- templates/revision-audit.md
- templates/safety-review-report.md
- templates/scene-ecology.md
- templates/writer-handoff.md
- templates/writing-brief.md

New files include the versioned brief, reference-coverage note, this report, archived originals, scripts/lib/story-cli-install.mjs and scripts/story-cli-test.mjs. The 20261010 candidate workspace was already untracked before this task.
