// Slide 2 solo cuando modalidad = 'aprobado' — placeholder de PDF.
// La implementación real (pdfjs + Claude) se hace en Sesión 4.

import { SlideLayout } from './SlideModalidad.jsx';
import { IlustracionPDF } from '../components/Illustration.jsx';
import { SlideTitle, SlideSubtitle } from '../components/SlideBits.jsx';

export function SlidePDF({ state, dispatch }) {
  return (
    <SlideLayout ilustracion={<IlustracionPDF className="w-full h-full max-w-[170px] max-h-[170px]" />}>
      <SlideTitle>
        Sube tu<br />
        <em className="text-marca-verde-dark not-italic">carta FNA</em>.
      </SlideTitle>
      <SlideSubtitle>
        El archivo debe ser el PDF original enviado por el FNA a tu correo.
      </SlideSubtitle>

      <div className="border-2 border-dashed border-marca-border rounded-2xl p-6 text-center bg-marca-azul-tint/50 flex-shrink-0">
        <div className="text-[13px] font-semibold text-marca-azul mb-2">
          Slide de PDF — implementación en Sesión 4
        </div>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: 'SET',
              payload: { pdfData: { montoAprobado: 250000000 }, monto: '250.000.000' },
            })
          }
          className="text-[12px] text-marca-text-muted underline"
        >
          [DEV] simular PDF cargado ($250M)
        </button>
      </div>
    </SlideLayout>
  );
}
