import { existsSync, readdirSync, rmSync } from 'node:fs';
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
