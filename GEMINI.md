# Gemini / Antigravity Entry Point

Treat `AGENTS.md` as the repository-level operating contract and `.agents/rules/` as the detailed workspace rules.

On branch `main`, always read `author/session-state.md` immediately after `AGENTS.md`. It is the current handoff and tells you what to do next. Do not reload the full Discovery archive unless the current task needs it.

Use skills installed under `.agents/skills/` when their descriptions match the task. Story Skills owns structured story state after initialization; selected craft skills guide prose/character/scene work.

Core order of operations:

1. repository truth
2. current session handoff
3. deterministic Story Skills checks when initialized
4. narrative reasoning
5. proposal / draft / review
6. author approval when required
7. state update
8. verification

At the end of a meaningful session, refresh `author/session-state.md` if status or next action changed.

Never use chat memory as a substitute for repository truth.
