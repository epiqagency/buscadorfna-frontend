// Header con logo + brand text.

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 z-[5]">
      <div className="flex items-center gap-2">
        <LogoBrand />
        <span className="text-[13px] font-bold text-marca-azul tracking-tight">
          Buscando <em className="text-marca-verde-dark not-italic">FNA</em>
        </span>
      </div>
    </header>
  );
}

function LogoBrand() {
  return (
    <svg viewBox="0 0 48 48" width="24" height="24" fill="none">
      {/* Lupa: círculo azul + mango verde */}
      <circle cx="20" cy="20" r="12" stroke="#012676" strokeWidth="3.5" fill="white" />
      <circle cx="20" cy="20" r="6" stroke="#012676" strokeWidth="2" fill="none" />
      <line
        x1="30" y1="30" x2="42" y2="42"
        stroke="#7dbd01" strokeWidth="5" strokeLinecap="round"
      />
    </svg>
  );
}
