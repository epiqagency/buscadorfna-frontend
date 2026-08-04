// Slide 2 — Monto del crédito FNA.

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionMonto } from '../components/Illustration.jsx';
import { InputMonto, SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';
import { toNumber } from '../lib/format.js';

const MONTO_MINIMO = 20_000_000;

export function SlideMonto({ state, dispatch }) {
  const setMonto = (v) => dispatch({ type: 'SET', payload: { monto: v } });
  const valid = toNumber(state.monto) >= MONTO_MINIMO;
  const subtitle = state.modalidad === 'aprobado'
    ? 'Monto del aprobado del FNA.'
    : 'Monto del pre-aprobado o aprobado del FNA.';

  return (
    <SlideLayout ilustracion={<IlustracionMonto className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        ¿Cuánto es tu<br />
        <em className="text-marca-verde-dark not-italic">crédito FNA</em>?
      </SlideTitle>
      <SlideSubtitle>{subtitle}</SlideSubtitle>

      <InputMonto
        value={state.monto}
        onChange={setMonto}
        placeholder="0"
        hint="En el siguiente paso podrás agregar ahorros o subsidios."
        valid={valid}
      />
    </SlideLayout>
  );
}
