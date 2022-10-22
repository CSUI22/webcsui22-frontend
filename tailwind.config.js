/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        interlight: 'Inter-Light',
        interbold: 'Inter-Bold',
        interthin: 'Inter-Thin',
      },
      colors: {
        primary: '#F8F9FD',
      },
    },
  },
  plugins: [],
}
