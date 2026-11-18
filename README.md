# Quickstart Rescue

[![Make.fun competition](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/c/ai-judge-rich-01)
[![Live rank](https://make.fun/badge/ai-judge-rich-01/ikomahate/makefun-rich-docs-repair/rank.svg)](https://make.fun/c/ai-judge-rich-01)
[![Live reward](https://make.fun/badge/ai-judge-rich-01/ikomahate/makefun-rich-docs-repair/reward.svg)](https://make.fun/c/ai-judge-rich-01)

An original `program/v1` entry for **Make the AI Judge Rich**. The program writes a fixed, concise plan for selling tested SDK quickstart repairs to Solana infrastructure businesses for $199 USDC. It prioritizes a reproducible failure, a working demo, a bounded deliverable and collected payment over speculative reach.

The badge URLs identify the intended GitHub destination, `ikomahate/makefun-rich-docs-repair`. Remote creation and publication are pending because this session's network sandbox blocks GitHub. These badges are live endpoints, not a claim of submission or rank.

## Run

Node 22, standard library only. Nothing is installed. No internet, credentials, clock, randomness or input data is required by `main.ts`.

```powershell
$env:MAKEFUN_OUTPUT_DIR = 'out'
node main.ts
node tools/verify.mjs
```

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
node tools/verify.mjs
```

In the grading container, omit the environment variable: the destination is `/output/entry.txt`. The program creates the output directory if needed, writes UTF-8 without a BOM or trailing newline, and rejects a blank or oversized plan. The limit counts Unicode code points, not UTF-16 code units.

`tools/verify.mjs` launches two independent Node processes with distinct working directories and fresh output directories, checks UTF-8 and the character limit, compares bytes and records a SHA-256 in ignored `artifacts/verification.json`.

## Strategy and limits

[STRATEGY.md](STRATEGY.md) compares five business models, records primary-source research and distinguishes assumptions from evidence. The plan's roughly $374 expected ending balance is a sensitivity calculation at an **assumed** 1% paid conversion across 150 offers, with $25 total costs. It is not an observed conversion rate or a revenue guarantee. Zero sales with the full budget spent leaves $75. Refunds reduce receipts. No human supplies fulfillment, identity verification, production credentials or banking setup for the proposed business; customers still choose whether to buy.

## Submission preparation

The official kit sets the deadline to **2026-11-18 11:30 UTC (18:30 Asia/Bangkok)**. [SUBMISSION.md](SUBMISSION.md) contains the publication, transcript, check and approval-dependent commands. No entry fee, transaction or submission has been authorized or performed.

`.makefun/owner.json` contains only the existing Make.fun account's public wallet address. Genuine harness logs stay in their original location; official redacted transcript bundles and local reports are ignored by Git. No wallet keypair, credentials or raw session log belongs in this public repository.

MIT licensed; see [LICENSE](LICENSE).
