/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        // Paleta de colores oficial de Kamdata (ACTUALIZADA)
        'kamdata-primary': '#ebac3f',    // <-- CAMBIO
        'kamdata-secondary': '#ea4e51',  // <-- CAMBIO
        'kamdata-accent': '#0492c2',     // (Este ya era correcto)
        
        // Variaciones de los colores principales (ACTUALIZADAS)
        primary: {
          50: '#fef9ec',
          100: '#fdf2d3',
          200: '#fedeae', // <-- CAMBIO (Claro)
          300: '#f8d06e',
          400: '#f4b834',
          500: '#ebac3f', // <-- CAMBIO (Principal)
          600: '#d18b1a',
          700: '#a87513', // <-- CAMBIO (Oscuro)
          800: '#8d5419',
          900: '#744518',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#f8c8cf', // <-- CAMBIO (Claro)
          300: '#fca5a5',
          400: '#f87171',
          500: '#ea4e51', // <-- CAMBIO (Principal)
          600: '#dc2626',
          700: '#9a2026', // <-- CAMBIO (Oscuro)
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#8fd2ec', // <-- CAMBIO (Claro)
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0492c2', // (Este ya era correcto)
          600: '#0284c7',
          700: '#024e85', // <-- CAMBIO (Oscuro)
          800: '#075985',
          900: '#0c4a6e',
        },
        
        // Colores neutros (sin cambios)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.line-clamp-4': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}