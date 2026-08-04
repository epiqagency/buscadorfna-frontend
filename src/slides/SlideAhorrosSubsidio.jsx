// Slide 3 — Ahorros + Subsidio (combinado).

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionAhorros } from '../components/Illustration.jsx';
import { InputCompact, YesNoButtons, SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';

export function SlideAhorrosSubsidio({ state, dispatch }) {
  const setAhorros = (v) => dispatch({ type: 'SET', payload: { ahorros: v } });
  const setSubsidio = (v) => dispatch({ type: 'SET', payload: { tieneSubsidio: v } });
  const setSubsidioMonto = (v) => dispatch({ type: 'SET', payload: { subsidioMonto: v } });

  return (
    <SlideLayout ilustracion={<IlustracionAhorros className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        Sumemos tu<br />
        <em className="text-marca-verde-dark not-italic">capacidad total</em>.
      </SlideTitle>
      <SlideSubtitle>¿Tienes ahorros o subsidio para sumar al crédito?</SlideSubtitle>

      <div className="mb-[clamp(10px,2vh,16px)] flex-shrink-0">
        <label className="block text-[13px] font-bold text-marca-text mb-2">
          Ahorros para cuota inicial
        </label>
        <InputCompact
          value={state.ahorros}
          onChange={setAhorros}
          placeholder="0 si no tienes"
        />
      </div>

      <div className="flex-shrink-0">
        <label className="block text-[13px] font-bold text-marca-text mb-2">
          ¿Tienes subsidio de vivienda aprobado?
        </label>
        <p className="text-[12px] text-marca-text-muted mb-2.5 leading-[1.4]">
          Caja de compensación, Mi Casa Ya, distrital, etc.
        </p>
        <YesNoButtons value={state.tieneSubsidio} onChange={setSubsidio} />

        {state.tieneSubsidio === true && (
          <div className="mt-2 animate-in fade-in slide-in-from-top-1 duration-300">
            <InputCompact
              value={state.subsidioMonto}
              onChange={setSubsidioMonto}
              placeholder="Monto del subsidio"
            />
          </div>
        )}
      </div>
    </SlideLayout>
  );
}
