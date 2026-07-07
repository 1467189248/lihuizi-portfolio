@echo off
title LiHuizi Portfolio Dev Server
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"
npm run dev
echo.
echo Dev server stopped. Press any key to close this window.
pause >nul
