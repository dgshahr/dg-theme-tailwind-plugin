const plugin = require("tailwindcss/plugin");
const colors = require("./constants/colors");
const shadows = require("./constants/shadows");
const base = require("./base");
const utilities = require("./utilities");

const DgThemeTailwindPlugin = plugin(
  function ({ addUtilities, addBase }) {
    addUtilities(utilities);
    addBase(base);
  },
  {
    theme: {
      extend: {
        colors: colors,
        boxShadow: shadows,
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            md: "1.5rem",
          },
        },
        fontWeight: {
          bold: 699,
        },
      },
    },
  }
);

module.exports = DgThemeTailwindPlugin;
