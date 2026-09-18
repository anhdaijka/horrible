import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PROJECT_OWNED_EXACT = new Set(['.gitkeep']);
const PROJECT_OWNED_PREFIXES = ['hr-source-'];

export function isProjectOwnedSkill(name) {
  return PROJECT_OWNED_EXACT.has(name) || PROJECT_OWNED_PREFIXES.some((prefix) => name.startsWith(prefix));
}

export function cleanManagedSkillDirectory(target) {
  const removed = [];
  const preserved = [];
  if (!existsSync(target)) return { removed, preserved };

  for (const entry of readdirSync(target)) {
    if (isProjectOwnedSkill(entry)) {
      preserved.push(entry);
      continue;
    }
    rmSync(join(target, entry), { recursive: true, force: true });
    removed.push(entry);
  }
  return { removed, preserved };
}

function setExplicitOnlyPolicy(skillDirectory) {
  const agentsDirectory = join(skillDirectory, 'agents');
  const policyPath = join(agentsDirectory, 'openai.yaml');
  mkdirSync(agentsDirectory, { recursive: true });

  const original = existsSync(policyPath) ? readFileSync(policyPath, 'utf8') : '';
  let updated = original;

  if (/^\s*allow_implicit_invocation\s*:/m.test(updated)) {
    updated = updated.replace(/^([ \t]*)allow_implicit_invocation\s*:\s*.*$/m, '$1allow_implicit_invocation: false');
  } else if (/^policy\s*:\s*$/m.test(updated)) {
    updated = updated.replace(/^policy\s*:\s*$/m, 'policy:\n  allow_implicit_invocation: false');
  } else {
    const prefix = updated.length > 0 && !updated.endsWith('\n') ? '\n' : '';
    updated = `${updated}${prefix}policy:\n  allow_implicit_invocation: false\n`;
  }

  if (updated !== original) writeFileSync(policyPath, updated, 'utf8');
  return policyPath;
}

export function applyCreativityFirewall(target) {
  const explicitOnly = [];
  const preserved = [];
  if (!existsSync(target)) return { explicitOnly, preserved };

  for (const entry of readdirSync(target, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const skillDirectory = join(target, entry.name);
    if (!existsSync(join(skillDirectory, 'SKILL.md'))) continue;

    if (isProjectOwnedSkill(entry.name)) {
      preserved.push(entry.name);
      continue;
    }

    setExplicitOnlyPolicy(skillDirectory);
    explicitOnly.push(entry.name);
  }

  return { explicitOnly, preserved };
}
