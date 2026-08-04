// Slide 7 — Resumen antes de buscar.

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionResumen } from '../components/Illustration.jsx';
import { SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';
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
    <SlideLayout ilustracion={<IlustracionResumen className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        ¡Todo listo!<br />
        <span className="text-marca-azul not-italic">Vamos a buscar.</span>
      </SlideTitle>
      <SlideSubtitle>Estos son tus datos:</SlideSubtitle>

      <div className="bg-marca-card border border-marca-border rounded-2xl px-4 py-1 flex-shrink-0">
        <ResumenRow label="Modalidad" value={modalidadTxt} />
        <ResumenRow label="Crédito FNA" value={formatoCOP(monto)} />
        {ahorros > 0 && <ResumenRow label="Ahorros" value={formatoCOP(ahorros)} />}
        {subsidio > 0 && <ResumenRow label="Subsidio" value={formatoCOP(subsidio)} />}
        <ResumenRow label="Presupuesto total" value={formatoCOP(total)} total />
        <ResumenRow label="Ciudades" value={ciudadesTxt} />
        <ResumenRow label="Tipo · Condición" value={`${tiposTxt} · ${condicionTxt}`} />
        <ResumenRow label="Habitaciones" value={`${state.habitaciones ?? '—'}+ hab`} />
      </div>
    </SlideLayout>
  );
}

function ResumenRow({ label, value, total = false }) {
  return (
    <div className={[
      'flex justify-between items-center gap-2 py-[clamp(7px,1.3vh,10px)] border-b border-marca-border last:border-0',
      total ? 'py-[clamp(9px,1.5vh,12px)]' : '',
    ].join(' ')}>
      <span className={[
        'text-[10.5px] uppercase tracking-[0.05em] font-semibold flex-shrink-0',
        total ? 'text-marca-azul font-bold text-[11px]' : 'text-marca-text-muted',
      ].join(' ')}>
        {label}
      </span>
      <span className={[
        'font-bold text-right overflow-hidden text-ellipsis whitespace-nowrap',
        total ? 'text-[15px] text-marca-verde-dark' : 'text-[12.5px] text-marca-text',
      ].join(' ')}>
        {value}
      </span>
    </div>
  );
}
