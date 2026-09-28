$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

if (-not (Get-Command k6 -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: k6 is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

Set-Location $PSScriptRoot

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
    $consoleLog = Join-Path $env:TEMP "bragi-k6-console-$PID.log"
    $k6Log      = Join-Path $env:TEMP "bragi-k6-log-$PID.log"

    $stdout = & k6 run --console-output $consoleLog "--log-output=file=$k6Log" $test | Out-String
    $exitCode = $LASTEXITCODE

    $output = $stdout
    foreach ($extra in @($consoleLog, $k6Log)) {
        if (Test-Path $extra) {
            $output += (Get-Content $extra -Raw)
            Remove-Item $extra -ErrorAction SilentlyContinue
        }
    }

    $passed = ([regex]::Matches($output, [char]0x2713)).Count
    $failed = ([regex]::Matches($output, [char]0x2717)).Count
    $checkTotal = $passed + $failed

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

$passCount = ($results | Where-Object { $_.Status -eq "PASS" }).Count
$failCount = ($results | Where-Object { $_.Status -eq "FAIL" }).Count

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
