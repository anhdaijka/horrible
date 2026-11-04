import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export function storyCliPath(root) {
  return join(root, '.agents', 'skills', 'story-maintenance', 'scripts', 'story.js');
}

export function requireStoryCli(root) {
  const cli = storyCliPath(root);
  if (!existsSync(cli)) {
    const error = new Error(
      'Optional structural/export CLI is not installed. Run `npm run bootstrap` for CLI commands. Reading and writing fiction do not require it.'
    );
    error.code = 'NOVEL_OS_STORY_CLI_MISSING';
    throw error;
  }
  return cli;
}

export function runStory(root, args, options = {}) {
  const cli = requireStoryCli(root);
  return execFileSync(process.execPath, [cli, ...args], {
    cwd: options.cwd ?? root,
    stdio: options.stdio ?? 'inherit',
    encoding: options.encoding,
    env: options.env ?? process.env
  });
}
