@echo off
title Mac Nattapong Portfolio Preview
cd /d "%~dp0"
set PORT=49173
echo Opening Mac Nattapong portfolio at http://127.0.0.1:49173/
start "" "http://127.0.0.1:49173/"
node server.js
pause
