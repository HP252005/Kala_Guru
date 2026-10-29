# Kala Guru - PowerShell One-Click Localhost Launcher
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if ([string]::IsNullOrWhiteSpace($scriptDir)) {
    $scriptDir = $PSScriptRoot
}
if ([string]::IsNullOrWhiteSpace($scriptDir)) {
    $scriptDir = (Get-Location).Path
}

Set-Location $scriptDir

Write-Host "================================================================" -ForegroundColor DarkYellow
Write-Host "  🎨 KALA GURU - STARTING LOCAL HOST SERVER..." -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor DarkYellow

& "$scriptDir\server.ps1" -Port 8000 -Root $scriptDir
