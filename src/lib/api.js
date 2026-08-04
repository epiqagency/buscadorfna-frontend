// api.js — llamadas al backend (Supabase + n8n)
//
// Endpoints:
//   /buscar-cache   → Supabase Edge Function (nuevo, iteración 2)
//   /generar-pago-bold, /descargar-token → n8n Cloud (legacy, no tocar)

const SUPABASE_ENDPOINT =
  'https://qxlcsjgwjzsyxewolsbn.supabase.co/functions/v1/buscar-cache';
const N8N_BASE = 'https://incantoretreats.app.n8n.cloud/webhook';

// Mapea el estado del wizard al body que espera /buscar-cache.
export function mapWizardToQuery(state) {
  const toNum = (v) => Number(String(v ?? '').replace(/\D/g, '')) || 0;
  const monto = toNum(state.monto);
  const ahorros = toNum(state.ahorros);
  const subsidio = state.tieneSubsidio ? toNum(state.subsidioMonto) : 0;
  const presupuesto_max = monto + ahorros + subsidio;

  const CIUDAD_LABELS = {
    'bogota':       'Bogotá',
    'medellin':     'Medellín',
    'cali':         'Cali',
    'barranquilla': 'Barranquilla',
    'cartagena':    'Cartagena',
    'santa-marta':  'Santa Marta',
  };

  // "ambas" → "cualquiera" (formato que espera el endpoint)
  const condicionMap = { nueva: 'nueva', usada: 'usada', ambas: 'cualquiera' };

  return {
    ciudades: state.ciudades.map((s) => CIUDAD_LABELS[s] || s),
    presupuesto_max,
    habitaciones_min: state.habitaciones ?? 1,
    tipos: state.tipos,
    condicion: condicionMap[state.condicion] || 'cualquiera',
  };
}

export async function buscarPropiedades(query) {
  const res = await fetch(SUPABASE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // { total_encontradas, propiedades, _meta }
}

// Legacy — Bold (pago) y descargar-token (post-pago).
// Se preservan del frontend v6.1 sin cambios.

export async function generarPagoBold(modalidad) {
  const res = await fetch(`${N8N_BASE}/generar-pago-bold`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ modalidad }),
  });
  return res.json(); // { orderId, amount, currency, integritySignature }
}

export async function validarToken(token) {
  const res = await fetch(`${N8N_BASE}/descargar-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
  return res.json();
}
