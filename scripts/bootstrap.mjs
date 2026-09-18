import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyCreativityFirewall, cleanManagedSkillDirectory, isProjectOwnedSkill } from './lib/skill-install-policy.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const lock = JSON.parse(readFileSync(join(root, 'config/upstreams.json'), 'utf8'));
const args = new Set(process.argv.slice(2));
const clean = args.has('--clean');
const withBetterWriting = args.has('--with-better-writing');
const target = join(root, '.agents/skills');

function run(cmd, argv, options = {}) {
  execFileSync(cmd, argv, { stdio: 'inherit', ...options });
}

function checkoutPinned(entry, parent) {
  const dir = join(parent, entry.repo.replace('/', '__'));
  mkdirSync(dir, { recursive: true });
  run('git', ['init', '-q'], { cwd: dir });
  run('git', ['remote', 'add', 'origin', entry.url], { cwd: dir });
  run('git', ['fetch', '--depth', '1', 'origin', entry.commit], { cwd: dir });
  run('git', ['checkout', '-q', '--detach', 'FETCH_HEAD'], { cwd: dir });
  return dir;
}

function copyDir(source, destination) {
  rmSync(destination, { recursive: true, force: true });
  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true });
}

try {
  run('git', ['--version']);
  run(process.execPath, ['--version']);
} catch {
  console.error('Novel OS bootstrap requires Git and Node.js 18+.');
  process.exit(1);
}

mkdirSync(target, { recursive: true });
if (clean) {
  const { removed, preserved } = cleanManagedSkillDirectory(target);
  console.log(`Cleaned ${removed.length} upstream-managed skill(s); preserved ${preserved.length} project-owned entry/entries.`);
}

const temp = mkdtempSync(join(tmpdir(), 'novel-os-'));
try {
  console.log('\n[1/3] Installing pinned Story Skills...');
  const storyRepo = checkoutPinned(lock.storySkills, temp);
  const storySkillRoot = join(storyRepo, lock.storySkills.copy);
  for (const name of readdirSync(storySkillRoot)) {
    const source = join(storySkillRoot, name);
    if (!existsSync(join(source, 'SKILL.md'))) continue;
    if (isProjectOwnedSkill(name)) throw new Error(`Upstream skill collides with project-owned namespace: ${name}`);
    copyDir(source, join(target, name));
  }

  console.log('\n[2/3] Installing selected fiction craft skills...');
  const craftRepo = checkoutPinned(lock.jwynia, temp);
  for (const rel of lock.jwynia.selected) {
    const source = join(craftRepo, rel);
    if (!existsSync(join(source, 'SKILL.md'))) throw new Error(`Missing selected skill: ${rel}`);
    const name = basename(rel);
    if (isProjectOwnedSkill(name)) throw new Error(`Upstream skill collides with project-owned namespace: ${name}`);
    copyDir(source, join(target, name));
  }

  if (withBetterWriting) {
    console.log('\n[3/3] Installing optional Better Writing skill...');
    const bwRepo = checkoutPinned(lock.betterWriting, temp);
    copyDir(bwRepo, join(target, 'better-writing'));
    rmSync(join(target, 'better-writing', '.git'), { recursive: true, force: true });
  } else {
    console.log('\n[3/3] Better Writing not requested (optional).');
  }

  const firewall = applyCreativityFirewall(target);
  console.log(`Creativity firewall: ${firewall.explicitOnly.length} upstream skill(s) set to explicit-only; ${firewall.preserved.length} project-owned skill(s) left discoverable.`);

  console.log('\nNovel OS bootstrap complete.');
  console.log(`Skills installed in ${target}`);
  console.log('Next: npm run init-story -- "Your Novel" --genre <genre>');
} finally {
  rmSync(temp, { recursive: true, force: true });
}
