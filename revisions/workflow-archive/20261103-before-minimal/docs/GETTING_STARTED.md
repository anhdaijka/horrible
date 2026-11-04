# Getting Started

## 1. Clone

```bash
git clone https://github.com/anhdaijka/novel-os.git
cd novel-os
```

## 2. Install agent skills

```bash
npm run bootstrap
```

Optional prose skill:

```bash
npm run bootstrap -- --with-better-writing
```

The bootstrap uses exact commits from `config/upstreams.json` and copies upstream skills to `.agents/skills/`. It then marks every upstream skill explicit-only through `agents/openai.yaml`; project-owned `hr-source-*` roles remain normally discoverable, survive `--clean`, and cannot be replaced by an upstream name. Run `npm run skills:firewall` to repair the policy on an existing installation without reinstalling.

## 3. Initialize the story schema

Example:

```bash
npm run init-story -- "The Tide Room" \
  --genre mystery \
  --sub-genre coastal \
  --setting-era near-future \
  --pov third-person-limited \
  --tense past \
  --theme truth \
  --theme memory \
  --synopsis "A diver finds a sealed room under a storm-damaged harbor."
```

`init-story` runs the pinned Story Skills CLI in a temporary directory and merges its generated canonical paths into this repo root. This deliberately avoids maintaining a second copy of the Story Skills schema in Novel OS.

## 4. Fill the author layer

Complete, at minimum:

- `author/creative-constitution.md`
- `author/boundaries.md`

Record important decisions in `author/decisions.md`.

`author/style-bible.md` is an optional reference library, not a default runtime packet. Add or consult a named section only when a demonstrated prose problem needs it; do not preload the whole file into drafting.

## 5. Validate

```bash
npm run story:check
npm run workflow:check
npm run story:doctor
npm run story:report
```

## 6. Open the same folder in Obsidian

Use the repository root as the vault. Recommended plugins are documented in `docs/OBSIDIAN.md`.

## 7. Start Antigravity

Open the repository root as the workspace. Ask the agent to read `AGENTS.md`, `GEMINI.md`, and relevant rules before acting.

Recommended first prompt:

```text
Act as Narrative Director. Read the repository contract and current story state. Run deterministic story checks. Do not draft prose. Tell me what is incomplete before we can safely outline the first chapter.
```

## 8. Keep skills updated intentionally

```bash
npm run upstreams:check
```

Do not casually update dependencies during an active revision. Pin changes, reinstall with `npm run bootstrap -- --clean`, then run `npm run tooling:check`, `npm run workflow:check` and all story checks.
