const plugin = require("tailwindcss/plugin");
const danaFont = require("../assets/fonts");
const dgColors = require("./colors");
const utilities = require("./utilities");

const DgThemeTailwindPlugin = plugin(
  function ({ addBase, addUtilities }) {
    addBase(danaFont);
    addUtilities(utilities);
  },
  {
    theme: {
      extend: {
        colors: {
          ...dgColors,
        },
      },
    },
  }
);

module.exports = DgThemeTailwindPlugin;
