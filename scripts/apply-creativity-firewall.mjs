import { fileURLToPath } from 'node:url';
import { applyCreativityFirewall } from './lib/skill-install-policy.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const result = applyCreativityFirewall(`${root}/.agents/skills`);

console.log(JSON.stringify({
  result: 'pass',
  policy: 'upstream skills explicit-only; project-owned hr-source skills unchanged',
  ...result
}, null, 2));
