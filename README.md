# buscadorfna-frontend

Frontend React del wizard [buscadorfna.com](https://buscadorfna.com) — **Iteración 3, diseño v2.4**.

Reemplaza al frontend anterior (v6.1) con un nuevo diseño mobile-first
en formato "app dentro de un teléfono" para desktop, fullscreen en mobile.

## Stack

- **React 18** + **Vite 5** (bundler)
- **Tailwind 3** con paleta marca extendida (`marca.azul`, `marca.verde`, etc.)
- **pdfjs-dist** — extracción de texto del PDF de carta FNA
- **xlsx (SheetJS)** — generación de Excel post-pago

## Backend

- **Búsqueda**: `POST https://qxlcsjgwjzsyxewolsbn.supabase.co/functions/v1/buscar-cache`
- **PDF (Claude)**: `POST https://incantoretreats.app.n8n.cloud/webhook/claude`
- **Pago Bold**: `POST https://incantoretreats.app.n8n.cloud/webhook/generar-pago-bold`
- **Token descarga**: `POST https://incantoretreats.app.n8n.cloud/webhook/descargar-token`

## Setup local

```bash
npm install
npm run dev
```

Abre http://localhost:5173.

## Build de producción

```bash
npm run build
# Genera dist/ listo para subir a Hostinger (public_html)
```

## Estructura

```
buscadorfna-frontend/
├── src/
│   ├── App.jsx                   # Entry, estado global (useReducer)
│   ├── main.jsx                  # Bootstrap Vite
│   ├── index.css                 # Tailwind directives + base
│   ├── components/
│   │   ├── AppShell.jsx          # Marco del teléfono (grid rows fijos)
│   │   ├── Header.jsx            # Logo + brand text
│   │   ├── ProgressDots.jsx      # Indicador de progreso
│   │   └── CtaBar.jsx            # Barra inferior Volver + Continuar
│   ├── slides/                   # (Sesión 2) — 7 u 8 slides
│   ├── screens/                  # (Sesión 3) — PantallaResultados, etc.
│   ├── lib/
│   │   └── state.js              # Reducer + estado inicial + slides por modalidad
│   └── hooks/                    # (futuro) hooks custom
├── public/
│   └── favicon.svg
├── index.html                    # Meta tags, OG, GA4 (G-0JW29DKSDK)
├── tailwind.config.js            # Paleta marca extendida
├── vite.config.js
└── package.json
```

## Progreso por sesiones

- **Sesión 1** (esta): setup + AppShell + Header + ProgressDots + CtaBar + estructura de state
- **Sesión 2**: 7 slides del wizard + auto-avance + validación
- **Sesión 3**: integración Supabase + overlay de búsqueda + resultados + paywall Bold
- **Sesión 4**: PDF con contraseña + descarga Excel + deploy Hostinger

## Referencia de diseño

Ver `preview-plano-v2-4.html` en el repo de referencia (no incluido acá).
Es un mockup HTML standalone del diseño aprobado; sirve como referencia
visual y de comportamiento. NO es el código a portar tal cual — se adapta
al stack React + Vite + Tailwind manteniendo la fidelidad visual.
