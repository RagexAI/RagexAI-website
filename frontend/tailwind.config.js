/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Design tokens — map to CSS vars */
        primary:    '#1a56c4',
        secondary:  '#1e68d8',
        accent:     '#0d9488',
        navy:       '#0a1628',
        'navy-mid': '#1c2e4a',
        /* Sky palette */
        sky: {
          0: '#f2f7fb',
          1: '#dce8f3',
          2: '#c3d5e6',
          3: '#aabed4',
        },
        /* Text */
        'text-primary':   '#0a1628',
        'text-secondary': '#3d5070',
        'text-muted':     '#7a92b0',
        /* Legacy compat */
        background: '#f2f7fb',
        surface:    '#ffffff',
        heading:    '#0a1628',
        body:       '#3d5070',
        muted:      '#c3d5e6',
        border:     '#d4e0ee',
        border2:    '#c8d8e8',
        success:    '#059669',
        warning:    '#d97706',
        error:      '#dc2626',
        info:       '#1a56c4',
      },
      fontFamily: {
        sans:    ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'],
      },
      fontSize: {
        h1: ['clamp(40px, 6vw, 64px)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['clamp(28px, 4vw, 42px)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        h3: ['clamp(18px, 2.5vw, 24px)', { lineHeight: '1.3', letterSpacing: '-0.018em', fontWeight: '600' }],
      },
      backgroundImage: {
        'sky-radial':    'radial-gradient(circle at 50% 40%, #f2f7fb 0%, #dce8f3 35%, #c3d5e6 70%, #aabed4 100%)',
        'sky-light':     'radial-gradient(ellipse 100% 80% at 50% 0%, #ffffff 0%, #f2f7fb 45%, #dce8f3 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1a56c4, #1e68d8)',
        'gradient-dark': 'linear-gradient(135deg, #0d1c38, #122040, #17315c)',
      },
      boxShadow: {
        xs:     '0 1px 2px rgba(10,22,40,0.04)',
        sm:     '0 2px 6px rgba(10,22,40,0.05)',
        md:     '0 4px 16px rgba(10,22,40,0.07)',
        lg:     '0 8px 32px rgba(10,22,40,0.09)',
        xl:     '0 16px 48px rgba(10,22,40,0.11)',
        card:   '0 4px 24px rgba(10,22,40,0.04), 0 1px 4px rgba(10,22,40,0.02)',
        'card-hover': '0 20px 60px rgba(10,22,40,0.08), 0 4px 16px rgba(10,22,40,0.04)',
        glow:   '0 0 40px rgba(26,86,196,0.20)',
        blue:   '0 4px 16px rgba(26,86,196,0.28)',
        'blue-lg': '0 8px 28px rgba(26,86,196,0.34)',
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '14px',
        xl:   '18px',
        '2xl': '20px',
        '3xl': '28px',
      },
      spacing: { section: 'clamp(72px, 9vw, 112px)' },
      animation: {
        'blob1':      'blob1 28s ease-in-out infinite',
        'blob2':      'blob2 22s ease-in-out infinite -8s',
        'blob3':      'blob3 18s ease-in-out infinite -4s',
        'float':      'float-y 5s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
        'fade-up':    'fade-up 0.6s cubic-bezier(.16,1,.3,1) both',
        'fade-in':    'fade-in 0.5s ease both',
        'grad-shift': 'grad-shift 6s ease infinite',
        'shimmer':    'shimmer 2.6s ease infinite',
        'wave':       'wave 1s ease-in-out infinite',
        'orbit':      'orbit 9s linear infinite',
        'orbit-rev':  'orbit-rev 14s linear infinite',
        'morph':      'morph 8s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'matrix-fall':'matrix-fall 3s linear infinite',
      },
      keyframes: {
        blob1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '25%':     { transform: 'translate(40px,-30px) scale(1.06)' },
          '50%':     { transform: 'translate(-25px,35px) scale(0.96)' },
          '75%':     { transform: 'translate(20px,18px) scale(1.03)' },
        },
        blob2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(-35px,25px) scale(1.05)' },
          '66%':     { transform: 'translate(30px,-20px) scale(0.97)' },
        },
        blob3: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%':     { transform: 'translate(20px,-40px) scale(1.04)' },
        },
        'float-y': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        'blink': {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'grad-shift': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%) skewX(-12deg)' },
          to:   { transform: 'translateX(220%) skewX(-12deg)' },
        },
        wave: {
          '0%,100%': { transform: 'scaleY(0.4)' },
          '50%':     { transform: 'scaleY(1.2)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(75px) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(75px) rotate(-360deg)' },
        },
        'orbit-rev': {
          from: { transform: 'rotate(360deg) translateX(105px) rotate(-360deg)' },
          to:   { transform: 'rotate(0deg) translateX(105px) rotate(0deg)' },
        },
        morph: {
          '0%':   { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%':  { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(0.85)', opacity: '1' },
          '100%': { transform: 'scale(2.2)',  opacity: '0' },
        },
        'ring-pulse': {
          '0%,100%': { opacity: '0.12', transform: 'translate(-50%,-50%) scale(1)' },
          '50%':     { opacity: '0.05', transform: 'translate(-50%,-50%) scale(1.02)' },
        },
        'matrix-fall': {
          '0%':   { transform: 'translateY(-100%)', opacity: '1' },
          '80%':  { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
