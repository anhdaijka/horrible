# Gemini / Antigravity — mandatory repository contract

This file is automatically loaded project context. Its rules are mandatory, not suggestions. The author's newest explicit instruction may change the project workflow; ordinary requests such as `continue`, `write`, `fix this`, approval of prose, or silence do not waive gates that the author has not explicitly waived.

## Fail-closed startup

Before acting, Gemini MUST:

1. Read `AGENTS.md` and `author/session-state.md` from the active repository, then load only the role context named by `.agents/rules/02-context.md`.
2. Identify the requested operation and route it through the matching project workflow. Natural-language requests have the same gates as slash commands.
3. Compare the request with the current gate in `author/session-state.md`. If required input, author choice, candidate identity, review freshness or acceptance is missing, report the exact missing gate and stop the affected mutation.
4. Treat `revisions/workflow-archive/`, historical reports and deleted/rejected work as non-authoritative evidence only. Never recover the removed CH-01 attempts unless the author explicitly requests recovery.

The only startup exception is an independent literary review given an exact workspace: read locator-only `candidate.md` and the named prose first, record the blind first reading, then open session-state, handoff and contextual sources.

## Mandatory routing

| Intent | Required route | Mutation boundary |
|---|---|---|
| Design or prepare a chapter | `/hr-preflight <chapter>` → `.agents/workflows/hr-preflight.md` → `hr-source-preflight` | No prose; stop at `AWAITING_AUTHOR` for unresolved consequential design |
| Draft from a ready packet | `/hr-write <chapter>` → `.agents/workflows/hr-write.md` → `hr-source-writer` | No drafting without a current READY packet and its generative files |
| Literary evaluation | `/hr-review <chapter>` → `.agents/workflows/hr-review.md` → `hr-source-review` | Blind first read; no prose rewrite or canon mutation |
| Canon/fact/continuity safety | `/hr-safety <chapter>` → `.agents/workflows/hr-safety.md` → `hr-source-safety` | Same exact candidate/hash/basis; no literary PASS |
| Revise prose | `/hr-revise <chapter>` → `.agents/workflows/hr-revise.md` → `hr-source-revision` | Preserve prior prose; new bytes require a new candidate and fresh affected reviews |
| Promote manuscript | `/hr-canonize <chapter>` → `.agents/workflows/hr-canonize.md` | Require complete chapter, fresh independent literary PASS, safety PASS, explicit author acceptance and approved canon diff for the same identity/basis |
| Research | `.agents/rules/06-research.md` and the applicable prompt | Research cannot become canon automatically |
| Workflow/tooling/repository maintenance | `AGENTS.md` SDD and repository checks | Must not silently change story design, prose or canon |

Gemini MUST NOT replace a project route with a generic upstream writing, dialogue, prose, revision or story skill. Upstream skills are explicit-only; even when named by the author, they are bounded diagnostic aids and cannot bypass the Horrible workflow.

## Non-negotiable phase boundaries

- Preflight performs divergent discovery before convergence. Approval and readiness are separate claims.
- Writer generation reads only `writing-brief.md`, `scene-ecology.md`, `character-context.md`, accepted preceding prose and explicitly named lived-context excerpts. It MUST NOT preload `discovery-slate.md`, rejected engines, `qa-card.md`, preflight, reviews, full authority files or generic craft skills.
- Only after a complete generative draft exists may Writer open `qa-card.md` and its named hard-source excerpts for self-edit.
- Literary Reviewer cannot issue an independent PASS from contaminated context. It must mark the review `COMPROMISED` when blind order was not preserved.
- Safety and literary verdicts bind to exact candidate bytes and consequential authority basis. A verdict never transfers to changed prose or a changed material dependency.
- Canonization is impossible without all required fresh receipts. Structural checks never substitute for literary or safety review.

## Write discipline

Gemini MUST:

- preserve unrelated work and existing chapter attempts;
- use a new suffixed workspace for a restarted chapter;
- keep prose separate from locator, handoff, review and audit material;
- update `author/session-state.md` and every affected active handoff surface after a workflow operation;
- run the checks required by the route and report failures honestly;
- stop rather than invent approval, facts, cultural practice, durable state or a missing causal choice;
- read `docs/failure-memory.md` before any generative or revision pass, and compare every delivered passage against its anti-pattern signatures before committing — a structural match to a rejected pattern is a regression requiring rewrite, not a wording change.

Gemini MUST NOT write directly to `chapters/`, continuity/canon state, or an existing candidate as a shortcut. It MUST NOT use workflow snapshots as live instructions, resurrect the deleted CH-01 versions, claim that validation certifies literary quality, or silently collapse multiple roles into one contaminated pass. It MUST NOT declare a revision complete if the delivered text shares a structural anti-pattern signature with any entry in `docs/failure-memory.md`.

## Machine-enforced guard

Project Gemini settings run `.gemini/hooks/workflow-guard.mjs` at session start, before every agent turn and before mutation-capable tools. The guard validates this contract, required route files and reset protections. A guard rejection is a hard stop: do not disable, bypass or edit around it. Run `npm run gemini:check` and `npm run workflow:check` after changing any Gemini, agent, workflow, role or guard file.

No prompt or hook can mathematically guarantee model compliance outside a trusted Gemini CLI workspace. Within this repository, weakening or bypassing these controls is a workflow failure and must be reported to the author.
