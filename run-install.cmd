@echo off
REM npm install — instala todas las dependencias (React, Vite, Tailwind, pdfjs, xlsx).
REM Se corre una vez o cuando se agregan dependencias nuevas.

cd /d "%~dp0"
call npm install
echo.
pause
