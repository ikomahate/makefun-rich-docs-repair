param(
    [string]$Kit = (Join-Path $PSScriptRoot '..\..\kit\ai-judge-rich-01-kit'),
    [string]$Session = (Join-Path $env:USERPROFILE '.codex\sessions\2026\11\18\rollout-2026-11-18T15-04-06-01a1edaf-3950-7343-807f-28965f419696.jsonl')
)

$ErrorActionPreference = 'Stop'
$repository = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$kitPath = [IO.Path]::GetFullPath($Kit)
$cli = Join-Path $kitPath 'cli\makefun.mjs'
$artifactDirectory = Join-Path $repository 'artifacts'
if (-not (Test-Path -LiteralPath $Session -PathType Leaf)) {
    throw 'The original harness session log is unavailable. Do not reconstruct it.'
}
New-Item -ItemType Directory -Path $artifactDirectory -Force | Out-Null

# This build used one top-level session and no subagents or MCP calls.
# Explicit selection excludes unrelated projects discovered in the parent checkout.
# Only the official CLI redacts copies. The original recording is never changed.
Push-Location $repository
try {
    & node $cli bundle --repo $repository `
        --out (Join-Path $artifactDirectory 'transcripts.tar.gz') `
        --no-discover --session $Session `
        --harness codex --harness-version 0.170.0 `
        --provider openai --model gpt-6.1-sol --effort high --mcp none `
        --notes 'One genuine Codex CLI session; initial entrypoint, local run, then meaningful revision. No subagents. No payments, signatures or submissions performed.'
    if ($LASTEXITCODE -ne 0) { throw "Official transcript bundling failed ($LASTEXITCODE)." }
} finally {
    Pop-Location
}
