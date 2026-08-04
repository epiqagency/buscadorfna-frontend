// PropertyCard — card individual de una propiedad.
// Se usa tanto para las 7 gratis (con link clickable) como para las bloqueadas
// (con blur + candado).

export function PropertyCard({ propiedad, bloqueada = false }) {
  const {
    portal, tipo, titulo, precio_num, ubicacion, ciudad,
    habitaciones, banos, area_m2, estrato, link,
  } = propiedad;

  const Wrapper = bloqueada ? 'div' : 'a';
  const wrapperProps = bloqueada
    ? {}
    : { href: link, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Wrapper
      {...wrapperProps}
      className={[
        'block bg-marca-card rounded-2xl border border-marca-border p-4 transition-all',
        bloqueada
          ? 'opacity-70 select-none pointer-events-none blur-[1.5px]'
          : 'hover:shadow-brand-md hover:-translate-y-0.5 cursor-pointer',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="text-[15px] font-bold text-marca-text -tracking-[0.01em] line-clamp-2 flex-1">
          {titulo || `${tipo} en ${ciudad}`}
        </div>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-marca-azul bg-marca-azul-tint px-2 py-1 rounded-md flex-shrink-0">
          {portal}
        </span>
      </div>

      <div className="text-[18px] font-extrabold text-marca-verde-dark mb-2">
        ${Number(precio_num).toLocaleString('es-CO')}
      </div>

      <div className="text-[12px] text-marca-text-muted mb-2 line-clamp-1">
        {ubicacion || ciudad}
      </div>

      <div className="flex flex-wrap gap-3 text-[11px] text-marca-text-muted">
        {habitaciones != null && <span>{habitaciones} hab</span>}
        {banos != null && <span>{banos} baños</span>}
        {area_m2 != null && <span>{area_m2} m²</span>}
        {estrato != null && <span>Estrato {estrato}</span>}
      </div>
    </Wrapper>
  );
}
