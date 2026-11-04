# Antigravity / Gemini Operating Guide

## Mandatory entry contract

Gemini CLI automatically loads the root `GEMINI.md`; in this repository that file is a fail-closed operating contract. `.gemini/settings.json` disables YOLO/always-allow behavior and installs session, turn and mutation-tool guards. A guard failure must stop the operation. Do not disable hooks, use an archive copy of `GEMINI.md`, or treat natural-language requests as a way around the matching `/hr-*` route.

After any instruction/configuration change, run `npm run gemini:check`. `npm run workflow:check` includes the same integrity audit. These checks prove wiring and reset integrity, not that a model produced good literature or that an external runtime can never ignore context.

## Main role: Narrative Director

The main agent should coordinate the work rather than indiscriminately write prose. It chooses relevant skills/context, runs checks, creates bounded tasks, merges reviews, and presents author decisions.

## Task roles

### Planner
Produces structure, not prose. Focus: causality, chapter purpose, scene sequencing, arc movement, promises/payoffs.

### Writer
Executes an approved scene within constraints. It may invent local realization, not durable architecture.

### Reviewer
Diagnoses before rewriting. Use a fresh context/task when practical so the draft is not evaluated only by the same local reasoning that produced it.

### Researcher
Collects sourced evidence under `research/`; it cannot canonize findings.

## Thinking effort guideline

When model controls expose reasoning effort, a useful default is:

| Task | Effort |
|---|---|
| YAML/metadata maintenance | low |
| summarization/indexing | low |
| ordinary drafting | medium |
| scene/chapter planning | medium |
| dialogue pass | medium |
| plot architecture | high |
| mystery logic / causality | high |
| continuity diagnosis | high |
| structural revision | high |
| final prose cleanup | medium |

Do not maximize reasoning effort for every prose sentence; it can create overworked writing.

## Context packet for drafting

Separate discovery, generation and verification. Preflight explores engines internally, then projects only the selected affordance field. The generative pass receives writing-brief.md, scene-ecology.md, character-context.md, relevant accepted preceding prose and explicitly named lived-context excerpts. It does not preload discovery-slate/rejected engines, continuity matrices, qa-card.md, full character profiles, directives, style bible, reviews or generic craft skills. After a complete draft exists, the self-edit pass opens qa-card.md and its named hard-source excerpts. A large context window is capacity, not a target.

## Parallel agents

Parallelize analysis, not canonical writes. Multiple reviewers may inspect the same draft, but only the main/director flow should propose consolidated state updates for author approval.
