# Prepared submission

Deadline: **18 November 2026, 11:30 UTC / 18:30 Bangkok**. A receipt must arrive before the deadline. The kit opened 17 November at 11:30 UTC. The genuine build session began 18 November at 08:04:40 UTC, inside the window.

Local Node is v22.23.5, Git is 2.56.1.windows.1, GitHub CLI is 2.104.0 and the recorded harness is Codex CLI 0.170.0. The session records provider `openai`, model `gpt-6.1-sol` and effort `high`; those recorded facts are used in the bundle. The official kit is `../kit/ai-judge-rich-01-kit`. Its `program/v1` gate reads only `entry.txt`; the judge is server-side, with no local strategy score.

## Verified local behavior

The revised entry writes **990 Unicode code points / 990 UTF-8 bytes**, without a BOM or trailing newline. Two fresh-process runs in separate working directories wrote identical bytes:

```text
SHA-256 57f530d00fb1043d90f7b9440a9d65e3cb730f6793d15da3c5ef9151028bef98
```

Run `node tools/verify.mjs` to reproduce the local checks. Reports go under ignored `artifacts/`. `main.ts` uses only filesystem and path standard-library imports and does no networking.

## Publishing from a network-enabled session

GitHub authentication could not be verified: `gh auth status` reported that the sandbox forbids the TCP connection to `api.github.com`. This does not establish whether the stored token is valid. A real `gh repo create` attempt failed at the same network boundary. No new remote repository was created, and no push succeeded. The intended public destination is `https://github.com/ikomahate/makefun-rich-docs-repair`.

The local repository was initialized successfully, but staging and committing failed because the sandbox denies writing `.git/index.lock`. There is currently no commit SHA. The official local check therefore uses `--worktree`; repeat it against HEAD after committing in a session with normal Git metadata access.

Run these commands from this workspace when normal GitHub access is available. Creation, About metadata and push are already authorized by the original request; no fee or submission is included here.

```powershell
git add -- .gitignore .makefun/owner.json LICENSE README.md STRATEGY.md SUBMISSION.md main.ts tools/verify.mjs tools/bundle.ps1
git -c user.name='Quickstart Rescue' -c user.email='ikomahate@users.noreply.github.com' commit -m 'Build original quickstart repair plan with deterministic offline output'
gh auth status
gh repo create ikomahate/makefun-rich-docs-repair --public --source . --remote origin --description 'Tested SDK quickstart repair strategy for Make.fun ai-judge-rich-01' --homepage https://make.fun/c/ai-judge-rich-01
gh repo edit ikomahate/makefun-rich-docs-repair --homepage https://make.fun/c/ai-judge-rich-01 --add-topic makefun
git push -u origin main
gh repo view ikomahate/makefun-rich-docs-repair --json nameWithOwner,url,isPrivate,createdAt,homepageUrl,repositoryTopics
git rev-parse HEAD
```

If creation succeeds but a later command fails, continue with the failed step rather than creating a second repository. If the name is occupied, choose a fresh repository and update both repository-specific badges before committing and rebuilding the transcript bundle. After successful publication, update the README's pending-publication sentence and commit that accurate status as well.

The claim file contains the existing Make.fun account's **public** Solana wallet. No private key was copied or printed. README contains the three official live badge endpoints for the intended owner/name, and all link to the competition page. GitHub About cannot be set until the remote exists.

## Genuine transcripts and official check

The original recording remains in Codex's session store, unchanged. No transcripts were fabricated, summarized, hand-exported or edited. The official bundler automatically redacts its copies, records the user's original opening prompt, collects instruction context and marks the system setup as carried in the session. This build used no MCP server calls and no subagents. Ordinary shell commands and the built-in web tool are not MCP servers.

```powershell
powershell -NoProfile -File tools/bundle.ps1
$kitPath = (Resolve-Path '..\kit\ai-judge-rich-01-kit').Path
$cliPath = Join-Path $kitPath 'cli\makefun.mjs'
node $cliPath check --kit $kitPath --repo . --transcripts artifacts/transcripts.tar.gz
```

Until committing is possible, append `--worktree` to the check command. The same official transcript gate runs, but remote commit eligibility remains pending.

Bundle after the final source commit so its metadata names the submitted commit. Retain the complete bundle with its manifest and run record. A log collected during an ongoing session is a snapshot of the genuine recording at that time, so rebuild if further implementation changes occur. Do not commit raw logs or bundles to GitHub. The official check tests eligibility and transcript authorship; it does not predict the AI judge's ranking. Remote ownership, creation time, repository visibility, About metadata and fee status still need server-side verification.

A source-bundle fallback was explored before writing the entry. `makefun init` failed while fetching the competition requirements due to the same network restriction, so this repository has **no drand freshness anchor** and is prepared for the GitHub route. Do not submit it with `--source`, invent an anchor, rewrite its history or modify transcript timestamps.

## Only after the user's explicit approval

**No fee payment, transaction signing or submission has been authorized.** The commands below are prepared for review and have not been executed. The wallet keypair must remain outside this repository; set `MAKEFUN_KEYPAIR` locally to its existing private path without printing its contents. Do not create a second account. Verify that the wallet is linked to the existing account and that the fee has not already been paid.

```powershell
$kitPath = (Resolve-Path '..\kit\ai-judge-rich-01-kit').Path
$cliPath = Join-Path $kitPath 'cli\makefun.mjs'
node $cliPath fee show ai-judge-rich-01
# Requires approval: pays the $1 USDC fee if it is still unpaid.
node $cliPath fee pay ai-judge-rich-01 --keypair $env:MAKEFUN_KEYPAIR

# Requires approval: signs the entry message and submits this commit and bundle.
$entryCommit = git rev-parse HEAD
node $cliPath submit --competition ai-judge-rich-01 --repo-url https://github.com/ikomahate/makefun-rich-docs-repair --commit $entryCommit --title 'Quickstart Rescue' --bundle artifacts/transcripts.tar.gz --keypair $env:MAKEFUN_KEYPAIR
node $cliPath status
```

Check that publication and the official check pass, then obtain the user's explicit approval for fee payment, signing and submission before running this last block. Read the returned submission receipt and status; do not infer success from a push alone.
