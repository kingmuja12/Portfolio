/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080A', // page background
          900: '#0C0C0F', // raised background
          850: '#111114', // card
          800: '#17171C', // card hover
          700: '#232329', // border strong
        },
        // Muted body grey chosen to clear WCAG AA (4.5:1) on ink-950.
        muted: '#8C8C99',
        accent: {
          DEFAULT: '#22D3EE',
          soft: '#67E8F9',
          dim: '#0E7490',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes so the hero scales without breakpoint jumps.
        display: ['clamp(2.75rem, 8vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        headline: ['clamp(1.875rem, 4vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        lede: ['clamp(1.0625rem, 1.8vw, 1.375rem)', { lineHeight: '1.6' }],
      },
      maxWidth: {
        content: '68rem',
        prose: '42rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
