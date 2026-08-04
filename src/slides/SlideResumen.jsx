// Slide 7 — Resumen antes de buscar.
// Layout compacto sin ilustración grande — el resumen tiene muchas filas
// y necesita todo el vertical disponible del slide.

import { SlideTitle } from '../components/SlideBits.jsx';
import { toNumber, formatoCOP } from '../lib/format.js';

const CIUDAD_LABELS = {
  'bogota':       'Bogotá',
  'medellin':     'Medellín',
  'cali':         'Cali',
  'barranquilla': 'Barranquilla',
  'cartagena':    'Cartagena',
  'santa-marta':  'Santa Marta',
};
const TIPO_LABELS = {
  apartamento:   'Apartamento',
  casa:          'Casa',
  apartaestudio: 'Apartaestudio',
};
const CONDICION_LABELS = {
  nueva: 'Nueva',
  usada: 'Usada',
  ambas: 'Nueva o usada',
};

export function SlideResumen({ state }) {
  const monto = toNumber(state.monto);
  const ahorros = toNumber(state.ahorros);
  const subsidio = state.tieneSubsidio ? toNumber(state.subsidioMonto) : 0;
  const total = monto + ahorros + subsidio;

  const ciudadesTxt = state.ciudades.map((s) => CIUDAD_LABELS[s] || s).join(', ') || '—';
  const tiposTxt = state.tipos.map((s) => TIPO_LABELS[s] || s).join(', ') || '—';
  const condicionTxt = state.condicion ? CONDICION_LABELS[state.condicion] : '—';
  const modalidadTxt = state.modalidad === 'aprobado' ? 'Aprobado' : 'Pre-aprobado';

  return (
    <div className="h-full flex flex-col px-7 pt-4 pb-2 overflow-y-auto">
      {/* Header compacto: check + título en una línea */}
      <div className="flex items-center gap-3 mb-3 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-marca-verde/15 border-2 border-marca-verde flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#7dbd01" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <div className="text-[18px] font-extrabold text-marca-text -tracking-[0.02em] leading-tight">
            ¡Todo listo!
          </div>
          <div className="text-[14px] font-bold text-marca-azul leading-tight">
            Estos son tus datos:
          </div>
        </div>
      </div>

      {/* Lista compacta */}
      <div className="bg-marca-card border border-marca-border rounded-2xl px-3 py-1 flex-shrink-0">
        <Row label="Modalidad" value={modalidadTxt} />
        <Row label="Crédito FNA" value={formatoCOP(monto)} />
        {ahorros > 0 && <Row label="Ahorros" value={formatoCOP(ahorros)} />}
        {subsidio > 0 && <Row label="Subsidio" value={formatoCOP(subsidio)} />}
        <Row label="Presupuesto total" value={formatoCOP(total)} total />
        <Row label="Ciudades" value={ciudadesTxt} />
        <Row label="Tipo · Condición" value={`${tiposTxt} · ${condicionTxt}`} />
        <Row label="Habitaciones" value={`${state.habitaciones ?? '—'}+ hab`} />
      </div>
    </div>
  );
}

function Row({ label, value, total = false }) {
  return (
    <div className={[
      'flex justify-between items-center gap-3 py-1.5 border-b border-marca-border last:border-0',
      total ? 'py-2' : '',
    ].join(' ')}>
      <span className={[
        'text-[10px] uppercase tracking-[0.05em] font-semibold flex-shrink-0',
        total ? 'text-marca-azul font-bold' : 'text-marca-text-muted',
      ].join(' ')}>
        {label}
      </span>
      <span className={[
        'font-bold text-right overflow-hidden text-ellipsis whitespace-nowrap min-w-0',
        total ? 'text-[15px] text-marca-verde-dark' : 'text-[12px] text-marca-text',
      ].join(' ')}>
        {value}
      </span>
    </div>
  );
}
