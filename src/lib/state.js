// Estado del wizard. Reducer puro para simplificar test y debug.
//
// Los slides difieren según modalidad:
//   - 'preaprobado' → 7 slides
//   - 'aprobado'    → 8 slides (se inserta PDF entre modalidad y monto)

export const SLIDES_PREAPROBADO = [
  'modalidad',
  'monto',
  'ahorros-subsidio',
  'ciudades',
  'tipo-condicion',
  'habitaciones',
  'resumen',
];

export const SLIDES_APROBADO = [
  'modalidad',
  'pdf',
  'monto',
  'ahorros-subsidio',
  'ciudades',
  'tipo-condicion',
  'habitaciones',
  'resumen',
];

export function getSlidesForMode(modalidad) {
  return modalidad === 'aprobado' ? SLIDES_APROBADO : SLIDES_PREAPROBADO;
}

export const initialState = {
  slideIndex: 0,
  modalidad: null,             // 'preaprobado' | 'aprobado'
  monto: '',                   // string para permitir formateo con puntos
  ahorros: '',
  tieneSubsidio: null,         // true | false | null
  subsidioMonto: '',
  ciudades: [],                // array de slugs: bogota, medellin, ...
  tipos: [],                   // array de: apartamento, casa, apartaestudio
  condicion: 'ambas',          // 'nueva' | 'usada' | 'ambas'
  habitaciones: null,          // 1 | 2 | 3 | 4
  pdfData: null,               // { montoAprobado, fechaCarta, ... } (modo aprobado)
};

export function reducer(state, action) {
  switch (action.type) {
    case 'NEXT': {
      const slides = getSlidesForMode(state.modalidad);
      return {
        ...state,
        slideIndex: Math.min(state.slideIndex + 1, slides.length - 1),
      };
    }
    case 'PREV': {
      return {
        ...state,
        slideIndex: Math.max(0, state.slideIndex - 1),
      };
    }
    case 'GOTO': {
      const slides = getSlidesForMode(state.modalidad);
      return {
        ...state,
        slideIndex: Math.max(0, Math.min(action.index, slides.length - 1)),
      };
    }
    case 'SET': {
      return { ...state, ...action.payload };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
