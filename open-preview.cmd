@echo off
cd /d "%~dp0"
start "LiHuizi Portfolio Dev" cmd /k start-dev.cmd
timeout /t 5 /nobreak >nul
start http://127.0.0.1:3000
