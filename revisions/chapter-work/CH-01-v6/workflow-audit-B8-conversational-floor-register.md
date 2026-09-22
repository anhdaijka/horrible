# Workflow audit — CH-01-v6 B8 conversational floor + register generalization

## Trigger

Author feedback on the B7 raw trial: sustained narrative movement improved materially, but dialogue still tended to yield the floor too quickly in places, and one local-reference phrase misclassified Toàn despite the packet establishing him as Cường's son.

## Root diagnosis

The B7 drafting contract already allowed sustained floor ownership, but the packet compiler did not require chapter packets to project enough relationship-specific floor substrate. The Writer therefore still had room to fall back to reply-slot habits.

Separately, no compiler-level requirement forced scene-relevant kinship/gender/generation/status constraints into Writer-safe context. That left local reference wording vulnerable to generic Vietnamese/rural-speech priors.

These are reusable workflow defects, not CH-01-only prose defects.

## Root patch

The Preflight/compiler layer now requires:
- relationship-specific conversational floor continuity when dialogue matters;
- ongoing activity/interruption/resumption conditions that can carry a floor;
- no dialogue-length quotas or scripted sample turns;
- a spoiler-safe kinship/address/register map for scene-relevant people;
- preservation of actual relation direction, gender/generation/status and established forms of reference;
- unknown register to remain open rather than being filled by generic local-color priors.

The Writer layer now:
- distinguishes sustained floor ownership from merely making individual lines longer;
- preserves social initiative through acknowledgments, work and interruption until it genuinely transfers;
- must honor the packet's kinship/address/register map;
- must not invent generic rural/local classifiers, kinship labels, diminutives or honorific habits for flavor.

Canonical/template surfaces patched:
- `.agents/rules/03-planning.md`
- `.agents/skills/hr-source-preflight/SKILL.md`
- `.agents/workflows/hr-preflight.md`
- `templates/character-context.md`
- `.agents/rules/04-drafting.md`
- `.agents/skills/hr-source-writer/SKILL.md`
- `.agents/workflows/hr-write.md`
- `docs/chatgpt-project-instructions.md`

## CH-01-v6 provenance

B7 remains frozen as the exact packet basis of its diagnostic raw trial.

B8 is a recompile of the same approved design/E1. No chronology, reveal architecture, supernatural rule, scene engine, object state or durable story fact changes.

- `writing-brief-B8.md`: B7 content with B8 provenance only.
- `scene-ecology-B8.md`: unchanged ecology.
- `character-context-B8.md`: same people/knowledge plus compiler-generated kinship/address/register map and stronger relationship-specific conversational-floor substrate.
- `scene-trial-B8-fresh-context-prompt.md`: bounded fresh-context trial prompt.

## Gate

No AUTHOR-DESIGN choice is opened by this workflow correction. The next valid test is a fresh Project chat using only the three active B8 Writer story-source files plus the project Writer contract.
