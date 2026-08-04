import { useState } from 'react';
import { AppShell } from './components/AppShell.jsx';
import { Header } from './components/Header.jsx';
import { ProgressDots } from './components/ProgressDots.jsx';
import { CtaBar } from './components/CtaBar.jsx';
import { getSlidesForMode, initialState, reducer } from './lib/state.js';
import { useReducer } from 'react';

// Placeholder para los slides — se implementan en Sesión 2.
function SlidePlaceholder({ slideKey, index, state }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-7 text-center">
      <div className="text-marca-text-muted text-sm mb-2">
        Slide {index + 1}
      </div>
      <h2 className="text-2xl font-extrabold text-marca-azul mb-4">
        {slideKey}
      </h2>
      <p className="text-marca-text-muted text-sm max-w-xs">
        Este slide se implementa en Sesión 2. Por ahora es placeholder para
        validar la estructura del AppShell + Header + Progress + CTA.
      </p>
      <details className="mt-6 text-left text-xs text-marca-text-muted w-full max-w-xs">
        <summary className="cursor-pointer">estado del wizard</summary>
        <pre className="mt-2 bg-marca-fondo p-2 rounded text-[10px] overflow-auto">
{JSON.stringify(state, null, 2)}
        </pre>
      </details>
    </div>
  );
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const slides = getSlidesForMode(state.modalidad);
  const currentSlideKey = slides[state.slideIndex];
  const isLastSlide = state.slideIndex === slides.length - 1;
  const isFirstSlide = state.slideIndex === 0;

  // Auto-advance disabled en placeholder — se activa en Sesión 2.
  const puedeAvanzar = true;
  const textoContinuar = isLastSlide ? 'Buscar propiedades' : 'Continuar';

  return (
    <AppShell>
      <Header />
      <ProgressDots total={slides.length} current={state.slideIndex} />

      <div className="relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-[550ms] ease-slide"
          style={{ transform: `translateX(-${state.slideIndex * 100}%)` }}
        >
          {slides.map((key, i) => (
            <div key={key} className="min-w-full h-full">
              <SlidePlaceholder slideKey={key} index={i} state={state} />
            </div>
          ))}
        </div>
      </div>

      <CtaBar
        showBack={!isFirstSlide}
        onBack={() => dispatch({ type: 'PREV' })}
        onContinue={() => dispatch({ type: 'NEXT' })}
        disabled={!puedeAvanzar}
        continueLabel={textoContinuar}
      />
    </AppShell>
  );
}
