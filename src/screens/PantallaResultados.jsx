// PantallaResultados — reemplaza al wizard cuando ya se buscó.
// Muestra 7 propiedades gratis (mezcladas determinísticamente) + paywall Bold
// con las N-7 restantes borroneadas atrás.

import { useMemo } from 'react';
import { PropertyCard } from '../components/PropertyCard.jsx';
import { PaywallBold } from '../components/PaywallBold.jsx';
import { mulberry32, semillaDeFiltros, shuffleDeterministic } from '../lib/shuffle.js';

const GRATIS_COUNT = 7;

export function PantallaResultados({ propiedades, filtros, modalidad, onVolver }) {
  const { gratis, bloqueadas } = useMemo(() => {
    const seed = semillaDeFiltros(filtros);
    const rng = mulberry32(seed);
    const mezcladas = shuffleDeterministic(propiedades, rng);
    return {
      gratis: mezcladas.slice(0, GRATIS_COUNT),
      bloqueadas: mezcladas.slice(GRATIS_COUNT),
    };
  }, [propiedades, filtros]);

  const total = propiedades.length;
  const restantes = bloqueadas.length;

  return (
    <div className="min-h-screen bg-marca-fondo">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={onVolver}
            className="text-[13px] text-marca-text-muted hover:text-marca-azul font-semibold flex items-center gap-1"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Modificar búsqueda
          </button>
          <div className="text-[13px] text-marca-text-muted">
            <strong className="text-marca-verde-dark">{total}</strong> resultados
          </div>
        </div>

        <h1 className="text-[22px] font-extrabold text-marca-azul mb-2">
          Tus propiedades
        </h1>
        <p className="text-[13px] text-marca-text-muted mb-6">
          Estas son las primeras 7 propiedades. Desbloquea el reporte completo
          para ver las {restantes} restantes.
        </p>

        {/* Grid de gratis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {gratis.map((p) => (
            <PropertyCard key={`${p.portal}-${p.id_portal}-${p.tipo}`} propiedad={p} />
          ))}
        </div>

        {/* Paywall si hay bloqueadas */}
        {restantes > 0 && (
          <>
            <PaywallBold modalidad={modalidad} propiedadesBloqueadas={restantes} />

            {/* Preview borroneado de las siguientes 3 propiedades */}
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-marca-text-muted mb-3 text-center">
                Propiedades bloqueadas
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bloqueadas.slice(0, 4).map((p) => (
                  <PropertyCard key={`b-${p.portal}-${p.id_portal}-${p.tipo}`} propiedad={p} bloqueada />
                ))}
              </div>
            </div>
          </>
        )}

        {restantes === 0 && (
          <div className="text-center text-marca-text-muted text-sm py-8">
            No hay más propiedades para mostrar. Ya viste todas las que
            matchean tus filtros.
          </div>
        )}

        <div className="mt-12 text-center text-[11px] text-marca-text-muted">
          Buscando FNA es un servicio independiente. No estamos afiliados,
          patrocinados ni respaldados por el Fondo Nacional del Ahorro (FNA).
        </div>
      </div>
    </div>
  );
}
