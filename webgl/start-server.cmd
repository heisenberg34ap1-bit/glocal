@echo off
cd /d "%~dp0"
echo Starting local viewer server...
node server.js
echo.
echo Server stopped. Press any key to close this window.
pause >nul
