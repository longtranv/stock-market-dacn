/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: "Fira Code"
      },
      colors: {
        green: '#03a66d',
        red: '#cf304a',
        gray_blur: '#707a8a',
        orange: '#c99400',
        gray_input: '#E6E8EA',
        gray_text_input: '#848e9c',
        green_button: '#0ecb81',
        red_button: '#f6465d'
      },
      spacing: {
        '515': '32rem',
        '439': '27rem'
      }
    },
  },
  plugins: [],
}

