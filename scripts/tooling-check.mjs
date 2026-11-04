import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
JSON.parse(readFileSync(join(root, 'config/upstreams.json'), 'utf8'));
JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

function checkScripts(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) checkScripts(path);
    else if (entry.name.endsWith('.mjs')) {
      execFileSync(process.execPath, ['--check', path], { stdio: 'inherit', windowsHide: true });
    }
  }
}
checkScripts(join(root, 'scripts'));

console.log('Novel OS tooling syntax/config check passed.');
