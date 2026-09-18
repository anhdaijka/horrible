# Creativity Firewall forward test — 2026-09-18

## Scope

Two independent read-only runs used GPT-5.6 Sol / high against isolated non-canon fixtures. Neither agent edited files, updated state or promoted canon. The cases test behavior after the workflow change; they do not establish a universal literary-quality floor.

## Writer case

Fixture: `../fixtures/creativity-firewall/writer/`

Observed read/phase account:

1. current `hr-source-writer` contract and drafting rule;
2. generative `writing-brief.md` + `character-context.md`;
3. complete scene draft in working context;
4. only then `qa-card.md` for self-edit.

Observed result: PASS for this case.

- No upstream generic craft skill was loaded.
- The scene used work pressure, teasing, disagreement and practical help to give the siblings distinct agency; dialogue was not reduced to field-value fragments.
- The sole-key, twenty-set order, knowledge timing and unresolved father conflict survived self-edit.
- The output remained non-canon and made no repository mutation.

## Literary + safety case

Fixture: `../fixtures/creativity-firewall/review/`

Candidate prose SHA-256: `6DB741CC277F25CF2354A5A30EAFA4BB48CB5430241C70EC0371FC8EF045911B`

Observed read order: locator-only candidate and prose before request/context/session-state, followed by contextual diagnosis and safety verification.

Observed result: PASS for this case.

- Literary review named protected strengths and found no material defect; it did not invent optional rewrites to justify a failure.
- Safety checked quantity, custody/key state, knowledge timing, delivery obligation and unresolved family conflict.
- Safety did not require Hạnh to display a particular bodily or verbal reaction to the interview.
- Both verdicts were explicitly bounded to the exact fixture and candidate bytes.

## Limits

This run demonstrates that the current routing can produce the intended context order and triage on two controlled cases. It does not prove that every host exposes the same skill metadata, that every future agent will comply, or that a real chapter will be artistically successful. Real chapter work still needs exact packet preparation, blind review and author judgment.
