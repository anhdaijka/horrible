---
description: Promote an explicitly accepted chapter after independent literary and safety passes.
---

# /hr-canonize <chapter>

1. Confirm the candidate named by the author is the one reviewed.
2. Require a fresh-context `LITERARY_REVIEW: PASS`, `SAFETY_REVIEW: PASS`, and explicit `AUTHOR_ACCEPTANCE: APPROVED` for that exact candidate.
3. Prepare a canon diff from the prose; do not treat review or audit prose as manuscript content.
4. Promote the candidate to `chapters/chapter-XX.md`.
5. Update `chapters/_index.md`, `continuity/state.md`, relevant clue/knowledge registries, and `author/session-state.md` with durable state only.
6. Run repository validation and report any failure without claiming completion.

Never canonize a legacy, superseded, or merely design-approved workspace.
