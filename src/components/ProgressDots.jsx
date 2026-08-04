// ProgressDots — indicador de progreso arriba del wizard.
// - Dots pasados: verde (marca.verde)
// - Dot actual: azul (marca.azul), alargado (flex-2)
// - Dots futuros: gris (marca.border)

export function ProgressDots({ total, current }) {
  return (
    <div className="flex gap-1.5 justify-center px-6 items-center">
      {Array.from({ length: total }).map((_, i) => {
        const isDone = i < current;
        const isActive = i === current;
        return (
          <div
            key={i}
            className={[
              'h-1 rounded max-w-[36px] transition-all duration-500 ease-brand',
              isActive ? 'bg-marca-azul flex-[2]' : isDone ? 'bg-marca-verde flex-1' : 'bg-marca-border flex-1',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}
