// Slide 4 — Ciudades (multi-select).

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionCiudades } from '../components/Illustration.jsx';
import { Chip, SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';

const CIUDADES = [
  { slug: 'bogota',       label: 'Bogotá' },
  { slug: 'medellin',     label: 'Medellín' },
  { slug: 'cali',         label: 'Cali' },
  { slug: 'barranquilla', label: 'Barranquilla' },
  { slug: 'cartagena',    label: 'Cartagena' },
  { slug: 'santa-marta',  label: 'Santa Marta' },
];

export function SlideCiudades({ state, dispatch }) {
  const toggle = (slug) => {
    const set = new Set(state.ciudades);
    if (set.has(slug)) set.delete(slug);
    else set.add(slug);
    dispatch({ type: 'SET', payload: { ciudades: [...set] } });
  };

  return (
    <SlideLayout ilustracion={<IlustracionCiudades className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        ¿Dónde imaginás<br />
        <em className="text-marca-verde-dark not-italic">tu casa</em>?
      </SlideTitle>
      <SlideSubtitle>Elige una o varias ciudades.</SlideSubtitle>

      <div className="flex flex-wrap gap-2 flex-shrink-0">
        {CIUDADES.map(({ slug, label }) => (
          <Chip
            key={slug}
            selected={state.ciudades.includes(slug)}
            onClick={() => toggle(slug)}
          >
            {label}
          </Chip>
        ))}
      </div>
    </SlideLayout>
  );
}
