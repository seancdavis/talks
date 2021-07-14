module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Open Sans Condensed", "sans-serif"],
      headings: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#444444",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      gray: {
        DEFAULT: "#EAEEF5",
      },
      blue: {
        DEFAULT: "#2260BF",
        light: "#6190D7",
      },
      yellow: {
        DEFAULT: "#FFD445",
      },
      pink: {
        DEFAULT: "#EEA2BF",
      },
      lime: {
        DEFAULT: "#9CE736",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
