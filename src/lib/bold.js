// Bold — integración de pago.
// Se dispara al hacer click en el paywall. Preservado del v6.1.

import { generarPagoBold } from './api.js';

const BOLD_IDENTITY_KEY = 'axSamVvzYFOiJXVkSR1EnRrQNPaKWXSgU81QMUe4JVw';
const BOLD_REDIRECT_URL = 'https://buscadorfna.com';

/**
 * Inyecta el script del checkout de Bold dentro del container dado,
 * usando el orderId/amount/firma que devuelve /generar-pago-bold.
 *
 * @param {HTMLElement} container - div donde renderizar el botón de Bold
 * @param {'preaprobado'|'aprobado'} modalidad
 * @returns {Promise<void>}
 */
export async function montarBotonBold(container, modalidad) {
  const { orderId, amount, currency, integritySignature } =
    await generarPagoBold(modalidad);

  // Limpiar el container antes de inyectar el script
  container.innerHTML = '';

  const script = document.createElement('script');
  script.setAttribute('data-bold-button', 'green-L');
  script.setAttribute('data-order-id', orderId);
  script.setAttribute('data-currency', currency || 'COP');
  script.setAttribute('data-amount', String(amount));
  script.setAttribute('data-api-key', BOLD_IDENTITY_KEY);
  script.setAttribute('data-integrity-signature', integritySignature);
  script.setAttribute('data-description', 'Reporte completo Buscando FNA');
  script.setAttribute('data-redirection-url', BOLD_REDIRECT_URL);
  script.src = 'https://checkout.bold.co/library/boldPaymentButton.js';
  container.appendChild(script);
}
