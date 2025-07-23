/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // Red
        secondary: '#c80018', // light red
        accent: '#b01313', // dark Red
        background: '#EDF2F4', // light Gray
        fontText: '#1D1E27', // soft black
        textSecondary: '#4B5563', // Gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        oxygen: ['Oxygen', 'sans-serif'],
        golos: ['Golos Text', 'sans-serif'],
      },
    },
    screens: {
      // Custom breakpoints
      '2xs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  plugins: [],
};
