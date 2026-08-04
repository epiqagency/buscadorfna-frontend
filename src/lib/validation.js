// canAdvance(slideKey, state) → boolean
// Determina si el CTA "Continuar" está habilitado en cada slide.

import { toNumber } from './format.js';

const MONTO_MINIMO = 20_000_000;

export function canAdvance(slideKey, state) {
  switch (slideKey) {
    case 'modalidad':
      return !!state.modalidad;

    case 'pdf':
      // Se completa cuando pdfData tiene monto (setteado por el PDF flow).
      return !!state.pdfData?.montoAprobado;

    case 'monto':
      return toNumber(state.monto) >= MONTO_MINIMO;

    case 'ahorros-subsidio': {
      // Ahorros puede estar vacío o 0. Subsidio requiere elegir Sí/No.
      // Si eligió Sí, requiere monto > 0.
      if (state.tieneSubsidio === null) return false;
      if (state.tieneSubsidio === true && toNumber(state.subsidioMonto) <= 0) return false;
      return true;
    }

    case 'ciudades':
      return Array.isArray(state.ciudades) && state.ciudades.length > 0;

    case 'tipo-condicion':
      return (
        Array.isArray(state.tipos) &&
        state.tipos.length > 0 &&
        !!state.condicion
      );

    case 'habitaciones':
      return state.habitaciones != null;

    case 'resumen':
      return true;

    default:
      return false;
  }
}

// Slides con auto-avance (elección única, avanza 350ms después de seleccionar).
export const AUTO_ADVANCE_SLIDES = new Set(['modalidad', 'habitaciones']);
