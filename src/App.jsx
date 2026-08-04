import { useEffect, useReducer, useRef } from 'react';
import { AppShell } from './components/AppShell.jsx';
import { Header } from './components/Header.jsx';
import { ProgressDots } from './components/ProgressDots.jsx';
import { CtaBar } from './components/CtaBar.jsx';
import { getSlidesForMode, initialState, reducer } from './lib/state.js';
import { canAdvance, AUTO_ADVANCE_SLIDES } from './lib/validation.js';

import { SlideModalidad } from './slides/SlideModalidad.jsx';
import { SlidePDF } from './slides/SlidePDF.jsx';
import { SlideMonto } from './slides/SlideMonto.jsx';
import { SlideAhorrosSubsidio } from './slides/SlideAhorrosSubsidio.jsx';
import { SlideCiudades } from './slides/SlideCiudades.jsx';
import { SlideTipoCondicion } from './slides/SlideTipoCondicion.jsx';
import { SlideHabitaciones } from './slides/SlideHabitaciones.jsx';
import { SlideResumen } from './slides/SlideResumen.jsx';

// Mapa slideKey → componente. Cada uno recibe (state, dispatch, onSelect).
const SLIDE_COMPONENTS = {
  'modalidad':         SlideModalidad,
  'pdf':               SlidePDF,
  'monto':             SlideMonto,
  'ahorros-subsidio':  SlideAhorrosSubsidio,
  'ciudades':          SlideCiudades,
  'tipo-condicion':    SlideTipoCondicion,
  'habitaciones':      SlideHabitaciones,
  'resumen':           SlideResumen,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const slides = getSlidesForMode(state.modalidad);
  const currentSlideKey = slides[state.slideIndex];
  const isLastSlide = state.slideIndex === slides.length - 1;
  const isFirstSlide = state.slideIndex === 0;
  const isAutoAdvance = AUTO_ADVANCE_SLIDES.has(currentSlideKey);
  const puedeAvanzar = canAdvance(currentSlideKey, state);
  const textoContinuar = isLastSlide ? 'Buscar propiedades' : 'Continuar';

  const autoAdvanceTimer = useRef(null);

  // Handler que los slides de auto-avance disparan al seleccionar una opción.
  const handleAutoAdvance = () => {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    autoAdvanceTimer.current = setTimeout(() => {
      dispatch({ type: 'NEXT' });
    }, 350);
  };

  // Cleanup del timer al desmontar.
  useEffect(() => () => clearTimeout(autoAdvanceTimer.current), []);

  const handleBuscar = () => {
    // Sesión 3: acá disparamos el overlay + fetch a Supabase.
    // Por ahora solo alertamos con el resumen.
    const total =
      Number(String(state.monto).replace(/\D/g, '') || 0) +
      Number(String(state.ahorros).replace(/\D/g, '') || 0) +
      (state.tieneSubsidio
        ? Number(String(state.subsidioMonto).replace(/\D/g, '') || 0)
        : 0);
    alert(
      'Sesión 3 pendiente — acá se dispara la búsqueda en Supabase.\n\n' +
      'Presupuesto: $' + total.toLocaleString('es-CO') + '\n' +
      'Ciudades: ' + state.ciudades.join(', ') + '\n' +
      'Tipos: ' + state.tipos.join(', ') + '\n' +
      'Habitaciones: ' + state.habitaciones + '+',
    );
  };

  return (
    <AppShell>
      <Header />
      <ProgressDots total={slides.length} current={state.slideIndex} />

      <div className="relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-[550ms] ease-slide"
          style={{ transform: `translateX(-${state.slideIndex * 100}%)` }}
        >
          {slides.map((key) => {
            const Comp = SLIDE_COMPONENTS[key];
            return (
              <div key={key} className="min-w-full h-full">
                {Comp && (
                  <Comp
                    state={state}
                    dispatch={dispatch}
                    onSelect={isAutoAdvance ? handleAutoAdvance : undefined}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <CtaBar
        showBack={!isFirstSlide}
        onBack={() => {
          clearTimeout(autoAdvanceTimer.current);
          dispatch({ type: 'PREV' });
        }}
        onContinue={() => (isLastSlide ? handleBuscar() : dispatch({ type: 'NEXT' }))}
        disabled={!puedeAvanzar}
        continueLabel={textoContinuar}
        hideContinue={isAutoAdvance}
      />
    </AppShell>
  );
}
