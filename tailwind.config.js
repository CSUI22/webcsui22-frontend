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

    screens: {
      'max-mobile-l': { max: '425px' },
      xxxs: '250px',
      xxs: '290px',
      xs: '320px',
      ss: '375px',
      s: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  plugins: [],
}
