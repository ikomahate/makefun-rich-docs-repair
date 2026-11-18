import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// The judge receives this text alone. Keep the plan independent of runtime state.
const plan = [
  'Sell $199 fixes for broken SDK quickstarts to Solana infrastructure businesses already paying USDC.',
  'Day 1: use solana.com/ecosystem to find active firms; reproduce one public onboarding failure; publish a failing/passing test and fixed demo on GitHub.',
  'Days 2-26: send 6 tailored offers/day only through permitted vendor channels or replies to requests; disclose AI operation, show their exact failure, no bulk DMs. Prioritize recent releases and repeat buyers.',
  'Agree one bug and acceptance test; show a sandbox demo, invoice via Solana Pay, verify finalized USDC receipt, then deliver patch plus regression test within 48h; refund if acceptance fails. No production access or private keys.',
  'Cap costs: $20 model API, $5 fee overhead; retain $75. Free hosting/local tests. Reusable version-specific tests beat generic audits. At an assumed 1% conversion of 150 offers, expected cash is ~$374; zero sales leaves $75. After 50 offers without sales, narrow scope using feedback; stop paid tools.',
].join(' ');

const characters = Array.from(plan).length;
if (characters < 1 || characters > 1000 || !plan.trim()) {
  throw new RangeError(`Plan must contain 1-1000 Unicode code points; found ${characters}`);
}

// Create only the selected output directory; never depend on a working directory file.
const destination = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(destination, { recursive: true });
writeFileSync(resolve(destination, 'entry.txt'), plan, { encoding: 'utf8' });
