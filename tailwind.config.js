/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dancingscript: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
