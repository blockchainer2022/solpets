module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: () => ({
        primary: "#111111",
        yellow: "#FA9F19",
        dark: "#000000",
        secondary: "#971B32",
        blue: "#1A55BC",
        darkBlue: "#0E439F",
      }),
      borderColor: {},
      textColor: {
        primary: "#C42746",

        white: "#fff",
        yellow: "#FA9F19",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: " 'Poppins', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
