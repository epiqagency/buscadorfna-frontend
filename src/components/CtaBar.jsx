// CtaBar — barra inferior con Volver (25%) + Continuar (75%).
// En el primer slide no hay Volver (Continuar ocupa 100%).
// En slides de auto-avance, Continuar se oculta (Sesión 2).

export function CtaBar({
  showBack = true,
  onBack,
  onContinue,
  disabled = false,
  continueLabel = 'Continuar',
  hideContinue = false,
}) {
  return (
    <div className="px-6 pt-6 pb-6 flex gap-3 items-stretch">
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          className="
            flex-none w-[90px] py-3 rounded-full
            border-2 border-marca-border bg-marca-card
            text-marca-text font-semibold
            flex items-center justify-center gap-1
            transition-all duration-brand
            hover:border-marca-azul hover:text-marca-azul
            active:scale-[0.98]
          "
        >
          <IconArrowLeft />
          <span className="text-[13px]">Volver</span>
        </button>
      )}
      {!hideContinue && (
        <button
          type="button"
          onClick={onContinue}
          disabled={disabled}
          className={[
            'flex-1 min-w-0 py-3 rounded-full font-bold text-white',
            'flex items-center justify-center gap-2',
            'transition-all duration-brand',
            'shadow-brand-md',
            disabled
              ? 'bg-marca-border-strong cursor-not-allowed opacity-60'
              : 'bg-marca-verde hover:bg-marca-verde-dark active:scale-[0.98]',
          ].join(' ')}
        >
          <span className="text-[15px]">{continueLabel}</span>
          <IconArrowRight />
        </button>
      )}
    </div>
  );
}

function IconArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
