/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },fontWeight: {
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },fontSize: {
        '8':"8px",
        'xs': '.75rem',     
        'sm': '.875rem',    
        'base': '1rem',     
        'lg': '1.125rem',   
        'xl': '1.25rem',   
        '2xl': '1.5rem',    
        '3xl': '1.875rem',  
        '4xl': '2.25rem',   
        '5xl': '3rem',      
        '6xl': '4rem',     
        '7xl': '5rem',      
      },colors: {
        'primary': '#0A8F8C', 
        'secondary': '', 
        'accent': '',
        'borderline':'#929292'
      }, backgroundImage: theme => ({
        'gradient-green-green': 'linear-gradient(to right, #008080, #40E0D0)',
      }),
    },
  },
  plugins: [],
}

