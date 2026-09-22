# Workflow audit — CH-01-v6 B6 dialogue composition

Date: 2026-09-22

## Scope

This audit is triggered by the rejected bounded B5 raw opening trial. It evaluates Writer generation behavior only. It does not reopen Q1–Q8, redesign E1, modify clue/reveal architecture, or change canon/continuity.

## Diagnostic result

**ROOT COMPOSITION BOTTLENECK CONFIRMED.**

B5 supplied enough lived/material/relationship context and preserved ordinary human causality, but the first-pass generator still defaulted to an assistant-efficient conversational rhythm:

`short prompt → short answer → narrator separator → short prompt → short answer`

The defect is not that every individual line is implausible. The defect is the repeated unit of composition.

### Observed mechanism

- Dialogue was generated as successive adjacency pairs rather than as social movements with uneven floor ownership.
- Most turns carried one purpose only: ask, answer, tease, expose one fact.
- Speakers rarely held the floor long enough to combine work, complaint, memory, instruction, correction, gossip or digression.
- Plot-relevant information tended to attract immediate questions/reactions, creating an information ladder even when nobody was investigating.
- Narration frequently behaved like stage direction between lines, resetting the scene after each turn instead of remaining inside one continuing movement of attention and work.
- Increasing nominal turn length alone would not solve the problem; the underlying generative unit must change.

## Root cause

The B5 Writer contract permitted long/uneven speech but treated those behaviors as optional capabilities. It did not strongly establish **social movement + floor ownership** as the default unit from which conversation is generated.

Therefore a model could satisfy the literal contract while retaining its generic concise-chat prior.

## B6 repair

The canonical Writer composition prior now requires:

1. conversation generated from a social movement before exchange pattern;
2. explicit floor ownership and natural reasons to keep/yield the floor;
3. mixed-purpose stretches of speech;
4. selective, delayed, nonverbal or absent responses;
5. short turns only when the relationship/pressure produces them, not as a pacing default;
6. plot facts allowed to enter without immediate interrogation or cleanup;
7. narration integrated within conversational movement rather than functioning as a separator after each line;
8. no information-ladder construction from successive prompts and answers.

This is a positive first-pass prior, not a dialogue-length quota. It does not require every turn to be long, ban short replies, impose monologues, or prescribe a line count.

## Canon/design impact

**CLEAN.**

No story engine, chronology, POV, relationship, supernatural rule, manifestation, knowledge boundary, reveal, object custody or durable state changes.

B5 story-source content remains sufficient. B6 changes the root composition contract and only version/provenance metadata in the active packet.

## Acceptance test

A fresh B6 raw opening trial should be evaluated for whether:

- conversation develops through uneven social movements rather than repeated one-line volleys;
- at least some speakers naturally hold the floor across mixed purposes where the situation supports it;
- listeners do not answer every proposition;
- shop work, attention and narration continue through talk without repeated stage-direction resets;
- death news and order information can remain socially messy without becoming an interview;
- E1 human causality remains unchanged.

No mechanical quota for sentence count, turn length or paragraph size is permitted.
