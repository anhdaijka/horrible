import { auditGeminiWorkflow } from '../../scripts/gemini-workflow-check.mjs';

const phase = process.argv[2] ?? 'unknown';
let payload = {};
try {
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  if (raw.trim()) payload = JSON.parse(raw);
} catch {
  // Contract validation remains mandatory even when a Gemini version sends no hook payload.
}

const audit = auditGeminiWorkflow();
const failures = [...audit.failures];
const protectedFragments = [
  'revisions/workflow-archive/',
  'revisions/chapter-work/ch-01-v2/',
  'revisions/chapter-work/ch-01-v3/',
  'revisions/chapter-work/ch-01-v4/',
  'revisions/chapter-work/ch-01-v5/',
  'development/horrible/opening-design-dialogue-v2.md',
  'development/horrible/opening-order-recognition-design.md',
  'explorations/craft/horrible-dialogue-prose-2026-09-17.md'
];

if (phase === 'tool') {
  const toolName = String(payload.tool_name ?? payload.toolName ?? payload.name ?? '').toLowerCase();
  const toolInput = payload.tool_input ?? payload.toolInput ?? payload.input ?? payload.arguments ?? {};
  const serialized = JSON.stringify(toolInput).replaceAll('\\', '/').toLowerCase();
  const protectedHit = protectedFragments.find((fragment) => serialized.includes(fragment));
  const directWrite = toolName === 'write_file' || toolName === 'replace';
  const shellAccess = toolName === 'run_shell_command';
  if (protectedHit && (directWrite || shellAccess)) {
    failures.push(`mutation of protected historical/reset target is forbidden: ${protectedHit}`);
  }
}

if (failures.length) {
  process.stderr.write(`Horrible Gemini workflow guard blocked ${phase}:\n- ${failures.join('\n- ')}\n`);
  process.exitCode = 2;
} else {
  process.stdout.write(JSON.stringify({}));
}
