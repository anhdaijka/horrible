import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

// The pinned upstream bundle calls this fallback but omits its definition.
// Verify the original bytes before applying this one compatibility repair.
export function installStructuralCli(sourceFile, destinationFile, upstream) {
  const bytes = readFileSync(sourceFile);
  const originalSha256 = sha256(bytes);
  if (originalSha256 !== upstream.cliSha256) {
    throw new Error('Story Skills CLI differs from the reviewed pin; review its hash and compatibility repair before installing.');
  }
  const source = bytes.toString('utf8');
  const anchor = 'function chapterNumberFromFile(file) {';
  if (!source.includes(anchor) || /function sceneNumberFromFile\(/.test(source)) {
    throw new Error('Story Skills CLI compatibility repair no longer matches the pinned bundle.');
  }
  const repair = [
    '// Novel OS compatibility: missing scene-number fallback in pinned upstream.',
    'function sceneNumberFromFile(file) {',
    '  const match = /scene-(\\d+)/.exec(path2.basename(file));',
    '  return match ? Number.parseInt(match[1], 10) : 0;',
    '}',
    ''
  ].join('\n');
  const patched = source.replace(anchor, `${repair}${anchor}`);
  mkdirSync(dirname(destinationFile), { recursive: true });
  writeFileSync(destinationFile, patched, 'utf8');
  writeFileSync(join(dirname(destinationFile), 'novel-os-install.json'), `${JSON.stringify({
    repository: upstream.repo,
    commit: upstream.commit,
    originalSha256,
    installedSha256: sha256(patched),
    compatibilityRepair: 'missing-scene-number-fallback'
  }, null, 2)}\n`, 'utf8');
}
