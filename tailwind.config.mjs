/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      /* ── Colors ── */
      colors: {
        orange: {
          950: '#5a1f0d',
          900: '#7d2a12',
          800: '#a03818',
          700: '#c3461e',
          600: '#EB5E28', // brand primary
          500: '#f17c52',
          400: '#f59b7d',
          300: '#f8b9a7',
          200: '#fcd8cf',
          100: '#feede8',
          50: '#fff7f5',
        },
        stone: {
          950: '#1c1917',
          900: '#292524',
          800: '#44403c',
          700: '#57534e',
          600: '#78716c',
          500: '#a8a29e',
          400: '#d6d3d1',
          300: '#e7e5e4',
          200: '#f5f5f4',
          100: '#fafaf9',
        },
        success: '#059669',
        warning: '#ca8a04',
        error: '#dc2626',
        info: '#0284c7',
        // Semantic color mappings (using CSS variables for theme switching)
        border: 'var(--color-border)',
        input: 'var(--color-border)',
        ring: 'var(--color-border-focus)',
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-text-inverse)',
        },
        secondary: {
          DEFAULT: 'var(--color-bg-subtle)',
          foreground: 'var(--color-text)',
        },
        muted: {
          DEFAULT: 'var(--color-bg-subtle)',
          foreground: 'var(--color-text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-text-inverse)',
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: 'var(--color-bg-raised)',
          foreground: 'var(--color-text)',
        },
        card: {
          DEFAULT: 'var(--color-bg-raised)',
          foreground: 'var(--color-text)',
        },
      },

      /* ── Fonts ── */
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },

      /* ── Type Scale ── */
      fontSize: {
        // Body
        'text-small': ['14px', { lineHeight: '19.6px', letterSpacing: '-0.14px' }],
        'text-medium': ['16px', { lineHeight: '20.8px', letterSpacing: '-0.16px' }],
        p: ['18px', { lineHeight: '26px', letterSpacing: '-0.18px' }],
        'text-big': ['20px', { lineHeight: '26px', letterSpacing: '-0.2px' }],
        // Headings
        h6: ['20px', { lineHeight: '26px', letterSpacing: '-0.2px' }],
        h5: ['24px', { lineHeight: '28.8px', letterSpacing: '-0.48px' }],
        h4: ['32px', { lineHeight: '38.4px', letterSpacing: '-0.64px' }],
        h3: ['48px', { lineHeight: '52.8px', letterSpacing: '-1.44px' }],
        h2: ['64px', { lineHeight: '70.4px', letterSpacing: '-1.92px' }],
        h1: ['72px', { lineHeight: '79.2px', letterSpacing: '-2.16px' }],
        // Title / Subtitle
        subtitle: ['40px', { lineHeight: '52px', letterSpacing: '-1.0px' }],
        title: ['72px', { lineHeight: '86px', letterSpacing: '-2.4px' }],
      },

      /* ── Border Radius ── */
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },

      /* ── Animations ── */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        skeleton: 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        skeleton: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
