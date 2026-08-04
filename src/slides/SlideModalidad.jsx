// Slide 1 — Modalidad (pre-aprobado / aprobado).
// Auto-avance al hacer click en una opción.

import { IlustracionModalidad } from '../components/Illustration.jsx';
import { OptionCard } from '../components/OptionCard.jsx';

export function SlideModalidad({ state, dispatch, onSelect }) {
  const handleClick = (value) => {
    dispatch({ type: 'SET', payload: { modalidad: value } });
    onSelect?.(); // dispara el auto-avance en App.jsx
  };

  return (
    <SlideLayout ilustracion={<IlustracionModalidad className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <h1 className="slide-title">
        Hola, empecemos a<br />
        <em className="text-marca-verde-dark not-italic">buscar tu hogar</em>.
      </h1>
      <p className="slide-subtitle">
        Para personas con crédito del Fondo Nacional del Ahorro. ¿En qué etapa estás?
      </p>

      <div className="flex flex-col gap-2.5 flex-shrink-0">
        <OptionCard
          selected={state.modalidad === 'preaprobado'}
          onClick={() => handleClick('preaprobado')}
          icon={<IconClock />}
          title="Tengo un pre-aprobado"
          desc="Sé el monto aproximado"
        />
        <OptionCard
          selected={state.modalidad === 'aprobado'}
          onClick={() => handleClick('aprobado')}
          icon={<IconCheck />}
          title="Ya tengo aprobado"
          desc="Recibí la carta oficial del FNA"
        />
      </div>
    </SlideLayout>
  );
}

// Layout compartido por todos los slides — ilustración arriba, título+subtitle+contenido debajo.
export function SlideLayout({ ilustracion, children }) {
  return (
    <div className="h-full flex flex-col px-7 overflow-hidden">
      <div className="flex-none flex justify-center items-center h-[clamp(110px,20vh,180px)] pt-[clamp(6px,1.5vh,12px)]">
        {ilustracion}
      </div>
      <div className="flex-1 flex flex-col justify-start min-h-0 pt-[clamp(8px,2vh,16px)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
