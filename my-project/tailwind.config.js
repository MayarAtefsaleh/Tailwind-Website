/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#67dbda"
        
      },


      keyframes: {
        movieRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%" :{transform :"translateX(0)"},
         }

      },

      animation: {
        movieRight: " movieRight 1s ease-in-out infinite"

        },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px"
      },
 
      
    },
  },
  plugins: [],
}