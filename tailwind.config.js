/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {

      // Breakpoints
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "2000px",
      },

      // Template for fonts
      fontFamily: {
        regular:["Noto Sans V2"],
        poppins:['poppins']
      },

      // Template for colors
      colors: {
        brown:"#6A371A",
       
      },
    
    },
  },
  plugins: [
 
  ],
}