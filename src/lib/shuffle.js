// Mezcla determinística: mismos filtros → mismo orden de resultados.
// Copiado del frontend v6.1 sin cambios (ya validado en producción).

export function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return h >>> 0; // uint32
}

// Generador determinístico. Mismo seed → misma secuencia.
export function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Fisher-Yates con RNG inyectado. Devuelve array nuevo.
export function shuffleDeterministic(arr, rng) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Genera semilla a partir de los filtros de búsqueda.
// Mismos filtros → misma semilla → mismo orden mezclado.
export function semillaDeFiltros(filtros) {
  const clave = [
    filtros.presupuesto_max,
    (filtros.ciudades || []).slice().sort().join(','),
    (filtros.tipos || []).slice().sort().join(','),
    filtros.condicion,
    filtros.habitaciones_min,
  ].join('|');
  return hashCode(clave);
}
