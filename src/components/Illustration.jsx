// Ilustraciones SVG por slide (copiadas del mockup v2.4).
// Cada una recibe className opcional para tamaño.

export function IlustracionModalidad({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M40 100 L100 55 L160 100 L160 160 L40 160 Z" fill="#f7f7f7" stroke="#012676" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M35 105 L100 50 L165 105" stroke="#012676" strokeWidth="3" strokeLinejoin="round" fill="none"/>
      <rect x="88" y="120" width="24" height="40" fill="#012676" rx="1"/>
      <circle cx="107" cy="140" r="1.5" fill="#7dbd01"/>
      <rect x="55" y="115" width="22" height="22" fill="none" stroke="#012676" strokeWidth="2.5" rx="1"/>
      <line x1="66" y1="115" x2="66" y2="137" stroke="#012676" strokeWidth="1.5"/>
      <line x1="55" y1="126" x2="77" y2="126" stroke="#012676" strokeWidth="1.5"/>
      <rect x="123" y="115" width="22" height="22" fill="none" stroke="#012676" strokeWidth="2.5" rx="1"/>
      <line x1="134" y1="115" x2="134" y2="137" stroke="#012676" strokeWidth="1.5"/>
      <line x1="123" y1="126" x2="145" y2="126" stroke="#012676" strokeWidth="1.5"/>
      <circle cx="145" cy="55" r="18" fill="#7dbd01" stroke="#012676" strokeWidth="3"/>
      <circle cx="145" cy="55" r="10" fill="none" stroke="#012676" strokeWidth="2.5"/>
      <line x1="155" y1="65" x2="168" y2="78" stroke="#012676" strokeWidth="4" strokeLinecap="round"/>
      <path d="M55 45 L58 52 L65 55 L58 58 L55 65 L52 58 L45 55 L52 52 Z" fill="#7dbd01"/>
    </svg>
  );
}

export function IlustracionMonto({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="35" y="70" width="130" height="90" rx="12" fill="#f7f7f7" stroke="#012676" strokeWidth="3"/>
      <path d="M35 82 L100 40 L165 82" stroke="#012676" strokeWidth="3" fill="#012676"/>
      <circle cx="100" cy="120" r="22" fill="#7dbd01"/>
      <text x="100" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="800" fill="#012676">$</text>
      <circle cx="60" cy="105" r="2.5" fill="#7dbd01"/>
      <circle cx="140" cy="105" r="2.5" fill="#7dbd01"/>
      <circle cx="60" cy="140" r="2.5" fill="#012676" opacity="0.4"/>
      <circle cx="140" cy="140" r="2.5" fill="#012676" opacity="0.4"/>
    </svg>
  );
}

export function IlustracionAhorros({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 100 C50 80 70 68 100 68 C130 68 150 80 150 100 L150 130 C150 145 135 155 115 155 L85 155 C65 155 50 145 50 130 Z" fill="#f7f7f7" stroke="#012676" strokeWidth="3"/>
      <circle cx="80" cy="100" r="4" fill="#012676"/>
      <rect x="90" y="82" width="30" height="4" rx="2" fill="#012676"/>
      <path d="M140 80 Q152 78 150 90" stroke="#012676" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <rect x="65" y="155" width="10" height="12" rx="2" fill="#012676"/>
      <rect x="125" y="155" width="10" height="12" rx="2" fill="#012676"/>
      <path d="M150 115 Q160 115 158 108 Q155 100 148 105" stroke="#012676" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="105" cy="45" r="12" fill="#7dbd01" stroke="#012676" strokeWidth="2.5"/>
      <text x="105" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#012676">$</text>
    </svg>
  );
}

export function IlustracionCiudades({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="70" fill="#f7f7f7" stroke="#012676" strokeWidth="3"/>
      <path d="M50 90 Q100 70 150 100 M60 130 Q100 110 145 140" stroke="#012676" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" fill="none"/>
      <path d="M100 60 C85 60 75 72 75 87 C75 105 100 130 100 130 C100 130 125 105 125 87 C125 72 115 60 100 60 Z" fill="#7dbd01" stroke="#012676" strokeWidth="2.5"/>
      <circle cx="100" cy="87" r="7" fill="#012676"/>
      <path d="M55 105 C50 105 46 109 46 115 C46 122 55 133 55 133 C55 133 65 122 65 115 C65 109 60 105 55 105 Z" fill="#012676"/>
      <circle cx="55" cy="115" r="3" fill="#7dbd01"/>
      <path d="M145 115 C140 115 136 119 136 125 C136 132 145 143 145 143 C145 143 155 132 155 125 C155 119 150 115 145 115 Z" fill="#012676"/>
      <circle cx="145" cy="125" r="3" fill="#7dbd01"/>
    </svg>
  );
}

export function IlustracionTipo({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="35" y="80" width="45" height="80" fill="#f7f7f7" stroke="#012676" strokeWidth="2.5" rx="2"/>
      <rect x="42" y="88" width="10" height="10" fill="#012676" rx="1"/>
      <rect x="60" y="88" width="10" height="10" fill="#012676" rx="1"/>
      <rect x="42" y="105" width="10" height="10" fill="#012676" rx="1"/>
      <rect x="60" y="105" width="10" height="10" fill="#7dbd01" rx="1"/>
      <rect x="42" y="122" width="10" height="10" fill="#012676" rx="1"/>
      <rect x="60" y="122" width="10" height="10" fill="#012676" rx="1"/>
      <rect x="42" y="139" width="10" height="10" fill="#7dbd01" rx="1"/>
      <rect x="60" y="139" width="10" height="10" fill="#012676" rx="1"/>
      <path d="M85 100 L120 70 L155 100 L155 160 L85 160 Z" fill="#f7f7f7" stroke="#012676" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M80 105 L120 65 L160 105" stroke="#012676" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <rect x="112" y="130" width="16" height="30" fill="#012676" rx="1"/>
    </svg>
  );
}

export function IlustracionHabitaciones({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="45" y="90" width="110" height="65" rx="6" fill="#f7f7f7" stroke="#012676" strokeWidth="3"/>
      <rect x="50" y="80" width="100" height="18" rx="4" fill="#012676"/>
      <rect x="58" y="100" width="35" height="18" rx="4" fill="#7dbd01" opacity="0.6"/>
      <rect x="107" y="100" width="35" height="18" rx="4" fill="#7dbd01" opacity="0.6"/>
      <rect x="50" y="122" width="100" height="30" rx="3" fill="#012676" opacity="0.15"/>
      <rect x="50" y="155" width="5" height="10" fill="#012676"/>
      <rect x="145" y="155" width="5" height="10" fill="#012676"/>
    </svg>
  );
}

export function IlustracionResumen({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="70" fill="#7dbd01" opacity="0.15"/>
      <circle cx="100" cy="100" r="55" fill="#f7f7f7" stroke="#7dbd01" strokeWidth="3"/>
      <path d="M75 100 L92 117 L128 82" stroke="#7dbd01" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function IlustracionPDF({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="55" y="35" width="90" height="120" rx="6" fill="#f7f7f7" stroke="#012676" strokeWidth="3"/>
      <path d="M130 35 L145 50 L130 50 Z" fill="#012676"/>
      <line x1="70" y1="70" x2="130" y2="70" stroke="#012676" strokeWidth="2"/>
      <line x1="70" y1="82" x2="130" y2="82" stroke="#012676" strokeWidth="2"/>
      <line x1="70" y1="94" x2="120" y2="94" stroke="#012676" strokeWidth="2"/>
      <circle cx="100" cy="130" r="18" fill="#7dbd01"/>
      <path d="M92 130 L98 137 L112 122" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
