@echo off
REM Commit + push de cambios. Todo el output se guarda en git-commit.log.

cd /d "%~dp0"
set LOG=git-commit.log

if exist .git\index.lock del .git\index.lock 2>nul

> commit-msg.txt (
  echo feat: sesion 2 - 7 slides del wizard implementados
  echo.
  echo - SlideModalidad (auto-avance^)
  echo - SlideMonto (input formato miles, validacion ^>=20M^)
  echo - SlideAhorrosSubsidio (input ahorros + Si/No subsidio + input condicional^)
  echo - SlideCiudades (6 chips multi-select^)
  echo - SlideTipoCondicion (chips tipos multi + chips condicion single^)
  echo - SlideHabitaciones (4 chips single + auto-avance^)
  echo - SlideResumen (recap con presupuesto = monto + ahorros + subsidio, sin margen^)
  echo - SlidePDF placeholder (implementacion real en Sesion 4^)
  echo.
  echo - Auto-avance con 350ms delay en modalidad y habitaciones
  echo - CTA oculto (hideContinue^) en slides de auto-avance
  echo - Validacion por slide via canAdvance(^)
  echo - Progress dots dinamicos (7-^>8 al elegir "aprobado"^)
  echo - Componentes reutilizables: Chip, InputMonto, InputCompact, YesNoButtons, OptionCard
  echo - 8 ilustraciones SVG (una por slide^)
)

> %LOG% (
  echo === git add ===
  git add -A 2>&1
  echo.
  echo === git commit ===
  git commit -F commit-msg.txt 2>&1
  echo.
  echo === git push ===
  git push origin main 2>&1
)

del commit-msg.txt 2>nul
type %LOG%

echo.
echo Log en: %CD%\%LOG%
echo.
pause
