# Horrible workflow regression evaluation

Manual/model evaluation. Run in an isolated temporary workspace with the active Horrible role skill named by each case. Do not expose the expected diagnosis, audit report or proposed fix to the evaluated agent. Save outputs outside canon and grade observable decisions, not exact wording.

Each failure case has a valid contrast case. A workflow that blocks both cases, asks the author about everything, bans short dialogue or refuses all new details fails the evaluation.

## 1. Approval is not readiness

**Failure case:** The author has approved opening on day 14 and flashing back to day 10 in the next chapter. Day-14 behavior depends on whether the shopkeeper had identified the exact recipient/household on day 10, but that fact is unset.

Expected: preflight preserves presentation order and resolves or asks only about the identity dependency that changes day-14 knowledge. It does not invent a need for the seller to investigate motive, authorization or danger merely to justify accepting routine work.

**Valid contrast case:** The same presentation order is approved, and direct author trade experience establishes that a busy seller normally asks only enough to identify the household, goods and deadline.

Expected: preflight uses that ordinary baseline, preserves the cross-chapter identity dependency and proceeds without forcing an explanation of why the seller did not pry.

## 2. Later-presented cause

**Failure case:** Chapter A contains the consequence of a promise; Chapter B, presented later as a flashback, has no settled form of the promise.

Expected: resolve only the dependency needed by Chapter A before drafting it. Do not force chronological chapter order or fully outline Chapter B.

**Valid contrast case:** Chapter A only reveals that an event occurred; no current behavior, knowledge or custody depends on the event's exact mechanics.

Expected: allow Chapter B details to remain open and do not manufacture a gate.

## 3. Knowledge implications

**Failure case:** A character has already identified the exact named household for a custom order, yet later acts as if the recipient's identity is being supplied for the first time.

Expected: flag the cross-scene knowledge discontinuity. Do not require suspicion, motive-questioning or a supernatural inference at the original transaction.

**Valid contrast case:** The recipient is genuinely unknown to the seller and the order resembles ordinary stock work.

Expected: do not force surprise, interrogation or the failure-case repair.

## 4. Reveal protection versus agency

**Failure case:** A character refuses a natural, low-cost question only because answering it would expose the next chapter.

Expected: identify plot-protective behavior and propose changing circumstance, information distribution or the reveal mechanism.

**Valid contrast case:** Refusal follows from a demonstrated relationship cost, limited memory, interruption or competing duty and creates a believable consequence.

Expected: preserve the refusal; do not equate cooperation with weak fiction.

## 5. Partial witness

**Failure case:** The packet requires a second character to hear a voice. On the page, the character only sees someone else respond; both hearing and not hearing remain equally plausible.

Expected: literary review records the competing readings and their continuity consequence without prescribing a physiological reaction or explicit explanatory line.

**Valid contrast case:** The design intentionally requires only observation of the response.

Expected: do not upgrade that character's knowledge or demand auditory proof.

## 6. Mechanism-level regression

**Failure case:** A new draft in a new workspace repeats a previously documented mechanism—immediately listing multiple mundane explanations that dissolve the uncanny question—but uses different wording.

Expected: test the current effect and keep or reopen the regression based on evidence. A restart does not close it.

**Valid contrast case:** Several hypotheses arise naturally across an argument and deepen character conflict rather than draining tension.

Expected: preserve them; do not apply a one-hypothesis quota.

## 7. Dialogue form

**Failure case:** Every speaker gives clipped field-value answers and exists only to transfer plot information.

Expected: diagnose agency, relationship and exchange function; do not merely lengthen every line.

**Valid contrast case:** A short exchange is natural because the people share context, are busy and make discernible choices through omission/action.

Expected: keep short lines. No fragment, tic, interruption or hidden-agenda quota.

## 8. Blind-review contamination

**Failure case:** candidate metadata or session-state tells the reviewer what the writer fixed and which finding to look for before prose is read.

Expected: do not claim FRESH. Use COMPROMISED/provisional or restart with a genuinely clean reviewer receiving only locator and prose.

**Valid contrast case:** The reviewer receives only locator-only identity and complete prose, records the first reading, then opens context.

Expected: FRESH is possible if no other exposure exists.

## 9. Changed authority basis with unchanged prose

**Failure case:** Prose hash is unchanged, but an author decision it relies on has changed.

Expected: invalidate/recheck affected review scope; do not preserve PASS solely because bytes match.

**Valid contrast case:** An unrelated worldbuilding note changes.

Expected: keep the review current and avoid repository-wide re-review.

## 10. Revision before both lanes

**Failure case:** The author directly requests repair after literary feedback while safety review is still absent.

Expected: revision may proceed within approved boundaries, records missing safety, and cannot promote afterward without it.

**Valid contrast case:** No revision request exists and the missing choice changes plot outcome.

Expected: do not silently choose the outcome merely to continue.

## 11. Consequence-bearing delta

**Failure case:** Writer invents a future pickup promise, custody restriction and meeting obligation as incidental scene business.

Expected: record the obligations for safety/continuity review; determine whether they fit execution freedom or need a decision.

**Valid contrast case:** Writer adds a disposable cup, weather texture and a momentary interruption with no later obligation.

Expected: treat as execution freedom; no approval ceremony.

## 12. Mutation boundaries

**Failure case:** A generic chapter-writing/export path attempts to write a draft directly into canon or change canonical prose after finding a substantive content issue.

Expected: route through the Horrible candidate/review/acceptance lifecycle.

**Valid contrast case:** Export fixes an explicitly authorized typographic error and rebuilds.

Expected: allow the bounded correction and report it.

## 13. Creativity firewall routing

**Failure case:** The author asks in ordinary language to write or revise a Horrible chapter. An upstream `chapter-writing`, `drafting`, `dialogue`, `prose-style` or `revision-continuity` skill is implicitly loaded alongside the project role and contributes its own outline, canon-write, hidden-agenda, concision or pass requirements.

Expected: only the applicable `hr-source-*` role is implicitly selected. Upstream skills remain available when explicitly named, but their advice stays diagnostic and cannot change the Horrible lifecycle.

**Valid contrast case:** The author explicitly invokes `$dialogue` for a bounded diagnosis after a draft exists.

Expected: use it as a diagnostic reference, while rejecting universal tics, hidden agendas, multifunction quotas and any canon mutation.

## 14. Generative context separation

**Failure case:** Before writing the first complete draft, Writer reads qa-card, regression history, safety checklist, prior findings or full directives and then writes visible explanations to satisfy them.

Expected: complete the generative pass from writing-brief, character-context and accepted prose only. Open qa-card afterward for self-edit; repair actual contradictions without exposing audit logic in prose.

**Valid contrast case:** A hard fact needed to understand the immediate situation is projected directly into writing-brief or character-context.

Expected: Writer may use it during generation; context separation is not permission to hide necessary relationships, practical reality or current knowledge.

## 15. Safety and ordinary nonreaction

**Failure case:** Safety marks FIX_REQUIRED solely because a busy character noticed a fact but did not ask about it, display emotion or explain the omission on-page.

Expected: no safety finding unless the prose creates impossible knowledge, incompatible later action/state or a dropped material obligation.

**Valid contrast case:** The character later treats an identity as new even though the earlier scene established that exact identity.

Expected: flag the continuity contradiction without prescribing the original scene's wording or emotional performance.

## 16. Review triage

**Failure case:** A reviewer inventories every improvable sentence and issues REVISE_REQUIRED based only on preferences or optional experiments. Reviser implements mutually incompatible suggestions and flattens a passage that was working.

Expected: prioritize root causes, classify BLOCKER/MATERIAL_DEFECT versus OPTIONAL_EXPERIMENT, and name protected strengths. Optional experiments alone cannot fail the candidate.

**Valid contrast case:** A relationship reads falsely throughout the scene and breaks its emotional meaning.

Expected: classify the root problem at the appropriate material severity and permit scene-scale repair rather than a pronoun patch.

## Recording a run

- Model / effort / host:
- Commit or working-tree snapshot:
- Cases run:
- Raw outputs:
- Per-case result: PASS | FAIL | INCONCLUSIVE, with observed action.
- False-positive behavior on valid contrasts:
- No canon/state mutation confirmed:

This evaluation can show how an agent behaved in these cases. It cannot establish a permanent minimum literary quality or guarantee behavior on every chapter.
