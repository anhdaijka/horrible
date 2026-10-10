# Novel OS

A free-first, agent-native operating system for writing long-form fiction with **Codex + OpenAI models**, **Story Skills**, selected fiction craft skills, **Markdown/YAML**, **Obsidian**, and **Git**.

Novel OS is intentionally **not** a custom agent framework. It composes existing open tools and keeps the novel itself portable.

> **Privacy:** this repository is currently public. For an unpublished manuscript, prefer creating a separate private repository from this template (or change visibility before adding story content). See [`docs/PRIVACY.md`](docs/PRIVACY.md).

## Core principles

- **Author decides.** AI can propose, draft, review, and recommend; it cannot silently canonize or retcon.
- **One source of truth.** Canon lives in the repository, not in chat memory or a second app database.
- **Draft is not canon.** Drafted details become canon only after author approval and state update.
- **Checks at relevant boundaries.** Validate structured state after accepted changes; use prose reading and author response for literary judgments.
- **Model agnostic.** The work remains Markdown/YAML + Git even if the agent/model changes later.

## Stack

### Core

- Codex with current OpenAI models as the main agent runtime (AGENTS.md owns routing)
- [danjdewhurst/story-skills](https://github.com/danjdewhurst/story-skills) for story state + deterministic continuity
- Selected skills from [jwynia/agent-skills](https://github.com/jwynia/agent-skills) for fiction craft
- Markdown + YAML as canonical data
- Git as history and rollback
- Obsidian as the human-facing story-bible UI

### Optional

- Better Writing — prose de-slop / voice preservation
- Obsidian Dataview, Tasks, Canvas, Git, Advanced URI
- Zotero — research-heavy fiction
- novelWriter — long-form manuscript editing
- Pandoc — Markdown → DOCX/EPUB/HTML
- LibreOffice — final DOCX pass
- Calibre — EPUB QA
- Ollama / KoboldCpp — local fallback or prose experiments
- Mermaid — diagrams-as-code
- Aeon Timeline — only for genuinely complex chronology
- MCP integrations — only when a real external service requires them

See [`docs/STACK.md`](docs/STACK.md).

## Requirements

- Git
- Node.js 18+ (20+ recommended)
- Codex or another compatible agent host
- Obsidian is recommended but not required

## Quick start

Horrible is already initialized. Its current state is in author/session-state.md. The initialization commands below are for a new project, not a reset of this manuscript.

```bash
git clone https://github.com/anhdaijka/novel-os.git
cd novel-os
npm run bootstrap
```

`bootstrap` copies pinned upstream Story Skills and selected jwynia fiction skills into `.agents/skills/`. The creativity firewall marks every upstream skill explicit-only, so ordinary Horrible requests route only through project-owned `hr-source-*` roles unless the author names another skill. Project-owned roles are preserved even with `--clean`; upstream installs cannot claim that namespace. Generated upstream skill files are git-ignored; pins live in `config/upstreams.json`. The bundled upstream `story-maintenance/scripts/story.js` remains available to CLI wrappers.

Initialize a story into this repository root:

```bash
npm run init-story -- "My Novel" --genre mystery --pov third-person-limited --tense past --theme truth
```

Then run:

```bash
npm run tooling:check
npm run workflow:check
npm run story:check
npm run story:doctor
npm run story:next
```

Open the repository root as both your Codex workspace and Obsidian vault.

## Author UX

Open [`Home.md`](Home.md) in Obsidian. With Dataview enabled it becomes a lightweight dashboard for chapters, characters, promises, questions and editorial work. Queries are folder-scoped to avoid unnecessary full-vault scans. See [`docs/AUTHOR_UX.md`](docs/AUTHOR_UX.md).

## Agent roles

Reusable bounded role prompts live under [`prompts/`](prompts/README.md): Director, Preflight Planner, Writer, blind Literary Reviewer, Safety Reviewer, Reviser and Researcher. These complement rather than replace `.agents/rules/`.

## Optional Better Writing skill

```bash
npm run bootstrap -- --with-better-writing
```

Use it selectively for prose polish after story/continuity issues are resolved.

## Daily chapter loop

1. **Author-led preparation** — lightweight plot/source preflight → author beat sequence → agent development inside literary intent. Verify relevant causal hinges, preserving human life, ghost horror and reader interpretation; do not select a replacement route before author beats.
2. **Author gate** only when a material choice remains open.
3. **Draft in two contexts** — complete the generative pass from brief, scene ecology, character context and accepted prose; only then open the separate QA card for self-edit. Keep locator-only candidate identity separate from writer handoff and deltas.
4. **Literary review** — read only locator + prose first, then record contextual diagnosis; use the [literary standard](docs/playbooks/literary-quality.md).
5. **Safety review** — separately check canon, impossible knowledge, incompatible later state/obligations, reveal and factual boundaries; absence of a visible reaction is not a defect.
6. **Revise** literary problems at their true scale and safety problems conservatively.
7. **Fresh dual review** after meaningful changes.
8. **Canon diff + author acceptance** for the exact candidate.
9. **Promote and validate** durable story state.
10. **Commit** meaningful accepted transitions when requested; do not repeat unchanged validation.

Full workflow: [`docs/WORKFLOW.md`](docs/WORKFLOW.md).

## Phase 3 lifecycle regression

Novel OS tests deterministic operational ordering with a synthetic public-safe mystery. The fixture copies golden planning/review artifacts; it does not run an authoring agent or certify literary quality. The canonical Story Skills project is generated temporarily from upstream; only Novel OS-specific golden artifacts are checked in.

```bash
npm run bootstrap
npm run lifecycle:test
```

The automated fixture covers artifact/state transitions across three chapters, including a promise payoff and question resolution. Creative/model behavior is evaluated separately with paired cases in [`evals/horrible-workflow-regressions.md`](evals/horrible-workflow-regressions.md). See [`docs/PHASE3_LIFECYCLE.md`](docs/PHASE3_LIFECYCLE.md).

## Performance / stress testing

Novel OS does not claim to control model latency or guarantee prose quality. The deterministic/core layer is measurable and runs locally after bootstrap. See [`docs/PERFORMANCE.md`](docs/PERFORMANCE.md).

```bash
npm run stress:test
npm run lifecycle:test
npm run perf:check  # after a real story has been initialized
```

## Story CLI

All normal CLI commands use the pinned local Story Skills fallback installed by bootstrap:

```bash
npm run story -- validate .
npm run story -- links .
npm run story -- continuity .
npm run story -- report . --actionable
npm run story -- next .
npm run story -- doctor .
npm run story -- export . --out manuscript.md
npm run story -- build . --format docx
npm run story -- build . --format epub
```

## Repository layers

After story initialization, Story Skills owns its standard schema paths such as:

```text
story.md
characters/
worldbuilding/
plot/
scenes/
continuity/
glossary/
chapters/
```

Novel OS adds only complementary authoring layers:

```text
author/       creative constitution, style, boundaries, decision log
research/     non-canonical evidence and source notes
rejected/     rejected ideas that agents must not resurrect
revisions/    review/revision working material
templates/    chapter/review/canon/research templates
exports/      disposable generated outputs
.agents/      agent rules + locally installed skills
```

Do not create a second character database, lore database, or continuity database in another app.

## First Codex prompt

After bootstrap + story initialization:

```text
Act as the Narrative Director for this repository.
Read author/session-state.md, AGENTS.md, and the sources relevant to the next task.
Run structural checks only when the proposed action needs them.
Do not draft prose yet.
Tell me the current project state, unresolved setup work, and the safest next authoring action.
```

## Upstream updates

Check whether pinned dependencies have newer commits:

```bash
npm run upstreams:check
```

Do not auto-upgrade during active drafting. Review changes, update `config/upstreams.json`, rerun `npm run bootstrap -- --clean`, then run story checks before continuing.

## CI

- `story-checks.yml` bootstraps the pinned local CLI and validates initialized stories on pushes/PRs.
- `tooling-smoke.yml` verifies pinned skill installation on Ubuntu and Windows.
- `novel-os-stress.yml` bootstraps, runs the mechanical three-chapter stress fixture, then runs the full authoring lifecycle regression.

## Where to start reading

1. [`AGENTS.md`](AGENTS.md)
2. [`docs/GETTING_STARTED.md`](docs/GETTING_STARTED.md)
3. [`docs/WORKFLOW.md`](docs/WORKFLOW.md)
4. [`docs/PHASE3_LIFECYCLE.md`](docs/PHASE3_LIFECYCLE.md)
5. [`docs/STACK.md`](docs/STACK.md)
6. [`docs/OBSIDIAN.md`](docs/OBSIDIAN.md)
7. [`docs/ANTIGRAVITY.md`](docs/ANTIGRAVITY.md)
8. [`docs/PRIVACY.md`](docs/PRIVACY.md)

## Philosophy

**The repository remembers.  
The CLI verifies.  
The agent reasons.  
The skills guide.  
Obsidian visualizes.  
Git preserves history.  
The author decides.**
