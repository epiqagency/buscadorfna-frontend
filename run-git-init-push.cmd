@echo off
REM Init del repo + primer commit + push a github.com/epiqagency/buscadorfna-frontend
REM Todo el output tambien se guarda en git-init.log por si la ventana se cierra.

cd /d "%~dp0"
set LOG=git-init.log
set REPO_URL=https://github.com/epiqagency/buscadorfna-frontend.git

if exist .git (
  echo Ya existe .git en esta carpeta. Sale.
  pause
  exit /b 0
)

> %LOG% (
  echo === git init ===
  git init -b main 2>&1
  echo.
  echo === git add + commit ===
  git add -A 2>&1
  git commit -m "feat: iteracion 3 sesion 1 - setup React+Vite+Tailwind + AppShell base" 2>&1
  echo.
  echo === git remote add + push ===
  git remote add origin %REPO_URL% 2>&1
  git push -u origin main 2>&1
)

type %LOG%
echo.
echo Log guardado en: %CD%\%LOG%
echo.
pause
