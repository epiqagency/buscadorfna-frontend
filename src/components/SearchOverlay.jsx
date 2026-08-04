// SearchOverlay — overlay fullscreen mientras se busca en los 3 portales.
// Portales secuenciales: idle → consulting (spinner) → done (checkmark).
// Duración ~2.4s total. Si el fetch responde antes, espera; si demora más,
// extiende hasta que llegue el resultado.

import { useEffect, useState } from 'react';

const PORTALES = ['Fincaraíz', 'Habi', 'Properati'];
const STEP_DURATION = 700; // ms por portal
const FINAL_HOLD = 400;    // ms mostrando el resultado antes de dismiss

export function SearchOverlay({ resultPromise, onDone }) {
  const [step, setStep] = useState(0); // 0..3 (después: 3 = todos done)
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  // Animar los portales secuencialmente
  useEffect(() => {
    const timers = [];
    for (let i = 1; i <= PORTALES.length; i++) {
      timers.push(setTimeout(() => setStep(i), i * STEP_DURATION));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  // Esperar el resultado de la búsqueda
  useEffect(() => {
    let cancelled = false;
    resultPromise
      .then((r) => {
        if (cancelled) return;
        setTotal(r.total_encontradas ?? 0);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e.message || 'Error de búsqueda');
      });
    return () => { cancelled = true; };
  }, [resultPromise]);

  // Dismiss cuando: animación completa AND resultado llegó
  useEffect(() => {
    const animacionCompleta = step >= PORTALES.length;
    const resultadoLlego = total !== null || error !== null;
    if (animacionCompleta && resultadoLlego) {
      const t = setTimeout(() => onDone(error), FINAL_HOLD + 300);
      return () => clearTimeout(t);
    }
  }, [step, total, error, onDone]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/[0.97] backdrop-blur-md p-6">
      <div className="w-16 h-16 mb-6 relative">
        <div className="absolute inset-0 rounded-full border-[3px] border-marca-verde/30 border-t-marca-verde animate-spin" />
        <div className="absolute inset-3 flex items-center justify-center">
          <svg viewBox="0 0 48 48" width="24" height="24" fill="none">
            <circle cx="20" cy="20" r="12" stroke="#012676" strokeWidth="3.5" fill="white" />
            <line x1="30" y1="30" x2="42" y2="42" stroke="#7dbd01" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <h2 className="text-[18px] font-extrabold text-marca-azul text-center mb-1">
        Buscando en los principales portales
      </h2>
      <p className="text-[13px] text-marca-text-muted text-center mb-6 max-w-xs">
        Consultando los principales portales inmobiliarios de Colombia.
      </p>

      <div className="w-full max-w-xs flex flex-col gap-2 mb-4">
        {PORTALES.map((portal, i) => (
          <PortalRow key={portal} name={portal} status={rowStatus(i, step)} />
        ))}
      </div>

      {(total !== null || error) && (
        <div className="mt-4 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
          {error ? (
            <div className="text-marca-verde-dark text-sm">Error: {error}</div>
          ) : (
            <>
              <div className="text-[32px] font-extrabold text-marca-verde-dark -tracking-[0.03em]">
                {Number(total).toLocaleString('es-CO')}
              </div>
              <div className="text-[13px] text-marca-text-muted font-medium">
                propiedades encontradas
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function rowStatus(index, step) {
  if (index < step) return 'done';
  if (index === step) return 'consulting';
  return 'idle';
}

function PortalRow({ name, status }) {
  return (
    <div
      className={[
        'flex justify-between items-center px-4 py-2.5 rounded-lg transition-colors duration-300',
        status === 'idle' && 'text-marca-text-muted',
        status === 'consulting' && 'bg-marca-azul-tint text-marca-azul',
        status === 'done' && 'text-marca-text',
      ].filter(Boolean).join(' ')}
    >
      <span className="text-[14px] font-semibold">{name}</span>
      <span className="flex items-center justify-center w-5 h-5">
        {status === 'consulting' && (
          <span className="block w-4 h-4 border-2 border-marca-azul/20 border-t-marca-azul rounded-full animate-spin" />
        )}
        {status === 'done' && (
          <span className="w-4 h-4 rounded-full bg-marca-verde flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        )}
      </span>
    </div>
  );
}
