const plugin = require("tailwindcss/plugin");
const danaFont = require("../assets/fonts");
const colors = require("./constants/colors");
const shadows = require("./constants/shadows");
const utilities = require("./utilities");

const DgThemeTailwindPlugin = plugin(
  function ({ addBase, addUtilities }) {
    addBase(danaFont);
    addUtilities(utilities);
  },
  {
    theme: {
      extend: {
        colors: colors,
        boxShadow: shadows,
      },
    },
  }
);

module.exports = DgThemeTailwindPlugin;
