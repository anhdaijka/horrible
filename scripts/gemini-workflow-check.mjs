import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const requiredText = new Map([
  ['GEMINI.md', [
    'Fail-closed startup',
    'Mandatory routing',
    'Non-negotiable phase boundaries',
    'Machine-enforced guard',
    'MUST NOT write directly to `chapters/`'
  ]],
  ['AGENTS.md', ['Creative–safety separation', 'Chapter workflow', 'Historical opening-reset guard']],
  ['author/session-state.md', ['## Current manuscript state', '## Current next action']],
  ['.agents/rules/02-context.md', ['Writer context has two phases', 'Upstream skills are explicit-only']],
  ['.agents/rules/writing-workflow.md', ['Discovery-led design before preflight', 'Canonize only after complete-chapter scope']],
  ['.gemini/settings.json', [
    '"disableYoloMode": true',
    '"disableAlwaysAllow": true',
    '"horrible-workflow-session-guard"',
    '"horrible-workflow-turn-guard"',
    '"horrible-workflow-write-guard"',
    '"horrible-workflow-replace-guard"',
    '"horrible-workflow-shell-guard"'
  ]],
  ['.gemini/hooks/workflow-guard.mjs', ['auditGeminiWorkflow', 'exitCode = 2']]
]);

const requiredRoutes = [
  'hr-preflight',
  'hr-write',
  'hr-review',
  'hr-safety',
  'hr-revise',
  'hr-canonize'
];

const roleSkills = new Map([
  ['hr-preflight', 'hr-source-preflight'],
  ['hr-write', 'hr-source-writer'],
  ['hr-review', 'hr-source-review'],
  ['hr-safety', 'hr-source-safety'],
  ['hr-revise', 'hr-source-revision']
]);

const forbiddenResetArtifacts = [
  'development/horrible/opening-design-dialogue-v2.md',
  'development/horrible/opening-order-recognition-design.md',
  'explorations/craft/horrible-dialogue-prose-2026-09-17.md'
];

function filesUnder(directory) {
  const absolute = join(root, directory);
  if (!existsSync(absolute)) return [];
  const found = [];
  for (const entry of readdirSync(absolute)) {
    const item = join(absolute, entry);
    if (statSync(item).isDirectory()) found.push(...filesUnder(relative(root, item)));
    else found.push(relative(root, item).replaceAll('\\', '/'));
  }
  return found;
}

export function auditGeminiWorkflow() {
  const failures = [];
  for (const [path, markers] of requiredText) {
    const absolute = join(root, path);
    if (!existsSync(absolute)) {
      failures.push(`missing required file: ${path}`);
      continue;
    }
    const source = readFileSync(absolute, 'utf8');
    for (const marker of markers) {
      if (!source.includes(marker)) failures.push(`${path} is missing contract marker: ${marker}`);
    }
  }

  for (const route of requiredRoutes) {
    const workflow = `.agents/workflows/${route}.md`;
    const roleSkill = roleSkills.get(route);
    const skill = roleSkill ? `.agents/skills/${roleSkill}/SKILL.md` : null;
    if (!existsSync(join(root, workflow))) failures.push(`missing workflow route: ${workflow}`);
    if (skill && !existsSync(join(root, skill))) failures.push(`missing project role skill: ${skill}`);
  }

  for (const path of forbiddenResetArtifacts) {
    if (existsSync(join(root, path))) failures.push(`deleted CH-01 artifact was restored: ${path}`);
  }
  for (const path of filesUnder('revisions/chapter-work')) {
    if (/^revisions\/chapter-work\/CH-01-v(?:2|3|4|5)\//i.test(path)) {
      failures.push(`deleted CH-01 workspace artifact was restored: ${path}`);
    }
  }

  return { result: failures.length ? 'fail' : 'pass', failures };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = auditGeminiWorkflow();
  console.log(JSON.stringify({
    ...result,
    scope: 'Gemini instruction, route, hook and CH-01 reset integrity',
    semanticComplianceGuaranteed: false
  }, null, 2));
  if (result.failures.length) process.exitCode = 1;
}
