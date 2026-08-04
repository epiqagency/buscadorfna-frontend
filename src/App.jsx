import { useEffect, useReducer, useRef, useState } from 'react';
import { AppShell } from './components/AppShell.jsx';
import { Header } from './components/Header.jsx';
import { ProgressDots } from './components/ProgressDots.jsx';
import { CtaBar } from './components/CtaBar.jsx';
import { SearchOverlay } from './components/SearchOverlay.jsx';
import { PantallaResultados } from './screens/PantallaResultados.jsx';
import { getSlidesForMode, initialState, reducer } from './lib/state.js';
import { canAdvance, AUTO_ADVANCE_SLIDES } from './lib/validation.js';
import { mapWizardToQuery, buscarPropiedades } from './lib/api.js';

import { SlideModalidad } from './slides/SlideModalidad.jsx';
import { SlidePDF } from './slides/SlidePDF.jsx';
import { SlideMonto } from './slides/SlideMonto.jsx';
import { SlideAhorrosSubsidio } from './slides/SlideAhorrosSubsidio.jsx';
import { SlideCiudades } from './slides/SlideCiudades.jsx';
import { SlideTipoCondicion } from './slides/SlideTipoCondicion.jsx';
import { SlideHabitaciones } from './slides/SlideHabitaciones.jsx';
import { SlideResumen } from './slides/SlideResumen.jsx';

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
  const [searchPromise, setSearchPromise] = useState(null);

  const slides = getSlidesForMode(state.modalidad);
  const currentSlideKey = slides[state.slideIndex];
  const isLastSlide = state.slideIndex === slides.length - 1;
  const isFirstSlide = state.slideIndex === 0;
  const isAutoAdvance = AUTO_ADVANCE_SLIDES.has(currentSlideKey);
  const puedeAvanzar = canAdvance(currentSlideKey, state);
  const textoContinuar = isLastSlide ? 'Buscar propiedades' : 'Continuar';

  const autoAdvanceTimer = useRef(null);
  const handleAutoAdvance = () => {
    clearTimeout(autoAdvanceTimer.current);
    autoAdvanceTimer.current = setTimeout(() => dispatch({ type: 'NEXT' }), 350);
  };
  useEffect(() => () => clearTimeout(autoAdvanceTimer.current), []);

  // Dispara la búsqueda: cambia screen a 'searching' y arma la promise.
  // El SearchOverlay maneja la animación + espera del resultado.
  const handleBuscar = () => {
    const filtros = mapWizardToQuery(state);
    dispatch({ type: 'SET', payload: { screen: 'searching', filtros } });
    setSearchPromise(buscarPropiedades(filtros));
  };

  const handleSearchDone = (error) => {
    if (error) {
      alert('Error en la búsqueda: ' + error + '\n\nProbá de nuevo.');
      dispatch({ type: 'SET', payload: { screen: 'wizard' } });
      setSearchPromise(null);
      return;
    }
    searchPromise.then((r) => {
      dispatch({
        type: 'SET',
        payload: {
          screen: 'results',
          propiedades: r.propiedades || [],
        },
      });
    });
  };

  const volverAlWizard = () => {
    dispatch({ type: 'SET', payload: { screen: 'wizard' } });
    setSearchPromise(null);
  };

  // ==== Renderizado según screen ====

  if (state.screen === 'results') {
    return (
      <PantallaResultados
        propiedades={state.propiedades}
        filtros={state.filtros}
        modalidad={state.modalidad}
        onVolver={volverAlWizard}
      />
    );
  }

  return (
    <>
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
                <div key={key} className="w-full flex-shrink-0 h-full overflow-hidden">
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

      {state.screen === 'searching' && searchPromise && (
        <SearchOverlay resultPromise={searchPromise} onDone={handleSearchDone} />
      )}
    </>
  );
}
