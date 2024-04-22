const plugin = require("tailwindcss/plugin");
const danaFont = require("../assets/fonts");
const dgColors = require("./colors");

const DgThemeTailwindPlugin = plugin(
  function ({ addBase }) {
    addBase(danaFont);
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
