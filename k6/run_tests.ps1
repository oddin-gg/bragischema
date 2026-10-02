$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

if (-not (Get-Command k6 -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: k6 is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

Set-Location $PSScriptRoot

# Temp directory for the k6 capture files. $env:TEMP is a Windows-ism and is
# unset under pwsh on Linux -- where Join-Path would throw under
# $ErrorActionPreference = "Stop" and kill the runner before a single test ran.
# This repo's k6 CI job runs on [self-hosted, linux], so that is not
# hypothetical. GetTempPath() resolves on every platform.
function Get-TempRoot {
    if ($env:TEMP)    { return $env:TEMP }
    if ($env:TMPDIR)  { return $env:TMPDIR }
    return [System.IO.Path]::GetTempPath()
}

# Pull `reason=...` off a preflight sentinel line.
#
# The sentinel reaches us inside k6's logfmt wrapper, so the payload's own
# quotes arrive escaped:
#
#   level=info msg="BRAGI_PREFLIGHT_UNREACHABLE reason=connection error: desc = \"transport: ...\""
#
# A `[^"]*` capture stops dead at that first escaped quote and yields
# `connection error: desc = \` -- dropping the dial error, which is the entire
# diagnostic the preflight exists to hand over. Take the rest of the line
# instead, then unwrap logfmt's own trailing quote and unescape.
function Get-PreflightReason {
    param([string]$Text, [string]$Sentinel, [string]$Fallback)

    $line = ($Text -split "`r?`n" | Where-Object { $_ -match [regex]::Escape($Sentinel) } | Select-Object -First 1)
    if (-not $line) { return $Fallback }
    if ($line -notmatch 'reason=(.*)$') { return $Fallback }

    $reason = $matches[1].Trim()
    if ($reason.EndsWith('"')) { $reason = $reason.Substring(0, $reason.Length - 1) }
    $reason = $reason.Replace('\"', '"').Trim()
    if ($reason) { return $reason } else { return $Fallback }
}

# --- Auth preflight -------------------------------------------------------
# One unary MatchTimelineSports call before the suite. Every RPC on this
# service authenticates the same way, so a rejected token means all 9 tests
# would fail on PermissionDenied — which reads like 9 product defects instead
# of one expired token. Stop here with a single unambiguous result.
#
# Exit codes this script uses:
#   0  all tests passed
#   1  one or more tests failed
#   3  AUTH FAILED     - token rejected; no tests were run
#   4  UNREACHABLE     - endpoint not reachable (VPN down); no tests were run
#
# Set BRAGI_SKIP_PREFLIGHT=1 to bypass (e.g. when deliberately testing the
# service's own auth behaviour).
if ($env:BRAGI_SKIP_PREFLIGHT -ne "1") {
    Write-Host "  Preflight: checking BRAGI_TOKEN against MatchTimelineSports ..." -ForegroundColor Gray

    # Capture via --console-output rather than `2>&1`. k6 writes console.log to
    # stderr, and under PS 5.1 redirecting a native command's stderr wraps each
    # line in an ErrorRecord (NativeCommandError) — which $ErrorActionPreference
    # = "Stop" turns into a terminating error, killing the runner before it can
    # report anything. Writing to a file keeps stderr untouched.
    $preflightLog = Join-Path (Get-TempRoot) "bragi-preflight-$PID.log"
    & k6 run --quiet --console-output $preflightLog preflight.js | Out-Null
    $preflight = if (Test-Path $preflightLog) { Get-Content $preflightLog -Raw } else { "" }
    Remove-Item $preflightLog -ErrorAction SilentlyContinue

    if ($preflight -match 'BRAGI_PREFLIGHT_AUTH_FAILED') {
        $reason = Get-PreflightReason -Text $preflight -Sentinel 'BRAGI_PREFLIGHT_AUTH_FAILED' -Fallback 'token rejected by Bragi'
        Write-Host ""
        Write-Host "  ##############################################" -ForegroundColor Red
        Write-Host "  #   AUTH FAILED - check BRAGI_TOKEN          #" -ForegroundColor Red
        Write-Host "  ##############################################" -ForegroundColor Red
        Write-Host ""
        Write-Host "    $reason" -ForegroundColor Red
        Write-Host ""
        Write-Host "    Bragi rejected the token, so all 9 tests would fail for this" -ForegroundColor Yellow
        Write-Host "    one reason. Skipping the suite - this is NOT a product failure." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "    Set a valid token and rerun:" -ForegroundColor Gray
        Write-Host '      $env:BRAGI_TOKEN = "<token>"' -ForegroundColor Gray
        Write-Host "      .\run_tests.ps1" -ForegroundColor Gray
        Write-Host ""
        exit 3
    }

    if ($preflight -match 'BRAGI_PREFLIGHT_UNREACHABLE') {
        $reason = Get-PreflightReason -Text $preflight -Sentinel 'BRAGI_PREFLIGHT_UNREACHABLE' -Fallback 'endpoint not reachable'
        Write-Host ""
        Write-Host "  ERROR: Bragi endpoint unreachable - is the VPN connected?" -ForegroundColor Red
        Write-Host "         $reason" -ForegroundColor Red
        Write-Host ""
        exit 4
    }

    if ($preflight -notmatch 'BRAGI_PREFLIGHT_OK') {
        # Preflight itself broke (k6 error, proto load failure). Don't guess -
        # surface it rather than running a suite we can't trust.
        Write-Host ""
        Write-Host "  ERROR: preflight did not report a result. Output:" -ForegroundColor Red
        Write-Host $preflight -ForegroundColor DarkGray
        Write-Host ""
        exit 4
    }

    Write-Host "  Preflight: token accepted." -ForegroundColor Green
}

$tests = @(
    "match_timeline_sports.js",
    "match_timeline_tournaments.js",
    "team_profile.js",
    "match_timeline_filters.js",
    "match_timeline_sports_feed.js",
    "match_timeline_tournaments_feed.js",
    "match_timeline_feed.js",
    "live_data_feed.js",
    "match_events_feed.js"
)

Write-Host ""
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host "    Bragi gRPC - K6 Test Suite" -ForegroundColor Cyan
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host ""

$results = @()
$allFailures = @()
$total = $tests.Count
$idx = 0

foreach ($test in $tests) {
    $idx++
    Write-Host "  [$idx/$total] Running $test ..." -ForegroundColor Gray

    # Route k6's stderr streams (console.log + k6's own level=... lines) into
    # files and merge them into $output, instead of `2>&1` into the pipeline.
    # Under PS 5.1, redirecting a native command's stderr wraps every line in a
    # NativeCommandError ErrorRecord; combined with $ErrorActionPreference =
    # "Stop" at the top of this script, the FIRST failing test ("thresholds on
    # metrics 'checks' have been crossed" goes to stderr) killed the whole
    # runner mid-loop — so no results table was printed and the suite's exit
    # code came from the terminating error rather than from the tests.
    $consoleLog = Join-Path (Get-TempRoot) "bragi-k6-console-$PID.log"
    $k6Log      = Join-Path (Get-TempRoot) "bragi-k6-log-$PID.log"

    $stdout = & k6 run --console-output $consoleLog "--log-output=file=$k6Log" $test | Out-String
    $exitCode = $LASTEXITCODE

    $output = $stdout
    foreach ($extra in @($consoleLog, $k6Log)) {
        if (Test-Path $extra) {
            $output += (Get-Content $extra -Raw)
            Remove-Item $extra -ErrorAction SilentlyContinue
        }
    }

    # Read k6's own check counters rather than counting tick/cross glyphs in
    # the output. Those glyphs also mark THRESHOLD lines and other rows, so
    # glyph-counting invented numbers: a test that ran ZERO checks reported
    # "[2/3]" purely from its two threshold lines. Printing a fabricated check
    # count beside a verdict is the same sin as the vacuous PASS this suite
    # exists to catch, and the README tells readers to trust checks_total.
    #
    # k6 prints:  checks_succeeded...: 100.00% 2691 out of 2691
    if ($output -match 'checks_succeeded[.\s]*:\s*[\d.]+%\s+(\d+)\s+out of\s+(\d+)') {
        $passed     = [int]$matches[1]
        $checkTotal = [int]$matches[2]
    } else {
        # No checks metric at all — k6 omits it when no check() ran.
        $passed     = 0
        $checkTotal = 0
    }
    $failed = $checkTotal - $passed

    $failedLines = $output -split "`n" | Where-Object { $_ -match [char]0x2717 -and $_ -notmatch "rate=" }

    $result = [PSCustomObject]@{
        File = $test
        Passed = $passed
        Total = $checkTotal
        Status = if ($exitCode -eq 0) { "PASS" } else { "FAIL" }
    }
    $results += $result

    foreach ($line in $failedLines) {
        $trimmed = $line.Trim()
        if ($trimmed) {
            $allFailures += "    $test : $trimmed"
        }
    }
}

Write-Host ""
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host "    BRAGI TEST RESULTS" -ForegroundColor Cyan
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host ""

foreach ($r in $results) {
    $color = if ($r.Status -eq "PASS") { "Green" } else { "Red" }
    $icon = if ($r.Status -eq "PASS") { "PASS" } else { "FAIL" }
    Write-Host ("  {0}  {1,-45} [{2}/{3}]" -f $icon, $r.File, $r.Passed, $r.Total) -ForegroundColor $color
}

# @() around each filter is load-bearing under PS 5.1. Where-Object returns a
# SCALAR when exactly one object matches, and a scalar PSCustomObject has no
# .Count -- so with exactly ONE failing test $failCount was $null, the summary
# printed "8 passed,  failed out of 9", and `if ($null -gt 0)` was false, so the
# script skipped `exit 1` and reported success for a run with a failure in it.
#
# Two or more failures return an array, where .Count works -- which is why every
# earlier test of this runner (all 9 failing on a bad token) missed it. Exactly
# the failure this suite exists to prevent, so: always @().
$passCount = @($results | Where-Object { $_.Status -eq "PASS" }).Count
$failCount = @($results | Where-Object { $_.Status -eq "FAIL" }).Count

Write-Host ""
Write-Host "  ------------------------------------------" -ForegroundColor Cyan
Write-Host "   $passCount passed, $failCount failed out of $total" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Red" })
Write-Host "  ------------------------------------------" -ForegroundColor Cyan

if ($allFailures.Count -gt 0) {
    Write-Host ""
    Write-Host "  FAILED CHECKS:" -ForegroundColor Red
    Write-Host ""
    foreach ($f in $allFailures) {
        Write-Host $f -ForegroundColor Red
    }
    Write-Host ""
}

if ($failCount -gt 0) {
    exit 1
}

exit 0
