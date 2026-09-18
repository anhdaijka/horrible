# Continuity Rule

Run deterministic Story Skills checks before relying on LLM continuity judgment when a story has been initialized.

These checks cover structured canon under `chapters/` and continuity metadata. They do not read non-canon chapter-work candidates or certify causal, literary, cultural or review quality. Report structural PASS separately from manual/model evaluation.

Preferred sequence:
1. `story validate .`
2. `story links .`
3. `story continuity .`
4. interpret findings
5. propose the smallest repair

After accepted canon changes, rerun the same checks.

Intentional exceptions (flashbacks, mentions, posthumous references, etc.) should be represented using Story Skills-supported metadata rather than hand-waved in prose.
