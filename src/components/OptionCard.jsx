// OptionCard — card seleccionable con ícono + título + descripción + checkbox.
// Usado en Slide 1 (Modalidad).

export function OptionCard({ selected, onClick, icon, title, desc }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full text-left flex items-center gap-3.5 rounded-2xl',
        'p-[clamp(12px,2vh,16px)_18px]',
        'border-2 transition-all duration-brand cursor-pointer',
        selected
          ? 'border-marca-verde bg-marca-verde-tint -translate-y-0.5 shadow-brand-md'
          : 'border-marca-border bg-marca-card hover:border-marca-azul hover:-translate-y-0.5 hover:shadow-brand-md',
      ].join(' ')}
    >
      <div
        className={[
          'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
          'transition-colors duration-brand',
          selected ? 'bg-marca-verde' : 'bg-marca-azul-tint',
        ].join(' ')}
      >
        <div
          className={[
            'w-5 h-5 transition-colors duration-brand',
            selected ? 'text-white' : 'text-marca-azul',
          ].join(' ')}
        >
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-bold text-marca-text -tracking-[0.01em] mb-0.5">
          {title}
        </div>
        <div className="text-[12px] text-marca-text-muted leading-[1.35]">
          {desc}
        </div>
      </div>
      <div
        className={[
          'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
          'transition-all duration-brand',
          selected ? 'bg-marca-verde border-marca-verde' : 'border-marca-border-strong',
        ].join(' ')}
      >
        {selected && (
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </button>
  );
}
