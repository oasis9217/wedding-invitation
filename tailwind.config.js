/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'default-sm': "url('https://drive.google.com/uc?id=1YItuBPYiAbccoTfAojd4KIzvApBu9UMB')",
        'default-md': "url('https://drive.google.com/uc?id=1-M_yBv8fyZT2XzHo2Xw27pmkBAzIA0qM')",
        'main': "url('/main.jpg')",
        'main-extended': "url('/main-extended.jpg')",
        'main-x-extended': "url('/main-x-extended.jpg')",
      },
      fontFamily: {
        gowun: ['Gowun Batang', 'serif'],
      },
      colors: {
        'transparent': 'rgba(255,255,255,0.6)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}
