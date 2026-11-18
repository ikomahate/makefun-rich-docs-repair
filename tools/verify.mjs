import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const runRoot = join(repository, 'artifacts', `verification-${Date.now()}`);
mkdirSync(runRoot, { recursive: true });
const outputs = [];
const runs = [];

// Separate processes, working directories and initially absent nested output folders.
for (const runNumber of [1, 2]) {
  const workingDirectory = join(runRoot, `process-${runNumber}`);
  const outputDirectory = join(workingDirectory, 'output with spaces', 'nested');
  mkdirSync(workingDirectory);
  const run = spawnSync(process.execPath, [join(repository, 'main.ts')], {
    cwd: workingDirectory,
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outputDirectory },
    encoding: 'utf8',
    timeout: 10_000,
  });
  assert.ifError(run.error);
  assert.equal(run.status, 0, run.stderr);
  assert.equal(run.stdout, '');
  assert.equal(run.stderr, '');
  assert.deepEqual(readdirSync(outputDirectory), ['entry.txt']);
  const bytes = readFileSync(join(outputDirectory, 'entry.txt'));
  const decoded = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
  assert.ok(decoded.trim(), 'The entry cannot be whitespace only');
  assert.ok(!decoded.startsWith('\uFEFF'), 'The output must have no BOM');
  assert.ok(!decoded.endsWith('\n'), 'No incidental trailing line ending');
  assert.ok(Array.from(decoded).length <= 1000, 'Unicode code point limit');
  assert.deepEqual(Buffer.from(decoded, 'utf8'), bytes);
  outputs.push(bytes);
  runs.push({ run: runNumber, exit: run.status, characters: Array.from(decoded).length, bytes: bytes.length });
}

assert.deepEqual(outputs[0], outputs[1], 'Independent runs must write identical bytes');
const report = {
  checked_at: new Date().toISOString(),
  node: process.version,
  platform: process.platform,
  runs,
  identical: true,
  sha256: createHash('sha256').update(outputs[0]).digest('hex'),
  network: 'Entrypoint imports only node:fs and node:path; no network or child-process calls. Host sandbox disables network.',
};
writeFileSync(join(repository, 'artifacts', 'verification.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
