import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyCreativityFirewall, cleanManagedSkillDirectory } from './lib/skill-install-policy.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));

function requireText(relativePath, required, forbidden = []) {
  const source = readFileSync(join(root, relativePath), 'utf8');
  for (const value of required) {
    if (!source.includes(value)) throw new Error(`${relativePath} is missing workflow contract text: ${value}`);
  }
  for (const value of forbidden) {
    if (source.includes(value)) throw new Error(`${relativePath} leaks blind-review content: ${value}`);
  }
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

  requireText('templates/candidate.md', ['This file is a blind-review locator', 'authority-basis ID'], ['Writer self-edit:', 'Literary review:', 'Next action:']);
  requireText('.agents/skills/hr-source-review/SKILL.md', ['without reading session-state', 'locator-only candidate.md', 'COMPROMISED']);
  requireText('.agents/rules/03-planning.md', ['Author approval and packet readiness are different claims', 'what is perceived', 'credible counter-reading', 'Do not classify routine action as a hinge']);
  requireText('.agents/rules/02-context.md', ['Writer context has two phases', 'Upstream skills are explicit-only']);
  requireText('.agents/skills/hr-source-writer/SKILL.md', ['For the generative pass', 'After the complete generative draft exists']);
  requireText('templates/qa-card.md', ['not part of the generative writer context', 'Ordinary silence']);
  requireText('templates/literary-review-report.md', ['OPTIONAL_EXPERIMENT', 'protected strengths']);
  requireText('.agents/skills/hr-source-safety/SKILL.md', ['Lack of an on-page question', 'incompatible later action/state']);
  requireText('scripts/bootstrap.mjs', ['applyCreativityFirewall', 'upstream skill(s) set to explicit-only']);
  requireText('.agents/rules/05-review.md', ['changed decision/source dependency', 'mechanism-level regression test']);
  requireText('.agents/workflows/hr-canonize.md', ['consequential authority basis', 'no affected stale dependency']);
  requireText('prompts/session/export-manuscript.md', ['explicitly authorized typo/format correction', 'review/approval workflow']);
  requireText('evals/horrible-workflow-regressions.md', ['Failure case', 'Valid contrast case', 'Blind-review contamination', 'Creativity firewall routing', 'Generative context separation', 'Safety and ordinary nonreaction', 'Review triage']);

  console.log(JSON.stringify({
    result: 'pass',
    scope: 'deterministic workflow contract and isolated bootstrap-clean policy',
    literaryQualityCertified: false
  }, null, 2));
} finally {
  rmSync(temp, { recursive: true, force: true });
}
