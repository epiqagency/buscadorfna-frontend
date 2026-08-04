// Slide 6 — Habitaciones mínimas (single, auto-avance).

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionHabitaciones } from '../components/Illustration.jsx';
import { Chip, SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';

const OPCIONES = [
  { val: 1, label: '1 hab' },
  { val: 2, label: '2 hab' },
  { val: 3, label: '3 hab' },
  { val: 4, label: '4+ hab' },
];

export function SlideHabitaciones({ state, dispatch, onSelect }) {
  const setHab = (v) => {
    dispatch({ type: 'SET', payload: { habitaciones: v } });
    onSelect?.(); // dispara auto-avance
  };

  return (
    <SlideLayout ilustracion={<IlustracionHabitaciones className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        ¿Cuántas habitaciones<br />
        <em className="text-marca-verde-dark not-italic">como mínimo</em>?
      </SlideTitle>
      <SlideSubtitle>Puedes recibir opciones con más.</SlideSubtitle>

      <div className="flex flex-wrap gap-2 flex-shrink-0">
        {OPCIONES.map(({ val, label }) => (
          <Chip
            key={val}
            selected={state.habitaciones === val}
            onClick={() => setHab(val)}
          >
            {label}
          </Chip>
        ))}
      </div>
    </SlideLayout>
  );
}
