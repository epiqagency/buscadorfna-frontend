// Formateo de números con puntos como separador de miles.
// Compatible con inputs "controlados": recibe string, devuelve string.

export function formatoMiles(raw) {
  if (raw === '' || raw == null) return '';
  const digits = String(raw).replace(/\D/g, '');
  if (!digits) return '';
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function soloDigitos(raw) {
  return String(raw ?? '').replace(/\D/g, '');
}

export function toNumber(raw) {
  const s = soloDigitos(raw);
  return s === '' ? 0 : parseInt(s, 10);
}

export function formatoCOP(num) {
  const n = Number(num) || 0;
  return '$ ' + n.toLocaleString('es-CO');
}
