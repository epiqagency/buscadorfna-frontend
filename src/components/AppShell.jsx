// AppShell — marco de teléfono en desktop, fullscreen en mobile.
// Grid rows: header (56px) + progress (28px) + contenido (1fr) + CTA (104px).

export function AppShell({ children }) {
  return (
    <div
      className="
        relative z-10 w-full max-w-[400px] h-shell
        bg-marca-card border border-white/60
        rounded-[40px] shell-radius shell-border
        shadow-brand-lg overflow-hidden
        grid
      "
      style={{
        gridTemplateRows: '56px 28px 1fr 104px',
      }}
    >
      {/* Notch decorativo (solo desktop) */}
      <div
        className="
          hidden md:block
          w-[100px] h-[22px]
          bg-[#1a1a1a]
          rounded-b-2xl
          absolute top-0 left-1/2 -translate-x-1/2 z-20
        "
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
