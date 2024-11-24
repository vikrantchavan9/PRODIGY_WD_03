/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {        
      gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',},
      keyframes: {
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeRight: 'fadeRight 1.5s ease-out forwards',
      },
      colors: {
        'grayish': '#D9D9D9',
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
        '82px': '82px',
      },
      fontSize: {vs: '0.6rem',zs: '0.7rem',},
      
      fontFamily:{
        body: ['Rubik'],
        Fira: ['Radio Canada Big']
      }
      
    },
  },
  plugins: [
    
  ],
}

