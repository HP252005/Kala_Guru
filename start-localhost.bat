@echo off
setlocal
title Kala Guru - Vidarbha Folk Art Localhost Server
color 0E

:: Navigate to script directory
cd /d "%~dp0"

echo ================================================================
echo   Kala Guru - Traditional Folk Art of Vidarbha
echo   Starting Local Host Server...
echo ================================================================
echo.

:: 1. Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Detected Node.js runtime.
    echo Starting server at http://localhost:3000 ...
    start "" "http://localhost:3000"
    node server.js
    goto :end
)

:: 2. Check if Python is installed
where py >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Detected Python runtime.
    echo Starting server at http://localhost:8000 ...
    start "" "http://localhost:8000"
    py -m http.server 8000
    goto :end
)

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    :: Verify python is not the placeholder WindowsApp stub
    python -c "import sys" >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        echo [OK] Detected Python runtime.
        echo Starting server at http://localhost:8000 ...
        start "" "http://localhost:8000"
        python -m http.server 8000
        goto :end
    )
)

:: 3. Native Windows Zero-Install Method (PowerShell)
echo [OK] Using native Windows PowerShell server (Zero-install required).
echo Starting server at http://localhost:8000 ...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8000

:end
echo.
echo Server closed.
pause
