/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primery:'#224F3C',
        buttonHover:'rgb(249, 190, 0)',
        buttonstyle:'rgb(255, 199, 19)',
        borderColor:'#e5e7eb',
      }
    },
  },
  plugins: [require("daisyui")],
}
