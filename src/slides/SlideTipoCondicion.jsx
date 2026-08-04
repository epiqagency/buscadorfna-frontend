// Slide 5 — Tipo (multi) + Condición (single).

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionTipo } from '../components/Illustration.jsx';
import { Chip, SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';

const TIPOS = [
  { slug: 'apartamento',   label: 'Apartamento' },
  { slug: 'casa',          label: 'Casa' },
  { slug: 'apartaestudio', label: 'Apartaestudio' },
];

const CONDICIONES = [
  { slug: 'nueva', label: 'Nueva' },
  { slug: 'usada', label: 'Usada' },
  { slug: 'ambas', label: 'Nueva o usada' },
];

export function SlideTipoCondicion({ state, dispatch }) {
  const toggleTipo = (slug) => {
    const set = new Set(state.tipos);
    if (set.has(slug)) set.delete(slug);
    else set.add(slug);
    dispatch({ type: 'SET', payload: { tipos: [...set] } });
  };
  const setCondicion = (slug) => dispatch({ type: 'SET', payload: { condicion: slug } });

  return (
    <SlideLayout ilustracion={<IlustracionTipo className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        ¿Qué tipo de<br />
        <em className="text-marca-verde-dark not-italic">vivienda</em>?
      </SlideTitle>
      <SlideSubtitle>Uno o varios tipos y condición.</SlideSubtitle>

      <div className="mb-[clamp(10px,2vh,16px)] flex-shrink-0">
        <label className="block text-[13px] font-bold text-marca-text mb-2">Tipo</label>
        <div className="flex flex-wrap gap-2">
          {TIPOS.map(({ slug, label }) => (
            <Chip
              key={slug}
              selected={state.tipos.includes(slug)}
              onClick={() => toggleTipo(slug)}
            >
              {label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0">
        <label className="block text-[13px] font-bold text-marca-text mb-2">Condición</label>
        <div className="flex flex-wrap gap-2">
          {CONDICIONES.map(({ slug, label }) => (
            <Chip
              key={slug}
              selected={state.condicion === slug}
              onClick={() => setCondicion(slug)}
            >
              {label}
            </Chip>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
