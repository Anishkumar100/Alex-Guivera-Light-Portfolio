/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        void: 'var(--void)',
        'void-1': 'var(--void-1)',
        'void-2': 'var(--void-2)',
        'void-3': 'var(--void-3)',
        accent: {
          primary:   'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          hot:       'var(--accent-hot)',
          warm:      'var(--accent-warm)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
        mono:    'var(--font-mono)',
        accent:  'var(--font-accent)',
      },
      boxShadow: {
        'glow-primary':   'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-hot':       'var(--glow-hot)',
      },
      animation: {
        'marquee-right': 'marquee-right 40s linear infinite',
        'marquee-left':  'marquee-left 50s linear infinite',
      },
      keyframes: {
        'marquee-right': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-left': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
