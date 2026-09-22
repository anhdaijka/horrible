# Workflow audit — CH-01-v6 B7 sustained narrative movement

Date: 2026-09-22

## Scope

Triggered by the rejected bounded B6 raw opening trial. This audit evaluates the root Writer composition model. It does not reopen Q1–Q8, redesign E1, alter chronology, change clue/reveal architecture, modify character knowledge or touch canon/continuity.

## Result

**ROOT GENERATIVE-UNIT DEFECT CONFIRMED.**

B6 correctly repaired dialogue theory at the level of social movement and floor ownership, but the generated prose still atomized the episode into transactions:

`micro-event → line/response → narrator reset → next micro-event`

The defect therefore sits above dialogue. The model was still choosing beat, spoken turn or paragraph as its implicit unit of progress and applying the B6 social rules inside those small units.

## Why B6 was insufficient

The B6 contract said that paragraphs *may* carry several linked actions and that speakers *may* hold the floor. Those were permissions inside an unchanged default generator.

It did not define:

- a larger mandatory first-pass unit from which paragraphs and turns emerge;
- what keeps that unit continuous across local events;
- what qualifies as a genuine transition to a new unit;
- how scene, summary, interiority and dialogue can change mode without resetting the episode;
- how unfinished social/material residue survives across transitions.

As a result, the model could obey every local instruction while still serializing the scene as a list of completed exchanges.

## External positive structural evidence

The replacement is supported by external research, used only to design the composition contract and **not** as Writer style-source material.

1. Houtkoop & Mazeland, “Turns and discourse units in everyday conversation,” *Journal of Pragmatics* 9.5 (1985). Their account distinguishes larger discourse projects—stories, extended descriptions, advice—from single turn-constructional units, including cases where a primary speaker holds the floor through the larger unit. This supports treating floor ownership as structurally larger than adjacency pairs.
   - https://doi.org/10.1016/0378-2166(85)90055-4

2. Goodwin's discussion of storytelling and sequential organization summarizes the conversation-analysis observation that stories are typically long turns containing multiple clauses/sentences and require interactional organization that suspends ordinary rapid speaker exchange. This supports extended social duration rather than reply-by-reply generation.
   - https://www.journals.uchicago.edu/doi/full/10.1086/339566

3. David Herman, “Dialogue in a discourse context: Scenes of talk in fictional narrative,” *Narrative Inquiry* 16.1 (2006), argues for understanding fictional talk together with the concrete social and material environments in which characters think, act and communicate. This supports nesting dialogue inside ongoing work/material life instead of isolating it as a screenplay exchange.
   - https://doi.org/10.1075/ni.16.1.11her

4. Brian Gingrich's *The Pace of Fiction* treats narrative pace at a midsized scale and examines the productive interplay—and later partial collapse—of scene and summary. The critical discussion emphasizes movement between micro and macro levels and a sliding relation among scenic, summary and focalized modes. This supports a movement-scale generator in which mode can change without forcing a new beat.
   - https://www.journals.uchicago.edu/doi/full/10.1086/729904

5. Lê Hải Anh, “Phương thức kể chuyện đặc trưng của truyện kinh dị Việt Nam nửa đầu thế kỉ XX,” identifies dramatic narration, close description, fantastic writing and distinctive tonal work as interacting features of early Vietnamese horror. The evidence does not support terse conversational alternation as a genre default.
   - https://doi.org/10.54607/hcmue.js.14.5.2156(2017)

6. Thế Lữ's “Ma xuống thang gác” provides a direct structural example: before the uncanny event takes control, the opening sustains spatial arrangement, group activity, joking, performance and social presence across multiple paragraphs and unequal stretches of speech. This is evidence for lived-duration architecture, not a style template to imitate.
   - https://vnthuquan.net/TacPham/con-ma-xuong-thang-gac-15035/chuong-1

## B7 replacement model

The first-pass loop becomes:

`living field → continuing carrier(s) → sustained narrative movement → genuine reorientation → residue carried forward`

A **carrier** is something that remains active across local events: practical work, social floor, physical route, viewpoint attention, relationship pressure, bodily/material circumstance or an unresolved local concern.

A **sustained narrative movement** may contain multiple micro-events, paragraph breaks, actions, lines of speech, interruptions, memories, summary, direct/indirect speech and changes of emphasis while one or more carriers remain active.

The movement yields only when its organizing center materially changes: an activity is displaced/completed, social purpose changes, attention is genuinely captured elsewhere, time/location is reoriented, or disturbance changes what people can continue doing.

Paragraph, sentence, beat and spoken turn become **surface/rhetorical forms inside the movement**, not progress units.

Residue is explicitly carried forward so a topic, task, object, embarrassment, irritation or unanswered remark can continue exerting pressure without being immediately resolved.

## Genre consequence

Horror should enter by deforming established continuity. The prose first gives ordinary activity enough duration to become a usable reality; supernatural pressure then changes what that activity, space, relationship or expectation can sustain.

This does not require slow prose, long paragraphs or delayed horror. A movement can be fast, interrupted or violent. The requirement concerns **continuity of organizing experience**, not word count.

## Non-goals

- no sentence/paragraph/turn quotas;
- no ban on short dialogue;
- no compulsory monologues;
- no requirement that every movement be long;
- no imported prose exemplar or author imitation in Writer context;
- no change to E1, chapter outcome, mystery allocation or canon.

## Root patch

The sustained-movement model is made canonical in:

- `.agents/rules/04-drafting.md`;
- `.agents/skills/hr-source-writer/SKILL.md`;
- `.agents/workflows/hr-write.md`;
- `docs/chatgpt-project-instructions.md`.

Repository entry contracts point to the same canonical rule; no separate style bible is created.

## Acceptance test for the next raw trial

Evaluate whether the prose now:

- sustains a recognizable carrier across multiple local actions/turns;
- permits several paragraphs to belong to one continuing lived movement;
- changes between scene, summary, interiority and talk without automatic reset;
- allows social floor and ordinary work to persist through plot information;
- carries unresolved residue forward;
- changes movement only when the lived situation actually reorients;
- preserves E1 human causality and current reveal boundaries.

The test must not score sentence length, paragraph length, dialogue length or number of turns.

## Canon/design impact

**CLEAN.**

No story engine, chronology, POV, relationship, supernatural rule, manifestation, knowledge boundary, reveal, object custody or durable state changes.
