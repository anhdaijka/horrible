import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyCreativityFirewall, cleanManagedSkillDirectory } from './lib/skill-install-policy.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));

// File identity and installation behavior only. No prose/instruction phrase assertions.
const routes = ['preflight', 'write', 'review', 'safety', 'revise', 'canonize'];
const roles = ['preflight', 'writer', 'review', 'safety', 'revision'];
for (const file of [
  'AGENTS.md', 'author/session-state.md',
  ...routes.map((role) => `.agents/workflows/hr-${role}.md`),
  ...roles.map((role) => `.agents/skills/hr-source-${role}/SKILL.md`),
  ...['02-context', '03-planning', '04-drafting', '05-review'].map((rule) => `.agents/rules/${rule}.md`)
]) {
  if (!existsSync(join(root, file))) throw new Error(`Missing active route/source: ${file}`);
}

const resetTargets = [
  'development/horrible/opening-design-dialogue-v2.md',
  'development/horrible/opening-order-recognition-design.md',
  'explorations/craft/horrible-dialogue-prose-2026-09-17.md',
  ...[2, 3, 4, 5].map((version) => `revisions/chapter-work/CH-01-v${version}`)
];
for (const target of resetTargets) {
  if (existsSync(join(root, target))) throw new Error(`Removed CH-01 target restored: ${target}`);
}

const temp = mkdtempSync(join(tmpdir(), 'horrible-workflow-'));
try {
  const skills = join(temp, '.agents', 'skills');
  mkdirSync(join(skills, 'hr-source-review'), { recursive: true });
  mkdirSync(join(skills, 'dialogue'), { recursive: true });
  writeFileSync(join(skills, '.gitkeep'), '', 'utf8');
  writeFileSync(join(skills, 'hr-source-review', 'SKILL.md'), 'project owned', 'utf8');
  writeFileSync(join(skills, 'dialogue', 'SKILL.md'), 'upstream managed', 'utf8');

  const result = cleanManagedSkillDirectory(skills);
  if (!existsSync(join(skills, 'hr-source-review', 'SKILL.md'))) throw new Error('Clean removed a project-owned hr-source skill.');
  if (!existsSync(join(skills, '.gitkeep'))) throw new Error('Clean removed .gitkeep.');
  if (existsSync(join(skills, 'dialogue'))) throw new Error('Clean retained an upstream-managed fixture skill.');
  if (!result.removed.includes('dialogue') || !result.preserved.includes('hr-source-review')) throw new Error('Clean result did not classify fixture skills correctly.');

  mkdirSync(join(skills, 'dialogue'), { recursive: true });
  writeFileSync(join(skills, 'dialogue', 'SKILL.md'), 'upstream managed', 'utf8');
  const firewall = applyCreativityFirewall(skills);
  const dialoguePolicy = readFileSync(join(skills, 'dialogue', 'agents', 'openai.yaml'), 'utf8');
  if (!dialoguePolicy.includes('allow_implicit_invocation: false')) throw new Error('Creativity firewall did not make an upstream skill explicit-only.');
  if (existsSync(join(skills, 'hr-source-review', 'agents', 'openai.yaml'))) throw new Error('Creativity firewall changed a project-owned role skill.');
  if (!firewall.explicitOnly.includes('dialogue') || !firewall.preserved.includes('hr-source-review')) throw new Error('Creativity firewall classified fixture skills incorrectly.');

  console.log(JSON.stringify({
    result: 'pass',
    scope: 'route presence, removed CH-01 targets, isolated skill installation policy',
    runtimeMutationProtection: false,
    semanticComplianceGuaranteed: false,
    literaryQualityCertified: false
  }, null, 2));
} finally {
  rmSync(temp, { recursive: true, force: true });
}
