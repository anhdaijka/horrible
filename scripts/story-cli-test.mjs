import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { requireStoryCli, runStory } from './lib/story-cli.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const cli = requireStoryCli(root);
const temp = mkdtempSync(join(tmpdir(), 'novel-os-cli-'));

function story(args, cwd) {
  return runStory(root, args, { cwd, stdio: 'pipe', encoding: 'utf8' });
}

try {
  story(['init', 'CLI Portability', '--genre', 'mystery', '--pov', 'third-person-limited', '--tense', 'past', '--theme', 'truth'], temp);
  const project = join(temp, readdirSync(temp, { withFileTypes: true }).find((entry) => entry.isDirectory()).name);
  story(['add', 'character', 'Mara Vale', '--role', 'protagonist'], project);
  story(['add', 'chapter', 'First Signal', '--number', '1', '--pov', 'mara-vale', '--character', 'mara-vale'], project);
  story(['add', 'scene', 'Arrival', '--chapter', 'chapter-01', '--scene', '1', '--pov', 'mara-vale', '--character', 'mara-vale'], project);

  const scene = join(project, 'scenes', 'chapter-01-scene-01.md');
  const original = readFileSync(scene, 'utf8');
  writeFileSync(scene, original.replace(/^scene:.*\r?\n/m, ''), 'utf8');
  const invalid = spawnSync(process.execPath, [cli, 'validate', '.'], { cwd: project, encoding: 'utf8', windowsHide: true });
  assert.equal(invalid.status, 1, 'Missing scene metadata must fail schema validation.');
  const diagnostic = `${invalid.stdout}\n${invalid.stderr}`;
  assert.match(diagnostic, /missing frontmatter field scene/);
  assert.doesNotMatch(diagnostic, /is not defined|ReferenceError/);
  writeFileSync(scene, original, 'utf8');

  const chapter = join(project, 'chapters', 'chapter-01.md');
  const text = 'Mara waited beside the silent receiver.';
  const source = readFileSync(chapter, 'utf8');
  writeFileSync(chapter, `${source.slice(0, source.indexOf('## Chapter Text'))}## Chapter Text\n\n${text}\n`, 'utf8');
  story(['wordcount', '.', '--write'], project);
  story(['validate', '.'], project);
  story(['export', '.', '--out', 'manuscript.md'], project);
  assert.match(readFileSync(join(project, 'manuscript.md'), 'utf8'), /Mara waited beside the silent receiver\./);

  for (const format of ['docx', 'epub']) {
    const output = `manuscript.${format}`;
    story(['build', '.', '--format', format, '--out', output], project);
    assert.ok(existsSync(join(project, output)));
    const bytes = readFileSync(join(project, output));
    assert.equal(bytes.subarray(0, 4).toString('hex'), '504b0304', `${format} must be a ZIP package.`);
    assert.ok(bytes.includes(Buffer.from(format === 'docx' ? 'word/document.xml' : 'OEBPS/content.opf')));
    assert.ok(bytes.includes(Buffer.from(text)));
  }

  console.log(JSON.stringify({ result: 'pass', scope: 'scene fallback regression; isolated schema validation; Markdown/DOCX/EPUB export package smoke', literaryQualityCertified: false }, null, 2));
} finally {
  rmSync(temp, { recursive: true, force: true });
}
