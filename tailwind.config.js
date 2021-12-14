module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%': {
            transform: 'scale(0)',
          },
          '25%': {
            transform: 'scale(1.05)',
          },
          '75%': {
            transform: 'scale-(0)',
          },
          '100%': {
            transform: 'scale(0.5)',
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
