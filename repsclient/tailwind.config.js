module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2bf6ef",
        darkblue: "#3ab3ae",
        darkgray: "#57575c",
        lightgray: "#b3b3b3",
        fadedwhite: "#808080",
      },
    },
  },
  variants: {},
  plugins: [],
};
