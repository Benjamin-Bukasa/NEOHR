/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000 ', // Red
        secondary: '#c80018', // light red
        accent: '#b01313', // dark Red
        background: '#EDF2F4', // light Gray
        text: '#1D1E27', // soft black
        textSecondary: '#4B5563', // Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        oxygen: ['Oxygen', 'sans-serif'],
        golos: ['Golos Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}