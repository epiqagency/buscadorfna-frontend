// PaywallBold — botón/modal para pagar y desbloquear el Excel completo.
// El precio depende de la modalidad: preaprobado $29.900, aprobado $49.900.
// El backend (n8n /generar-pago-bold) es quien realmente pone el precio;
// acá solo lo mostramos como referencia y el script de Bold hace el resto.

import { useEffect, useRef, useState } from 'react';
import { montarBotonBold } from '../lib/bold.js';

const PRECIOS = {
  preaprobado: 29900,
  aprobado:    49900,
};

export function PaywallBold({ modalidad, propiedadesBloqueadas }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    montarBotonBold(containerRef.current, modalidad)
      .then(() => { if (!cancelled) setLoading(false); })
      .catch((e) => { if (!cancelled) setError(e.message); });
    return () => { cancelled = true; };
  }, [modalidad]);

  const precio = PRECIOS[modalidad] || 29900;

  return (
    <div className="bg-marca-card rounded-2xl border-2 border-marca-verde/40 p-6 shadow-brand-md text-center max-w-md mx-auto">
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-marca-azul-tint flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="#012676" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <div className="text-[13px] text-marca-text-muted uppercase tracking-wider font-semibold mb-1">
        Desbloquea el reporte completo
      </div>
      <div className="text-[36px] font-extrabold text-marca-azul mb-2 -tracking-[0.02em]">
        ${precio.toLocaleString('es-CO')}
      </div>
      <div className="text-[13px] text-marca-text-muted mb-4 leading-relaxed">
        Todas las <strong>{propiedadesBloqueadas} propiedades restantes</strong>{' '}
        en un Excel con links directos a cada anuncio.
      </div>

      <ul className="text-left text-[12px] text-marca-text-muted mb-5 space-y-1.5">
        <li className="flex items-start gap-2">
          <CheckIcon /> Link directo a cada anuncio
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon /> Precio, ubicación, habitaciones y área
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon /> Excel descargable · Pago único
        </li>
      </ul>

      <div ref={containerRef} className="min-h-[52px] flex items-center justify-center">
        {loading && (
          <div className="text-[12px] text-marca-text-muted">
            Cargando pago seguro…
          </div>
        )}
        {error && (
          <div className="text-[12px] text-red-600">Error: {error}</div>
        )}
      </div>

      <div className="text-[11px] text-marca-text-muted mt-3">
        Pago seguro procesado por <strong>Bold</strong>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-marca-verde flex items-center justify-center mt-0.5">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
