import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyCreativityFirewall, cleanManagedSkillDirectory, isProjectOwnedSkill } from './lib/skill-install-policy.mjs';
import { installStructuralCli } from './lib/story-cli-install.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const lock = JSON.parse(readFileSync(join(root, 'config/upstreams.json'), 'utf8'));
const args = new Set(process.argv.slice(2));
const allowed = new Set(['--clean', '--with-craft-skills', '--with-better-writing', '--help']);
for (const argument of args) {
  if (!allowed.has(argument)) throw new Error(`Unknown bootstrap option: ${argument}`);
}
if (args.has('--help')) {
  console.log('Optional CLI installation: npm run bootstrap [-- --clean]');
  console.log('Default: pinned structural validation/export CLI only; no authoring skills.');
  console.log('Opt in: --with-craft-skills, --with-better-writing. Upstream skills stay explicit-only.');
  console.log('Reading, planning and writing fiction require no bootstrap.');
  process.exit(0);
}
const clean = args.has('--clean');
const withCraftSkills = args.has('--with-craft-skills');
const withBetterWriting = args.has('--with-better-writing');
const target = join(root, '.agents/skills');

function run(cmd, argv, options = {}) {
  execFileSync(cmd, argv, { stdio: 'inherit', windowsHide: true, ...options });
}

function checkoutPinned(entry, parent) {
  const dir = join(parent, entry.repo.replace('/', '__'));
  mkdirSync(dir, { recursive: true });
  run('git', ['init', '-q'], { cwd: dir });
  run('git', ['remote', 'add', 'origin', entry.url], { cwd: dir });
  run('git', ['fetch', '--depth', '1', 'origin', entry.commit], { cwd: dir });
  run('git', ['-c', 'core.autocrlf=false', 'checkout', '-q', '--detach', 'FETCH_HEAD'], { cwd: dir });
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
  console.log('\nInstalling optional pinned structural/export CLI...');
  const storyRepo = checkoutPinned(lock.storySkills, temp);
  const storySkillRoot = join(storyRepo, lock.storySkills.copy);

  if (withCraftSkills) {
    for (const name of readdirSync(storySkillRoot)) {
      const source = join(storySkillRoot, name);
      if (!existsSync(join(source, 'SKILL.md'))) continue;
      if (isProjectOwnedSkill(name)) throw new Error(`Upstream skill collides with project-owned namespace: ${name}`);
      copyDir(source, join(target, name));
    }

    console.log('\nInstalling explicitly requested craft skills...');
    const craftRepo = checkoutPinned(lock.jwynia, temp);
    for (const rel of lock.jwynia.selected) {
      const source = join(craftRepo, rel);
      if (!existsSync(join(source, 'SKILL.md'))) throw new Error(`Missing selected skill: ${rel}`);
      const name = basename(rel);
      if (isProjectOwnedSkill(name)) throw new Error(`Upstream skill collides with project-owned namespace: ${name}`);
      copyDir(source, join(target, name));
    }
  } else {
    // A tool bundle has no SKILL.md and cannot become an implicit authoring role.
    copyDir(join(storySkillRoot, 'story-maintenance', 'scripts'), join(target, 'story-maintenance', 'scripts'));
    rmSync(join(target, 'story-maintenance', 'SKILL.md'), { force: true });
  }

  installStructuralCli(
    join(storySkillRoot, 'story-maintenance', 'scripts', 'story.js'),
    join(target, 'story-maintenance', 'scripts', 'story.js'),
    lock.storySkills
  );

  if (withBetterWriting) {
    console.log('\nInstalling explicitly requested Better Writing skill...');
    const bwRepo = checkoutPinned(lock.betterWriting, temp);
    copyDir(bwRepo, join(target, 'better-writing'));
    rmSync(join(target, 'better-writing', '.git'), { recursive: true, force: true });
  } else {
    console.log('\nBetter Writing not requested.');
  }

  const firewall = applyCreativityFirewall(target);
  console.log(`Creativity firewall: ${firewall.explicitOnly.length} upstream skill(s) set to explicit-only; ${firewall.preserved.length} project-owned skill(s) left discoverable.`);

  console.log('\nNovel OS bootstrap complete.');
  console.log(`Skills installed in ${target}`);
  console.log('CLI validation/export is available. This does not certify literary quality.');
  if (existsSync(join(root, 'story.md'))) {
    console.log('Existing story preserved. Use npm run story:check when structural validation is needed.');
  } else {
    console.log('For a new story only: npm run init-story -- "Your Novel" --genre <genre>');
  }
} finally {
  rmSync(temp, { recursive: true, force: true });
}
