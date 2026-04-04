/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./index.html"
  ],
  theme: {
    extend: {
      /* ============================================
         COLORS
         ============================================ */
      colors: {
        vinxe: {
          /* Primary Brand */
          indigo: {
            DEFAULT: '#6366F1',
            light: '#818CF8',
            dark: '#4F46E5',
            50: '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            400: '#818CF8',
            500: '#6366F1',
            600: '#4F46E5',
            700: '#4338CA',
            800: '#3730A3',
            900: '#312E81',
          },
          violet: {
            DEFAULT: '#8B5CF6',
            light: '#A78BFA',
            dark: '#7C3AED',
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
          /* Neutral */
          black: '#1F2937',
          charcoal: '#374151',
          gray: {
            DEFAULT: '#6B7280',
            light: '#9CA3AF',
            lighter: '#D1D5DB',
            bg: '#F3F4F6',
          },
          white: '#FAFAFA',
          'white-pure': '#FFFFFF',
          /* Semantic */
          success: {
            DEFAULT: '#10B981',
            light: '#34D399',
            dark: '#059669',
          },
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },

      /* ============================================
         TYPOGRAPHY
         ============================================ */
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      
      fontSize: {
        'vinxe-xs': ['0.75rem', { lineHeight: '1rem' }],
        'vinxe-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'vinxe-base': ['1rem', { lineHeight: '1.5rem' }],
        'vinxe-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'vinxe-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'vinxe-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'vinxe-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'vinxe-4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        'vinxe-5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'vinxe-6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      letterSpacing: {
        'vinxe-tight': '-0.02em',
        'vinxe-wide': '0.1em',
      },

      lineHeight: {
        'vinxe-tight': '1.1',
        'vinxe-snug': '1.25',
        'vinxe-normal': '1.5',
        'vinxe-relaxed': '1.625',
      },

      /* ============================================
         SPACING
         ============================================ */
      spacing: {
        'vinxe-0': '0',
        'vinxe-1': '0.25rem',   // 4px
        'vinxe-2': '0.5rem',    // 8px
        'vinxe-3': '0.75rem',   // 12px
        'vinxe-4': '1rem',      // 16px
        'vinxe-5': '1.25rem',   // 20px
        'vinxe-6': '1.5rem',    // 24px
        'vinxe-8': '2rem',      // 32px
        'vinxe-10': '2.5rem',   // 40px
        'vinxe-12': '3rem',     // 48px
        'vinxe-16': '4rem',     // 64px
        'vinxe-20': '5rem',     // 80px
        'vinxe-24': '6rem',     // 96px
      },

      /* ============================================
         BORDER RADIUS
         ============================================ */
      borderRadius: {
        'vinxe-none': '0',
        'vinxe-sm': '4px',
        'vinxe-md': '8px',
        'vinxe-lg': '12px',
        'vinxe-xl': '16px',
        'vinxe-2xl': '24px',
        'vinxe-full': '9999px',
      },

      /* ============================================
         SHADOWS
         ============================================ */
      boxShadow: {
        'vinxe-sm': '0 1px 2px 0 rgba(31, 41, 55, 0.05)',
        'vinxe-md': '0 4px 6px -1px rgba(31, 41, 55, 0.1), 0 2px 4px -1px rgba(31, 41, 55, 0.06)',
        'vinxe-lg': '0 10px 15px -3px rgba(31, 41, 55, 0.1), 0 4px 6px -2px rgba(31, 41, 55, 0.05)',
        'vinxe-xl': '0 20px 25px -5px rgba(31, 41, 55, 0.1), 0 10px 10px -5px rgba(31, 41, 55, 0.04)',
        'vinxe-glow': '0 0 40px rgba(99, 102, 241, 0.3)',
        'vinxe-glow-sm': '0 0 20px rgba(99, 102, 241, 0.2)',
      },

      /* ============================================
         TRANSITIONS
         ============================================ */
      transitionDuration: {
        'vinxe-fast': '150ms',
        'vinxe-normal': '250ms',
        'vinxe-slow': '350ms',
      },

      transitionTimingFunction: {
        'vinxe': 'ease-in-out',
      },

      /* ============================================
         Z-INDEX
         ============================================ */
      zIndex: {
        'vinxe-dropdown': '100',
        'vinxe-sticky': '200',
        'vinxe-fixed': '300',
        'vinxe-modal-backdrop': '400',
        'vinxe-modal': '500',
        'vinxe-popover': '600',
        'vinxe-tooltip': '700',
      },

      /* ============================================
         CONTAINER
         ============================================ */
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },

      /* ============================================
         BACKGROUND IMAGE (Gradients)
         ============================================ */
      backgroundImage: {
        'vinxe-gradient': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'vinxe-gradient-hero': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #4F46E5 100%)',
        'vinxe-gradient-subtle': 'linear-gradient(180deg, #FAFAFA 0%, #F3F4F6 100%)',
      },

      /* ============================================
         ANIMATION
         ============================================ */
      keyframes: {
        'vinxe-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'vinxe-slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'vinxe-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'vinxe-shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'vinxe-fade-in': 'vinxe-fade-in 0.3s ease-out',
        'vinxe-slide-in': 'vinxe-slide-in 0.2s ease-out',
        'vinxe-pulse': 'vinxe-pulse 1.8s ease-in-out infinite',
        'vinxe-shimmer': 'vinxe-shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    /* Custom plugin for Vinxe components */
    function({ addComponents }) {
      addComponents({
        /* Typography utilities */
        '.vinxe-h1': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '3rem',
          fontWeight: '700',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          color: '#1F2937',
        },
        '.vinxe-h2': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '2.25rem',
          fontWeight: '600',
          lineHeight: '1.25',
          letterSpacing: '-0.02em',
          color: '#1F2937',
        },
        '.vinxe-h3': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1.5rem',
          fontWeight: '600',
          lineHeight: '1.3',
          color: '#1F2937',
        },
        '.vinxe-body': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.625',
          color: '#374151',
        },
        '.vinxe-label': {
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '0.75rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#6B7280',
        },
        /* Gradient text */
        '.vinxe-gradient-text': {
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });
    },
  ],
};
