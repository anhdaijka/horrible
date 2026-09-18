# Editorial Workflow

## State machine

```text
idea
  ↓
design dialogue / source resolution
  ↓
divergent discovery: life + horror + reader-detective engines
  ↓
selection + readiness + consequence-bearing hinges
  ↓
author gate only for unresolved material choices
  ↓
generative brief + scene ecology + character context
  ↓
draft + self-edit + locator/handoff split
  ↓
blind literary reading → contextual diagnosis
  ↓
safety facts + material state contradictions
  ↓
revise
  ↓
fresh affected-scope reviews
  ↓
canon diff
  ↓
exact candidate/diff author acceptance
  ↓
state update
  ↓
final check
  ↓
accept chapter
  ↓
git commit
```

## Planning gate

Do not move into prose until the chapter has enough information to support its material consequences. Approval and readiness are separate. Check only what matters here:

- materially different scene engines before convergence
- life already moving beyond the case
- specific ghost-horror pressure
- reader-visible evidence and epistemic advantage
- purpose
- POV
- starting state
- ending state
- scene order
- causal progression
- consequence-bearing perception → inference → choice → consequence
- dependencies whose causes are presented in a later chapter
- character movement
- revelations/information movement
- active promises/questions
- forbidden reveals
- continuity risks

Use `templates/discovery-slate.md`, `templates/chapter-preflight.md`, `templates/writing-brief.md`, `templates/scene-ecology.md`, `templates/character-context.md` and separate `templates/qa-card.md`. Ask the author only for a new material choice; select execution-level engines autonomously and resolve source facts yourself. Keep rejected engines and QA/regression content out of the generative packet. Do not create fixed counts for engines, side stories, clues or ordinary-life beats.

## Deterministic gate

Before and after accepted state changes:

```bash
npm run story:check
npm run workflow:check
```

For diagnostics:

```bash
npm run story:doctor
npm run story:next
npm run story:report
```

## Drafting

Give the writer minimum sufficient, spoiler-safe truth plus a rich optional scene ecology. Prefer structured current state over old prose. The writer may invent transient and chapter-local life, select or transform ecology possibilities, and stage fair clues without explaining them; it cannot silently change durable outcome/reveal truth. Store prose identity in locator-only `candidate.md`; store self-edit evidence and consequence-bearing deltas in `writer-handoff.md` so they do not contaminate blind review.

## Review

For a claimed independent review, freshness is mandatory: give the reviewer only locator-only candidate identity and complete prose before session-state, handoff, packet or prior findings. If contaminated, label it COMPROMISED and do not issue independent PASS. After the first-reading record, diagnose as relevant:

1. structure / causality / pacing
2. character / agency / arc
3. dialogue / subtext / voice
4. prose / specificity / rhythm
5. continuity
6. genre expectations

Use `templates/literary-review-report.md` and `templates/safety-review-report.md`. Review first; rewrite second. Test credible alternate readings only at consequential hinges, not every sentence.

## Canon diff

After revision and fresh affected-scope reviews, list proposed durable changes with `templates/canon-diff.md`. Tie the diff to exact candidate bytes and consequential authority basis. Author chooses accept all, accept selected, or reject. Only then update Story Skills state.

## Commit discipline

Recommended sequence:

```text
plan: approve chapter 08
draft: chapter 08 first pass
revise: tighten chapter 08 confrontation
canon: accept chapter 08 state transition
```

You do not need a commit for every agent action. Commits should correspond to meaningful recoverable states.

## Research lifecycle

```text
external source
  ↓
research/inbox
  ↓
verification
  ↓
research/verified
  ↓
author decision
  ↓
canonical Story Skills file
```

Never let external research bypass author interpretation and become story canon automatically.
