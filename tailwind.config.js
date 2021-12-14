module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        vote: 'vote 0.2s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%': {
            transform: 'rotate(1deg) scale(0.9)',
            // transform: 'scale(0)',
          },
          '25%': {
            transform: 'rotate(0deg) scale(1)',
            // transform: 'scale(1)',
          },
          '50%': {
            transform: 'rotate(-1deg) scale(0.9)',
            // transform: 'scale(1)',
          },
          '75%': {
            transform: 'rotate(0deg) scale(1)',
            // transform: 'scale-(1.5)',
          },
          '100%': {
            transform: 'rotate(1deg) scale(0.9)',
            // transform: 'scale(0.5)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}
