/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'ubuntu' : ['Ubuntu', 'monospace'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        Main: '#040639', 
        Active : '#1573ff',
        violet: '#3E0854', 
        violetLight: '#6D4CAE',
        mainLighter: '#1673FF', 
        dark : '#161616',
        borderMain : '#787575',
        violetMedium: "#9747FF",
      },
    },
  },
  plugins: [],
};
