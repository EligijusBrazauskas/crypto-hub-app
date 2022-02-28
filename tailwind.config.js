module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },

      colors: {
        'lightestBlue': '#F1F6FE',
        'lightBlue': '#A8CEFF',
        'regularBlue': '#0F22FD',
        'oceanBlue': '#0C8CFD',
        'lightViolet': '#9DACE1',
        'black': '#2D2A3C',
        'lighterRegularBlue': '#2553D7',
        'lighterOceanBlue': '#64A4F3',
      },

      fontSize: {
        'secondary': '14px',
        'base': '16px',
        'regular': '18px',
        'big': '24px',
        'large': '26px',
        'larger': '28px',
        'extraLarge': '32px',
        'largest': '48px',
      }
    },
  },
  plugins: [],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}
