@echo off
REM Commit + push de cambios. Todo el output se guarda en git-commit.log.

cd /d "%~dp0"
set LOG=git-commit.log

if exist .git\index.lock del .git\index.lock 2>nul

> commit-msg.txt (
  echo feat: sesion 3 - integraciones Supabase + Bold + resultados
  echo.
  echo - src/lib/api.js: POST a Supabase /buscar-cache + endpoints Bold/Claude
  echo - src/lib/shuffle.js: mulberry32 + hashCode + shuffleDeterministic + semillaDeFiltros
  echo - src/lib/bold.js: montarBotonBold(^) - injects checkout.bold.co script
  echo - src/components/SearchOverlay.jsx: overlay animado 3 portales idle-^>consulting-^>done
  echo - src/components/PropertyCard.jsx: card individual con portal, precio, ubicacion
  echo - src/components/PaywallBold.jsx: paywall con precio + bullets + Bold button
  echo - src/screens/PantallaResultados.jsx: 7 gratis mezcladas + paywall + 4 bloqueadas blur
  echo - state agrega screen: wizard ^| searching ^| results + propiedades + filtros
  echo - App.jsx maneja transicion wizard -^> overlay -^> resultados
  echo - Presupuesto sin margen: monto + ahorros + subsidio
  echo.
  echo BUG conocido: layout del resumen desborda en desktop, CTA se corta. Fix en Sesion 4.
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
