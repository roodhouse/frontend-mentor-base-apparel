/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-150': 'linear-gradient(150deg, #FFF 0%, #FFF4F4 100%);',
        'gradient-135': 'linear-gradient(135deg, #F8BFBF 0%, #EE8B8B 100%);'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gradientOne: '#F8BFBF',
      gradientTwo: '#EE8B8B',
      brown: '#423A3A',
      darkPink: '#CE9898',
      hotPink: '#EE8B8B',
      offWhite: '#DBDBDB'
    }
  },
  plugins: [],
}