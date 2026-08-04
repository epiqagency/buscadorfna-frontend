// Componentes UI reutilizables entre slides:
// - Chip (multi o single)
// - InputMonto (grande, con formateo de miles)
// - InputCompact (chico, para ahorros/subsidio)
// - YesNoButtons

import { formatoMiles } from '../lib/format.js';

export function Chip({ selected, onClick, children, size = 'md' }) {
  const padding = size === 'sm'
    ? 'px-3 py-2 text-[12px]'
    : 'px-4 py-[clamp(9px,1.8vh,12px)] text-[13px]';
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-full border-2 transition-all duration-200 cursor-pointer font-semibold',
        padding,
        selected
          ? 'bg-marca-azul text-white border-marca-azul hover:bg-marca-azul-dark'
          : 'bg-marca-card text-marca-text-muted border-marca-border hover:border-marca-azul hover:text-marca-azul',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export function InputMonto({ value, onChange, placeholder = '0', hint, valid }) {
  const handleChange = (e) => {
    onChange(formatoMiles(e.target.value));
  };
  return (
    <div className="flex-shrink-0">
      <div className={[
        'bg-marca-card rounded-2xl border-2 transition-all duration-brand',
        'p-[clamp(14px,2.5vh,20px)_22px]',
        'focus-within:border-marca-azul focus-within:shadow-brand-md',
        valid ? 'border-marca-verde' : 'border-marca-border',
      ].join(' ')}>
        <div className="text-[13px] text-marca-text-muted font-semibold mb-1">COP</div>
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-transparent border-0 outline-none font-bold -tracking-[0.02em] text-marca-text text-[clamp(24px,6vw,32px)] font-sans"
        />
      </div>
      {hint && <div className="text-[12px] text-marca-text-muted mt-2.5 leading-[1.4]">{hint}</div>}
    </div>
  );
}

export function InputCompact({ value, onChange, placeholder, currency = 'COP' }) {
  const handleChange = (e) => onChange(formatoMiles(e.target.value));
  return (
    <div className="bg-marca-card border-2 border-marca-border rounded-[14px] px-4 py-3 flex items-center gap-2 transition-all duration-brand focus-within:border-marca-azul focus-within:shadow-brand-md">
      <span className="text-[13px] text-marca-text-muted font-semibold flex-shrink-0">{currency}</span>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 min-w-0 bg-transparent border-0 outline-none text-[18px] font-bold text-marca-text -tracking-[0.02em] font-sans placeholder:text-marca-border-strong placeholder:font-medium"
      />
    </div>
  );
}

export function YesNoButtons({ value, onChange }) {
  return (
    <div className="flex gap-2">
      {[
        { key: true, label: 'Sí' },
        { key: false, label: 'No' },
      ].map((opt) => (
        <button
          key={String(opt.key)}
          type="button"
          onClick={() => onChange(opt.key)}
          className={[
            'flex-1 py-3 px-4 rounded-[14px] border-2 font-semibold text-[13px] transition-all duration-200 cursor-pointer',
            value === opt.key
              ? 'bg-marca-azul text-white border-marca-azul'
              : 'bg-marca-card text-marca-text-muted border-marca-border hover:border-marca-azul hover:text-marca-azul',
          ].join(' ')}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export function SlideTitle({ children }) {
  return (
    <h1 className="text-[clamp(20px,5vw,26px)] font-extrabold leading-[1.15] text-marca-text -tracking-[0.02em] mb-[clamp(6px,1.2vh,10px)]">
      {children}
    </h1>
  );
}

export function SlideSubtitle({ children }) {
  return (
    <p className="text-[clamp(14px,3.5vw,16px)] text-marca-text-muted leading-[1.45] mb-[clamp(12px,2.5vh,20px)] font-normal">
      {children}
    </p>
  );
}
