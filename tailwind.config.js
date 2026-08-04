/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        marca: {
          azul:       '#012676',
          'azul-dark':'#011a52',
          'azul-tint':'rgba(1, 38, 118, 0.08)',
          'azul-hair':'rgba(1, 38, 118, 0.15)',
          verde:      '#7dbd01',
          'verde-dark':'#6ba401',
          'verde-tint':'rgba(125, 189, 1, 0.15)',
          'verde-glow':'rgba(125, 189, 1, 0.30)',
          fondo:      '#f7f7f7',
          card:       '#ffffff',
          text:       '#1a1a1a',
          'text-muted':'#737373',
          border:     '#e5e5e5',
          'border-strong':'#d4d4d4',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'brand-md': '0 4px 20px rgba(1, 38, 118, 0.08)',
        'brand-lg': '0 20px 60px rgba(1, 38, 118, 0.12)',
      },
      backgroundImage: {
        'app-bg': 'linear-gradient(135deg, #e8f5d4 0%, #f7f7f7 50%, #dbe4f5 100%)',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'slide': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
};
