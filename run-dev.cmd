@echo off
REM Levanta el servidor de desarrollo Vite en http://localhost:5173
REM Ctrl+C para detener.

cd /d "%~dp0"
call npm run dev
